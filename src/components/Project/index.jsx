import React from "react";
import * as S from "./styles";

const Project = ({ src, title, description, technologies, href }) => {
  return (
    <>
      <S.ProjectContainer>
        <S.ViewLink href={href} target="_blank">
          <S.ProjectImage src={src} />
        </S.ViewLink>
        <S.ProjectTitle>{title}</S.ProjectTitle>
        <S.ProjectDescription> {description}</S.ProjectDescription>
        <S.ProjectTechnologies>
          Tecnologias usadas no projeto: {technologies}
        </S.ProjectTechnologies>
        <S.ContainerButton>
          <S.ViewLink href={href} target="_blank">
            <S.ViewButton>Visualizar</S.ViewButton>
          </S.ViewLink>
        </S.ContainerButton>
      </S.ProjectContainer>
    </>
  );
};

export default Project;
