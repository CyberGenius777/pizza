import { useState } from 'react'
import { IPizzaDTO } from '../../../types/pizza'
import {
  ButtonText,
  AddButtonWrapper,
  AmountOfPizzas,
  ChoosePizzaContainer,
  InfoContainer,
  OrderList,
  OrderWrapper,
  PizzaItemWrapper,
  PizzaName,
  PizzaPrice,
} from './styles'
import { SizesEnum, TypesEnum } from './types'

const PizzaItem: React.FC<IPizzaDTO> = ({
  id,
  imageUrl,
  title,
  types,
  sizes,
  price,
  category,
  rating,
}) => {
  const [activeType, setActiveType] = useState<number>(0)
  const [activeSize, setActiveSize] = useState<number>(0)

  const onChangePizzaType = (currentType: number) => () => {
    setActiveType(currentType)
  }

  const onChangePizzaSize = (currentSize: number) => () => {
    setActiveSize(currentSize)
  }

  return (
    <PizzaItemWrapper>
      <img className='pizza-block__image' src={imageUrl} alt={title} />
      <PizzaName>{title}</PizzaName>
      <ChoosePizzaContainer>
        <OrderWrapper>
          {types.map((currentType: number) => (
            <OrderList
              key={currentType}
              onClick={onChangePizzaType(currentType)}
              active={activeType === currentType}>
              {TypesEnum[currentType]}
            </OrderList>
          ))}
        </OrderWrapper>
        <OrderWrapper>
          {sizes.map((currentSize: number, index: number) => (
            <OrderList
              key={currentSize}
              onClick={onChangePizzaSize(index)}
              active={activeSize === index}>
              {SizesEnum[currentSize]}
            </OrderList>
          ))}
        </OrderWrapper>
      </ChoosePizzaContainer>
      <InfoContainer>
        <PizzaPrice>{price} ₽</PizzaPrice>
        <AddButtonWrapper>
          <svg
            width='12'
            height='12'
            viewBox='0 0 12 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z'
              fill='white'
            />
          </svg>
          <ButtonText>Добавить</ButtonText>
          <AmountOfPizzas>2</AmountOfPizzas>
        </AddButtonWrapper>
      </InfoContainer>
    </PizzaItemWrapper>
  )
}

export default PizzaItem
