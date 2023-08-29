import React, { useState, useEffect } from "react";
import * as S from "./styles";
import Project from "../../components/Project";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;

      const triggerHeight = documentHeight * 0.25;

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
    <S.Container id="projetos">
      <S.ProjectsContainer visible={isVisible}>
        <S.TitleContainer>
          <S.Title>Projetos</S.Title>
        </S.TitleContainer>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          cssMode={true}
          navigation={true}
          pagination={true}
          keyboard={true}
          modules={[Navigation, Pagination, Keyboard]}
        >
          <SwiperSlide>
            <S.Containers>
              <Project
                src="buscacep.png"
                title={"Consulta de CEP"}
                description={
                  "Esse projeto full-stack conta com um CRUD completo para endereços, ele utiliza Vue.js e Bootstrap no front-end, PHP e Laravel no back-end e MySQL para o banco de dados. Também utiliza Docker para a containerização e a API do ViaCEP para adquirir os dados dos CEP's com mais facilidade."
                }
                technologies={"Vue.js, Bootstrap, PHP, Laravel, MySQL, Docker, ViaCEP API"}
                href={"https://github.com/vitorcosta42/buscar-cep"}
              />
            </S.Containers>
          </SwiperSlide>
          <SwiperSlide>
            <S.Containers>
              <Project
                src="miniblog.png"
                title={"Miniblog"}
                description={
                  "Desenvolvido a partir de um curso de React JS, o projeto utiliza o Firebase para o seu back-end e o React JS para o front-end. O usuário após se cadastrar poderá interagir com a publicação dos outros usuários e realizar suas próprias publicações."
                }
                technologies={"HTML, CSS, React JS, Firebase"}
                href={"https://vitor-miniblog.vercel.app/"}
              />
            </S.Containers>
          </SwiperSlide>
          <SwiperSlide>
            <S.Containers>
              <Project
                src="locadoradecarros.png"
                title={"Locadora de Carros"}
                description={
                  " Projeto Full-Stack utilizando Vue.js e Bootstrap para o Front-end, e PHP, Laravel e MySQL para o back-end. Temos autenticação, validação, criação, edição, listagem e remoção de carros, locações, clientes, modelos e marcas de carros. Um projeto completo, repleto de features."
                }
                technologies={"HTML, CSS, Vue.js, PHP, Laravel, Bootstrap"}
                href={"https://github.com/vitorcosta42/app_locadora_carros"}
              />
            </S.Containers>
          </SwiperSlide>
          <SwiperSlide>
            <S.Containers>
              <Project
                src="movieslib.png"
                title={"MoviesLib"}
                description={
                  "Projeto realizado em React JS consumindo a API do TMDb (The Movie Database). Além de exibir os filmes mais bem avaliados e suas notas, também é possível pesquisar e ver os detalhes de qualquer filme presente no TMDb."
                }
                technologies={"HTML, CSS, React JS, TMDb API"}
                href={"https://vitor-movies-lib.vercel.app/"}
              />
            </S.Containers>
          </SwiperSlide>
          <SwiperSlide>
            <S.Containers>
              <Project
                src="todo.png"
                title={"To-Do List"}
                description={
                  "Projeto desenvolvido a partir do curso de TypeScript do professor Matheus Battisti, tendo como objetivo colocar em prática os conhecimentos obtidos. Uma simples lista de tarefas com listagem, criação, edição e exclusão. "
                }
                technologies={"HTML, CSS, React JS + TypeScript"}
                href={"https://vitor-todo-list.vercel.app/"}
              />
            </S.Containers>
          </SwiperSlide>
        </Swiper>
      </S.ProjectsContainer>
    </S.Container>
  );
};

export default Projects;
