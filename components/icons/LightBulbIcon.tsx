
import React from 'react';

const LightBulbIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a15.045 15.045 0 01-7.5 0C4.508 19.64 2.25 16.184 2.25 12c0-4.184 2.258-7.64 5.25-9.75C9.742 1.566 10.86 1.5 12 1.5c1.14 0 2.258.066 3.5.25 3.242 2.11 5.25 5.566 5.25 9.75 0 4.184-2.258 7.64-5.25 9.75h-.008z"
    />
  </svg>
);

export default LightBulbIcon;
