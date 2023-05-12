import styled from "styled-components";

export const ProjectContainer = styled.div`
width : 30%;
 background-color: gray;
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
margin-bottom: 5em;
,
`;
// margin: 1em 5em 1em 5em;

export const ProjectImage = styled.img``;

export const ProjectTitle = styled.h2`
text-align: left;

font-size: 1.3em;
`
;

export const ProjectDescription = styled.p`
text-align: left;

`;

export const ProjectTechnologies = styled.span`
font-size: 0.8em;
color:lightgray;
padding-bottom: 2em;
text-align: left;

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
  background-color: #5e3e61;
  border: 3px solid #333159;
  font-size: 1em;
  padding-bottom: 8px;
  padding-top: 8px;
  transition-duration: 0.8s;

  &:hover {
    background-color: #333159;
    color: #fff;
    cursor: pointer;
  }
`;
