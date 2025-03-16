import React from "react";
import {
  HeroContent,
  HeroSocialIcons,
  SocialIcon,
  StyledArrowDown,
  StyledHeroSection,
} from "../styles/sections/HeroSection.styled";
import { CTAButton } from "../styles/common/CTAButton.styled";
import { FaArrowDown } from "react-icons/fa";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const HeroSection = () => {
  return (
    <StyledHeroSection id="hero-section">
      <HeroContent>
        <h1>Stanley Macharia</h1>
        <h3>{"{Software Engineer}"}</h3>
        <p>
          JavaScript | Python | ReactJS | NodeJS | NextJS | TypeScript | MongoDB
          | Postgress DB | HTML | CSS | Tailwind CSS | Material UI | WordPress
        </p>
        <p>Frappe | ERPNext | SQL</p>
        <div>
          <CTAButton href="#projects">Projects</CTAButton>
          <CTAButton href="#contacts" primary margin="0 0 0 20px">
            Get In Touch
          </CTAButton>
        </div>
      </HeroContent>
      <StyledArrowDown href="#about">
        <FaArrowDown />
      </StyledArrowDown>
      <HeroSocialIcons>
        <SocialIcon
          href="https://www.linkedin.com/in/stanley-macharia-04733b225/"
          target="_blank"
        >
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon href="https://twitter.com/Stano7_" target="_blank">
          <FaTwitter />
        </SocialIcon>
        <SocialIcon href="https://github.com/Sstanley45/" target="_blank">
          <FaGithub />
        </SocialIcon>
      </HeroSocialIcons>
    </StyledHeroSection>
  );
};

export default HeroSection;
