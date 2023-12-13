import React from "react";
import {
  ContactImgWrapper,
  ContactInfo,
  DetailsWrapper,
  StyledContactSection,
} from "../styles/sections/ContactSection.styled";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";


const ContactSection = () => {
  return (
    <>
      <StyledContactSection id="contacts">
        <SectionHeading>
          <h1>Contact</h1>
          <p>Get In Touch</p>
        </SectionHeading>
        <DetailsWrapper>
          <ContactInfo>
            <p>
              Ready to turn your ideas into reality or discuss how my services
              can benefit you? Feel free to reach out! I'm just a click away,
              eager to collaborate and bring your vision to life.
            </p>
            <p>
              <i>Let's connect and make your digital goals a reality.</i>
            </p>
            <div>
              <a href="mailto:yelnatstech@gmail.com">
                <FaEnvelope />
                <span>yelnatstech@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/stanley-macharia-04733b225/">
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
            </div>
          </ContactInfo>
          <ContactImgWrapper>
            <img src="./images/contactImg.svg" alt="contact me" />
          </ContactImgWrapper>
        </DetailsWrapper>
      </StyledContactSection>
      <hr />
    </>
  );
};

export default ContactSection;
