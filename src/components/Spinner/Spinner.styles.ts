import styled, { keyframes } from "styled-components"
import { Props } from "./Spinner"

const spin = keyframes`
  to { transform: rotate(360deg); }
`

export const MySpinner = styled.div<Props>`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: black;
  animation: ${spin} 1s linear infinite;
}`


