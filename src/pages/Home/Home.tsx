import { useEffect, useState } from 'react'
import { Content, Header } from '../../components'
import { IPizzaDTO } from '../../types/pizza'
import { getPizzas } from '../../services/pizzas'
import { ISortTypes } from '../../components/Content/Sort/types'

export const menuList = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

const Home = () => {
  const [pizzas, setPizzas] = useState<IPizzaDTO[] | []>([])
  const [activeMenuTab, setActiveMenuTab] = useState(0)
  const [currentSort, setCurrentSort] = useState<ISortTypes>({
    name: 'rating',
    sortValue: 'популярности',
  })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getPizzas(activeMenuTab ? activeMenuTab : '').then((allPizzas) => {
      setPizzas(allPizzas)
      setIsLoading(false)
    })
  }, [activeMenuTab])

  const onChangeSort = (sortType: ISortTypes) => {
    setCurrentSort(sortType)
  }

  const onChangeCategory = (categoryId: number) => {
    setActiveMenuTab(categoryId)
  }

  return (
    <>
      <Header />

      <Content
        isLoading={isLoading}
        menuList={menuList}
        pizzas={pizzas}
        currentSort={currentSort}
        onChangeSort={onChangeSort}
        activeMenuTab={activeMenuTab}
        onChangeCategory={onChangeCategory}
      />
    </>
  )
}

export default Home
