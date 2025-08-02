import instance from "../axios";
import {
  SigninRequest,
  SigninResponse,
  SignupRequest,
  SignupResponse,
} from "./type";

const router = "/auth";

export const signUp = async (data: SignupRequest): Promise<SignupResponse> => {
  const res = await instance.post(`${router}/signup`, data);
  return res.data;
};

export const signIn = async (data: SigninRequest): Promise<SigninResponse> => {
  const res = await instance.post(`${router}/login`, data);
  return res.data;
};
