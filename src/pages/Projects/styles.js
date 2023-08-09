import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color:  #6a456d;

`;
export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #764d79;
  padding-bottom: 1em;
  opacity:0;
  transition:opacity 1s ease-in-out;
  ${(props) =>
    props.visible &&
    `
      opacity: 1;
    `}
`;
export const Containers = styled.div`
  width: 100%;
  display: flex;

  @media (max-width:910px) { 
    display: block;

  }
`;

export const Title = styled.h1`
  font-size: 1.65em;
  margin: 0 auto;
  padding-top: 1em;
`;
export const TitleContainer = styled.div`
  margin-bottom: 1.5em;

`;