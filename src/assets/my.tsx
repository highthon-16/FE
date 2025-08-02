interface IMyType {
  isClick: boolean;
}

export const My = ({ isClick }: IMyType) => {
  return (
    <>
      <svg
        width="19"
        height="21"
        viewBox="0 0 19 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="9"
          cy="5"
          r="4.25"
          stroke={isClick ? "#ff8c08" : "#5B5B5B"}
          stroke-width="1.5"
        />
        <path
          d="M9.5 11.75C14.0048 11.75 17.7628 15.3673 18.2061 20.0713C18.21 20.1135 18.1979 20.1507 18.165 20.1846C18.1292 20.2213 18.0715 20.25 18 20.25H1C0.928504 20.25 0.870757 20.2213 0.834961 20.1846C0.802057 20.1507 0.789973 20.1135 0.793945 20.0713C1.23723 15.3673 4.9952 11.75 9.5 11.75Z"
          stroke={isClick ? "#ff8c08" : "#5B5B5B"}
          strokeWidth="1.5"
        />
      </svg>
    </>
  );
};
