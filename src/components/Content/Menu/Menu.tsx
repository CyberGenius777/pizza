import { Categories, MenuOrderWrapper, MenuOrderList } from './styles'

const Menu = () => {
  return (
    <Categories>
      <MenuOrderWrapper>
        <MenuOrderList className='active'>Все</MenuOrderList>
        <MenuOrderList>Мясные</MenuOrderList>
        <MenuOrderList>Вегетарианская</MenuOrderList>
        <MenuOrderList>Гриль</MenuOrderList>
        <MenuOrderList>Острые</MenuOrderList>
        <MenuOrderList>Закрытые</MenuOrderList>
      </MenuOrderWrapper>
    </Categories>
  )
}

export default Menu
