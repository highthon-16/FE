import styled from "@emotion/styled";
import { Input } from "@/components";
import { Button } from "@/components";
import { CheckBox } from "@/components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignUp } from "@/hooks/useAuth";
export const SignUp = () => {
  const navigate = useNavigate();
  const [isCheck, setIsCheck] = useState(false);
  const [isId, setIsId] = useState<string>("");
  const [isEmail, setIsEmail] = useState<string>("");
  const [isPassword, setIsPassword] = useState<string>("");
  const [isPasswordCheck, setIsPasswordCheck] = useState<string>("");

  const { mutateAsync: signUp } = useSignUp();

  const isEmailValid = /\S+@\S+\.\S+/.test(isEmail); // 간단한 이메일 정규식
  const isPasswordMatch = isPassword === isPasswordCheck;

  const isFormValid =
    isCheck &&
    isId.trim() !== "" &&
    isEmail.trim() !== "" &&
    isPassword.trim() !== "" &&
    isPasswordCheck.trim() !== "" &&
    isEmailValid &&
    isPasswordMatch;

  const handleSignUp = async () => {
    console.log(isId, isEmail, isPassword, isPasswordCheck);
    console.log("클릭");
    try {
      await signUp({
        username: isId,
        email: isEmail,
        password: isPassword,
      });

      navigate("/signUp/Complete");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Wrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: "41px" }}>
        <Header>회원가입</Header>
        <div style={{ display: "flex", flexDirection: "column", gap: "45px" }}>
          <Input
            placeholder="아이디"
            label="아이디"
            onChange={(e) => setIsId(e.target.value)}
            value={isId}
          />
          <Input
            placeholder="이메일"
            label="이메일"
            onChange={(e) => setIsEmail(e.target.value)}
            value={isEmail}
          />
          {!isEmailValid && isEmail !== "" && (
            <ErrorText>올바른 이메일 형식을 입력해주세요</ErrorText>
          )}
          <Input
            placeholder="비밀번호"
            label="비밀번호"
            type="password"
            onChange={(e) => setIsPassword(e.target.value)}
            value={isPassword}
          />
          <Input
            placeholder="비밀번호 확인"
            label="비밀번호 확인"
            type="password"
            onChange={(e) => setIsPasswordCheck(e.target.value)}
            value={isPasswordCheck}
          />
          {!isPasswordMatch && isPasswordCheck !== "" && (
            <ErrorText>비밀번호가 일치하지 않습니다</ErrorText>
          )}
        </div>
      </div>
      <Footer>
        <CheckDiv>
          <CheckBox isChecked={isCheck} onClick={() => setIsCheck(!isCheck)} />
          개인정보 이용에 동의 하십니까?
        </CheckDiv>
        <Button size="md" onClick={handleSignUp} disabled={!isFormValid}>
          가입하기
        </Button>
      </Footer>
    </Wrapper>
  );
};

const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  margin-top: -35px;
  margin-bottom: 10px;
  margin-left: 2px;
`;

const CheckDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
`;

const Header = styled.div`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 27px;
  line-height: 100%;
  text-align: left;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 75px 32px 0px 32px;
  gap: 129px;
`;
