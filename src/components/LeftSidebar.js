import React from 'react';
import './LeftSidebar.css';

const QUOTES = [
  { text: "오늘의 운동이 내일의 나를 만든다", icon: "💪" },
  { text: "한계는 마음속에만 있다", icon: "🔥" },
  { text: "불편함 속에서 성장이 일어난다", icon: "🏋️" },
  { text: "포기하지 않는 자가 결국 이긴다", icon: "⚡" },
  { text: "매일 조금씩, 반드시 강해진다", icon: "🌟" },
  { text: "운동은 절대 배신하지 않는다", icon: "💯" },
  { text: "목표를 향해 오늘도 달린다", icon: "🎯" },
  { text: "규칙적인 운동이 최고의 투자다", icon: "🔑" },
  { text: "당신의 몸은 당신이 만든다", icon: "🚀" },
  { text: "고통 없이는 얻는 것도 없다", icon: "🏆" },
  { text: "작은 습관이 큰 변화를 만든다", icon: "⭐" },
  { text: "지금 이 순간이 가장 좋은 시작", icon: "💥" },
];

const FitnessFigure = () => (
  <svg viewBox="0 0 200 290" xmlns="http://www.w3.org/2000/svg" className="fitness-svg">
    <defs>
      <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0077b6" />
        <stop offset="100%" stopColor="#00b4d8" />
      </linearGradient>
      <linearGradient id="bodyGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#005f8e" />
        <stop offset="100%" stopColor="#0077b6" />
      </linearGradient>
      <radialGradient id="radGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%"
        gradientUnits="objectBoundingBox">
        <stop offset="0%" stopColor="rgba(0,180,216,0.18)" />
        <stop offset="100%" stopColor="rgba(0,119,182,0)" />
      </radialGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Background glow */}
    <ellipse cx="100" cy="155" rx="78" ry="110" fill="url(#radGlow)" />

    {/* Shadow at feet */}
    <ellipse cx="100" cy="272" rx="38" ry="7" fill="rgba(0,100,160,0.18)" />

    {/* Head */}
    <circle cx="100" cy="40" r="23" fill="url(#bodyGrad)" filter="url(#glow)" />
    {/* Hair */}
    <path d="M79 34 Q100 16 121 34 Q116 26 100 22 Q84 26 79 34" fill="#023e8a" />
    {/* Eyes */}
    <circle cx="92" cy="39" r="4.5" fill="white" />
    <circle cx="108" cy="39" r="4.5" fill="white" />
    <circle cx="93" cy="40" r="2.8" fill="#023e8a" />
    <circle cx="109" cy="40" r="2.8" fill="#023e8a" />
    <circle cx="94" cy="39" r="1" fill="white" />
    <circle cx="110" cy="39" r="1" fill="white" />
    {/* Smile */}
    <path d="M93 50 Q100 56 107 50" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    {/* Face highlight */}
    <ellipse cx="100" cy="51" rx="7" ry="4" fill="#48cae4" opacity="0.35" />

    {/* Neck */}
    <rect x="92" y="61" width="16" height="16" rx="6" fill="url(#bodyGrad)" />

    {/* Torso */}
    <path d="M64 80 Q100 76 136 80 L126 155 Q100 160 74 155 Z" fill="url(#bodyGrad)" />
    {/* Chest muscles */}
    <path d="M76 90 Q100 97 124 90 Q117 113 100 116 Q83 113 76 90" fill="#00b4d8" opacity="0.3" />
    {/* Abs */}
    <rect x="91" y="118" width="18" height="9" rx="4" fill="#005f8e" opacity="0.45" />
    <rect x="91" y="130" width="18" height="9" rx="4" fill="#005f8e" opacity="0.45" />
    <rect x="91" y="142" width="18" height="9" rx="4" fill="#005f8e" opacity="0.45" />
    {/* KDN badge */}
    <rect x="84" y="93" width="32" height="14" rx="5" fill="rgba(255,255,255,0.22)" />
    <text x="100" y="104" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold" fontFamily="Arial, sans-serif">KDN</text>

    {/* LEFT ARM (bicep curl - bent up) */}
    {/* Upper arm */}
    <path d="M66 84 L44 104 L50 118 L70 97" fill="#0077b6" />
    <path d="M66 84 L70 97 L64 107 L44 104 Z" fill="#005f8e" />
    {/* Bicep peak */}
    <ellipse cx="55" cy="100" rx="11" ry="6.5" fill="#48cae4" opacity="0.5" transform="rotate(-25 55 100)" />
    {/* Forearm */}
    <path d="M44 104 L50 118 L58 128 L52 115" fill="url(#bodyGrad)" />
    {/* Hand */}
    <ellipse cx="54" cy="129" rx="6" ry="4.5" fill="#48cae4" transform="rotate(-25 54 129)" />
    {/* Dumbbell left */}
    <g transform="rotate(-22 48 138)">
      <rect x="44" y="128" width="5" height="22" rx="2.5" fill="#0095c8" />
      <rect x="40" y="126" width="13" height="5.5" rx="2.5" fill="#90e0ef" />
      <rect x="40" y="142" width="13" height="5.5" rx="2.5" fill="#90e0ef" />
      <rect x="41" y="131" width="11" height="11" rx="1" fill="rgba(255,255,255,0.12)" />
    </g>

    {/* RIGHT ARM (bicep curl - bent up) */}
    {/* Upper arm */}
    <path d="M134 84 L156 104 L150 118 L130 97" fill="#0077b6" />
    <path d="M134 84 L130 97 L136 107 L156 104 Z" fill="#005f8e" />
    {/* Bicep peak */}
    <ellipse cx="145" cy="100" rx="11" ry="6.5" fill="#48cae4" opacity="0.5" transform="rotate(25 145 100)" />
    {/* Forearm */}
    <path d="M156 104 L150 118 L142 128 L148 115" fill="url(#bodyGrad)" />
    {/* Hand */}
    <ellipse cx="146" cy="129" rx="6" ry="4.5" fill="#48cae4" transform="rotate(25 146 129)" />
    {/* Dumbbell right */}
    <g transform="rotate(22 152 138)">
      <rect x="151" y="128" width="5" height="22" rx="2.5" fill="#0095c8" />
      <rect x="147" y="126" width="13" height="5.5" rx="2.5" fill="#90e0ef" />
      <rect x="147" y="142" width="13" height="5.5" rx="2.5" fill="#90e0ef" />
      <rect x="148" y="131" width="11" height="11" rx="1" fill="rgba(255,255,255,0.12)" />
    </g>

    {/* LEFT LEG */}
    <path d="M76 155 L70 210 L83 212 L88 157" fill="#005f8e" />
    <path d="M70 210 L67 255 L78 257 L83 212" fill="url(#bodyGrad2)" />
    {/* Left shoe */}
    <path d="M61 253 Q76 258 84 256 L82 264 Q64 263 61 253 Z" fill="#023e8a" />

    {/* RIGHT LEG */}
    <path d="M124 155 L130 210 L117 212 L112 157" fill="#005f8e" />
    <path d="M130 210 L133 255 L122 257 L117 212" fill="url(#bodyGrad2)" />
    {/* Right shoe */}
    <path d="M139 253 Q124 258 116 256 L118 264 Q136 263 139 253 Z" fill="#023e8a" />

    {/* Energy sparkles */}
    <circle cx="32" cy="78" r="3" fill="#48cae4" opacity="0.75" filter="url(#softGlow)" />
    <circle cx="24" cy="90" r="2" fill="#90e0ef" opacity="0.6" />
    <circle cx="168" cy="78" r="3" fill="#48cae4" opacity="0.75" filter="url(#softGlow)" />
    <circle cx="176" cy="90" r="2" fill="#90e0ef" opacity="0.6" />
    <circle cx="42" cy="60" r="2" fill="#00b4d8" opacity="0.7" />
    <circle cx="158" cy="60" r="2" fill="#00b4d8" opacity="0.7" />
    <circle cx="20" cy="110" r="1.5" fill="#48cae4" opacity="0.5" />
    <circle cx="180" cy="110" r="1.5" fill="#48cae4" opacity="0.5" />
  </svg>
);

function LeftSidebar() {
  const doubled = [...QUOTES, ...QUOTES];

  return (
    <aside className="left-sidebar">
      <div className="left-sidebar-figure">
        <div className="figure-glow-ring" />
        <FitnessFigure />
        <div className="figure-label">AI 헬스 트레이너</div>
      </div>

      <div className="left-sidebar-quotes-wrapper">
        <div className="quotes-header">
          <span className="quotes-header-icon">✨</span>
          <span>운동 명언</span>
          <span className="quotes-header-icon">✨</span>
        </div>
        <div className="quotes-viewport">
          <div className="quotes-track">
            {doubled.map((q, i) => (
              <div key={i} className="quote-item">
                <span className="quote-icon">{q.icon}</span>
                <span className="quote-text">{q.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default LeftSidebar;
