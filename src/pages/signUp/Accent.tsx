import { useState } from "react";
import styled from "@emotion/styled";
import { AccentButton, Button } from "../../components";
import { Girl, Boy, Woman, Man } from "../../assets";
import { useUserAiStyle } from "../../hooks/useUser";
import { UserAiStyleRequest } from "@/apis/user/type";

interface IAccentButtonProps {
  text: string;
  icon: string;
}

export const Accent = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const { mutateAsync } = useUserAiStyle();

  const aiStyleMap: UserAiStyleRequest["aiStyle"][] = [
    "TEENAGE_GIRL",
    "TEENAGE_BOY",
    "ADULT_WOMAN",
    "ADULT_MAN",
  ];

  const AccentBtnTypes: IAccentButtonProps[] = [
    { icon: Girl, text: "10대 소녀 말투" },
    { icon: Boy, text: "10대 소년 말투" },
    { icon: Woman, text: "성인 여성 말투" },
    { icon: Man, text: "성인 남성 말투" },
  ];

  const handleOnClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handleSubmit = async () => {
    if (selectedIndex === null) return;

    try {
      const aiStyle = aiStyleMap[selectedIndex];
      await mutateAsync({ aiStyle });
    } catch (error) {
      console.error("AI 스타일 설정 실패", error);
    }
  };

  return (
    <Container>
      <QuestionContainer>
        <NumberField>02</NumberField>
        <Question>
          00님은 <br /> 어떤 말투가 편하신가요?
        </Question>
      </QuestionContainer>
      <div style={{ display: "flex", flexDirection: "column", gap: "69px" }}>
        <AccentBtnContainer>
          {AccentBtnTypes.map((item, index) => (
            <AccentButton
              key={index}
              onClick={() => handleOnClick(index)}
              isClick={selectedIndex === index}
              icon={item.icon}
              text={item.text}
            />
          ))}
        </AccentBtnContainer>
        <Button
          onClick={handleSubmit}
          size="md"
          disabled={selectedIndex === null}
        >
          선택 완료
        </Button>
      </div>
    </Container>
  );
};

const AccentBtnContainer = styled.div`
  margin-top: 95px;
  width: 100%;
`;

const Question = styled.div`
  font-size: 27px;
  font-weight: 700;
  line-height: 35px;
`;

const NumberField = styled.div`
  color: #a3a3a3;
  font-size: 18px;
  font-weight: 600;
  margin-top: 75px;
`;

const QuestionContainer = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 59px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
`;
