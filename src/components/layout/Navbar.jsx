import React, { useState } from "react";
import ImgProfile from "/home/stanley/Desktop/my-portfolio/src/assets/profileImg.jpg";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

import {
  LineOne,
  LineThree,
  LineTwo,
  Logo,
  MenuIcon,
  Nav,
  NavItemLi,
  NavLink,
  NavList,
  Profile,
  SocialIcons,
} from "../styles/layout/Nav.styled";
import logo from "/home/stanley/Desktop/my-portfolio/src/assets/logos/white.png";
import { NavItems } from "../../data/NavItems";
import { CTAButton } from "../styles/common/CTAButton.styled";
import useScrollDirection from "../../hooks/useScrollDirection";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollDirection = useScrollDirection("down");
  // console.log(scrollDirection);

  return (
    <>
      <Nav scrollDirection={scrollDirection}> 
        <div>
          <a href="#hero-section">
            <Logo src={logo} />
          </a>
        </div>
        <MenuIcon menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <LineOne menuOpen={menuOpen} />
          <LineTwo menuOpen={menuOpen} />
          <LineThree menuOpen={menuOpen} />
        </MenuIcon>
        <NavList menuOpen={menuOpen}>
          {NavItems &&
            NavItems.map((navItem, index) => (
              <NavItemLi
                key={index}
                index={index}
                menuOpen={menuOpen}
                onClick={() => setMenuOpen(false)}
              >
                {navItem.isProfile ? (
                  <NavLink href="#hero-section">
                    <Profile>
                      <img src={ImgProfile} alt="stanley" />
                      <span>Stanley Macharia</span>
                    </Profile>
                  </NavLink>
                ) : null}
                <NavLink href={navItem.href}>{navItem.text}</NavLink>
                {navItem.hasSocialIcons ? (
                  <SocialIcons>
                    <NavLink
                      href="https://www.linkedin.com/in/stanley-macharia-04733b225/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </NavLink>
                    <NavLink href="https://twitter.com/Stano7_" target="_blank">
                      <FaTwitter />
                    </NavLink>
                    <NavLink
                      href="https://github.com/Sstanley45/"
                      target="_blank"
                    >
                      <FaGithub />
                    </NavLink>
                  </SocialIcons>
                ) : null}
                {navItem.hasCTA ? (
                  <CTAButton href="#" target="_blank">
                    Download My Resume
                  </CTAButton>
                ) : null}
              </NavItemLi>
            ))}
        </NavList>
      </Nav>
    </>
  );
};

export default Navbar;
