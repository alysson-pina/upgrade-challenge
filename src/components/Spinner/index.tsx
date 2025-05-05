import styled, { keyframes } from "styled-components"

interface Props {
  size?: number;
}

export const Spinner = ({ size = 24 }: Props) => (
  <MySpinner size={size} aria-label="loading" />
)

const spin = keyframes`
  to { transform: rotate(360deg); }
`

const MySpinner = styled.div<Props>`
  display: inline-block;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: black;
  animation: ${spin} 1s linear infinite;
}`


