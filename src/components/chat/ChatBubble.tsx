import styled from "@emotion/styled";

interface ChatBubbleProps {
  text: string;
}

export const ChatBubble = ({ text }: ChatBubbleProps) => {
  return (
    <BubbleWrapper>
      <Bubble>{text}</Bubble>
      <Tail />
    </BubbleWrapper>
  );
};

const BubbleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Bubble = styled.div`
  background-color: #d9d9d9;
  padding: 12px 16px;
  border-radius: 12px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500px;
  line-height: 22px;
  position: relative;
`;

const Tail = styled.div`
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 18px solid transparent;
  border-top: 11px solid #d9d9d9;
  margin-left: 10px;
  margin-top: -5px;
`;
