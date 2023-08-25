import { useState } from "react";
import "../styles/Categorias.scss";

const Subcategorias = () => {
  const subCategorias = ["celular", "acessórios", "tablets", "notebooks", "tvs", "ver todos"]
  const [itemSelecionado, setItemSelecionado] = useState(0);
  const handleClick = (index) => {
    if(index !== itemSelecionado) {
      setItemSelecionado(index);
    }
  }
  return (
    <section id="subcategorias">
      <ul>
      {subCategorias.map((categoria, index) => (
        <li key={index} className="item" onClick={() => {handleClick(index)}}>
            <div className={`item-box ${index === parseInt(itemSelecionado) ? 'ativo' : ''}`}>
              <p>{categoria}</p>
            </div>
        </li>
      ))}
      </ul>
    </section>
  )
}

export default Subcategorias