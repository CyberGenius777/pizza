import { CSSProperties } from 'react'
import styled from 'styled-components'

export const LogoWrapper = styled.div<{ margin?: CSSProperties['margin'] }>`
  margin: ${({ margin }) => margin || ''};
`
