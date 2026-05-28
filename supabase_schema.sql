-- KDN 헬스 AI 챗봇 Supabase 테이블 스키마
-- Supabase 대시보드 > SQL Editor 에서 실행하세요

-- 대화 기록 테이블
CREATE TABLE IF NOT EXISTS chat_history (
  id          BIGSERIAL PRIMARY KEY,
  user_id     TEXT        NOT NULL,
  user_message TEXT       NOT NULL,
  bot_message  TEXT       NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 직원 프로필 테이블 (선택)
CREATE TABLE IF NOT EXISTS employee_profiles (
  id          BIGSERIAL PRIMARY KEY,
  user_id     TEXT        UNIQUE NOT NULL,
  employee_no TEXT,
  department  TEXT,
  job_type    TEXT CHECK (job_type IN ('사무직', '현장직', '연구직')),
  age         INT,
  height_cm   NUMERIC(5,1),
  weight_kg   NUMERIC(5,1),
  health_goal TEXT CHECK (health_goal IN ('체중감량', '근력증가', '체력향상', '건강유지')),
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 즐겨찾기 운동/식단 테이블 (선택)
CREATE TABLE IF NOT EXISTS favorites (
  id          BIGSERIAL PRIMARY KEY,
  user_id     TEXT        NOT NULL,
  category    TEXT CHECK (category IN ('운동', '식단')),
  title       TEXT        NOT NULL,
  content     TEXT        NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 인덱스
CREATE INDEX IF NOT EXISTS idx_chat_history_user_id ON chat_history(user_id);
CREATE INDEX IF NOT EXISTS idx_chat_history_created_at ON chat_history(created_at DESC);

-- Row Level Security (선택 - 실제 인증 연동 시 활성화)
-- ALTER TABLE chat_history ENABLE ROW LEVEL SECURITY;
-- ALTER TABLE employee_profiles ENABLE ROW LEVEL SECURITY;
