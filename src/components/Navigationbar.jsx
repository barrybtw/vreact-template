import styled from "styled-components";
import { Link } from "react-router-dom";

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
const NavigationLink = ({ link, children }) => (
  <Link to={`${link}`}>{children}</Link>
);

const ListElement = styled(NavigationLink)`
  display: flex;

  text-decoration: none;
  color: white;
  a {
    text-decoration: none;
    color: black;
  }
`;

export const Navigationbar = () => {
  return (
    <Nav>
      <List>
        <ListElement link={"/"}>Home</ListElement>
        <ListElement link={"/pricing"}>Pricing</ListElement>
        <ListElement link={"/about-us"}>About us</ListElement>
      </List>
    </Nav>
  );
};
