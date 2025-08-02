// 회원가입 요청 타입
export interface SignupRequest {
  username: string;
  email: string;
  password: string;
}

// 회원가입 응답 타입
export interface SignupResponse {
  id: number;
  username: string;
  email: string;
  goals: null | unknown; // goals는 null인데, 혹시 나중에 뭔가 오면 unknown으로 둬도 되고
  aiStyle: string; // 예시 "ADULT_WOMAN"
  currentStamina: number; // 100 이런 숫자
}

// 로그인 요청 타입
export interface SigninRequest {
  email: string;
  password: string;
}

// 로그인 응답 타입
export interface SigninResponse {
  accessToken: string;
}
