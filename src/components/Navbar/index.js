import React from "react";
import * as S from "./styles";

const Navbar = () => {
  const handleAnchorClick = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const navbarHeight = document.querySelector("nav").offsetHeight;
      const targetPosition = targetElement.offsetTop - navbarHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
    // Resto do código do Navbar
  };
  return (
    <S.Navbar>
      <S.NavbarItems>
        <S.NavbarItem>
          <S.NavbarLi href="#inicio" >Início</S.NavbarLi>
        </S.NavbarItem>
        <S.NavbarItem>
          <S.NavbarLi href="#sobre-mim" onClick={handleAnchorClick}>Sobre</S.NavbarLi>
        </S.NavbarItem>
        <S.NavbarItem>
          <S.NavbarLi href="#projetos" onClick={handleAnchorClick}>Projetos</S.NavbarLi>
        </S.NavbarItem>
        <S.NavbarItem>
          <S.NavbarLi href="#habilidades" onClick={handleAnchorClick}>Habilidades</S.NavbarLi>
        </S.NavbarItem>
      </S.NavbarItems>
    </S.Navbar>
  );
};

export default Navbar;
