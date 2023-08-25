import "../styles/Footer.scss";
import { face, insta, youtube, pagamentos, econverse } from "../assets"

const Footer = () => {
  return (
    <footer className="container">
        <div className="columns">
            <div className="col-1 texto">
                <p className="titulo-sobre">Sobre nós</p>
                <p>Conheça</p>
                <p>Como comprar</p>
                <p>Indicação e desconto</p>
                <div className="icones">
                  <img src={face} alt="facebook icon" />
                  <img src={insta} alt="instagram icon" />
                  <img src={youtube} alt="youtube icon" />
                </div>
            </div>
            <div className="col-2 texto">
                <p className="titulos">Informações úteis</p>
                <p>Fale conosco</p>
                <p>prazos de entrega</p>
                <p>Formas de pagamento</p>
                <p>politica de privacidade</p>
                <p>trocas e devoluções</p>
            </div>
            <div className="col-3">
                <p className="titulos">Formas de pagamento</p>
                <img src={pagamentos} alt="conjunto de formas de pagamento"></img>
            </div>
        </div>
        <div className="final">
          <hr className="linha"/>
          <div className="copyright">
            <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.<br/> É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
            <img src={econverse} alt="" />
          </div>
        </div>
    </footer>
  )
}

export default Footer