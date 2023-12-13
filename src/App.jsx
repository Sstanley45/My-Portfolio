import "./App.css";
import Navbar from "./components/layout/Navbar";
import TopBanner from "./components/layout/TopBanner";
import HeroSection from "./components/sections/HeroSection";
import { GlobalStyles } from "./components/styles/Globals.styled";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/common/Container.styled";
import AboutSection from "./components/sections/AboutSection";
import ProjectSection from "./components/sections/ProjectSection";
import ServicesSection from "./components/sections/ServicesSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/layout/Footer";

function App() {
  const theme = {
    colors: {
      white: "rgba(248, 247, 255, 1)",
      navyBlue: "rgba(2, 12, 27, 1)",
      lightNavyBlue: "rgba(4,22,40,1)",
      green: "rgba(0, 206, 158, 1)",
      orange: "rgba(249, 105, 14, 1)",
      purple: "rgb(102, 51, 153)",
    },
    mobile: "768px",
    transition: "all 658ms ease-in-out",
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <TopBanner />
        <Navbar />
        <HeroSection />
        <Container>
          <AboutSection />
          <ProjectSection />
          <ServicesSection />
          <ContactSection />
        </Container>
        <Footer /> 
      </ThemeProvider>
    </>
  );
}

export default App;
