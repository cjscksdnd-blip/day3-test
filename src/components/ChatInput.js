import React, { useState } from 'react';
import './ChatInput.css';

function ChatInput({ onSend, isLoading }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() || isLoading) return;
    onSend(text.trim());
    setText('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form className="chat-input-area" onSubmit={handleSubmit}>
      <textarea
        className="chat-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="운동, 식단, 건강에 대해 무엇이든 물어보세요... (Enter로 전송)"
        rows={1}
        disabled={isLoading}
      />
      <button
        type="submit"
        className={`send-btn ${isLoading ? 'loading' : ''}`}
        disabled={!text.trim() || isLoading}
        aria-label="전송"
      >
        {isLoading ? '⏳' : '➤'}
      </button>
    </form>
  );
}

export default ChatInput;
