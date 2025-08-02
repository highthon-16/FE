import styled from "@emotion/styled";
import { Button, Input } from "@/components";
import { useState } from "react";
import { useUserGoal } from "@/hooks/useUser";

export const Goal = () => {
  const [goals, setGoals] = useState<string>("");
  const { mutateAsync } = useUserGoal();

  const handleSubmit = async () => {
    if (!goals) return;

    try {
      await mutateAsync({ goals });
    } catch (error) {
      console.error("목표 설정 실패", error);
    }
  };

  return (
    <Wrapper>
      <Header>
        <span>01</span>
        <div>
          00님의
          <br />
          목표는 무엇인가요?
        </div>
      </Header>
      <div style={{ display: "flex", flexDirection: "column", gap: "167px" }}>
        <Input
          placeholder="ex) 매일 놀러나가기"
          onChange={(e) => setGoals(e.target.value)}
          value={goals}
        />
        <Button size="md" onClick={handleSubmit} disabled={!goals}>
          입력 완료
        </Button>
      </div>
    </Wrapper>
  );
};

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  > span {
    font-family: "Pretendard";
    font-weight: 600;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #a3a3a3;
  }
  > div {
    font-family: "Pretendard";
    font-weight: 700;
    font-size: 27px;
    line-height: 35px;
    letter-spacing: 0%;
    color: #000000;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 116px 32px 0px 32px;
  gap: 71px;
`;
