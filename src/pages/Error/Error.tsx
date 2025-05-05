import { Button } from "@/components/Button"
import { ErrorIcon } from "@/components/Icons"
import { useAppStore } from "@/store/store"
import { useNavigate } from "react-router"
import { H1, LeftAlignWrapper, P, Section } from "./Error.styles"

export default function Success() {
  const navigate = useNavigate()
  const { reset } = useAppStore()

  const handleButtonClick = () => {
    reset()
    navigate('/')
  }
  
  return (
    <Section>
      <H1>ERROR!</H1>

      <LeftAlignWrapper>
        <ErrorIcon />
      </LeftAlignWrapper>

      <P>
        UH OH. SOMETHING WENT WRONG. PLEASE TRY AGAIN LATER.
      </P>

      <LeftAlignWrapper>
      <Button onClick={handleButtonClick} type='button'>RESTART</Button>
      </LeftAlignWrapper>
    </Section>
  )
}
