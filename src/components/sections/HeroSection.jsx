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
        <h3>{"{Web Developer}"}</h3>
        <p>
          HTML | CSS | JavaScript | React | NodeJS | NextJS | TypeScript |
          MongoDB | Tailwind CSS | WordPress
        </p>
        <div>
          <CTAButton href="#projects">Projects</CTAButton>
          <CTAButton href="#contacts" primary margin="0 0 0 20px">
            Hire Me
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
