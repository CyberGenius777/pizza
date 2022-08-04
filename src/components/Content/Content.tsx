import { Menu } from './Menu'
import { PizzaItem } from './PizzaItem'
import { Sort } from './Sort'
import { ContentTitle, ContentWrapper, Section } from './styles'
import { IPizzaDTO } from '../../types/pizza'

const Content: React.FC<{ pizzas: IPizzaDTO[] }> = ({ pizzas }) => {
  return (
    <ContentWrapper>
      <Section>
        <Menu />
        <Sort />
      </Section>
      <ContentTitle>Все пиццы</ContentTitle>
      <Section>
        {pizzas.length > 0
          ? pizzas.map((pizza: IPizzaDTO) => <PizzaItem key={pizza.id} {...pizza} />)
          : 'Скоро здесь добавятся пиццы!'}
      </Section>
    </ContentWrapper>
  )
}

export default Content
