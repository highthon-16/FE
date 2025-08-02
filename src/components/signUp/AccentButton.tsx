import styled from "@emotion/styled";

interface IAccentButtonType {
  onClick: () => void;
  isClick: boolean;
  text: string;
  icon: string;
}

export const AccentButton = ({
  onClick,
  isClick,
  text,
  icon,
}: IAccentButtonType) => {
  return (
    <AccentBtn onClick={onClick} $isClick={isClick}>
      {icon && <img src={icon} />}
      {text}
    </AccentBtn>
  );
};

const AccentBtn = styled.button<{ $isClick: boolean }>`
  width: 100%;
  height: 95px;
  background-color: ${(props) => (props.$isClick ? "#FF8C08" : "#f5f5f5")};
  display: flex;
  align-items: center;
  font-size: 19px;
  font-weight: 500;
  margin-bottom: 19px;
  border-radius: 16px;
  border: none;
  transition: all 0.2s ease-in-out;

  img {
    margin-left: 38px;
    margin-right: 40px;
  }
`;
