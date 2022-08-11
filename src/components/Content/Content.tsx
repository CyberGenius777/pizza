import { Menu } from './Menu'
import { PizzaItem } from './PizzaItem'
import { Sort } from './Sort'
import { ContentTitle, ContentWrapper, Section, PizzaSection } from './styles'
import { IPizzaDTO } from '../../types/pizza'
import Loader from '../Loader/Loader'
import { ISortTypes } from './Sort/types'

interface IContentProps {
  isLoading: boolean
  currentSort: ISortTypes
  menuList: string[]
  pizzas: IPizzaDTO[]
  activeMenuTab: number
  onChangeCategory: (value: number) => void
  onChangeSort: (sortType: ISortTypes) => void
}

const Content: React.FC<IContentProps> = ({
  isLoading,
  currentSort,
  menuList,
  pizzas,
  activeMenuTab,
  onChangeSort,
  onChangeCategory,
}) => {
  return (
    <ContentWrapper>
      <Section>
        <Menu
          menuList={menuList}
          activeMenuTab={activeMenuTab}
          onChangeCategory={onChangeCategory}
        />
        <Sort currentSort={currentSort} onChangeSort={onChangeSort} />
      </Section>
      <ContentTitle>{menuList[activeMenuTab]}</ContentTitle>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <PizzaSection>
            {pizzas.length > 0
              ? pizzas.map((pizza: IPizzaDTO) => <PizzaItem key={pizza.id} {...pizza} />)
              : 'Скоро здесь добавятся пиццы!'}
          </PizzaSection>
        </>
      )}
    </ContentWrapper>
  )
}

export default Content
