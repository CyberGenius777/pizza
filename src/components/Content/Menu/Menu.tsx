import { useState } from 'react'
import { Categories, MenuOrderWrapper, MenuOrderList } from './styles'

const MenuList = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

const Menu = () => {
  const [activeMenuTab, setActiveMenuTab] = useState(0)

  const onChangeMenuTabHandler = (currentId: number) => () => {
    setActiveMenuTab(currentId)
  }

  return (
    <Categories>
      <MenuOrderWrapper>
        {MenuList.map((menuItem: string, index: number) => (
          <MenuOrderList
            key={index}
            active={activeMenuTab === index}
            onClick={onChangeMenuTabHandler(index)}>
            {menuItem}
          </MenuOrderList>
        ))}
      </MenuOrderWrapper>
    </Categories>
  )
}

export default Menu
