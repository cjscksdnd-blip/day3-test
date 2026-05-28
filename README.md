# 💪 KDN 사내 AI 헬스 챗봇

한전KDN 직원 전용 AI 헬스 케어 웹 서비스

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat&logo=supabase&logoColor=white)
![OpenAI](https://img.shields.io/badge/ChatGPT_API-412991?style=flat&logo=openai&logoColor=white)

---

## 📋 서비스 개요

| 항목 | 내용 |
|------|------|
| **대상** | KDN 직원 약 3,000명 |
| **목적** | 맞춤형 헬스 식단 및 운동 루틴 AI 상담 |
| **기술** | React + Supabase + ChatGPT API (gpt-4o-mini) |
| **배경색** | 화이트 + 스카이블루 |

### 기대효과
- 직원 건강 증진 및 업무 효율 향상
- 개인 맞춤형 건강 정보 24시간 제공
- 사내 복지 서비스 디지털화

---

## ✅ 주요 기능

### 필수 기능 (P0)
- [x] AI 헬스 챗봇 대화 (ChatGPT API)
- [x] 운동 루틴 추천 (사무직/현장직 구분)
- [x] 식단 및 영양 정보 제공
- [x] 빠른 질문 버튼 (6가지 주제)
- [x] 대화 초기화

### 선택 기능 (P1)
- [ ] 직원 프로필 등록 (키/몸무게/목표)
- [ ] 대화 기록 저장 (Supabase)
- [ ] 즐겨찾기 저장
- [ ] 로그인 연동 (사내 SSO)

---

## 🖥️ 화면 구성

```
┌─────────────────────────────────────────┐
│  💪 KDN 헬스 AI   [헤더 - 스카이블루]     │
├─────────────────────────────────────────┤
│                                         │
│   [채팅 메시지 영역 - 화이트 카드]         │
│   - AI 답변 (왼쪽, 흰색 말풍선)           │
│   - 내 질문 (오른쪽, 파란색 말풍선)        │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ 빠른 질문 버튼 6개 (그리드)        │  │
│  └───────────────────────────────────┘  │
├─────────────────────────────────────────┤
│  [입력창]                     [전송 ➤]  │
└─────────────────────────────────────────┘
```

---

## 🗄️ 데이터 모델 (Supabase)

### chat_history (대화 기록)
| 컬럼 | 타입 | 설명 |
|------|------|------|
| id | BIGSERIAL | 고유 식별자 |
| user_id | TEXT | 사용자 ID |
| user_message | TEXT | 사용자 질문 |
| bot_message | TEXT | AI 답변 |
| created_at | TIMESTAMPTZ | 생성 시각 |

### employee_profiles (직원 프로필)
| 컬럼 | 타입 | 설명 |
|------|------|------|
| user_id | TEXT | 직원 ID |
| department | TEXT | 부서 |
| job_type | TEXT | 직무 유형 |
| health_goal | TEXT | 건강 목표 |

> `supabase_schema.sql` 파일을 Supabase SQL Editor에서 실행하세요.

---

## 🔌 API 연동

| API | 용도 | 엔드포인트 |
|-----|------|-----------|
| OpenAI | 챗봇 응답 생성 | `POST /v1/chat/completions` |
| Supabase | 대화 기록 저장 | `chat_history` 테이블 |
| Supabase | 직원 프로필 조회 | `employee_profiles` 테이블 |

---

## 🚀 설치 및 실행

### 1. 환경변수 설정
```bash
cp .env.example .env
# .env 파일을 열어 API 키 입력
```

### 2. 패키지 설치 및 실행
```bash
npm install
npm start
```

브라우저에서 http://localhost:3000 접속

### 3. Supabase 스키마 적용 (선택)
Supabase 대시보드 > SQL Editor > `supabase_schema.sql` 내용 실행

---

## 🏗️ 기술 스택

```
Frontend    React 18 + CSS (Flexbox/Grid)
AI          ChatGPT API (gpt-4o-mini)
DB/BaaS     Supabase (PostgreSQL)
배포 (권장) Vercel / Nginx
```
