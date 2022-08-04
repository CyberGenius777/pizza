import styled from 'styled-components'

export const Categories = styled.div``

export const MenuOrderWrapper = styled.ul`
  display: flex;
`

export const MenuOrderList = styled.li<{ active: boolean }>`
  background-color: ${({ active }) => (active ? '#282828' : '#f9f9f9')};
  color: ${({ active }) => (active ? '#fff' : '#232323')};
  padding: 13px 30px;
  border-radius: 30px;
  margin-right: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
  user-select: none;

  &:hover,
  &:active {
    background-color: ${({ active }) => (active ? '#282828' : '#eee')};
  }
`
