interface ICalendarType {
  isClick: boolean;
}

export const Calendar = ({ isClick }: ICalendarType) => {
  return (
    <>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="3"
          width="18"
          height="5"
          fill={isClick ? "#ff8c08" : "#5B5B5B"}
        />
        <rect
          x="0.844995"
          y="3.15267"
          width="18.31"
          height="16.0023"
          rx="1.15501"
          stroke={isClick ? "#ff8c08" : "#5B5B5B"}
          strokeWidth="1.68999"
        />
        <rect
          x="4.61523"
          width="1.66667"
          height="3.88889"
          rx="0.833334"
          fill={isClick ? "#ff8c08" : "#5B5B5B"}
        />
        <rect
          x="9.35889"
          width="1.66667"
          height="3.88889"
          rx="0.833334"
          fill={isClick ? "#ff8c08" : "#5B5B5B"}
        />
        <rect
          x="14.1025"
          width="1.66667"
          height="3.88889"
          rx="0.833334"
          fill={isClick ? "#ff8c08" : "#5B5B5B"}
        />
      </svg>
    </>
  );
};
