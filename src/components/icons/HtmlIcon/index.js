import React from "react";
export const HtmlIcon = (props) => {
  const { width, height, fill } = props;

  return (
    <svg width={width} height={height} viewBox="0 0 66 77" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0.25H66L60.0393 68.5425L33 76.15L5.96073 68.5425L0 0.25Z" fill={fill}/>
    <path d="M53.7425 14.8643H12.2568L14.504 39.9956H43.1118L42.2475 50.7414L32.9997 53.3411L23.8383 50.7414L23.2333 44.1552H14.8497L16.0597 57.1542L32.9997 62.0071L50.1125 57.1542L52.1868 31.6762H22.1961L21.3318 23.1836H52.9647L53.7425 14.8643Z" fill="white"/>
    </svg>
  );
};
