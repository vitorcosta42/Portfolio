import React from "react";
import * as S from "./styles";

const Project = ({url, title, description, technologies, href}) => {
  return (
    <>
      <S.ProjectContainer>
        <S.ProjectImage href={url } />
        <S.ProjectTitle>{title}</S.ProjectTitle>
        <S.ProjectDescription> {description}</S.ProjectDescription>
        <S.ProjectTechnologies>{technologies}</S.ProjectTechnologies>
        <S.ViewButton href={href }>Visualizar</S.ViewButton>
      </S.ProjectContainer>
    </>
  );
};

export default Project;
