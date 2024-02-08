import React from "react";

function FacebookIco({ width = 12, height = 18 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 12 18"
    >
      <path
        fill="#C4C4C4"
        d="M12 0H9a5 5 0 00-5 5v2H0v4h4v7h4v-7h4V7H8V5a1 1 0 011-1h3V0z"
      ></path>
    </svg>
  );
}

export default FacebookIco;
