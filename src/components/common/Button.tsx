import { ButtonHTMLAttributes, forwardRef } from "react";
import styled from "@emotion/styled";
import { theme } from "@/themes";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string;
  borderColor?: string;
  size?: "sm" | "md" | "lg";
  color?: string;
}

const sizeStyles = {
  sm: {
    width: "90px",
    height: "39px",

    fontSize: "16px",
    "@media (max-width: 768px)": {
      width: "68px",
      height: "38px",
      fontSize: "16px",
    },
  },
  md: {
    padding: "18px 120px",
    fontSize: "1rem",
    "@media (max-width: 768px)": {
      padding: "14px 60px",
      fontSize: "0.9rem",
    },
  },
  lg: {
    padding: "0.75rem 1.5rem",
    fontSize: "1.125rem",
    "@media (max-width: 768px)": {
      padding: "0.6rem 1.2rem",
      fontSize: "1rem",
    },
  },
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
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor = theme.color.main }) =>
    backgroundColor};
  border-color: ${({ borderColor = theme.color.main }) => borderColor};

  ${({ size = "md" }) => sizeStyles[size]};

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background-color: #dcdcdc;
    border-color: #dcdcdc;
    color: #9e9e9e;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return <StyledButton ref={ref} {...props} />;
  }
);

Button.displayName = "Button";
