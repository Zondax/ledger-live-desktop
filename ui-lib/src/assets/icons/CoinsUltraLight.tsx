import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function CoinsUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.61204 21.276C13.356 21.276 16.236 20.052 16.236 18.108V16.188C18.996 15.876 21.012 14.748 21.012 13.116V5.868C21.012 3.924 18.228 2.724 14.388 2.724C10.668 2.724 7.74004 3.9 7.74004 5.868V7.836C4.95604 8.148 2.98804 9.228 2.98804 10.836V18.108C2.98804 20.052 5.79604 21.276 9.61204 21.276ZM3.75604 18.108V16.044C4.78804 17.052 6.94804 17.652 9.61204 17.652C12.228 17.652 14.412 17.052 15.468 16.044V18.108C15.468 19.476 13.164 20.484 9.61204 20.484C6.01204 20.484 3.75604 19.5 3.75604 18.108ZM3.75604 14.508V12.372C4.78804 13.38 6.94804 13.98 9.61204 13.98C12.228 13.98 14.412 13.38 15.468 12.372V14.508C15.468 15.876 13.164 16.884 9.61204 16.884C6.01204 16.884 3.75604 15.876 3.75604 14.508ZM3.75604 10.836C3.75604 9.468 6.08404 8.46 9.61204 8.46C13.26 8.46 15.468 9.444 15.468 10.836C15.468 12.204 13.164 13.212 9.61204 13.212C6.01204 13.212 3.75604 12.204 3.75604 10.836ZM8.53204 7.764V7.428C8.65204 7.548 8.79604 7.644 8.94004 7.74L8.53204 7.764ZM8.53204 5.868C8.53204 4.5 10.836 3.516 14.388 3.516C18.012 3.516 20.22 4.476 20.22 5.868C20.22 7.236 17.724 8.388 13.668 8.244C12.756 7.956 11.7 7.788 10.572 7.74C9.22804 7.308 8.53204 6.66 8.53204 5.868ZM15.084 9.012C17.388 8.94 19.308 8.34 20.22 7.404V9.54C20.22 10.644 18.708 11.508 16.236 11.82V10.836C16.236 10.116 15.804 9.492 15.084 9.012ZM16.236 15.396V12.588C18.012 12.396 19.452 11.868 20.22 11.076V13.116C20.22 14.244 18.708 15.108 16.236 15.396Z"
        fill={color}
      />
    </svg>
  );
}

export default CoinsUltraLight;
