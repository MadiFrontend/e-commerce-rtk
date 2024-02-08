import React from "react";

function InstaIco({ width = 21, height = 21 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#C4C4C4"
        fillRule="evenodd"
        d="M7 2a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5H7zm11 5a1 1 0 100-2 1 1 0 000 2zm-1 5a5 5 0 11-10 0 5 5 0 0110 0zm-5 3a3 3 0 100-6 3 3 0 000 6z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default InstaIco;
