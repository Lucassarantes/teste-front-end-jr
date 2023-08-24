import { logo, heart, box, user, cart, shield, card, truck } from "../assets";
import "../styles/Header.scss";
import Nav from "./Navigation";
import SearchBar from "./SearchBar";

const Header = () => {
  const images = [box, heart, user, cart];
  return (
    <header className="header">
      <section id="pequenos-textos">
        <ul>
          <li>
            <p>
              <img src={shield} alt="icone shield" /> Compra&nbsp;<span>100% segura</span>
            </p>
          </li>
          <li>
            <p>
              <img src={truck} alt="icone shield" /><span>Frete grátis&nbsp;</span>acima de R$ 200
            </p>
          </li>
          <li>
            <p>
              <img src={card} alt="icone shield" /><span>Parcele&nbsp;</span>suas compras
            </p>
          </li>
        </ul>
        
      </section>
      <section className="pesquisa" id="pesquisa">
        <img src={logo} alt="Logo da empresa" />
        <SearchBar pesquisar="teste" />
        {
          images.map((image, index) => (
            <img key={index} src={image} alt={`icone ${image}`} />
          ))
        }
      </section>
      <section id="filtros">
        <Nav />
      </section>
    </header>
  )
}

export default Header;