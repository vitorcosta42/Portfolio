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
          <S.VitorIcon src="vitor-about.jpg" width="280" height="310" />
        </S.PhotoContainer>
        <S.MainContainer>
          <S.Title>Sobre Mim</S.Title>
          <S.Description>
            Um amante da tecnologia que decidiu seguir o caminho do
            desenvolvimento web no segundo semestre de 2021, apesar de desde o
            início do ensino médio técnico, em 2018, já possuir contato direto
            com a programação no meu dia a dia acadêmico, fazendo trabalhos com
            Java e C++, encantei-me realmente com a programação quando parti
            para o web-design, utilizando no início HTML, CSS e Bootstrap.
            Atualmente faço bacharelado em Ciência da Computação na maior
            universidade particular do RN, a UNP. Meu desejo é construir uma
            carreira na área da tecnologia, com foco no desenvolvimento web.{" "}
          </S.Description>

          <S.ButtonsContainer>
        <S.Link
          href={process.env.PUBLIC_URL + "/VITOR COSTA.pdf"}
          download
        >
          <S.Button>
            <S.CurriculoContainer>
              <S.CurriculoIcon width="28" height="28" />
            </S.CurriculoContainer>
            Currículo
          </S.Button>
        </S.Link>
        <S.Link href="mailto:vitorcostadev@gmail.com" target="_blank">
          <S.Button>
            <S.EmailContainer>
              <S.EmailIcon width="28" height="28" />
            </S.EmailContainer>
            E-mail
          </S.Button>
        </S.Link>
      </S.ButtonsContainer>
        </S.MainContainer>
    </S.AboutContainer>
    </S.Container>
    );
};

export default About;
