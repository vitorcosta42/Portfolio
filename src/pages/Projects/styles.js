import styled from "styled-components";

export const Container = styled.div`
  background-color: #764d79;
`;

export const ProjectsContainer = styled.div`
  padding-top:2em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #764d79;
  opacity:0;
  transition:opacity 2s ease-in-out;
  ${(props) =>
    props.visible &&
    `
      opacity: 1;
    `}

`;
export const Containers = styled.div`
  width: 100%;
  display: flex;
`;


export const Title = styled.h1`
  font-size: 1.65em;
`;
export const TitleContainer = styled.div`
  margin-bottom: 2em;
`;