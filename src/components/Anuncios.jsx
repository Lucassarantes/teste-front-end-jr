import "../styles/Anuncios.scss";
import Button from "./Button"
const Anuncios = ({ titulo, texto, classes}) => {
  return (
    <section className={`anuncios ${classes}`}>
        <div className="overlay"></div>
        <div className="conteudo-parceiro">
            <h5>{titulo}</h5>
            <p>{texto}</p>
            <Button texto="Confira" classes="btn-itens confira" />
        </div>
    </section>
  )
}

export default Anuncios