import React from 'react';

function BeginnerChar() {
  return (
    <svg viewBox="0 0 120 155" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="78" r="56" fill="#dcfce7" opacity="0.5"/>
      {/* Head */}
      <circle cx="60" cy="33" r="22" fill="#fde68a" stroke="#f59e0b" strokeWidth="1.5"/>
      {/* Eyes */}
      <ellipse cx="52" cy="30" rx="3" ry="4" fill="#1e293b"/>
      <ellipse cx="68" cy="30" rx="3" ry="4" fill="#1e293b"/>
      <circle cx="53.5" cy="28" r="1.3" fill="white"/>
      <circle cx="69.5" cy="28" r="1.3" fill="white"/>
      {/* Sweat drop */}
      <path d="M 83 20 Q 86 15 89 20 Q 89 26 86 26 Q 83 26 83 20" fill="#93c5fd"/>
      {/* Shy smile */}
      <path d="M 54 41 Q 60 46 66 41" stroke="#d97706" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Blush */}
      <ellipse cx="45" cy="38" rx="6" ry="3" fill="#fca5a5" opacity="0.5"/>
      <ellipse cx="75" cy="38" rx="6" ry="3" fill="#fca5a5" opacity="0.5"/>
      {/* Body - round/chubby */}
      <ellipse cx="60" cy="87" rx="23" ry="27" fill="#86efac" stroke="#4ade80" strokeWidth="1.5"/>
      {/* Left arm - thin */}
      <rect x="22" y="63" width="14" height="30" rx="7" fill="#86efac" stroke="#4ade80" strokeWidth="1"/>
      {/* Right arm - holding small dumbbell */}
      <rect x="84" y="63" width="14" height="30" rx="7" fill="#86efac" stroke="#4ade80" strokeWidth="1"/>
      {/* Small dumbbell */}
      <rect x="88" y="91" width="22" height="5" rx="2.5" fill="#9ca3af"/>
      <rect x="86" y="87" width="8" height="13" rx="4" fill="#6b7280"/>
      <rect x="101" y="87" width="8" height="13" rx="4" fill="#6b7280"/>
      {/* Legs */}
      <rect x="42" y="110" width="15" height="33" rx="7.5" fill="#4ade80" stroke="#22c55e" strokeWidth="1"/>
      <rect x="63" y="110" width="15" height="33" rx="7.5" fill="#4ade80" stroke="#22c55e" strokeWidth="1"/>
      {/* Shoes */}
      <ellipse cx="49" cy="143" rx="13" ry="7" fill="#1e293b"/>
      <ellipse cx="71" cy="143" rx="13" ry="7" fill="#1e293b"/>
      {/* Stars */}
      <text x="60" y="11" textAnchor="middle" fontSize="13" fill="#22c55e">⭐</text>
    </svg>
  );
}

