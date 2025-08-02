import { ButtonHTMLAttributes, forwardRef } from "react";
import styled from "@emotion/styled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
  borderColor?: string;
  size?: "sm" | "md" | "lg";
}

const sizeStyles = {
  sm: { padding: "0.25rem 0.75rem", fontSize: "0.875rem" },
  md: { padding: "18px 120px", fontSize: "1rem" },
  lg: { padding: "0.75rem 1.5rem", fontSize: "1.125rem" },
};

const StyledButton = styled.button<ButtonProps>`
  border: 1px solid;
  border-radius: 100px;
  cursor: pointer;
  font-family: "Inter";
  font-weight: 500;
  font-size: 15px;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: #000000;
  background-color: ${({ backgroundColor = "#FF8C08" }) => backgroundColor};
  border-color: ${({ borderColor = "#FF8C08" }) => borderColor};

  ${({ size = "md" }) => sizeStyles[size]};

  &:hover {
    opacity: 0.9;
  }
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return <StyledButton ref={ref} {...props} />;
  }
);

Button.displayName = "Button";
