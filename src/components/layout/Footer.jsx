import React from "react";
import {
  CodedWith,
  FooterNav,
  StyledFooter,
} from "../styles/layout/Footer.styled.";

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <FooterNav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contacts">Contact</a>
        </FooterNav>
        <CodedWith>Coded with ReactJs and Styled Components</CodedWith>
        <div>all rights reserved &copy; {new Date().getFullYear()} </div>
      </StyledFooter>
    </>
  );
};

export default Footer;
