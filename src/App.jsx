
import Header from './components/Header'
import Categorias from './components/Categorias'
import './App.css'
import Divisor from './components/Divisor'
import Subcategorias from './components/SubCategorias'
import Produtos from './components/Produtos'

function App() {

  return (
    <>
      <Header />
      <Categorias />
      <Divisor texto={"Produtos relacionados"} />
      <Subcategorias />
      <Produtos />
    </>
  )
}

export default App
