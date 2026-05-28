import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import QuickButtons from './components/QuickButtons';
import Sidebar from './components/Sidebar';
import LeftSidebar from './components/LeftSidebar';
import { sendMessageToGPT, saveChatHistory, getChatHistory, analyzeUserProfile } from './api/chatApi';
import './App.css';

function getUserId() {
  let id = localStorage.getItem('kdn_user_id');
  if (!id) {
    id = 'kdn-user-' + Math.random().toString(36).slice(2, 9);
    localStorage.setItem('kdn_user_id', id);
  }
  return id;
}

const USER_ID = getUserId();

function App() {
  const [messages, setMessages] = useState([]);
  const [historyRows, setHistoryRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [profile, setProfile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  useEffect(() => {
    getChatHistory(USER_ID).then((rows) => {
      if (rows.length === 0) return;
      setHistoryRows(rows);
      const converted = rows.flatMap((row) => [
        { role: 'user', content: row.user_message },
        { role: 'assistant', content: row.bot_message },
      ]);
      setMessages(converted);
    });
  }, []);

  const handleSend = useCallback(async (text) => {
    const userMsg = { role: 'user', content: text };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const reply = await sendMessageToGPT(
        updatedMessages.map(({ role, content }) => ({ role, content }))
      );
      const botMsg = { role: 'assistant', content: reply };
      setMessages((prev) => [...prev, botMsg]);

      const saved = await saveChatHistory(USER_ID, text, reply);
      if (saved) {
        setHistoryRows((prev) => [
          ...prev,
          { user_message: text, bot_message: reply, created_at: new Date().toISOString() },
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: '⚠️ 죄송합니다. 잠시 오류가 발생했습니다. OpenAI API 키를 확인해주세요.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [messages]);

  const handleReset = () => {
    setMessages([]);
  };

  const handleLogoClick = () => {
    setMessages([]);
  };

  const handleAnalyzeProfile = async () => {
    if (historyRows.length === 0) return;
    setIsAnalyzing(true);
    try {
      const allMessages = historyRows.flatMap((row) => [
        { role: 'user', content: row.user_message },
        { role: 'assistant', content: row.bot_message },
      ]);
      const result = await analyzeUserProfile(allMessages);
      setProfile(result);
    } catch (e) {
      console.error('프로필 분석 실패', e);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="app-container">
      <Header onLogoClick={handleLogoClick} />
      <main className="chat-layout">
        <LeftSidebar />
        <div className="chat-main">
          <div className="chat-card">
            <ChatWindow messages={messages} isLoading={isLoading} />
            {messages.length === 0 && (
              <QuickButtons onSelect={handleSend} />
            )}
            <ChatInput onSend={handleSend} isLoading={isLoading} />
          </div>
          {messages.length > 0 && (
            <button className="reset-btn" onClick={handleReset}>
              🔄 대화 초기화
            </button>
          )}
        </div>
        <Sidebar
          historyRows={historyRows}
          messages={messages}
          onAnalyzeProfile={handleAnalyzeProfile}
          profile={profile}
          isAnalyzing={isAnalyzing}
        />
      </main>
      <footer className="app-footer">
        <p>KDN AI 헬스봇 • 의학적 치료가 필요한 경우 전문의와 상담하세요</p>
      </footer>
    </div>
  );
}

export default App;
