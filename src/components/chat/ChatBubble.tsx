import styled from "@emotion/styled";

interface ChatBubbleProps {
  text: string;
  isUser?: boolean;
}

export const ChatBubble = ({ text, isUser }: ChatBubbleProps) => {
  return (
    <BubbleWrapper isUser={isUser}>
      <Bubble>
        {text.split("\n").map((line, idx) => (
          <span key={idx}>
            {line}
            <br />
          </span>
        ))}
      </Bubble>
      <Tail />
    </BubbleWrapper>
  );
};

const BubbleWrapper = styled.div<{ isUser?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${({ isUser }) => (isUser ? "flex-end" : "flex-start")};
`;

const Bubble = styled.div`
  background-color: #d9d9d9;
  padding: 12px 16px;
  border-radius: 12px;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  position: relative;
  white-space: pre-wrap;
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
