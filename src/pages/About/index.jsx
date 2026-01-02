import React, { useEffect, useState } from "react";
import * as S from "./styles";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;

      const triggerHeight = documentHeight * 0.1;

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
      <S.AboutContainer id="sobre-mim" visible={isVisible}>
        <S.PhotoContainer>
          <S.VitorIcon src="aboutme.jpg" width="300" height="320" />
        </S.PhotoContainer>
        <S.MainContainer>
          <S.Title>Sobre Mim</S.Title>
          <S.Description>
            Desenvolvedor Full Stack com mais de 3 anos de experiência, atuando
            no desenvolvimento de aplicações web com Vue.js, React, Laravel,
            Ruby on Rails e diversas tecnologias, sem me restringir a linguagens
            ou frameworks. Experiência no ciclo completo de desenvolvimento:
            front-end, back-end, bancos de dados, APIs REST, integrações com
            terceiros e otimização de performance. Forte atuação na construção
            de interfaces escaláveis, arquiteturas estáveis, testes
            automatizados e entregas ágeis. Apaixonado por tecnologia, perfil
            proativo, boa comunicação e participação ativa em decisões técnicas
            e de produto. Em constante evolução, aprendizado contínuo e busca
            por novos desafios.{" "}
          </S.Description>

          <S.ButtonsContainer>
            <S.Link href={"/VITOR COSTA.pdf"} download>
              <S.Button>
                <S.CurriculoContainer>
                  <S.CurriculoIcon width="25" height="25" />
                </S.CurriculoContainer>
                Currículo
              </S.Button>
            </S.Link>
            <S.Link href="https://www.instagram.com/vitor.dv" target="_blank">
              <S.Button>
                <S.InstagramContainer>
                  <S.InstagramIcon width="25" height="25" />
                </S.InstagramContainer>
                Instagram
              </S.Button>
            </S.Link>
          </S.ButtonsContainer>
        </S.MainContainer>
      </S.AboutContainer>
    </S.Container>
  );
};

export default About;
