import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // 백엔드 API 기본 URL
  timeout: 500000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
instance.interceptors.request.use(
  (config) => {
    const noAuthPaths = [
      "/auth/signup",
      "/auth/login",
      "/user/goal",
      "/user/ai-style",
    ]; // 인증 불필요 경로들

    // 인증 필요 없는 경로면 토큰 검사 없이 바로 진행
    if (noAuthPaths.some((path) => config.url?.includes(path))) {
      return config;
    }

    const accessToken = Cookies.get("accessToken"); // 쿠키에서 accessToken 가져오기

    if (!accessToken) {
      toast.error("로그인이 필요합니다.");
      window.location.href = "/";
      return Promise.reject(
        new Error("No access token found. Redirecting to login.")
      );
    }

    if (config.headers && accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      let errorMessage = "알 수 없는 오류가 발생했습니다.";

      if (data && data.message) {
        errorMessage = data.message;
      } else if (status === 401) {
        errorMessage = "인증 정보가 유효하지 않습니다. 다시 로그인해주세요.";
        Cookies.remove("accessToken");
        window.location.href = "/";
      } else if (status === 403) {
        errorMessage = "접근 권한이 없습니다.";
      } else if (status >= 500) {
        errorMessage = "서버에 문제가 발생했습니다. 잠시 후 다시 시도해주세요.";
      }
      toast.error(errorMessage);
    } else if (error.request) {
      toast.error("네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.");
    } else {
      toast.error("요청을 처리하는 중 오류가 발생했습니다.");
    }
    return Promise.reject(error);
  }
);

export default instance;
