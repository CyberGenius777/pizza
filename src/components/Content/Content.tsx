import { Menu } from './Menu'
import { PizzaItem } from './PizzaItem'
import { Sort } from './Sort'
import { ContentTitle, ContentWrapper, Section } from './styles'

const Content = () => {
  return (
    <ContentWrapper>
      <Section>
        <Menu />
        <Sort />
      </Section>
      <ContentTitle>Все пиццы</ContentTitle>
      <Section>
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
        <PizzaItem />
      </Section>
    </ContentWrapper>
  )
}

export default Content
