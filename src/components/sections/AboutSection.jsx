import React from "react";
import {
  AboutContent,
  DarkCircle,
  GradientCircle,
  ImageContainer,
  StyleHeading,
  StyledAboutSection,
  StyledImage,
  StyledSpan,
  StyledWaveEmoji,
} from "../styles/sections/AboutSection.styled";
import { CTAButton } from "../styles/common/CTAButton.styled";

const AboutSection = () => {
  return (
    <>
      <StyledAboutSection id="about">
        <ImageContainer>
          <StyledImage src="./images/profileImg.jpg" alt="Stanley" />
          <DarkCircle />
          <GradientCircle />
        </ImageContainer>
        <AboutContent>
          <StyleHeading>
            Hello <StyledWaveEmoji>👋🏻</StyledWaveEmoji>
          </StyleHeading>
          <p>
            Welcome to my portfolio! I am a passionate web developer with
            expertise in a diverse range of technologies. My skill set
            encompasses the fundamental trio of web development:{" "}
            <StyledSpan>HTML</StyledSpan>, <StyledSpan>CSS</StyledSpan>, and
            <StyledSpan> JavaScript</StyledSpan>, providing a solid foundation
            for creating engaging and responsive user interfaces. Leveraging the
            power of React, I craft dynamic and interactive web applications
            that deliver seamless user experiences. My proficiency extends to
            the server-side with <StyledSpan>NodeJS</StyledSpan> and the
            efficient
            <StyledSpan> NextJS</StyledSpan> framework, ensuring robust and
            efficient server rendering for optimal performance.
          </p>
          <p>
            Embracing the benefits of <StyledSpan>TypeScript</StyledSpan>, I
            enhance code maintainability and catch potential errors early in the
            development process. Additionally, I utilize
            <StyledSpan> Tailwind CSS</StyledSpan> to streamline styling and
            design, maintaining a clean and modular codebase. With experience in
            WordPress, I showcase versatility in handling diverse platforms.
            Explore my portfolio to witness the synergy of this comprehensive
            tech stack in action through a collection of projects that reflect
            my dedication to innovation and quality in web development.
          </p>
          <CTAButton href="https://hashnode.com/@StanoN" target="_blank">
            Visit My Blog
          </CTAButton>
        </AboutContent>
      </StyledAboutSection>
      <hr />
    </>
  );
};

export default AboutSection;
