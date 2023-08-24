import { lupa } from "../assets";
import "../styles/SearchBar.scss";
const SearchBar = ({ pesquisar }) => {
  const handlePesquisa = (e) => {
    const termo = e.target.value;
    pesquisar(termo)
  }
  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder="O que você está buscando?"
        onChange={handlePesquisa}
      />
      <img src={lupa} alt="icone lupa" />
    </div>

  )
}

export default SearchBar;