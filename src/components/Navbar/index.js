import React from "react";

import * as S from "./styles";

const Navbar = () => {
  return (
    <S.Navbar>
        <S.NavbarItems>
          <S.NavbarItem>
            <S.NavbarLi href="#inicio">Início</S.NavbarLi>
          </S.NavbarItem>
          <S.NavbarItem>
            <S.NavbarLi href="#sobre-mim">Sobre</S.NavbarLi>
          </S.NavbarItem>
          <S.NavbarItem>
            <S.NavbarLi href="#habilidades">Habilidades</S.NavbarLi>
          </S.NavbarItem>
          <S.NavbarItem>
            <S.NavbarLi href="#projetos">Projetos</S.NavbarLi>
          </S.NavbarItem>
        </S.NavbarItems>
    </S.Navbar>
  );
};

export default Navbar;
