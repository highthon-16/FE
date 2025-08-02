import styled from "@emotion/styled";
import { HTMLAttributes, ReactNode } from "react";
import { theme } from "@/themes";
import { Check } from "@/assets";

interface CheckBoxProps extends HTMLAttributes<HTMLDivElement> {
  isChecked: boolean;
  children?: ReactNode;
}

export const CheckBox = ({ isChecked, children, ...props }: CheckBoxProps) => {
  return (
    <CheckBoxContainer {...props}>
      <StyledCheckbox checked={isChecked}>
        {isChecked && <img src={Check} />}
      </StyledCheckbox>
      {children && <Label>{children}</Label>}
    </CheckBoxContainer>
  );
};

const CheckBoxContainer = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  width: 24px;
  height: 24px;
  background-color: ${({ checked }) =>
    checked ? theme.color.main : theme.color.white};
  border: 1px solid ${({ checked }) => (checked ? theme.color.main : "#D9D9D9")};
  border-radius: 4px;
  transition: all 150ms;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.span`
  margin-left: 8px;
`;
