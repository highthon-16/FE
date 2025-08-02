import styled from "@emotion/styled";
import { Button, Input } from "@/components";
import { useState } from "react";
import { useSignIn } from "@/hooks/useAuth";

export const SignIn = () => {
  const [isEmail, setIsEmail] = useState<string>("");
  const [isPassword, setIsPassword] = useState<string>("");
  const { mutateAsync: signIn } = useSignIn();

  const handleSignIn = async () => {
    try {
      await signIn({
        email: isEmail,
        password: isPassword,
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Wrapper>
      <div style={{ display: "flex", flexDirection: "column", gap: "41px" }}>
        <Header>로그인</Header>
        <div style={{ display: "flex", flexDirection: "column", gap: "45px" }}>
          <Input
            placeholder="이메일"
            label="이메일"
            onChange={(e) => setIsEmail(e.target.value)}
            value={isEmail}
          />
          <Input
            placeholder="비밀번호"
            label="비밀번호"
            onChange={(e) => setIsPassword(e.target.value)}
            value={isPassword}
          />
        </div>
      </div>
      <Footer>
        <Button
          size="md"
          disabled={!isEmail || !isPassword}
          onClick={handleSignIn}
        >
          로그인하기
        </Button>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 75px 32px 0px 32px;
  gap: 129px;
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
