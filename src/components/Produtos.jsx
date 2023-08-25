import { useState, useEffect } from "react";
import { prev, next } from "../assets";
import Button from "./Button";
import "../styles/Produtos.scss"

const Produtos = () => {
  const [produtos, setProdutos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchProdutos = async () => {
      try{
        const response = await fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
        if(!response.ok) {
          throw new Error("ERRO AO CARREGAR DADOS DA API");
        }
        const data = await response.json();
        setProdutos(data.products);
      } catch (err) {
        console.log("ERRO AO CARREGAR DADOS DA API", err);
      } finally {
        setIsLoading(false)
      }
    };
    fetchProdutos();
  }, []);

  const handleNext = () => {
    if(startIndex < produtos.length - 4) {
        console.log(startIndex);
        console.log(produtos.length);
        setStartIndex((prevIndex) => prevIndex + 4);
    }
  };

  const handlePrev = () => {
    if(startIndex >= 4) {
        setStartIndex((prevIndex) => prevIndex - 4);
    }
  };

  // const openModal = () => {
  //   setModalIsOpen(true);
  // };

  // const closeModal = () => {
  //   setModalIsOpen(false);
  // };


  return (
    <>
        {isLoading && !produtos  ? (
            <h1>Carregando ...</h1>
        ) : (
            <div className="produto-list">
              {/* <Modal isOpen={modalIsOpen} onClose={closeModal} content="Conteúdo do modal" /> */}
                <button className="carousel-control" onClick={handlePrev}>
                    <img src={prev} alt="previous item button" />
                </button>
                {produtos.slice(startIndex, startIndex + 4).map((produto) => (
                    <div key={produto.productName} className="produto-box">
                        <img src={produto.photo} alt="" />
                        <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p className="preco-antigo">
                          R$ 30,90
                        </p>
                        <p className="preco-promocao">R$ 28,90</p>
                        <p className="preco-parcela">ou 2x de R$ 49,95 sem juros</p>
                        <p className="frete-gratis">Frete grátis</p>
                        <Button texto="comprar" classes="btn-itens" />
                    </div>
                ))}
                <button className="carousel-control" onClick={handleNext}>
                  <img src={next} alt="next item button" />
                </button>
            </div>
        )}
    </>
    
  )
}

export default Produtos