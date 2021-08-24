import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ServerLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.12012 21.36H10.3201V14.4H7.24812V12.528H16.7521V14.4H13.6801V21.36H20.8801V14.4H17.8321V11.448H12.5521V9.60002H15.6001V2.64001H8.40012V9.60002H11.4721V11.448H6.16812V14.4H3.12012V21.36ZM4.27212 20.28V15.48H9.19212V20.28H4.27212ZM9.55212 8.52002V3.72001H14.4721V8.52002H9.55212ZM14.8321 20.28V15.48H19.7521V20.28H14.8321Z"
        fill={color}
      />
    </svg>
  );
}

export default ServerLight;