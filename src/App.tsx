import { Route, Routes } from 'react-router'
import { Cart } from './pages/Cart'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
// import './scss/app.scss'
import { AppContainer, Container } from './styles'

const App = () => {
  return (
    <AppContainer>
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </AppContainer>
  )
}

export default App
