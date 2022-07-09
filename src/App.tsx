import { Header, Content } from './components'
import { Cart } from './pages/Cart'
import './scss/app.scss'
import { AppContainer, Container } from './styles'

const App = () => {
  return (
    <AppContainer>
      <Container>
        <Header />
        {/* <Content />  */}
        <Cart />
      </Container>
    </AppContainer>
  )
}

export default App
