import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { ko } from "date-fns/locale";
import styled from "@emotion/styled";
import { theme } from "@/themes";

interface CalendarProps {
  selected: Date | undefined;
  onSelect: (date: Date) => void;
  currentMonth: number;
  currentYear: number;
}

const StyledCalendar = styled.div`
  .rdp {
    background: white;
    width: fit-content;
  }

  .rdp-month_caption {
    display: none;
  }

  .rdp-nav {
    display: none;
  }

  .rdp-head_cell {
    font-weight: 500;
    font-size: 14px;
    color: #666;
    text-align: center;
  }

  .rdp-day {
    height: 40px;
    width: 40px;
    border-radius: 9999px;
    font-size: 14px;
    color: #222;
    text-align: center;
  }

  .rdp-day_button {
    border: none;
  }

  .rdp-day_today {
    border: 1px solid ${theme.color.main};
  }

  .rdp-selected {
    background-color: ${theme.color.main};
    color: white;
  }

  .rdp-day_outside {
    visibility: hidden;
  }

  .rdp-weekday {
    font-family: "Pretendard";
    font-weight: 500;
    font-size: 19px;
    line-height: 35px;
    text-align: center;
  }
`;

export const Calendar = ({
  selected,
  onSelect,
  currentMonth,
  currentYear,
}: CalendarProps) => {
  // currentMonth와 currentYear를 기반으로 Date 객체 생성
  const displayMonth = new Date(currentYear, currentMonth - 1, 1);

  return (
    <StyledCalendar>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={onSelect}
        locale={ko}
        weekStartsOn={1}
        showOutsideDays={false}
        month={displayMonth} // 표시할 월 지정
        disableNavigation={true} // 네비게이션 비활성화 (이미 CSS로 숨김)
      />
    </StyledCalendar>
  );
};
