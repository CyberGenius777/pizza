import styled from 'styled-components'

export const Categories = styled.div``

export const MenuOrderWrapper = styled.ul`
  display: flex;
`

export const MenuOrderList = styled.li`
  background-color: #f9f9f9;
  padding: 13px 30px;
  border-radius: 30px;
  margin-right: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
  user-select: none;

  &:hover {
    background-color: #f4f4f4;
  }

  &:active {
    background-color: #282828;
  }

  &.active {
    background-color: #282828;
    color: #fff;
  }
`