function IntermediateChar() {
  return (
    <svg viewBox="0 0 120 155" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="78" r="56" fill="#dbeafe" opacity="0.5"/>
      {/* Head */}
      <circle cx="60" cy="31" r="20" fill="#fde68a" stroke="#f59e0b" strokeWidth="1.5"/>
      {/* Eyes */}
      <ellipse cx="52" cy="28" rx="3" ry="3.5" fill="#1e293b"/>
      <ellipse cx="68" cy="28" rx="3" ry="3.5" fill="#1e293b"/>
      <circle cx="53.5" cy="26.5" r="1.2" fill="white"/>
      <circle cx="69.5" cy="26.5" r="1.2" fill="white"/>
      {/* Confident smile */}
      <path d="M 52 39 Q 60 45 68 39" stroke="#d97706" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Body - fit rectangular */}
      <rect x="37" y="54" width="46" height="50" rx="11" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1.5"/>
      {/* Chest */}
      <line x1="60" y1="62" x2="60" y2="92" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4"/>
      <ellipse cx="49" cy="68" rx="9" ry="7" fill="#3b82f6" opacity="0.25"/>
      <ellipse cx="71" cy="68" rx="9" ry="7" fill="#3b82f6" opacity="0.25"/>
      {/* Left arm - medium with bicep */}
      <rect x="18" y="55" width="17" height="36" rx="8.5" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1"/>
      <ellipse cx="26" cy="68" rx="9.5" ry="6" fill="#3b82f6" opacity="0.4"/>
      {/* Right arm - flexed */}
      <rect x="85" y="55" width="17" height="36" rx="8.5" fill="#60a5fa" stroke="#3b82f6" strokeWidth="1"/>
      <ellipse cx="94" cy="68" rx="9.5" ry="6" fill="#3b82f6" opacity="0.4"/>
      {/* Dumbbell */}
      <rect x="88" y="89" width="24" height="5" rx="2.5" fill="#9ca3af"/>
      <rect x="86" y="84" width="9" height="15" rx="4.5" fill="#6b7280"/>
      <rect x="103" y="84" width="9" height="15" rx="4.5" fill="#6b7280"/>
      {/* Legs */}
      <rect x="40" y="101" width="16" height="36" rx="8" fill="#3b82f6" stroke="#2563eb" strokeWidth="1"/>
      <rect x="64" y="101" width="16" height="36" rx="8" fill="#3b82f6" stroke="#2563eb" strokeWidth="1"/>
      {/* Shoes */}
      <ellipse cx="48" cy="137" rx="14" ry="7" fill="#1e293b"/>
      <ellipse cx="72" cy="137" rx="14" ry="7" fill="#1e293b"/>
      <text x="60" y="11" textAnchor="middle" fontSize="13" fill="#3b82f6">⭐⭐</text>
    </svg>
  );
}

function AdvancedChar() {
  return (
    <svg viewBox="0 0 130 155" xmlns="http://www.w3.org/2000/svg">
      <circle cx="65" cy="78" r="60" fill="#fef3c7" opacity="0.5"/>
      {/* Head */}
      <circle cx="65" cy="29" r="20" fill="#fde68a" stroke="#f59e0b" strokeWidth="2"/>
      {/* Intense eyes */}
      <ellipse cx="56" cy="26" rx="3.5" ry="4" fill="#1e293b"/>
      <ellipse cx="74" cy="26" rx="3.5" ry="4" fill="#1e293b"/>
      <circle cx="57.5" cy="24.5" r="1.3" fill="white"/>
      <circle cx="75.5" cy="24.5" r="1.3" fill="white"/>
      {/* Fierce eyebrows */}
      <path d="M 51 19 L 61 22" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M 69 22 L 79 19" stroke="#92400e" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Big smile */}
      <path d="M 55 37 Q 65 44 75 37" stroke="#d97706" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      {/* V-shape body (trapezoid - wide shoulders, narrow waist) */}
      <path d="M 25 52 L 105 52 L 82 105 L 48 105 Z" fill="#fb923c" stroke="#f97316" strokeWidth="1.5"/>
      {/* Chest muscles */}
      <ellipse cx="50" cy="66" rx="12" ry="9" fill="#f97316" opacity="0.4"/>
      <ellipse cx="80" cy="66" rx="12" ry="9" fill="#f97316" opacity="0.4"/>
      {/* Abs */}
      <rect x="58" y="79" width="14" height="7" rx="3.5" fill="#f97316" opacity="0.35"/>
      <rect x="58" y="90" width="14" height="7" rx="3.5" fill="#f97316" opacity="0.35"/>
      {/* Left arm - massive, flexed */}
      <path d="M 25 52 L 5 60 L 2 78 L 12 90 L 28 88 L 30 68" fill="#fb923c" stroke="#f97316" strokeWidth="1.5"/>
      <ellipse cx="10" cy="73" rx="11" ry="8" fill="#f97316" opacity="0.6"/>
      {/* Right arm - massive, holding barbell */}
      <path d="M 105 52 L 125 60 L 128 78 L 118 90 L 102 88 L 100 68" fill="#fb923c" stroke="#f97316" strokeWidth="1.5"/>
      <ellipse cx="120" cy="73" rx="11" ry="8" fill="#f97316" opacity="0.6"/>
      {/* Heavy barbell */}
      <rect x="2" y="85" width="40" height="7" rx="3.5" fill="#9ca3af"/>
      <rect x="0" y="76" width="11" height="25" rx="5.5" fill="#6b7280"/>
      <rect x="2" y="71" width="11" height="35" rx="5.5" fill="#4b5563"/>
      {/* Legs - powerful */}
      <rect x="48" y="102" width="17" height="40" rx="7" fill="#f97316" stroke="#ea580c" strokeWidth="1.5"/>
      <rect x="70" y="102" width="17" height="40" rx="7" fill="#f97316" stroke="#ea580c" strokeWidth="1.5"/>
      {/* Shoes */}
      <ellipse cx="56" cy="142" rx="16" ry="8" fill="#1e293b"/>
      <ellipse cx="79" cy="142" rx="16" ry="8" fill="#1e293b"/>
      <text x="65" y="11" textAnchor="middle" fontSize="14">🏆⭐🏆</text>
    </svg>
  );
}

