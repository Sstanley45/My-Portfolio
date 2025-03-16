import React from "react";
import {
  BannerSection,
  StyledTopBanner,
} from "../styles/layout/TopBanner.styled";

const TopBanner = () => {
  return (
    <StyledTopBanner>
      <BannerSection showOnMobile>
        <a href="mailto:yelnatstech@gmail.com">📩 njugunasmacharia@gmail.com</a>
      </BannerSection>
      <BannerSection>
        <p>👻 Get In Touch</p>
      </BannerSection>
    </StyledTopBanner>
  );
};

export default TopBanner;
