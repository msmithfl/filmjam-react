import React from "react";
import styled from "styled-components";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: sticky;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
`;

const Logo = styled.img`
  height: 30px;
`;

const Menu = styled.div`
  display: flex;
  gap: 20px;
`;

const MenuItem = styled.div``;

const SignInButton = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <LogoContainer>
            <Logo src={logo} />
            filmjam.io
          </LogoContainer>
        </Link>
        <Menu>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <MenuItem>Home</MenuItem>
          </Link>
          <Link to="jams" style={{ textDecoration: "none", color: "inherit" }}>
            <MenuItem>Jams</MenuItem>
          </Link>
        </Menu>
        <Link to="signin" style={{ textDecoration: "none" }}>
          <SignInButton>SIGN IN</SignInButton>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
