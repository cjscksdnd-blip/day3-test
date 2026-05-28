import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import QuickButtons from './components/QuickButtons';
import { sendMessageToGPT, saveChatHistory, getChatHistory } from './api/chatApi';
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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getChatHistory(USER_ID).then((history) => {
      if (history.length === 0) return;
      const converted = history.flatMap((row) => [
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
      await saveChatHistory(USER_ID, text, reply);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            '⚠️ 죄송합니다. 잠시 오류가 발생했습니다. OpenAI API 키를 `.env` 파일에 설정했는지 확인해주세요.\n\n`.env` 파일에 `REACT_APP_OPENAI_API_KEY=sk-...` 를 추가하세요.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [messages]);

  const handleReset = () => {
    setMessages([]);
  };

  return (
    <div className="app-container">
      <Header />
      <main className="chat-layout">
        <div className="chat-card">
          <ChatWindow messages={messages} isLoading={isLoading} />
          {messages.length === 0 && (
            <QuickButtons onSelect={handleSend} />
          )}
          <ChatInput onSend={handleSend} isLoading={isLoading} />
        </div>
        {messages.length > 0 && (
          <button className="reset-btn" onClick={handleReset} title="대화 초기화">
            🔄 대화 초기화
          </button>
        )}
      </main>
      <footer className="app-footer">
        <p>KDN AI 헬스봇 • 의학적 치료가 필요한 경우 전문의와 상담하세요</p>
      </footer>
    </div>
  );
}

export default App;
