import { useEffect, useState } from 'react'
import { Content, Header } from '../../components'
import { IPizzaDTO } from '../../types/pizza'
import { getPizzas } from '../../services/pizzas'

const Home = () => {
  const [pizzas, setPizzas] = useState<IPizzaDTO[] | []>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getPizzas().then((allPizzas) => {
      setPizzas(allPizzas)
      setIsLoading(false)
    })
  }, [])

  return (
    <>
      <Header />
      {isLoading ? <h3>Loading...</h3> : <Content pizzas={pizzas} />}
    </>
  )
}

export default Home
