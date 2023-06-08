import styled from "styled-components";

export const Navbar = styled.nav`
  background-color: #333159;
  display: flex;
  justify-content: center;
  border-bottom: 3px solid #232146;
  width: 100%;
  position: fixed;
  z-index: 2;
  @media (max-width: 910px) {
    border: none;

  }
  .hamburger {
    display: none;
    color: white;
    font-size: 1.5em;
    cursor: pointer;
    padding: 10px;
    background-color: #333159;
    border-radius: 10px; 
   
    @media (max-width: 910px) {
      display: block;
      position: absolute;

      top: 0;
      right:0;
      margin: 1em;
    }
    &:hover { 
      background-color: #232146;
  }
  }
`;

export const NavbarItems = styled.ul`
  text-decoration: none;
  display: flex;
  list-style: none;
  margin: auto;
  background-color: #333159;
  color: #fef5c8;

  @media (max-width: 910px) {
    display: none;
    flex-direction: column;
    background-color: #333159;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;

    &.open {
      display: flex;
    }
  }
`;

export const NavbarLi = styled.a`
  text-decoration: none;
  font-size: 1.3em;
  transition-duration: 0.8s;
  background-color: #333159;
  color: white;
  &:hover {
    color: #c897d8;
  }
  &.active {
    color: #c897d8;
  }
  &.active:hover {
    color: #b277b6;
  }
`;

export const NavbarItem = styled.li`
  padding: 1.5em;
  padding-right: 5em;
  background-color: #333159;
  color: white;

`;
