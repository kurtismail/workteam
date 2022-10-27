import Header from "./components/Header";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/styles/Global.styled";

const style = {
  colors:{
    header: "#fff",
    body: "#eee",
    footer: "#8a1c4a"
  },
  margins:{},
  responsive:"720px"
}

const App = () => {
  return (
    <ThemeProvider theme={style}>
      <GlobalStyles/>
      <Header />
    </ThemeProvider>
  );
};

export default App;
