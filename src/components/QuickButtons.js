import React from 'react';
import './QuickButtons.css';

const QUICK_PROMPTS = [
  { icon: '🥗', label: '오늘 점심 식단 추천', text: '오늘 점심으로 건강한 식단을 추천해줘.' },
  { icon: '🏃', label: '10분 사무실 운동', text: '사무실에서 할 수 있는 10분 스트레칭/운동을 알려줘.' },
  { icon: '💧', label: '하루 수분 섭취량', text: '하루에 물을 얼마나 마셔야 건강에 좋아?' },
  { icon: '😴', label: '수면 개선 방법', text: '직장인이 수면의 질을 높이는 방법을 알려줘.' },
  { icon: '🍱', label: '체중 감량 식단', text: '직장인을 위한 체중 감량 식단 플랜을 만들어줘.' },
  { icon: '💪', label: '주 3회 홈트 루틴', text: '주 3회 집에서 할 수 있는 운동 루틴을 만들어줘.' },
];

function QuickButtons({ onSelect }) {
  return (
    <div className="quick-section">
      <p className="quick-title">빠른 질문</p>
      <div className="quick-grid">
        {QUICK_PROMPTS.map((q) => (
          <button key={q.label} className="quick-btn" onClick={() => onSelect(q.text)}>
            <span className="quick-icon">{q.icon}</span>
            <span>{q.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickButtons;
