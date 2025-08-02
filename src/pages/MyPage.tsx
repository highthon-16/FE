import styled from "@emotion/styled";
import { BottomNav, Header } from "../components";
import { theme } from "@/themes";
import { Goal, Boy } from "../assets";

export const MyPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Top>
          <ProfilImg>
            <img src="" alt="" />
          </ProfilImg>
          <NameField>양현서</NameField>
          <EmailField>d2329@e-mirim.hs.kr</EmailField>
        </Top>
        <Bottom>
          <ContentWrapper>
            <img src={Goal} />
            <Title>목표 정하기</Title>
            <NowGoal>현재 목표</NowGoal>
            <NowGaolDetail>밖에 자주 나가기</NowGaolDetail>
          </ContentWrapper>
          <ContentWrapper>
            <img id="boy" src={Boy} />
            <Title>목표 정하기</Title>
            <NowGoal>현재 말투</NowGoal>
            <NowGaolDetailAccent>10대 소년</NowGaolDetailAccent>
          </ContentWrapper>
        </Bottom>
        <Logout>로그아웃</Logout>
      </Container>
      <BottomNav />
    </>
  );
};

const NowGaolDetailAccent = styled.div`
  color: #626060;
  display: flex;
  justify-content: flex-start;
  font-size: 16px;
  margin-left: 10px;
`;

const NowGaolDetail = styled.div`
  color: #626060;
  display: flex;
  justify-content: center;
  font-size: 16px;
`;

const NowGoal = styled.div`
  margin-top: 95px;
  font-size: 15px;
  font-weight: 400;
  line-height: 35px;
  color: #cfcece;
  margin-left: 10px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
  font-size: 20px;
  margin-top: 12px;
  font-weight: 600;
`;

const Logout = styled.div`
  margin-top: 20px;
  font-size: 15px;
  font-weight: 400;
  color: #cfcccc;
  text-decoration: underline;
  text-underline-offset: 25%;
`;

const ContentWrapper = styled.div`
  width: 156px;
  height: 309px;
  background-color: ${theme.color.serve2};
  border-radius: 16px;
  padding: 20px 16px;

  #boy {
    width: 65px;
  }
`;

const Bottom = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 42px;
`;

const EmailField = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #b0b0b0;
  margin-top: 10px;
`;

const NameField = styled.div`
  margin-top: 22px;
  font-size: 25px;
  font-weight: 700;
  line-height: 35px;
`;

const ProfilImg = styled.div`
  width: 129px;
  height: 129px;
  border-radius: 50%;
  background-color: ${theme.color.serve2};
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 39px;
`;
