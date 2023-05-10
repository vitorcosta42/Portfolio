import React, { useState, useEffect } from "react";
import * as S from "./styles";
import Project from "../../components/Project";
const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;

      const triggerHeight = documentHeight * 0.3;

      if (scrollPosition > triggerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.Container>
      <S.ProjectsContainer id="projetos" visible={isVisible}>
        <S.TitleContainer>
          <S.Title>Projetos</S.Title>
        </S.TitleContainer>
        <S.Containers>
          <Project
            title={"Titulo 1"}
            description={
"Projeto desenvolvido a partir do curso de JavaScript ES6+ completo da Origamid, para por em prática meus estudos iniciais de JS."

}
            technologies={
              "Tecnologias usadas no projeto: HTML, CSS, JavaScript Vanilla"}
          />
          <Project
            title={"Titulo 1"}
            description={"descricao"}
            technologies={"tecnologias"}
          />
        </S.Containers>
        <S.Containers>
          <Project
            title={"Titulo 1"}
            description={"descricao"}
            technologies={"tecnologias"}
          />
          <Project
            title={"Titulo 1"}
            description={"descricao"}
            technologies={"tecnologias"}
          />
        </S.Containers>
     
      </S.ProjectsContainer>
    </S.Container>
  );
};

export default Projects;
