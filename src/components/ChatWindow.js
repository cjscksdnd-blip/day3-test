import React, { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import './ChatWindow.css';

function ChatWindow({ messages, isLoading }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  if (messages.length === 0) {
    return (
      <div className="chat-window chat-empty">
        <div className="empty-icon">🏋️</div>
        <h2 className="empty-title">KDN 헬스 AI에 오신 것을 환영합니다!</h2>
        <p className="empty-desc">
          운동, 식단, 건강 관리에 대해 무엇이든 물어보세요.<br />
          KDN 직원 맞춤형 건강 정보를 제공해드립니다.
        </p>
        <div className="empty-tags">
          <span>#운동루틴</span>
          <span>#식단추천</span>
          <span>#체중관리</span>
          <span>#스트레칭</span>
        </div>
      </div>
    );
  }

  return (
    <div className="chat-window">
      {messages.map((msg, idx) => (
        <div key={idx} className={`message-row ${msg.role}`}>
          {msg.role === 'assistant' && (
            <div className="avatar bot-avatar">AI</div>
          )}
          <div className={`bubble ${msg.role}`}>
            {msg.role === 'assistant' ? (
              <ReactMarkdown>{msg.content}</ReactMarkdown>
            ) : (
              <p>{msg.content}</p>
            )}
            <span className="msg-time">
              {new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
          {msg.role === 'user' && (
            <div className="avatar user-avatar">나</div>
          )}
        </div>
      ))}

      {isLoading && (
        <div className="message-row assistant">
          <div className="avatar bot-avatar">AI</div>
          <div className="bubble assistant loading-bubble">
            <span></span><span></span><span></span>
          </div>
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}

export default ChatWindow;
