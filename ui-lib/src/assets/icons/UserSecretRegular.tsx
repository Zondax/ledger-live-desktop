import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function UserSecretRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.54785 19.488V21.36H19.4519V19.488C19.4519 17.112 18.4919 15.288 16.6199 14.448V11.112H7.35585V14.448C5.48385 15.288 4.54785 17.112 4.54785 19.488ZM5.74785 7.72801H9.20385C8.93985 7.96802 8.77185 8.30402 8.77185 8.68801C8.77185 9.38402 9.34785 10.008 10.0679 10.008C10.8119 10.008 11.3879 9.38402 11.3879 8.68801C11.3879 8.30402 11.2199 7.96802 10.9559 7.72801H13.0199C12.7559 7.96802 12.5879 8.30402 12.5879 8.68801C12.5879 9.38402 13.1639 10.008 13.9079 10.008C14.6279 10.008 15.2039 9.38402 15.2039 8.68801C15.2039 8.30402 15.0359 7.96802 14.7719 7.72801H18.2279V6.24002H16.0679V4.17601C16.0679 3.31201 15.3959 2.64001 14.5319 2.64001H9.44385C8.57985 2.64001 7.90785 3.31201 7.90785 4.17601V6.24002H5.74785V7.72801ZM6.17985 19.896V18.576C6.17985 16.704 6.97185 15.792 8.81985 15.552V12.48H11.3399V19.896H6.17985ZM9.29985 6.24002V4.32001C9.29985 4.12801 9.39585 4.00801 9.58785 4.00801H14.3879C14.5799 4.00801 14.6999 4.12801 14.6999 4.32001V6.24002H9.29985ZM12.6359 19.896V12.48H15.1559V15.552C17.0039 15.792 17.7959 16.704 17.7959 18.576V19.896H12.6359Z"
        fill={color}
      />
    </svg>
  );
}

export default UserSecretRegular;