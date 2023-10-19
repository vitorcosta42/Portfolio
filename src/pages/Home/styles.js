import styled from "styled-components";
import { Typewriter as TypewriterStyled } from "react-simple-typewriter";
import { GithubIcon as GithubIconStyled } from "../../components/icons";
import {LinkedinIcon as LinkedinIconStyled}  from "../../components/icons";

export const Container = styled.div`
min-height: 50em; /* ou qualquer valor desejado para aumentar o tamanho */
width: 100%;
display: flex;
align-items: center;
justify-content: center;
background-color: #764d79;
text-align: center;
}
  @media (max-width:910px) { 
    padding-bottom: 4em;
    min-height: 36em;
    align-items: end;
  }
`;
export const VitorContainer = styled.div`
width: 22%;

@media (max-width:910px) { 
  position: absolute;
  top: 0;
  margin-top: 4em;
  width: 100%;
}
`;

export const MainContainer = styled.div`
  padding-right: 4em;
  text-align: left;
  width: 35%;
  @media (max-width:910px) { 
    margin: 0 auto;
    margin-top: 15em ;
    padding-right: 0;
    justify-content: center;
    text-align: center;
    width: 100%;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 1em;
  display: flex;
  @media (max-width:910px) { 
    margin: 0 auto;
    margin-top: 10px;
    width: 100%;
    justify-content: center;
  }
`;


export const LinkedinContainer = styled.div`
  margin-right: 0.5em;
  padding: 0;
  margin-bottom: 0;
  transition-duration: 0.8s;
  background-color: #5e3e61;
  fill: #5e3e61;
  &:hover {
    fill: #333159;
  }
`;

export const GithubContainer = styled.div`
  margin-right: 0.5em;
  padding: 0;
  margin-bottom: 0;
  background-color: #5e3e61;
  transition-duration: 0.8s;
  fill: #5e3e61;
`;

export const GithubIcon = styled(GithubIconStyled)``;

export const LinkedinIcon = styled(LinkedinIconStyled)``;

export const Button = styled.button`
  padding: 15px;
  border-radius: 0.5em;
  margin-right: 1em;
  background-color: #5e3e61;
  border: 3px solid #333159;
  font-size: 1.6vw;
  padding-bottom: 8px;
  padding-top: 8px;
  align-items: center;
  display: flex;
  transition-duration: 0.8s;
  &:hover {
    background-color: #333159;
    color: #fff;
    cursor: pointer;
    ${LinkedinContainer} {
      background-color: #333159;
      fill: #333159;
    }
    ${GithubContainer} {
      background-color: #333159;
      fill: #333159;
    }
  }

  @media (max-width:910px) { 
    font-size: 1em;
  }

`;

export const Span = styled.span`
  font-size: 2vw;
  text-align: left;
  
  @media (max-width:910px) { 
     font-size: 1.4em;
  }
`;

export const Name = styled.div`
  font-size: 4vw;
  text-align: left;
  margin: 0;
  margin-bottom: 7px;
  span {
    font-size: 4.5vw;
  }

  @media (max-width:910px) { 
    text-align: center;
    font-size: 2.5em;
    span { 
    font-size: 0.8em;

    }
  }
`;

export const Typewriter = styled(TypewriterStyled)``;

export const Dev = styled.span`
  font-size: 2vw;
  text-align: left;
    @media (max-width:910px) { 
    font-size: 1.1em;
    }
`;

export const Link = styled.a`
  text-decoration: none;
  padding: 5px;

`;

export const VitorIcon = styled.img`
  border: 5px solid #333159;
  margin-top: 10px;
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
