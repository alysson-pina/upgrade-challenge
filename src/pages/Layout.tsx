import { Outlet } from "react-router"
import styled from "styled-components"

export default () => (
  <Wrapper>
    <Outlet />
  </Wrapper>
)

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
`
