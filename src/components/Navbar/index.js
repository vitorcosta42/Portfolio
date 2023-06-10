import React, { useState } from "react";
import * as S from "./styles";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
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
    setMenuOpen(!isMenuOpen);
  };
  return (
    <S.Navbar>
      <S.NavbarItems className={isMenuOpen ? "open" : ""}>
        <S.NavbarItem>
          <S.NavbarLi href="#inicio" onClick={handleAnchorClick}>Início</S.NavbarLi>
        </S.NavbarItem>
        <S.NavbarItem>
          <S.NavbarLi href="#sobre-mim" onClick={handleAnchorClick}>
            Sobre
          </S.NavbarLi>
        </S.NavbarItem>
        <S.NavbarItem>
          <S.NavbarLi href="#projetos" onClick={handleAnchorClick}>
            Projetos
          </S.NavbarLi>
        </S.NavbarItem>
        <S.NavbarItem>
          <S.NavbarLi href="#habilidades" onClick={handleAnchorClick}>
            Habilidades
          </S.NavbarLi>
        </S.NavbarItem>
      </S.NavbarItems>
      <div>
        <FaBars className="hamburger" onClick={toggleMenu} />
      </div>
    </S.Navbar>
  );
};

export default Navbar;
