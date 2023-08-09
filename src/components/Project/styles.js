import styled from "styled-components";
const getRandomBorderStyle = () => {
  const styles = ["inset", "outset"];
  const randomIndex = Math.floor(Math.random() * styles.length);
  return styles[randomIndex];
};

export const ProjectContainer = styled.div`
  background-color: #333159;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.7em;
  margin: 0 auto;
  margin-bottom: 2em;
  width: 70%;
  border: 5px solid #232146;
  border-radius: 10px;

  @media (max-width: 910px) {
    width: 80%;
  }
`;

export const ProjectImage = styled.img`
  width: 70%;
  border: 5px solid #232146;
  border-radius: 10px;
  margin-top: 1em;
  margin-bottom: 1em;

  &:hover {
    transform: translateY(-5px);
    width: 75%;
    cursor: pointer;
    border: 5px outset #232146;
    border: 5px ${getRandomBorderStyle()} #232146;
  }
`;

export const ProjectTitle = styled.h2`
  font-size: 1.2em;
  margin: 0;
  padding-top: 0.3em;
  padding-bottom: 0.5em;
`;

export const ProjectDescription = styled.p`
  text-align: left;
  text-indent: 1.5em;
  font-size: 0.8em;
`;

export const ProjectTechnologies = styled.span`
  font-size: 0.8em;
  color: lightgray;
  padding-bottom: 2em;
  text-align: left;
  text-indent: 1.5em;
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const ViewButton = styled.button`
  padding: 15px;
  border-radius: 0.5em;
  margin-bottom: 1em;
  background-color: #232146;
  border: 2px solid white;
  font-size: 1em;
  padding-bottom: 8px;
  padding-top: 8px;
  transition-duration: 0.8s;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.4);

  &:hover {
    background-color: white;
    color: #232146;
    cursor: pointer;
    border: 2px solid #232146;
  }
`;

export const ViewLink = styled.a`
  text-decoration: none;
`;
