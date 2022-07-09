import styled from 'styled-components'

export const SortWrapper = styled.div`
  position: relative;
`

export const SortLabel = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 8px;
  }

  b {
    margin-right: 8px;
  }

  span {
    color: #fe5f1e;
    border-bottom: 1px dashed #fe5f1e;
    cursor: pointer;
  }
`

export const SortPopUp = styled.div`
  position: absolute;
  right: 0;
  margin-top: 15px;
  background: #ffffff;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.09);
  border-radius: 10px;
  overflow: hidden;
  padding: 10px 0;
  width: 160px;
`
export const SortOrderWrapper = styled.ul`
  overflow: hidden;
`

export const SortOrderList = styled.li`
  padding: 12px 20px;
  cursor: pointer;

  &.active,
  &:hover {
    background: rgba(254, 95, 30, 0.05);
  }

  &.active {
    font-weight: bold;
    color: #fe5f1e;
  }
`
