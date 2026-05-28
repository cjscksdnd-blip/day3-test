import { supabase } from '../supabaseClient';

export async function sendMessageToGPT(messages) {
  const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

  const systemPrompt = `당신은 한전KDN 직원 전용 AI 헬스 트레이너입니다.
직원들의 건강한 직장 생활을 위해 다음 역할을 담당합니다:
- 맞춤형 운동 루틴 추천 (사무직/현장직 구분)
- 건강한 식단 및 영양 정보 제공
- 체중 관리 및 체력 향상 가이드
- 스트레스 해소를 위한 스트레칭 안내
항상 친근하고 전문적인 어조로 한국어로 답변하세요.
의학적 치료가 필요한 경우 반드시 전문의 상담을 권고하세요.`;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ role: 'system', content: systemPrompt }, ...messages],
      max_tokens: 1000,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    throw new Error(`OpenAI API 오류: ${response.status}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

export async function saveChatHistory(userId, userMessage, botMessage) {
  if (!supabase) {
    console.error('[Supabase] 클라이언트 초기화 실패 - 환경변수 확인 필요');
    return;
  }

  const { error } = await supabase.from('chat_history').insert([
    {
      user_id: userId,
      user_message: userMessage,
      bot_message: botMessage,
      created_at: new Date().toISOString(),
    },
  ]);

  if (error) {
    console.error('[Supabase] 저장 실패:', error.message, error.code, error.details);
    return false;
  } else {
    console.log('[Supabase] 저장 성공 - user_id:', userId);
    return true;
  }
}

export async function getChatHistory(userId) {
  if (!supabase) return [];

  const { data } = await supabase
    .from('chat_history')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: true })
    .limit(50);

  return data || [];
}

export async function analyzeUserProfile(messages) {
  const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
  if (!OPENAI_API_KEY || messages.length === 0) return null;

  const systemPrompt = `사용자와 AI의 대화 기록을 분석하여 아래 JSON 형식만 반환하세요. 정보가 부족하면 null로 표시하세요.

{
  "level": "초보자 또는 중급자 또는 고급자 또는 null",
  "goal": "체중감량 또는 근력증가 또는 체력향상 또는 건강유지 또는 null",
  "exercise_experience": "운동 경력 한 줄 요약 또는 null",
  "diet_pattern": "식단 패턴 한 줄 요약 또는 null",
  "concerns": ["건강 고민 키워드1", "건강 고민 키워드2"],
  "summary": "전반적인 건강 상태 한 줄 요약"
}

JSON 외 다른 텍스트는 절대 포함하지 마세요.`;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages,
        { role: 'user', content: '위 대화를 분석해서 JSON만 반환해주세요.' },
      ],
      max_tokens: 500,
      temperature: 0.3,
    }),
  });

  if (!response.ok) throw new Error('분석 실패');
  const data = await response.json();

  try {
    const text = data.choices[0].message.content.trim();
    const json = text.replace(/^```json\n?/, '').replace(/\n?```$/, '');
    return JSON.parse(json);
  } catch {
    return null;
  }
}
