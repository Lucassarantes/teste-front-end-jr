import { useState } from "react";
import { drinks, fashion, health, market, sports, tools, tech } from "../assets";
import "../styles/Categorias.scss";

const Categorias = () => {
  const icones = [
    {
      icone: tech,
      texto: "Tecnologia"
    },
    {
      icone: market,
      texto: "Supermercado"
    },
    {
      icone: drinks,
      texto: "Bebidas"
    },
    {
      icone: tools,
      texto: "Ferramentas"
    },
    {
      icone: health,
      texto: "Saúde"
    },
    {
      icone: sports,
      texto: "Esportes e Fitness"
    },
    {
      icone: fashion,
      texto: "Moda"
    }
  ]
  const [itemSelecionado, setItemSelecionado] = useState(0);
  const handleClick = (index) => {
    if(index !== itemSelecionado) {
      setItemSelecionado(index);
    }
  }
  return (
    <section id="categorias">
      <ul>
      {icones.map((icone, index) => (
        <li key={index} className="item" onClick={() => {handleClick(index)}}>
            <div className={`item-box ${index === parseInt(itemSelecionado) ? 'ativo' : ''}`}>
              <img src={icone.icone} alt={`icone ${icone.texto}`} />
            </div>
            <h6>{icone.texto}</h6>
        </li>
      ))}
      </ul>
    </section>
  )
}

export default Categorias