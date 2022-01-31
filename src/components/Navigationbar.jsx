import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

const Nav = styled.nav`
  display: flex;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem 0;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  text-decoration: none;
  color: white;
`;

// Links
const NavigationLink = ({ link, children, className }) => (
  <Link to={`${link}`} className={className}>
    {children}
  </Link>
);

const ListElement = styled(NavigationLink)`
  display: flex;

  text-decoration: none;
  color: black;
  font-family: "Playfair Display";
  font-size: 2rem;
`;

export const Navigationbar = () => {
  return (
    <Nav data-testid="NAV-1">
      <List>
        <ListElement link={"/"}>Navigation</ListElement>
        <ListElement link={"/"}>Bar</ListElement>
      </List>
    </Nav>
  );
};
