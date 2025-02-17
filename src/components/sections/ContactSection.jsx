import React from "react";
import {
  ContactImgWrapper,
  ContactInfo,
  DetailsWrapper,
  StyledContactSection,
  ContactForm,
  InputField,
  TextArea,
  SubmitButton,
} from "../styles/sections/ContactSection.styled";
import { SectionHeading } from "../styles/common/SectionHeading.styled";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { CTAButton } from "../styles/common/CTAButton.styled";

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
              {/* <a href="mailto:njugunasmacharia@gmail.com">
                <FaEnvelope />
                <span>njugunasmacharia@gmail.com</span>
              </a> */}
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

        {/* Contact Form */}
        <ContactForm>
          <InputField type="text" placeholder="Full Name" required />
          <InputField type="email" placeholder="Email" required />
          <InputField type="tel" placeholder="Mobile Number" required />
          <TextArea placeholder="Message" rows="5" required />
          <div style={{ marginTop: "10px" }}></div>
          <CTAButton primary margin="0 0 0 20px">
            Submit
          </CTAButton>
        </ContactForm>
      </StyledContactSection>
      <hr />
    </>
  );
};

export default ContactSection;
