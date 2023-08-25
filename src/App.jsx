
import Header from './components/Header'
import Categorias from './components/Categorias'
import './App.css'
import Divisor from './components/Divisor'
import Subcategorias from './components/SubCategorias'

function App() {

  return (
    <>
      <Header />
      <Categorias />
      <Divisor texto={"Produtos relacionados"} />
      <Subcategorias />
    </>
  )
}

export default App
