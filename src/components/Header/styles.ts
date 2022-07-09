import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid $gray-line;
  padding: 40px 0;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const LogoContainer = styled.div`
  display: flex;
`

export const HeaderTitleWrapper = styled.div`
  & p {
    color: #7b7b7b;
  }
`

export const Title = styled.div`
  color: #181818;
  font-size: 24px;
  letter-spacing: 1%;
  text-transform: uppercase;
  font-weight: 800;
`

export const HeaderCartContainer = styled.div``

export const CartLink = styled.a`
  align-items: center;
  background-color: $orange;
  border-radius: 30px;
  border: 1px solid transparent;
  color: #fff;
  cursor: pointer;
  display: flex;
  import $duration;
  line-height: 23px;
  min-width: 100px;
  padding: 12px 25px;
  text-align: center;
  transition: background-color $duration ease-in-out, border-color $duration ease-in-out;
  user-select: none;

  &:hover {
    background-color: darken($orange, 8%);
  }
  &:active {
    background-color: darken($orange, 12%);
    transform: translateY(1px);
  }
 
  & svg {
    margin-right: 8px;
    margin-bottom: 1px;
  }
`

export const CartPrice = styled.span``

export const HeaderCartDelimiter = styled.div`
  width: 1px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.25);
  margin-left: 14px;
  margin-right: 14px;
`

export const CartGoodsAmount = styled.span`
  font-weight: 600;
  font-size: 16px;
`
