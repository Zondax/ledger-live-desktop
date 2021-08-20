import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function LinkedinThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.95989 21.36H20.0399C20.7839 21.36 21.3599 20.76 21.3599 20.04V3.96001C21.3599 3.24001 20.7839 2.64001 20.0399 2.64001H3.95989C3.23989 2.64001 2.63989 3.24001 2.63989 3.96001V20.04C2.63989 20.76 3.23989 21.36 3.95989 21.36ZM5.30389 6.91201C5.30389 6.02401 6.02389 5.30401 6.91189 5.30401C7.79989 5.30401 8.51989 6.02401 8.51989 6.91201C8.51989 7.80001 7.79989 8.52002 6.91189 8.52002C6.02389 8.52002 5.30389 7.80001 5.30389 6.91201ZM5.51989 18.696V9.74402H8.32789V18.696H5.51989ZM10.0559 18.696V9.74402H12.7199V10.944H12.7439C13.1759 10.152 14.1359 9.52802 15.4079 9.52802C17.8079 9.52802 18.6959 11.112 18.6959 13.8V18.696H15.9359V14.328C15.9359 13.128 15.8639 11.952 14.4719 11.952C13.1999 11.952 12.8399 12.888 12.8399 14.256V18.696H10.0559Z"
        fill={color}
      />
    </svg>
  );
}

export default LinkedinThin;
