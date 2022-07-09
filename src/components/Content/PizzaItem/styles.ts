import styled from 'styled-components'

export const PizzaItemWrapper = styled.div`
  width: 280px;
  text-align: center;
  margin-bottom: 65px;

  &:not(:nth-of-type(4n)) {
    margin-right: 35px;
  }

  img {
    width: 260px;
  }
`

export const PizzaName = styled.h4`
  font-size: 20px;
  font-weight: 900;
  letter-spacing: 1%;
  margin-bottom: 20px;
`

export const ChoosePizzaContainer = styled.div`
  display: flex;
  background-color: #f3f3f3;
  border-radius: 10px;
  flex-direction: column;
  padding: 6px;
`

export const OrderWrapper = styled.ul`
  display: flex;
  flex: 1;

  &:first-of-type {
    margin-bottom: 6px;
  }
`

export const OrderList = styled.li`
  padding: 8px;
  flex: 1;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  user-select: none;
  &.active {
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
    border-radius: 5px;
    cursor: auto;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`

export const PizzaPrice = styled.p`
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.015em;
`

export const AddButtonWrapper = styled.button`
  display: inline-block;
  color: #fe5f1e;
  background-color: #fff;
  border: 1px solid #fe5f1e;
  border-radius: 30px;
  padding: 10px 20px;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
  transition: all 0.15s;
  user-select: none;

  span {
    color: #fe5f1e;
    font-weight: 600;
    font-size: 16px;
  }

  svg {
    margin-right: 8px;
  }

  &:hover {
    background-color: #fe5f1e;
    color: #fff;
    span {
      color: #fff;
    }
    path {
      fill: #fff;
    }

    i {
      background-color: #fff;
      color: #fe5f1e;
    }
  }
  path {
    fill: #fe5f1e;
  }

  &:active {
    background-color: darken(#fe5f1e, 8%);
  }
`

export const ButtonText = styled.span`
  margin-right: 2px;
`

export const AmountOfPizzas = styled.i`
  display: inline-block;
  border-radius: 30px;
  background-color: #fe5f1e;
  color: #fff;
  font-weight: 600;
  width: 22px;
  height: 22px;
  font-style: normal;
  font-size: 13px;
  line-height: 22px;
  position: relative;
  top: -1px;
  left: 3px;
`
