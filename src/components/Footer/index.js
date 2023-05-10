import React from "react";
import * as S from "./styles";

const Footer = () => {
  return (
    <S.Footer>
      <S.FooterSentence>
        Desenvolvido por <S.FooterLink 
       href="https://www.linkedin.com/in/vitorcosta-dev/"
       target="_blank"
        >Vitor Costa</S.FooterLink>
      </S.FooterSentence>
    </S.Footer>
  );
};

export default Footer;
