import { theme } from "@/themes";
import styled from "@emotion/styled";

interface AlarmBoxProps {
  title: string;
  content: string;
}

export const AlarmBox = ({ title, content }: AlarmBoxProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 22px 32px 27px 32px;
  background-color: ${theme.color.serve2};
  border-radius: 16px;
`;

const Title = styled.div`
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 20px;
  line-height: 35px;
`;

const Content = styled.div`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 15px;
  line-height: 23px;
  color: #9e9e9e;
`;
