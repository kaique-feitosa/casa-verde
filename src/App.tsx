import Banner from "./components/Banner";
import Cabecalho from "./components/Cabecalho";
import Ofertas from "./components/Ofertas";
import Orientacoes from "./components/Orientacoes";
import PaginaBase from "./components/PaginaBase"

const App = () => {
  return (
    <PaginaBase>
      <Cabecalho />
      <Banner />
      <Orientacoes />
      <Ofertas />
    </PaginaBase>
  );
}

export default App;
