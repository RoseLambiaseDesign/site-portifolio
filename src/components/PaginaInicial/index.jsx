import "./styles.css";
import "./components/PaginaInicial";
import Header from '../../components/Header';
import Rodape from '../../components/Rodape';
import Container from '../../components/Container';

function PaginaInicial ()  {
  return (<>
  
        
            <Header />
            <Container>
                <h2>Sobre</h2>
            </Container>
            <Rodape />
        </>
    )
}
export default PaginaInicial;
