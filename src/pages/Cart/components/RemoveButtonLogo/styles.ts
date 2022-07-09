import styled from 'styled-components'

export const RemoveButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 30px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;
  border: 2px solid #ddd;
  user-select: none;
  width: 32px;
  height: 32px;
  min-width: 32px;
  padding: 0;

  svg {
    transform: rotate(45deg);

    path {
      fill: #2a2a2a;
    }
  }

  &:hover {
    background: #2a2a2a;
    border: 2px solid #2a2a2a;
    path {
      fill: #fff;
    }
  }
`
