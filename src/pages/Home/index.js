import React from "react";
import * as S from "./styles";
import {AiFillGithub} from "react-icons/ai"
import {BsLinkedin} from "react-icons/bs"

const Home = () => {
  return (
    <S.Container id ="inicio">
      <S.MainContainer>  
        Oi, eu sou Vitor Costa Desenvolvedor Front-end


        <S.Button>
          <img src="linkedin.png" width={20}/>

          <S.Link href="https://www.linkedin.com/in/vitorcosta-dev/"  target="_blank">Linkedin</S.Link>
        </S.Button>
        <S.Button>
        <img src="github.png" width={20}/>
          <S.Link href="https://github.com/vitorcosta42" target="_blank">Github</S.Link>
        </S.Button>


      </S.MainContainer>

    </S.Container>
  );
};

export default Home;
