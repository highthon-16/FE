// src/hooks/useSignUp.ts
import { useMutation } from "@tanstack/react-query";
import { signUp, signIn } from "../apis/auth";
import {
  SignupRequest,
  SigninRequest,
  SigninResponse,
} from "../apis/auth/type";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useSignUp = () => {
  const navigate = useNavigate();
  const { mutateAsync } = useMutation({
    mutationFn: (data: SignupRequest) => signUp(data),
    onSuccess: () => {
      toast.success("회원가입 성공");
      console.log("회원가입 성공");
      navigate("/signUp/Complete");
    },
    onError: (error) => {
      toast.error("회원가입 실패");
      console.error("회원가입 실패:", error);
    },
  });

  return {
    mutateAsync,
  };
};

export const useSignIn = () => {
  const navigate = useNavigate();
  const { mutateAsync } = useMutation({
    mutationFn: (data: SigninRequest) => signIn(data),
    onSuccess: (data: SigninResponse) => {
      toast.success("로그인 성공");
      Cookies.set("accessToken", data.accessToken, { expires: 7 });
      navigate("/main");
    },
    onError: (error) => {
      toast.error("로그인 실패");
      console.error("로그인 실패:", error);
    },
  });

  return {
    mutateAsync,
  };
};
