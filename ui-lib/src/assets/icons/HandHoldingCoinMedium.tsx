import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function HandHoldingCoinMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.04018 21.0091C9.07218 21.5851 10.3682 21.7291 12.0002 20.9851L20.8322 16.9531C21.7442 16.5451 22.3202 15.6091 22.3202 14.6491C22.3202 13.2091 21.1442 12.1531 19.8002 12.1531C19.5842 12.1531 19.3682 12.1771 19.1522 12.2491L19.0802 12.1051C18.5042 11.0251 17.1842 10.5931 16.0322 11.1211L14.5682 11.7931C14.9762 12.1771 15.3122 12.6571 15.5282 13.1851L16.7282 12.6571C17.0882 12.4891 17.4962 12.6331 17.6642 13.0171L17.7602 13.2331L14.3762 14.7691C14.3762 13.7611 13.7762 12.8251 12.8642 12.3931L8.90418 10.5451C6.24018 9.29713 3.69618 9.82513 1.68018 12.2491V18.9451H3.48018V12.9451C4.84818 11.5771 6.36018 11.3611 8.13618 12.1771L12.0962 14.0251C12.3842 14.1691 12.5762 14.4571 12.5762 14.7931C12.5762 15.3931 11.9282 15.8011 11.4002 15.5611L8.32818 14.1451L7.72818 15.4411L11.1842 17.0491C11.7122 17.2891 12.3842 17.2411 13.2962 16.8331L19.5122 14.0251C19.9922 13.8091 20.5202 14.1451 20.5202 14.6491C20.5202 14.9131 20.3522 15.2011 20.0882 15.3211L11.2562 19.3531C10.3202 19.7851 9.60018 19.8091 8.90418 19.4251L6.19218 17.9131L5.30418 19.4971L8.04018 21.0091ZM8.40018 6.10513C8.40018 8.09713 10.0082 9.70513 12.0002 9.70513C13.9922 9.70513 15.6002 8.09713 15.6002 6.10513C15.6002 4.11313 13.9922 2.50513 12.0002 2.50513C10.0082 2.50513 8.40018 4.11313 8.40018 6.10513ZM10.0802 6.10513C10.0802 5.04913 10.9442 4.18513 12.0002 4.18513C13.0562 4.18513 13.9202 5.04913 13.9202 6.10513C13.9202 7.16113 13.0562 8.02513 12.0002 8.02513C10.9442 8.02513 10.0802 7.16113 10.0802 6.10513Z"
        fill={color}
      />
    </svg>
  );
}

export default HandHoldingCoinMedium;
