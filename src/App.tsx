import { Header, Content } from './components'
import './scss/app.scss'
import { AppContainer, Container } from './styles'

const App = () => {
  return (
    <AppContainer>
      <Container>
        <Header />
        <Content />
      </Container>
    </AppContainer>
  )
}

export default App