function UnknownChar() {
  return (
    <svg viewBox="0 0 120 155" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="78" r="56" fill="#f1f5f9" opacity="0.5"/>
      <circle cx="60" cy="33" r="22" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1.5"/>
      <ellipse cx="52" cy="30" rx="3" ry="4" fill="#94a3b8"/>
      <ellipse cx="68" cy="30" rx="3" ry="4" fill="#94a3b8"/>
      <circle cx="53.5" cy="28" r="1.2" fill="white"/>
      <circle cx="69.5" cy="28" r="1.2" fill="white"/>
      <path d="M 54 41 Q 60 45 66 41" stroke="#94a3b8" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <ellipse cx="60" cy="87" rx="22" ry="26" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.5"/>
      <rect x="23" y="63" width="13" height="30" rx="6.5" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1"/>
      <rect x="84" y="63" width="13" height="30" rx="6.5" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1"/>
      <rect x="42" y="109" width="15" height="33" rx="7.5" fill="#94a3b8"/>
      <rect x="63" y="109" width="15" height="33" rx="7.5" fill="#94a3b8"/>
      <ellipse cx="49" cy="142" rx="13" ry="7" fill="#475569"/>
      <ellipse cx="71" cy="142" rx="13" ry="7" fill="#475569"/>
      <text x="60" y="11" textAnchor="middle" fontSize="18" fill="#94a3b8" fontWeight="bold">?</text>
    </svg>
  );
}

const LEVEL_CONFIG = {
  '초보자': { Component: BeginnerChar,    color: '#16a34a', bg: '#f0fdf4', border: '#bbf7d0', stars: 1 },
  '중급자': { Component: IntermediateChar, color: '#2563eb', bg: '#eff6ff', border: '#bfdbfe', stars: 2 },
  '고급자': { Component: AdvancedChar,    color: '#d97706', bg: '#fffbeb', border: '#fde68a', stars: 3 },
};

function CharacterImage({ level }) {
  const config = LEVEL_CONFIG[level];

  if (!config) {
    return (
      <div className="char-wrap" style={{ background: '#f8fafc', borderColor: '#e2e8f0' }}>
        <UnknownChar />
        <div className="char-label" style={{ color: '#64748b' }}>분석 전</div>
        <div className="char-desc" style={{ color: '#94a3b8' }}>대화 후 분석해보세요</div>
      </div>
    );
  }

  const { Component, color, bg, border } = config;
  return (
    <div className="char-wrap" style={{ background: bg, borderColor: border }}>
      <Component />
      <div className="char-label" style={{ color }}>{level}</div>
    </div>
  );
}

export default CharacterImage;
