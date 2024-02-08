import React from "react";

function TelIco({ width = 21, height = 20 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 18 16"
    >
      <path
        fill="#C4C4C4"
        d="M.896 6.796l15.39-6.65a1 1 0 011.383 1.074l-2.104 13.276a1 1 0 01-1.714.53l-3.453-3.657a2 2 0 01-.125-2.6L12.71 5.63c.14-.18-.081-.416-.27-.289L7.594 8.594a4 4 0 01-2.8.637L1.15 8.704C.152 8.56-.03 7.196.896 6.796z"
      ></path>
    </svg>
  );
}

export default TelIco;
