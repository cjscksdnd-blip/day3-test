import React, { useState } from 'react';
import CharacterImage from './CharacterImage';
import './Sidebar.css';

function groupByDate(rows) {
  const groups = {};
  rows.forEach((row) => {
    const date = new Date(row.created_at).toLocaleDateString('ko-KR', {
      month: 'long', day: 'numeric', weekday: 'short',
    });
    if (!groups[date]) groups[date] = [];
    groups[date].push(row.user_message);
  });
  return groups;
}

function Sidebar({ historyRows, messages, onAnalyzeProfile, profile, isAnalyzing }) {
  const [tab, setTab] = useState('history');
  const groups = groupByDate(historyRows);
  const dateKeys = Object.keys(groups).reverse();

  return (
    <aside className="sidebar">
      <div className="sidebar-tabs">
        <button
          className={`sidebar-tab ${tab === 'history' ? 'active' : ''}`}
          onClick={() => setTab('history')}
        >
          📋 대화 기록
        </button>
        <button
          className={`sidebar-tab ${tab === 'profile' ? 'active' : ''}`}
          onClick={() => setTab('profile')}
        >
          👤 내 상태
        </button>
      </div>

      <div className="sidebar-body">
        {tab === 'history' ? (
          dateKeys.length === 0 ? (
            <p className="sidebar-empty">아직 대화 기록이 없어요.<br />채팅을 시작해보세요!</p>
          ) : (
            dateKeys.map((date) => (
              <div key={date} className="history-group">
                <div className="history-date">{date}</div>
                {groups[date].slice(0, 3).map((msg, i) => (
                  <div key={i} className="history-item">
                    <span className="history-dot">›</span>
                    <span className="history-text">
                      {msg.length > 28 ? msg.slice(0, 28) + '…' : msg}
                    </span>
                  </div>
                ))}
                {groups[date].length > 3 && (
                  <div className="history-more">+{groups[date].length - 3}개 더</div>
                )}
              </div>
            ))
          )
        ) : (
          <div className="profile-section">
            <div className="char-container">
              <CharacterImage level={profile?.level} />
            </div>

            {!profile ? (
              <>
                <div className="profile-intro">
                  <p>지금까지의 대화 기록을 분석해서<br />나의 건강 상태를 파악해드려요</p>
                </div>
                <button
                  className="analyze-btn"
                  onClick={onAnalyzeProfile}
                  disabled={isAnalyzing || historyRows.length === 0}
                >
                  {isAnalyzing ? '⏳ 분석 중...' : '🔍 상태 분석하기'}
                </button>
                {historyRows.length === 0 && (
                  <p className="analyze-hint">먼저 대화를 시작해주세요</p>
                )}
              </>
            ) : (
              <>
                <div className="profile-card">
                  <div className="profile-row">
                    <span className="profile-label">운동 레벨</span>
                    <span className={`profile-badge level-${profile.level}`}>
                      {profile.level || '미확인'}
                    </span>
                  </div>
                  <div className="profile-row">
                    <span className="profile-label">목표</span>
                    <span className="profile-badge goal">{profile.goal || '미확인'}</span>
                  </div>
                  {profile.exercise_experience && (
                    <div className="profile-row col">
                      <span className="profile-label">운동 경력</span>
                      <span className="profile-detail">{profile.exercise_experience}</span>
                    </div>
                  )}
                  {profile.diet_pattern && (
                    <div className="profile-row col">
                      <span className="profile-label">식단 패턴</span>
                      <span className="profile-detail">{profile.diet_pattern}</span>
                    </div>
                  )}
                  {profile.concerns && profile.concerns.length > 0 && (
                    <div className="profile-row col">
                      <span className="profile-label">주요 고민</span>
                      <div className="profile-tags">
                        {profile.concerns.map((c, i) => (
                          <span key={i} className="profile-tag">{c}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {profile.summary && (
                    <div className="profile-summary">"{profile.summary}"</div>
                  )}
                </div>
                <button
                  className="analyze-btn refresh"
                  onClick={onAnalyzeProfile}
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? '⏳ 분석 중...' : '🔄 다시 분석'}
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </aside>
  );
}

export default Sidebar;
