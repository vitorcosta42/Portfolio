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
          src="miniblog.png"
            title={"Miniblog"}
            description={"Desenvolvido a partir de um curso de React JS, o projeto utiliza o Firebase para o seu back-end e o React JS para o front-end. O usuário após se cadastrar poderá interagir com a publicação dos outros usuários e realizar suas próprias publicações."}
            technologies={
              "HTML, CSS, React JS, Firebase"
            }
         href={"https://vitor-miniblog.vercel.app/"}
         />

          <Project
          src="movieslib.png"
            title={"MoviesLib"}
            description={"Projeto realizado em React JS consumindo a API do TMDb (The Movie Database). Além de exibir os filmes mais bem avaliados e suas notas, também é possível pesquisar e ver os detalhes de qualquer filme presente no TMDb."}
            technologies={"HTML, CSS, React JS, TMDb API"}
            href={"https://vitor-movies-lib.vercel.app/"}
          />
          <Project
          src="todo.png"
            title={"To-Do List"}
            description={"Projeto desenvolvido a partir do curso de TypeScript do professor Matheus Battisti, tendo como objetivo colocar em prática os conhecimentos obtidos. Uma simples lista de tarefas com listagem, criação, edição e exclusão. "}
            technologies={"HTML, CSS, React JS + TypeScript"}
            href={"https://vitor-todo-list.vercel.app/"}
         />
        </S.Containers>
      </S.ProjectsContainer>
    </S.Container>
  );
};

export default Projects;
