import styled from "@emotion/styled";
import { useState } from "react";
import { Chat, Calendar, My } from "../../assets";

export const BottomNav = () => {
  const [activeTab, setActiveTab] = useState<string>("달력");

  const navItems = [
    { id: "채팅", icon: Chat, label: "채팅" },
    { id: "달력", icon: Calendar, label: "달력" },
    { id: "My", icon: My, label: "My" },
  ];

  return (
    <Container>
      <Wrapper>
        {navItems.map((item) => (
          <ContentContainer key={item.id} onClick={() => setActiveTab(item.id)}>
            <item.icon isClick={activeTab === item.id} />
            <NavName isActive={activeTab === item.id}>{item.label}</NavName>
          </ContentContainer>
        ))}
      </Wrapper>
    </Container>
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
`;
