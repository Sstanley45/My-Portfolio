import React from "react";
import { FaCode, FaLaptopCode, FaWordpress } from "react-icons/fa";

import {
  IconWrapper,
  ServicesItems,
  SingleService,
  StyledServicesSection,
} from "../styles/sections/ServiceSection.styled";
import { SectionHeading } from "../styles/common/SectionHeading.styled";

const ServicesSection = () => {
  return (
    <>
      <StyledServicesSection id="services"> 
        <SectionHeading>
          <h1>Services</h1>
          <p>Exited to work with you!</p>
        </SectionHeading>
        <ServicesItems>
          <SingleService>
            <IconWrapper>
              <FaCode />
            </IconWrapper>
            <h1>Web Development</h1>
            <p>
              I offer comprehensive web development services, crafting dynamic
              and user-centric websites that align with your business
              objectives.
            </p>
          </SingleService>

          <SingleService>
            <IconWrapper>
              <FaLaptopCode />
            </IconWrapper>
            <h1>Design to HTML</h1>
            <p>
              I specialize in seamlessly translating your creative vision into a
              responsive and well-structured HTML framework, ensuring a visually
              stunning and functional representation of your designs on the web.
            </p>
          </SingleService>

          <SingleService>
            <IconWrapper>
              <FaWordpress />
            </IconWrapper>
            <h1>WordPress</h1>
            <p>
              My services extend to WordPress, where I leverage my expertise to
              create dynamic and visually captivating websites, tailored to meet
              your unique needs and elevate your online presence.
            </p>
          </SingleService>
        </ServicesItems>
      </StyledServicesSection>
      <hr />
    </>
  );
};

export default ServicesSection;
