import React from "react";
export const VueIcon = (props) => {
  const { width, height, fill,secondFill } = props;

  //   #41b883
  // "#34495e"
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 261.76 226.69"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
        <g transform="translate(178.06 235.01)">
          <path
            d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"
            fill={fill}
          />
        </g>
        <g transform="translate(178.06 235.01)">
          <path
            d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"
            fill={secondFill}
          />
        </g>
      </g>
    </svg>
  );
};
