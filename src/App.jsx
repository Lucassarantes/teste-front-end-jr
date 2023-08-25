
import Header from './components/Header'
import Categorias from './components/Categorias'
import './App.css'
import Divisor from './components/Divisor'
import Subcategorias from './components/SubCategorias'
import Produtos from './components/Produtos'
import Anuncios from './components/Anuncios'
import Marcas from "./components/Marcas"
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Header />
      <main>
        <Categorias />
        <Divisor texto={"Produtos relacionados"} />
        <Subcategorias />
        <Produtos />
        <section id="parceiros">
          <Anuncios classes="parceiros" titulo="Parceiros" texto="Lorem ipsum dolor sit amet, consectetur" />
          <Anuncios classes="parceiros" titulo="Parceiros" texto="Lorem ipsum dolor sit amet, consectetur" />
        </section>
        <Divisor texto={"Produtos relacionados"} />
        <p className='ver-todos'>Ver todos</p>
        <section id="produtos">
          <Anuncios classes="produtos" titulo="Produtos" texto="Lorem ipsum dolor sit amet, consectetur" />
          <Anuncios classes="produtos" titulo="Produtos" texto="Lorem ipsum dolor sit amet, consectetur" />
        </section>
        <p className='marcas'>Navegue por marcas</p>
        <Marcas />
      </main>
      
      <Footer />
    </>
  )
}

export default App
