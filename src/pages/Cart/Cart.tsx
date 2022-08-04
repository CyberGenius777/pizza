import { useNavigate } from 'react-router'
import { Header } from '../../components'
import { LogoContainer, HeaderTitleWrapper } from '../../components/Header/styles'
import { PizzaLogo } from '../../components/PizzaLogo'
import {
  AddButtonLogo,
  ArrowBackLogo,
  CartLogo,
  GargageLogo,
  RemoveButtonLogo,
  SubButtonLogo,
} from './components'
import {
  CartContent,
  CartContainer,
  CartTop,
  Title,
  ClearCartWrapper,
  CartElement,
  ChosenPizzaAmountWrapper,
  ChosenPizzasWrapper,
  PizzaImgWrapper,
  PizzaItem,
  PizzaItemInfo,
  PizzaName,
  PizzaPrice,
  PizzaPriceWrapper,
  PizzaRemoveWrapper,
  ActionButtonsWrapper,
  OrderDetail,
  OrderDetailsWrapper,
  PayNowButtonWrapper,
  TotalInfoWrapper,
  PayNowText,
  BackButtonText,
  BackButton,
} from './styles'

const Cart = () => {
  const navigate = useNavigate()

  return (
    <>
      <CartContent>
        <LogoContainer onClick={() => navigate('/')}>
          <PizzaLogo margin='2px 15px 0 0' />

          <HeaderTitleWrapper>
            <Title>React Pizza</Title>
            <p>самая вкусная пицца во вселенной</p>
          </HeaderTitleWrapper>
        </LogoContainer>
        <CartContainer>
          <CartElement>
            <CartTop>
              <Title>
                <CartLogo />
                Корзина
              </Title>
              <ClearCartWrapper>
                <GargageLogo />
                <span>Очистить корзину</span>
              </ClearCartWrapper>
            </CartTop>
            <ChosenPizzasWrapper>
              <PizzaItem>
                <PizzaImgWrapper>
                  <img
                    className='pizza-block__image'
                    src='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
                    alt='Pizza'
                  />
                </PizzaImgWrapper>
                <PizzaItemInfo>
                  <PizzaName>Сырный цыпленок</PizzaName>
                  <p>тонкое тесто, 26 см.</p>
                </PizzaItemInfo>
                <ChosenPizzaAmountWrapper>
                  <SubButtonLogo />
                  <b>2</b>
                  <AddButtonLogo />
                </ChosenPizzaAmountWrapper>
                <PizzaPriceWrapper>
                  <PizzaPrice>770 ₽</PizzaPrice>
                </PizzaPriceWrapper>
                <PizzaRemoveWrapper>
                  <RemoveButtonLogo />
                </PizzaRemoveWrapper>
              </PizzaItem>
              <PizzaItem>
                <PizzaImgWrapper>
                  <img
                    className='pizza-block__image'
                    src='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
                    alt='Pizza'
                  />
                </PizzaImgWrapper>
                <PizzaItemInfo>
                  <PizzaName>Сырный цыпленок</PizzaName>
                  <p>тонкое тесто, 26 см.</p>
                </PizzaItemInfo>
                <ChosenPizzaAmountWrapper>
                  <SubButtonLogo />
                  <b>2</b>
                  <AddButtonLogo />
                </ChosenPizzaAmountWrapper>
                <PizzaPriceWrapper>
                  <PizzaPrice>770 ₽</PizzaPrice>
                </PizzaPriceWrapper>
                <PizzaRemoveWrapper>
                  <RemoveButtonLogo />
                </PizzaRemoveWrapper>
              </PizzaItem>
              <PizzaItem>
                <PizzaImgWrapper>
                  <img
                    className='pizza-block__image'
                    src='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
                    alt='Pizza'
                  />
                </PizzaImgWrapper>
                <PizzaItemInfo>
                  <PizzaName>Сырный цыпленок</PizzaName>
                  <p>тонкое тесто, 26 см.</p>
                </PizzaItemInfo>
                <ChosenPizzaAmountWrapper>
                  <SubButtonLogo />
                  <b>2</b>
                  <AddButtonLogo />
                </ChosenPizzaAmountWrapper>
                <PizzaPriceWrapper>
                  <PizzaPrice>770 ₽</PizzaPrice>
                </PizzaPriceWrapper>
                <PizzaRemoveWrapper>
                  <RemoveButtonLogo />
                </PizzaRemoveWrapper>
              </PizzaItem>
              <PizzaItem>
                <PizzaImgWrapper>
                  <img
                    className='pizza-block__image'
                    src='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
                    alt='Pizza'
                  />
                </PizzaImgWrapper>
                <PizzaItemInfo>
                  <PizzaName>Сырный цыпленок</PizzaName>
                  <p>тонкое тесто, 26 см.</p>
                </PizzaItemInfo>
                <ChosenPizzaAmountWrapper>
                  <SubButtonLogo />
                  <b>2</b>
                  <AddButtonLogo />
                </ChosenPizzaAmountWrapper>
                <PizzaPriceWrapper>
                  <PizzaPrice>770 ₽</PizzaPrice>
                </PizzaPriceWrapper>
                <PizzaRemoveWrapper>
                  <RemoveButtonLogo />
                </PizzaRemoveWrapper>
              </PizzaItem>
              <PizzaItem>
                <PizzaImgWrapper>
                  <img
                    className='pizza-block__image'
                    src='https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg'
                    alt='Pizza'
                  />
                </PizzaImgWrapper>
                <PizzaItemInfo>
                  <PizzaName>Сырный цыпленок</PizzaName>
                  <p>тонкое тесто, 26 см.</p>
                </PizzaItemInfo>
                <ChosenPizzaAmountWrapper>
                  <SubButtonLogo />
                  <b>2</b>
                  <AddButtonLogo />
                </ChosenPizzaAmountWrapper>
                <PizzaPriceWrapper>
                  <PizzaPrice>770 ₽</PizzaPrice>
                </PizzaPriceWrapper>
                <PizzaRemoveWrapper>
                  <RemoveButtonLogo />
                </PizzaRemoveWrapper>
              </PizzaItem>
            </ChosenPizzasWrapper>
            <TotalInfoWrapper>
              <OrderDetailsWrapper>
                <OrderDetail>
                  Всего пицц: <b>3 шт.</b>
                </OrderDetail>
                <OrderDetail>
                  Сумма заказа: <b>900 ₽</b>
                </OrderDetail>
              </OrderDetailsWrapper>
              <ActionButtonsWrapper>
                <BackButton href='/'>
                  <ArrowBackLogo />
                  <BackButtonText>Вернуться назад</BackButtonText>
                </BackButton>
                <PayNowButtonWrapper>
                  <PayNowText>Оплатить сейчас</PayNowText>
                </PayNowButtonWrapper>
              </ActionButtonsWrapper>
            </TotalInfoWrapper>
          </CartElement>
        </CartContainer>
      </CartContent>
    </>
  )
}

export default Cart
