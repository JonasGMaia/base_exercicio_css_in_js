import CabecalhoP from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import EstiloGlobal from './global'
import { Container } from './global'

function App() {
  return (
    <>
      <EstiloGlobal />
      <CabecalhoP />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
