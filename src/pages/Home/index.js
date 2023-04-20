import React from "react";
import * as S from "./styles";
import GithubIcon from "../../components/GithubIcon";
import LinkedinIcon from "../../components/LinkedinIcon";

const Home = () => {
  return (
    <S.Container id="inicio">
      <S.MainContainer>
        <S.Span>Oi, eu sou </S.Span>
        <S.Name>Vitor Costa</S.Name>
        <S.Dev>Desenvolvedor Front-end</S.Dev>
        <S.ButtonsContainer>
          <S.Link
            href="https://www.linkedin.com/in/vitorcosta-dev/"
            target="_blank"
          >
            <S.Button>
              <S.LinkedinContainer>
                <LinkedinIcon width="25" height="25" />
              </S.LinkedinContainer>
              Linkedin
            </S.Button>
          </S.Link>
          <S.Link href="https://github.com/vitorcosta42" target="_blank">
            <S.Button>
              <S.GithubContainer>
                <GithubIcon width="25" height="25" />
              </S.GithubContainer>
              Github
            </S.Button>
          </S.Link>
        </S.ButtonsContainer>
      </S.MainContainer>
      <S.VitorContainer>
        <S.VitorIcon src="icon-vitor.jpeg" width={270} height={320} />
      </S.VitorContainer>
    </S.Container>
  );
};

export default Home;
