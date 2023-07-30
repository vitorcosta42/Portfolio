import React from "react";
import * as S from "./styles";


const Home = () => {
  return (
    <S.Container id="inicio">
      <S.MainContainer>
        <S.Span>Oi, eu sou </S.Span>
         <S.Name>
          <S.Typewriter
            words={["Vitor Costa"]}
            cursor
            cursorStyle="|"
            typeSpeed={120}
            delaySpeed={1000}
          />
        </S.Name> 
        <S.Dev>Full-Stack Developer</S.Dev>
        <S.ButtonsContainer>
          <S.Link
            href="https://www.linkedin.com/in/vitorcosta-dev/"
            target="_blank"
          >
            <S.Button>
              <S.LinkedinContainer>
                <S.LinkedinIcon width="25" height="25" />
              </S.LinkedinContainer>
              Linkedin
            </S.Button>
          </S.Link>
          <S.Link href="https://github.com/vitorcosta42" target="_blank">
            <S.Button>
              <S.GithubContainer>
                <S.GithubIcon width="25" height="25" />
              </S.GithubContainer>
              Github
            </S.Button>
          </S.Link>
        </S.ButtonsContainer>
      </S.MainContainer>
      <S.VitorContainer>
        <S.VitorIcon src="icon-vitor.jpeg" width="300" height="350" />
      </S.VitorContainer>
    </S.Container>
  );
};

export default Home;
