import styled from "@emotion/styled";
import { CheckMark } from "../../assets";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Complete = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/signUp/Goal", { replace: true });
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <Container>
      <AnimatedRipple />
      <CircleWrapper>
        <InnerCircle>
          <CheckIcon src={CheckMark} alt="check icon" />
          <Message>
            회원가입이
            <br />
            완료되었어요!
          </Message>
        </InnerCircle>
      </CircleWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
`;

const CircleWrapper = styled.div`
  width: 676px;
  height: 676px;
  border-radius: 50%;
  background-color: #ffce96;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InnerCircle = styled.div`
  width: 612px;
  height: 612px;
  border-radius: 50%;
  background-color: #ffbb6d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

const CheckIcon = styled.img`
  width: 131px;
`;

const Message = styled.div`
  color: white;
  font-size: 27px;
  font-weight: 700;
  text-align: center;
  line-height: 40px;
  margin-top: 30px;
`;

const AnimatedRipple = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 676px;
  height: 676px;
  border-radius: 50%;
  background-color: #ffce96;
  transform: translate(-50%, -50%);
  animation: ripple 2.5s ease-out infinite;
  z-index: 0;
  opacity: 0.6;

  @keyframes ripple {
    0% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0.6;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.5);
      opacity: 0;
    }
  }
`;
