import styled from "styled-components";
import { Typewriter as TypewriterStyled } from "react-simple-typewriter";
import { GithubIcon as GithubIconStyled } from "../../components/icons";
import {LinkedinIcon as LinkedinIconStyled}  from "../../components/icons";

export const Container = styled.div`
  padding-top: 12.6em;
  padding-bottom: 6em;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:#764d79;

`;

export const MainContainer = styled.div`
  padding-right: 4em;
  text-align: left;
`;

export const ButtonsContainer = styled.div`
  margin-top: 2em;
  display: flex;
  justify-content: left;
  padding: 0 1.4em;
`;

export const VitorContainer = styled.div``;

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
  font-size: 1.4em;
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
`;

export const Span = styled.span`
  font-size: 2em;
  text-align: left;
`;

export const Name = styled.div`
  font-size: 4em;
  text-align: left;
  margin: 0;
  span {
    font-size: 1em;
  }
`;

export const Typewriter = styled(TypewriterStyled)``;

export const Dev = styled.span`
  font-size: 1.8em;
  text-align: left;
`;

export const Link = styled.a`
  text-decoration: none;
  padding: 5px;
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
