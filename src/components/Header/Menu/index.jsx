import { Link } from "react-router-dom";
import "./styles.css";

function Menu ()  {
  return (<nav>
    
        <ul className="menu">
        <li>
          <Link className="menu-item" to="/inicio">
            Inicio
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/paginas"> 
            Páginas
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/portfolio">
            Portfólio
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/produtos">
   Produtos
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/servicos">
      Serviços
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/sobre">
      Sobre
          </Link>
        </li>
        <li>
          <Link className="menu-item" to="/contato">
      Contato
          </Link>
        </li>
      </ul>
    
      </nav>);
}

export default Menu;

