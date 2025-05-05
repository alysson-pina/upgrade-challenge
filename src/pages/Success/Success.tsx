import { Button } from "@/components/Button"
import { Checkmark } from "@/components/Icons"
import { useAppStore } from "@/store/store"
import { useNavigate } from "react-router"
import { H1, LeftAlignWrapper, P, Section } from "./Success.styles"

export default function Success() {
  const navigate = useNavigate()
  const { reset } = useAppStore()

  const handleButtonClick = () => {
    reset()
    navigate('/')
  }
  
  return (
    <Section>
      <H1>SUCCESS!</H1>

      <LeftAlignWrapper>
        <Checkmark />
      </LeftAlignWrapper>

      <P>
        YOU SHOULD RECEIVE A CONFIRMATION EMAIL SOON.
      </P>

      <LeftAlignWrapper>
      <Button onClick={handleButtonClick} type='button'>RESTART</Button>
      </LeftAlignWrapper>
    </Section>
  )
}
