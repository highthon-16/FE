import instance from "../axios";
import {
  UserGoalRequest,
  UserGoalResponse,
  UserAiStyleRequest,
  UserAiStyleResponse,
} from "./type";

const router = "/user";

export const userGoal = async (
  data: UserGoalRequest
): Promise<UserGoalResponse> => {
  const res = await instance.post(`${router}/goal`, data);
  return res.data;
};

export const userAiStyle = async (
  data: UserAiStyleRequest
): Promise<UserAiStyleResponse> => {
  const res = await instance.post(`${router}/ai-style`, data);
  return res.data;
};
