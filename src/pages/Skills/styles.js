import styled,{css, keyframes} from "styled-components";

const rotateAnimation = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`;

export const Container = styled.div`
  background-color: #764d79;
`;

export const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #6a456d;
  padding-top: 2em;
  padding-bottom: 4em;
   opacity:0;
  transition:opacity 1.5s ease-in-out;
  ${(props) =>
    props.visible &&
    `
      opacity: 1;
    `}

`;
 
export const Containers = styled.div`
  width: 60%;
  display: flex;
  margin: 0 auto;
`;


export const Title = styled.h1`
  font-size: 1.65em;
  margin-bottom: 2.5em;
`;
export const TitleContainer = styled.div`
  margin-bottom: 1em;
`;

export const ContainerSkills = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  aign-items: center;
`;

export const SkillDescription = styled.div`
  margin-top: 2em;
margin-left: 4em;
  font-size: 1.1em;
`;

export const Skills = styled.div`
  display: flex;
  gap: 36px;
  justify-content: center;
  aign-items: center;
  flex-direction: column;
  padding: 0;
`;

export const Skill = styled.div`
  border-radius: 20px;
  background-color: white;
  padding: 10px;
  align-items: center;
  justify-content: center;

  ${({isHovered}) => 
  isHovered && 
  css`
    animation: ${rotateAnimation} 2s linear ;
  `}
  `;

export const TitleDescription = styled.h1`
font-size: 1.1em;
`;

export const Description = styled.p``;