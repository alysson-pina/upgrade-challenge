import styled from "styled-components"

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  & input {
    width: 40%;
    min-width: 200px;
    margin: 5px auto;
  }
`
