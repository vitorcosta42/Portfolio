import styled from "styled-components";
import { CurriculoIcon as CurriculoIconStyled } from "../../components/CurriculoIcon";
import {EmailIcon as EmailIconStyled}  from "../../components/EmailIcon";


export const AboutContainer = styled.div`
  height: 28em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #6a456d;
  opacity:0;
  transition:opacity 2s ease-in-out;
  ${(props) =>
    props.visible &&
    `
      opacity: 1;
    `}
`;
export const Container = styled.div`
  background-color: #764d79;
`;


export const VitorIcon = styled.img`
  border: 5px solid #333159;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 1);

  animation: floatAnimation 2.2s ease-in-out infinite;

  @keyframes floatAnimation {
    0% {
      transform: translateY(-5px);
    }

    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(-5px);
    }
  }
`;


export const PhotoContainer = styled.div`
width:33%;
padding-left: 13em;
`;
export const MainContainer = styled.div`
width:66%;
padding: 0em 11em 0em 8em;
`;

export const Title = styled.h1`
font-size: 1.65em;
`;

export const Subtitle = styled.h2`
font-size: 20px;`;

export const Description = styled.p`
text-align:justify;
text-indent: 2em;`;

export const ButtonsContainer = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: center;
  padding: 0;
`;

export const EmailContainer = styled.div`
  margin-right: 0.5em;
  padding: 0;
  margin-bottom: 0;
  transition-duration: 0.8s;
  background-color:  #333159;
  fill:  #333159;
  &:hover {
    fill: #333159;
  }
`;

export const CurriculoContainer = styled.div`
  margin-right: 0.5em;
  padding: 0;
  margin-bottom: 0;
  align-items: center;
  justify-content: center;
  background-color:  #333159;
  transition-duration: 0.8s;
  fill:  #333159;
`;
export const Link = styled.a`
  text-decoration: none;
  padding: 5px;
`;


export const Button = styled.button`
  padding: 15px;
  border-radius: 0.5em;
  margin-right: 1em;
  background-color: #333159;
  border: 3px solid #333159;
  font-size: 1.4em;
  padding-bottom: 8px;
  padding-top: 8px;
  align-items: center;
  display: flex;
  transition-duration: 0.8s;
  &:hover {
    background-color: #5e3e61;
    color: #fff;
    cursor: pointer;
    ${EmailContainer} {
      background-color: #5e3e61;
      fill: #5e3e61;
    }
    ${CurriculoContainer} {
      background-color: #5e3e61;
      fill: #5e3e61;
    }
  }
`;


export const CurriculoIcon = styled(CurriculoIconStyled)`
`;

export const EmailIcon = styled(EmailIconStyled)``;