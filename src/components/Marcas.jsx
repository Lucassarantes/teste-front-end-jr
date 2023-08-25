import { logo } from "../assets";
import "../styles/Marcas.scss";

const Marcas = () => {
  const marcas = [logo, logo, logo, logo, logo];
  return (
    <section id="marcas">
      {marcas.map((marca, index) => (
        <div className="marca" key={index}>
            <img src={marca} alt="logo marca" />
        </div>
      ))}
    </section>
  )
}

export default Marcas;