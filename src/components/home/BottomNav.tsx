import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { Chat, Calendar, My } from "@/assets";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState<string>(() => {
    if (location.pathname === "/main") return "달력";
    if (location.pathname === "/myPage") return "My";
    return "채팅";
  });

  const navItems = [
    { id: "채팅", icon: Chat, label: "채팅" },
    { id: "달력", icon: Calendar, label: "달력" },
    { id: "My", icon: My, label: "My" },
  ];

  useEffect(() => {
    if (location.pathname === "/main") setActiveTab("달력");
    else if (location.pathname === "/myPage") setActiveTab("My");
    else setActiveTab("채팅");
  }, [location.pathname]);

  const handleClick = (id: string) => {
    setActiveTab(id);
    if (id === "My") {
      navigate("/myPage");
    } else if (id === "달력") {
      navigate("/main");
    } else {
      navigate("/chat");
    }
  };

  return (
    <>
      <Outlet />
      <Container>
        <Wrapper>
          {navItems.map((item) => (
            <ContentContainer
              key={item.id}
              onClick={() => handleClick(item.id)}
            >
              <item.icon isClick={activeTab === item.id} />
              <NavName isActive={activeTab === item.id}>{item.label}</NavName>
            </ContentContainer>
          ))}
        </Wrapper>
      </Container>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 95px;
`;

const NavName = styled.div<{ isActive: boolean }>`
  font-size: 11px;
  color: ${({ isActive }) => (isActive ? "#FF6B35" : "#666")};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

const Container = styled.div`
  width: 100%;
  height: 74px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.05);
  bottom: 0;
  z-index: 5;
`;
