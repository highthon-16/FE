import styled from "@emotion/styled";
import { Alarm, Logo } from "../../assets";

export const Header = () => {
  return (
    <Container>
      <img src={Logo} />
      <img id="alarm" src={Alarm} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 55px;
  position: fixed;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  padding: 0 29px;

  img {
    width: 51px;
  }

  #alarm {
    width: 22px;
  }
`;
