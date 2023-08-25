
const Modal = ({ isOpen, onClose, nome, preco, descricao, foto }) => {
  if (!isOpen) return null;
  console.log(nome, preco, descricao, foto);
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        
        <button onClick={onClose}>Fechar</button>
        <div>
            <img src={foto} alt={nome} />
            <div>
                <p>{nome}</p>
                <p>R$ {preco}</p>
                <p>{descricao}</p>
                <p>Veja mais detalhes do produto</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;