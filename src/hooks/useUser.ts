import { useMutation } from "@tanstack/react-query";
import { userGoal, userAiStyle } from "@/apis/user";
import { useNavigate } from "react-router-dom";
import { UserGoalRequest, UserAiStyleRequest } from "../apis/user/type";

export const useUserGoal = () => {
  const navigate = useNavigate();

  const { mutateAsync } = useMutation({
    mutationFn: (data: UserGoalRequest) => userGoal(data),
    onSuccess: () => navigate("/signUp/Accent"),
  });

  return { mutateAsync };
};

export const useUserAiStyle = () => {
  const navigate = useNavigate();

  const { mutateAsync } = useMutation({
    mutationFn: (data: UserAiStyleRequest) => userAiStyle(data),
    onSuccess: () => navigate("/signUp/Complete"),
  });

  return { mutateAsync };
};
