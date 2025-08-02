import { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";

interface ICalendarModalType {
  isClick: boolean;
  onClose: () => void;
  onConfirm: (month: number, year: number) => void;
  initialMonth?: number;
  initialYear?: number;
}

export const CalendarModal = ({
  isClick,
  onClose,
  onConfirm,
  initialMonth = new Date().getMonth() + 1,
  initialYear = new Date().getFullYear(),
}: ICalendarModalType) => {
  const [selectedView, setSelectedView] = useState<"month" | "year">("month");
  const [selectedDate, setSelectedDate] = useState<number>(initialMonth);
  const [selectedYear, setSelectedYear] = useState<number>(initialYear);
  const scrollRef = useRef<HTMLDivElement>(null);

  const dates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const years = Array.from({ length: 21 }, (_, i) => 2015 + i);

  const handleDateClick = (date: number) => {
    setSelectedDate(date);
  };

  const handleCancel = () => {
    onClose();
  };

  const handleConfirm = () => {
    onConfirm(selectedDate, selectedYear);
    onClose();
  };

  let scrollTimeout: NodeJS.Timeout;

  const handleScrollEnd = () => {
    if (!scrollRef.current) return;

    clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      const container = scrollRef.current!;
      const scrollTop = container.scrollTop;
      const itemHeight = 60;
      const centerIndex = Math.round(scrollTop / itemHeight);
      const newYear = years[centerIndex];

      if (newYear && newYear !== selectedYear) {
        setSelectedYear(newYear);
      }

      // 정렬 보정
      container.scrollTo({
        top: centerIndex * itemHeight,
        behavior: "smooth",
      });
    }, 100); // 딜레이 후 보정
  };

  useEffect(() => {
    if (selectedView === "year" && scrollRef.current) {
      const centerIndex = years.indexOf(selectedYear);
      scrollRef.current.scrollTo({
        top: centerIndex * 60,
        behavior: "smooth",
      });
    }
  }, [selectedView, selectedYear, years]);

  if (!isClick) return null;

  return (
    <Overlay onClick={handleCancel}>
      <Container onClick={(e) => e.stopPropagation()}>
        <DaysButtonContainer>
          <MonthBtn
            $isActive={selectedView === "month"}
            onClick={() => setSelectedView("month")}
          >
            달
          </MonthBtn>
          <YearBtn
            $isActive={selectedView === "year"}
            onClick={() => setSelectedView("year")}
          >
            년도
          </YearBtn>
        </DaysButtonContainer>

        {selectedView === "month" ? (
          <DateGrid>
            {dates.map((date) => (
              <DateItem
                key={date}
                $isSelected={selectedDate === date}
                onClick={() => handleDateClick(date)}
              >
                {date}
              </DateItem>
            ))}
          </DateGrid>
        ) : (
          <YearPickerContainer>
            <YearScrollContainer ref={scrollRef} onScroll={handleScrollEnd}>
              <TopSpacer />
              {years.map((year) => (
                <YearItem
                  key={year}
                  $isSelected={year === selectedYear}
                  onClick={() => setSelectedYear(year)}
                >
                  {year}
                </YearItem>
              ))}
              <BottomSpacer />
            </YearScrollContainer>
            <CenterIndicator />
          </YearPickerContainer>
        )}

        <ButtonContainer>
          <CancelButton onClick={handleCancel}>취소</CancelButton>
          <ConfirmButton onClick={handleConfirm}>선택 완료</ConfirmButton>
        </ButtonContainer>
      </Container>
    </Overlay>
  );
};

// ---------- Styled Components ----------
const YearPickerContainer = styled.div`
  position: relative;
  height: 190px;
  margin: 0 31px 40px;
`;

const YearScrollContainer = styled.div`
  height: 100%;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const TopSpacer = styled.div`
  height: 65px;
`;

const BottomSpacer = styled.div`
  height: 65px;
`;

const YearItem = styled.div<{ $isSelected: boolean }>`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => (props.$isSelected ? "32px" : "20px")};
  font-weight: ${(props) => (props.$isSelected ? "700" : "400")};
  color: ${(props) => (props.$isSelected ? "#000" : "#ccc")};
  cursor: pointer;
  transition: all 0.3s ease;
  scroll-snap-align: center;
`;

const CenterIndicator = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  right: 20px;
  height: 60px;
  transform: translateY(-50%);
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  pointer-events: none;
`;

const YearBtn = styled.button<{ $isActive: boolean }>`
  width: 164px;
  height: 46px;
  border: none;
  border-radius: 100px;
  font-size: 16px;
  font-weight: 500;
  background-color: ${(props) => (props.$isActive ? "#FF8C08" : "transparent")};
  color: #000000;
  cursor: pointer;
  transition: all 0.2s ease;
`;

const MonthBtn = styled(YearBtn)``;

const DaysButtonContainer = styled.div`
  margin: 29px 31px 30px;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 100px;
  padding: 4px;
`;

const DateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 0 31px 40px;
`;

const DateItem = styled.div<{ $isSelected: boolean }>`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => (props.$isSelected ? "#FF8C08" : "#858585")};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #ff8c08;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  margin: 0 31px 30px;
`;

const CancelButton = styled.button`
  width: 158px;
  height: 50px;
  border: none;
  border-radius: 25px;
  background-color: #f5f5f5;
  color: #858585;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e8e8e8;
  }
`;

const ConfirmButton = styled.button`
  flex: 2;
  height: 50px;
  border: none;
  border-radius: 25px;
  background-color: #ff8c08;
  color: #000000;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e27a04;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 425px;
  background-color: white;
  border-radius: 35px 35px 0 0;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.05);
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 1000;
`;
