import { forwardRef, InputHTMLAttributes } from "react";
import styled from "@emotion/styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #424242;
`;

const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  border: none;
  outline: none;
  color: #000000;
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 19px;
  line-height: 100%;
  letter-spacing: 0%;
  &::placeholder {
    color: #aeaeae;
    font-family: "Pretendard";
    font-weight: 500;
    font-size: 19px;
    line-height: 100%;
    letter-spacing: 0%;
  }
`;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...rest }, ref) => {
    return (
      <InputContainer>
        {label && <StyledLabel>{label}</StyledLabel>}
        <StyledInput ref={ref} {...rest} />
      </InputContainer>
    );
  }
);

Input.displayName = "Input";
