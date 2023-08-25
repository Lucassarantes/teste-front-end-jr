import "../styles/Navigation.scss";
import { useState } from "react";
import { crown } from "../assets";

const Navigation = () => {
  
  const [filtro, setFiltro] = useState("ofertas");
  
  const handleFiltroClick = (filtroEscolhido) => {
    if(filtro !== filtroEscolhido) {
        setFiltro(filtroEscolhido);
    }
  }
  
  return (
    <nav>
      <ul id="nav-list">
        <li
          className={`${filtro === 'todasCategorias' ? 'active' : ''}`}
          onClick={() => handleFiltroClick('todasCategorias')}
        >
          todas categorias
        </li>
        <li
          className={`${filtro === 'supermercado' ? 'active' : ''}`}
          onClick={() => handleFiltroClick('supermercado')}
        >
          supermercado
        </li>
        <li
          className={`${filtro === 'livros' ? 'active' : ''}`}
          onClick={() => handleFiltroClick('livros')}
        >
          livros
        </li>
        <li
          className={`${filtro === 'moda' ? 'active' : ''}`}
          onClick={() => handleFiltroClick('moda')}
        >
          moda
        </li>
        <li
          className={`${filtro === 'lancamentos' ? 'active' : ''}`}
          onClick={() => handleFiltroClick('lancamentos')}
        >
          lançamentos
        </li>
        <li
          className={`${filtro === 'ofertas' ? 'active' : ''}`}
          onClick={() => handleFiltroClick('ofertas')}
        >
          ofertas do dia
        </li>
        <li
          className={`assinatura ${filtro === 'assinatura' ? 'active' : ''}`}
          onClick={() => handleFiltroClick('assinatura')}
        >
          <img src={crown} alt="icone crown" />
          assinatura
        </li>
      </ul>
    </nav>
  )
}

export default Navigation