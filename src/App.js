import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.styled";
import Card from "./components/Card";
import Footer from "./components/Footer";

const style = {
  colors:{
    header: "#fff",
    body: "#eee",
    footer: "#8a1c4a"
  },
  margins:{},
  "max-width": "950px",
  widtth:"95vw",
  responsive:"720px"
}

const App = () => {
  return (
    <ThemeProvider theme={style}>
      <GlobalStyles/>
      <Header />
      <Card/>
      <Footer/>
    </ThemeProvider>
  );
};

export default App;
