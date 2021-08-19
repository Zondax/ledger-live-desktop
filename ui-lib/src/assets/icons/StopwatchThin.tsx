import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function StopwatchThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0002 21.36C16.2962 21.36 19.8002 17.856 19.8002 13.56C19.8002 11.496 18.9842 9.62402 17.6882 8.23202L19.1282 6.76801L18.7922 6.43201L17.3282 7.87201C15.9842 6.62402 14.2082 5.83202 12.2402 5.76002V3.12001H14.2802V2.64001H9.72019V3.12001H11.7602V5.76002C7.5842 5.88001 4.2002 9.33602 4.2002 13.56C4.2002 17.856 7.7042 21.36 12.0002 21.36ZM4.6802 13.56C4.6802 9.52802 7.96819 6.24002 12.0002 6.24002C16.0322 6.24002 19.3202 9.52802 19.3202 13.56C19.3202 17.592 16.0322 20.88 12.0002 20.88C7.96819 20.88 4.6802 17.592 4.6802 13.56ZM11.7602 14.04C11.7602 14.184 11.8562 14.28 12.0002 14.28C12.1442 14.28 12.2402 14.184 12.2402 14.04V8.16002H11.7602V14.04Z"
        fill={color}
      />
    </svg>
  );
}

export default StopwatchThin;