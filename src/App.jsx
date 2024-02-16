import Header from "./components/Header/";
import Projetos from "./components/Projetos";
import PaginaInicial from "./components/PaginaInicial";
import Rodape from "./components/Rodape";
import Contatos from "./components/Contatos";
import { Container } from "@mui/material";
import Menu from "./components/Header/Menu";


function App() {
  return (
    <><Container /> 
    <Contatos /> 
      <Header />
      <PaginaInicial />
      <Projetos />
       <Rodape />
     
            <Menu />

    </>
  )
}
export default App;
