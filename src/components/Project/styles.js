import styled from "styled-components";

export const ProjectContainer = styled.div`
width : 40%;
background-color: gray;
display: flex;
flex-direction: column;
align-items: center;
margin: auto;
margin-bottom: 2em;
,
`;
// margin: 1em 5em 1em 5em;

export const ProjectImage = styled.img``;

export const ProjectTitle = styled.h3``;

export const ProjectDescription = styled.p`
`;

export const ProjectTechnologies = styled.p``;

export const ViewButton = styled.button`
  padding: 15px;
  border-radius: 0.5em;
  margin-bottom: 1em;
  background-color: #5e3e61;
  border: 3px solid #333159;
  font-size: 1em;
  padding-bottom: 8px;
  padding-top: 8px;
  justify-content: center;
  display: flex;
  transition-duration: 0.8s;

  &:hover {
    background-color: #333159;
    color: #fff;
    cursor: pointer;
  }
`;
