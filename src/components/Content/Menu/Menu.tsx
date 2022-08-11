import { Categories, MenuOrderWrapper, MenuOrderList } from './styles'

interface IMenuProps {
  menuList: string[]
  activeMenuTab: number
  onChangeCategory: (value: number) => void
}

const Menu: React.FC<IMenuProps> = ({ menuList, activeMenuTab, onChangeCategory }) => {
  const onChangeMenuTabHandler = (currentTabIndex: number) => () => {
    onChangeCategory(currentTabIndex)
  }

  return (
    <Categories>
      <MenuOrderWrapper>
        {menuList.map((menuItem: string, index: number) => (
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
