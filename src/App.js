import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.styled";
import Card from "./components/Card";

const style = {
  colors:{
    header: "#fff",
    body: "#eee",
    footer: "#8a1c4a"
  },
  margins:{},
  "max-width": "1000px",
  widtth:"95vw",
  responsive:"720px"
}

const App = () => {
  return (
    <ThemeProvider theme={style}>
      <GlobalStyles/>
      <Header />
      <Card/>
    </ThemeProvider>
  );
};

export default App;
