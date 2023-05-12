import React from "react";
export const CssIcon = (props) => {
  const { width, height, fill } = props;

  return (
    <svg width={width} height={height} 
    
    viewBox="0 0 66 76"
    
    fill={fill}
    
    xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0H66L60.0393 68.2925L33 75.9L5.96073 68.2925L0 0Z" fill={fill}/>
    <path d="M13 15L13.8299 23.2941H43.9544L43.4564 31.761H14.4938L15.1577 40.0551H42.5436L41.7967 50.682L32.917 53.3603L24.1203 50.682L23.5394 44.2022H15.4896L16.6515 57.1618L32.917 62L49.3485 57.1618L53 15H13Z" fill="white"/>
    </svg>
  );
};

