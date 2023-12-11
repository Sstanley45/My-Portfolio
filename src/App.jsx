import "./App.css";
import Navbar from "./components/layout/Navbar";
import { GlobalStyles } from "./components/styles/Globals.styled";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    colors: {
      white: "rgba(248, 247, 255, 1)",
      navyBlue: "rgba(2, 12, 27, 1)",
      lightNavyBlue: "rgba(4,22,40,1)",
      green: "rgba(0, 206, 158, 1)",
      orange: "rgba(249, 105, 14, 1)",
      purple: "rgba(102, 51, 153, 1)",
    },
    mobile: "768px",
    transition: "all 658ms ease-in-out",
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
      </ThemeProvider>
    </>
  );
}

export default App;
