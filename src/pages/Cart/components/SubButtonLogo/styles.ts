import styled from 'styled-components'

export const SubButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  min-width: 32px;
  padding: 0;
  border: 2px solid #fe5f1e;
  background-color: #fff;
  border-radius: 30px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  user-select: none;
  path:first-of-type {
    display: none;
  }

  &:hover {
    background: #fe5f1e;
    path {
      fill: #fff;
    }
  }
`
