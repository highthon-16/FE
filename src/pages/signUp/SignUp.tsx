import styled from "@emotion/styled";
import { Input } from "@/components";
import { Button } from "@/components";
import { CheckBox } from "@/components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();
  const [isCheck, setIsCheck] = useState(false);
  const [isId, setIsId] = useState<string>("");
  const [isEmail, setIsEmail] = useState<string>("");
  const [isPassword, setIsPassword] = useState<string>("");
  const [isPasswordCheck, setIsPasswordCheck] = useState<string>("");

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
          <Input
            placeholder="비밀번호"
            label="비밀번호"
            onChange={(e) => setIsPassword(e.target.value)}
            value={isPassword}
          />
          <Input
            placeholder="비밀번호 확인"
            label="비밀번호 확인"
            onChange={(e) => setIsPasswordCheck(e.target.value)}
            value={isPasswordCheck}
          />
        </div>
      </div>
      <Footer>
        <CheckDiv>
          <CheckBox isChecked={isCheck} onClick={() => setIsCheck(!isCheck)} />
          개인정보 이용에 동의 하십니까?
        </CheckDiv>
        <Button
          size="md"
          onClick={() => navigate("/signUp/Complete")}
          disabled={
            !isCheck || !isId || !isEmail || !isPassword || !isPasswordCheck
          }
        >
          가입하기
        </Button>
      </Footer>
    </Wrapper>
  );
};

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
