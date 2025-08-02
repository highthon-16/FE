export interface UserGoalRequest {
  goals: string;
}

export interface UserGoalResponse {
  id: number;
  username: string;
  email: string;
  goals: string;
  aiStyle: "TEENAGE_GIRL" | "TEENAGE_BOY" | "ADULT_WOMAN" | "ADULT_MAN";
  currentStamina: number;
}

export interface UserAiStyleRequest {
  aiStyle: "TEENAGE_GIRL" | "TEENAGE_BOY" | "ADULT_WOMAN" | "ADULT_MAN";
}

export interface UserAiStyleResponse {
  id: number;
  username: string;
  email: string;
  goals: string;
  aiStyle: "TEENAGE_GIRL" | "TEENAGE_BOY" | "ADULT_WOMAN" | "ADULT_MAN";
  currentStamina: number;
}
