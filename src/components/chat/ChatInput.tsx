import styled from "@emotion/styled";
import { theme } from "@/themes";
import { Button } from "../common";

interface ChatInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: () => void;
}

export const ChatInput = ({
  placeholder,
  value,
  onChange,
  onSubmit,
}: ChatInputProps) => {
  return (
    <InputContainer>
      <Input placeholder={placeholder} value={value} onChange={onChange} />
      <Button size="sm" disabled={!value} color="#ffffff" onClick={onSubmit}>
        보내기
      </Button>
    </InputContainer>
  );
};

const Input = styled.input`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 19px;
  line-height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  &::placeholder {
    color: #aeaeae;
    font-family: Pretendard;
    font-weight: 500;
    font-size: 19px;
    line-height: 100%;
  }
`;

const InputContainer = styled.div`
  padding: 8px 11px 8px 27px;
  background-color: ${theme.color.serve2};
  border-radius: 100px;
  display: flex;
  align-items: center;
`;
