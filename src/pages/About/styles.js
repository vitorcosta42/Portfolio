import styled from "styled-components";
import { CurriculoIcon as CurriculoIconStyled } from "../../components/icons";
import { InstagramIcon as InstagramIconStyled } from "../../components/icons";

export const Container = styled.div`
  background-color: #8fa178;
  width: 100%;
`;

export const AboutContainer = styled.div`
  padding-top: 3em;
  padding-bottom: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5f744b;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  ${(props) =>
    props.visible &&
    `
      opacity: 1;
    `}

  @media (max-width:910px) {
    display: block;
  }
`;

export const VitorIcon = styled.img`
  border: 5px solid #f3edde;
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
  width: 40%;

  @media (max-width: 910px) {
    width: 75%;
    margin: 0 auto;
  }
`;
export const MainContainer = styled.div`
  width: 45%;

  @media (max-width: 910px) {
    width: 75%;
    margin: 0 auto;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 2.5vw;
  display: flex;
  justify-content: center;
  padding: 0;
`;

export const InstagramContainer = styled.div`
  margin-right: 0.5em;
  padding: 0;
  margin-bottom: 0;
  transition-duration: 0.8s;
  background-color: #495839ff;
  fill: #495839ff;
  &:hover {
    fill: #495839ff;
  }
`;

export const CurriculoContainer = styled.div`
  margin-right: 0.5em;
  padding: 0;
  margin-bottom: 0;
  align-items: center;
  justify-content: center;
  background-color: #495839ff;
  transition-duration: 0.8s;
  fill: #495839ff;
`;

export const Description = styled.p`
  text-align: justify;
  text-indent: 2em;
  font-size: 1.2vw;
  @media (max-width: 910px) {
    font-size: 1em;
  }
`;

export const Title = styled.h1`
  font-size: 2vw;
  margin-bottom: 1em;
  @media (max-width: 910px) {
    font-size: 1.5em;
    margin-top: 1em;
  }
`;

export const Subtitle = styled.h2`
  font-size: 20px;
`;

export const Link = styled.a`
  text-decoration: none;
  padding: 5px;
`;

export const Button = styled.button`
  padding: 15px;
  border-radius: 0.5em;
  margin-right: 1em;
  background-color: #495839ff;
  border: 3px solid #495839ff;
  font-size: 1.6vw;
  padding-bottom: 8px;
  padding-top: 8px;
  align-items: center;
  display: flex;
  transition-duration: 0.8s;
  &:hover {
    background-color: #8fa178;
    color: #fff;
    cursor: pointer;
    border: 3px solid #495839ff;
    ${InstagramContainer} {
      background-color: #8fa178;
      fill: #8fa178;
    }
    ${CurriculoContainer} {
      background-color: #8fa178;
      fill: #8fa178;
    }
  }
  @media (max-width: 910px) {
    font-size: 1em;
  }

  @media (max-width: 500px) {
    font-size: 0.8em;
  }
`;

export const CurriculoIcon = styled(CurriculoIconStyled)``;

export const InstagramIcon = styled(InstagramIconStyled)``;
