import styled from "styled-components";

export const Navbar = styled.div`
  background-color: #333159;
  display: flex;
  justify-content: center;
  border-bottom: 3px solid #232146;
  margin-bottom: 10px;
`;

export const NavbarItems = styled.ul`
  text-decoration: none;
  display: flex;
  list-style: none;
  margin: auto;
  background-color: #333159;
  color: #fef5c8;
`;

export const NavbarLi = styled.a`
  text-decoration: none;
  font-size: 1.3em;

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
