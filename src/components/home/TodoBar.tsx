import styled from "@emotion/styled";
import { Todo, TodoActive } from "@/assets";
import { KeyboardEvent } from "react";

interface TodoBarProps {
  title: string;
  complete: boolean;
  editing: boolean;
  onChange: (value: string) => void;
  onFinishEdit: () => void;
}

export const TodoBar = ({
  title,
  complete,
  editing,
  onChange,
  onFinishEdit,
}: TodoBarProps) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onFinishEdit();
    }
  };

  return (
    <Wrapper>
      <img src={complete ? TodoActive : Todo} alt="todo" />
      {editing ? (
        <StyledInput
          autoFocus
          placeholder="할 일을 입력하세요"
          value={title}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      ) : (
        <Title>{title}</Title>
      )}
    </Wrapper>
  );
};

const Title = styled.div`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 18px;
  line-height: 35px;
`;

const StyledInput = styled.input`
  font-family: Pretendard;
  font-size: 18px;
  line-height: 35px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;
