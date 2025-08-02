import { LeftArrow } from "@/assets";
import styled from "@emotion/styled";
import { AlarmBox } from "@/components";

export const Alarm = () => {
  const alarmList = [
    {
      title: "알림",
      content:
        "알림 내용알림 내용알림 내용알림 내용알림 내용알림 내용알림 내용알림 내용알림 내용알림 내용알림 내용알림 내용알림 내용",
    },
    {
      title: "알림",
      content:
        "알림 내용알림 내용알림 내용알림 내용알림 내용알림 내용알림 내용알림 내용알림 내용알림 내용알림 내용알림 내용알림 내용",
    },
    {
      title: "알림",
      content: "알림 내용",
    },
  ];
  return (
    <Wrapper>
      <Header>
        <img src={LeftArrow} alt="left arrow" style={{ cursor: "pointer" }} />
        알림
      </Header>
      <AlarmList>
        {alarmList.map((alarm) => (
          <AlarmBox
            key={alarm.title}
            title={alarm.title}
            content={alarm.content}
          />
        ))}
      </AlarmList>
    </Wrapper>
  );
};

const AlarmList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

const Header = styled.div`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 25px;
  line-height: 35px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 53px 32px 0px 32px;
  gap: 24px;
`;
