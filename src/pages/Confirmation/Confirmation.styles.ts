import styled from "styled-components"

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`

export const StyledUl = styled.ul`
  margin: 0 0 0 1.5rem;
  padding: 0;
`

export const H1 = styled.h1`
  text-align: center;
  margin-bottom: 1.5rem;
`

export const SpinnerWrapper = styled.div<{ $loading: boolean }>`
  display: flex;
  margin: 0 auto;
  margin-top: 10px;
  visibility: ${(props) => props.$loading ? 'visible' : 'hidden'};
`

export const StyledButtonDiv = styled.div`
  display: flex;
  gap: 2px;
  align-self: flex-start;
  margin-left: 0.25rem;
`
