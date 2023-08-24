import "../styles/Banner.scss";
import Button from "./Button";

const Banner = () => {
  return (
    <section id="banner">
      <div className="banner">
        <div className="overlay"></div>
        <div className="conteudo">
            <h4>Venha conhecer nossas<br/> promoções<br/><span>50% Off nos produtos</span></h4>
            <Button texto="Ver Produto" classes="btn-principal" onClick={() => console.log("teste")} />
        </div>
      </div>
    </section>
  )
}

export default Banner