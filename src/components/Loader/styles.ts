import styled, { keyframes } from 'styled-components'

const elipsis1 = keyframes`
   from{
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
`

const elipsis2 = keyframes`
  from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(24px, 0);
    }  
`

const elipsis3 = keyframes`
  from {
      transform: scale(1);
    }
  to {
    transform: scale(0);
  }  
`

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const LoaderContent = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: blue;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    left: 8px;
    animation: ${elipsis1} 0.6s infinite;
  }
  div:nth-child(2) {
    left: 8px;
    animation: ${elipsis2} 0.6s infinite;
  }
  div:nth-child(3) {
    left: 32px;
    animation: ${elipsis2} 0.6s infinite;
  }
  div:nth-child(4) {
    left: 56px;
    animation: ${elipsis3} 0.6s infinite;
  }
`
