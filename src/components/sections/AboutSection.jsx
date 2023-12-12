import React from "react";
import {
  AboutContent,
  DarkCircle,
  GradientCircle,
  ImageContainer,
  StyleHeading,
  StyledAboutSection,
  StyledImage,
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            maxime consequatur alias reiciendis! Hic quam magni aperiam
            corporis, cum reiciendis natus inventore sequi neque rerum odio
            atque fugiat! Nemo, dolores!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium sapiente qui consectetur, hic deserunt soluta vitae,
            atque eligendi consequuntur doloremque animi autem expedita
            consequatur voluptas dolore explicabo! Aperiam autem doloribus
            corrupti, quod esse quisquam reiciendis earum vel. Pariatur,
            sapiente recusandae!
          </p>
          <CTAButton href="#" target="_blank">
            my blog
          </CTAButton>
        </AboutContent>
      </StyledAboutSection>
      <hr />
    </>
  );
};

export default AboutSection;
