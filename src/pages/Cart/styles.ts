import styled from 'styled-components'

export const CartContent = styled.div`
  padding: 40px 0;
`

export const CartContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 820px;
  margin: 90px auto;
`

export const CartElement = styled.div``

export const CartTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`

export const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: 24px;
  text-transform: uppercase;

  svg {
    position: relative;
    top: -2px;
    width: 30px;
    height: 30px;
    margin-right: 10px;
    path {
      stroke: #232323;
      strokewidth: 1.9;
    }
  }
`

export const ClearCartWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    display: inline-block;
    margin-left: 7px;
    color: #b6b6b6;
    font-size: 18px;
  }
  &:hover {
    path {
      stroke: #373737;
    }

    span {
      color: #373737;
    }
  }
`

export const ChosenPizzasWrapper = styled.div``

export const PizzaItem = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0;
  width: 100%;
`

export const PizzaImgWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  width: 10%;
  img {
    width: 80px;
    height: 80px;
  }
`

export const PizzaItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  p {
    font-size: 18px;
    color: #8d8d8d;
  }
`

export const PizzaName = styled.h3`
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.01em;
`

export const ChosenPizzaAmountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 13%;
`

export const PizzaPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33%;
`

export const PizzaPrice = styled.b`
  font-weight: bold;
  font-size: 22px;
  letter-spacing: 0.01em;
`

export const PizzaRemoveWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 4%;
`

/** Total Info */

export const TotalInfoWrapper = styled.div`
  margin: 50px 0;
`

export const OrderDetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const OrderDetail = styled.span`
  font-size: 22px;

  &:last-of-type {
    b {
      color: #fe5f1e;
    }
  }
`

/** Action buttons */

export const ActionButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`

export const BackButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 210px;
  border: 1px solid #ddd;
  border-radius: 30px;
  transition: all 0.3s;

  svg {
    margin-right: 12px;
    path {
      fill: transparent;
      strokewidth: 2;
    }
  }

  &:hover {
    background-color: #111;
    border-color: #111;
    span {
      color: #f6f6f6;
    }
  }
`

export const BackButtonText = styled.span`
  color: #c3c3c3;
  font-weight: 500;
`

export const PayNowButtonWrapper = styled.button`
  font-size: 16px;
  font-weight: 600;
  width: 210px;
  padding: 16px;
  align-items: center;
  background-color: #fe5f1e;
  border-radius: 30px;
  border: 1px solid transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 23px;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  user-select: none;

  &:hover {
    background-color: #f24701;
  }
  &:active {
    background-color: #f24701;
    transform: translateY(1px);
  }

  & svg {
    margin-right: 8px;
    margin-bottom: 1px;
  }
`

export const PayNowText = styled.span`
  color: #fff;
`
