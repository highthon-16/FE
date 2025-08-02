export interface CalendarEvent {
  id: number;
  title: string;
  description: string;
  location: string;
  startTime: string; // ISO 문자열이니까 string으로 받자
  duration: number;
  category: string;
  staminaCost: number;
  status: "planned" | "completed" | "canceled"; // 문자열 enum이면 이렇게
  staminaAfterCompletion: number | null;
}

export interface CalendarEventRequest {
  title: string;
  description: string;
  location: string;
  startTime: string;
  duration: number;
  category: string;
  staminaCost: number;
}
