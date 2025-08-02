import styled from "@emotion/styled";
import { Alarm, Logo } from "../../assets";
import { Outlet, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <img
          src={Logo}
          style={{ width: "43px", height: "25px" }}
          onClick={() => navigate("/main")}
        />
        <img id="alarm" src={Alarm} onClick={() => navigate("/alarm")} />
      </Container>
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 29px;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 55px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 31px;

  img {
    width: 51px;
  }

  #alarm {
    width: 22px;
  }
`;
