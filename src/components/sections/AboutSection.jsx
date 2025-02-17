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
            Welcome to my portfolio! I am a passionate developer with expertise
            in a diverse range of technologies. My skill set encompasses the
            core building blocks of web development:{" "}
            <StyledSpan>HTML</StyledSpan>, <StyledSpan>CSS</StyledSpan>, and
            <StyledSpan>JavaScript</StyledSpan>, providing a strong foundation
            for crafting engaging and responsive user interfaces. Leveraging the
            power of
            <StyledSpan>ReactJS</StyledSpan> and <StyledSpan>NextJS</StyledSpan>
            , I develop dynamic and high-performance web applications that
            ensure seamless user experiences.
          </p>
          <p>
            On the backend, I specialize in <StyledSpan>NodeJS</StyledSpan> and
            <StyledSpan>Python</StyledSpan>, enabling scalable and efficient
            server-side applications. My expertise extends to databases, working
            with
            <StyledSpan>MongoDB</StyledSpan>,{" "}
            <StyledSpan>PostgreSQL</StyledSpan>, and
            <StyledSpan>SQL</StyledSpan> to manage and store data effectively.
            Embracing the benefits of <StyledSpan>TypeScript</StyledSpan>, I
            enhance code maintainability and ensure robustness in development.
            For styling, I utilize
            <StyledSpan>Tailwind CSS</StyledSpan> and{" "}
            <StyledSpan>Material UI</StyledSpan>
            to create modern and visually appealing designs.
          </p>
          <p>
            Beyond web development, I specialize in{" "}
            <StyledSpan>Frappe</StyledSpan> and
            <StyledSpan>ERPNext</StyledSpan>, developing and customizing ERP
            solutions to optimize business operations and streamline workflows.
            My experience in enterprise resource planning allows me to build
            tailored solutions that enhance productivity and efficiency. Explore
            my portfolio to see how this comprehensive tech stack brings ideas
            to life through innovative and high-quality solutions.
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
