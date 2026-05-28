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
  } else {
    console.log('[Supabase] 저장 성공 - user_id:', userId);
  }
}

export async function getChatHistory(userId) {
  if (!process.env.REACT_APP_SUPABASE_URL) return [];

  const { data } = await supabase
    .from('chat_history')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: true })
    .limit(50);

  return data || [];
}
