import { ChatBubble, ChatInput } from "@/components";
import { theme } from "@/themes";
import styled from "@emotion/styled";
import { useState } from "react";

export const Chat = () => {
  const [chatList, setChatList] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = () => {
    if (!value) return;
    setChatList((prev) => [...prev, value]);
    setValue("");
  };
  return (
    <Wrapper>
      <Title>채팅</Title>
      <Contents>
        {chatList.length === 0 && (
          <Exp>
            일정에 관해서
            <br />
            물어보세요!
          </Exp>
        )}
        <Chatbox>
          {chatList.map((chat, index) => (
            <ChatBubble key={index} text={chat} isUser={true} />
          ))}
        </Chatbox>
        <ChatInput
          placeholder="입력"
          value={value}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </Contents>
    </Wrapper>
  );
};

const Chatbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  max-height: 250px;
  overflow-y: scroll;
`;

const Exp = styled.div`
  font-family: Pretendard;
  font-weight: 700;
  font-style: Bold;
  font-size: 22px;
  line-height: 29px;
  text-align: center;
  color: ${theme.color.main};
`;

const Wrapper = styled.div`
  padding: 0px 31px;
  display: flex;
  flex-direction: column;
  gap: 142px;
`;

const Title = styled.div`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 25px;
  line-height: 35px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
