import styled from "@emotion/styled";
import { Logo } from "../../assets";
import { Button } from "@/components";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Header>
        <img src={Logo} alt="" style={{ width: "97px", height: "64px" }} />
        <Contents>
          비어있는
          <br />
          시간도 알차게
        </Contents>
      </Header>
      <Content>
        <Button size="md" onClick={() => navigate("/signUp")}>
          회원가입
        </Button>
        <Button
          size="md"
          backgroundColor="#E3E3E3"
          borderColor="#E3E3E3"
          onClick={() => navigate("/signIn")}
        >
          로그인
        </Button>
      </Content>
    </Wrapper>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 116px 32px 0px 32px;
  gap: 150px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const Contents = styled.div`
  font-family: Inter;
  font-weight: 700;
  font-size: 25px;
  line-height: 40px;
  letter-spacing: 0%;
`;
