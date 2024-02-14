import Head from "./components/Head/";
import Section from "./components/Section";
import SubSection from "./components/SubSection";
import Projetos from "./components/Projetos";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import PaginaInicial from  "./components/PaginaInicial";
import Rodape from "./components/Rodape";


function App  () {
    return (
      <> 
    <Head/>
    <ResponsiveAppBar/>
    <Section/>
    <SubSection/>
    <Projetos/>
    <PaginaInicial/>
    <Rodape/>
       
    </>
        )
}
export default App;
