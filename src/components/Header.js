import React from 'react';
import './Header.css';

function Header({ onLogoClick }) {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo" onClick={onLogoClick} role="button" tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onLogoClick()}>
          <span className="logo-icon">💪</span>
          <div>
            <h1 className="header-title">KDN 헬스 AI</h1>
            <p className="header-subtitle">한전KDN 직원 전용 건강 도우미</p>
          </div>
        </div>
        <div className="header-badge">
          <span className="badge-dot"></span>
          <span>AI 상담 중</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
