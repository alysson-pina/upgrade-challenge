import { submitUserData } from "@/api/user"
import { Button } from "@/components/Button"
import { Spinner } from "@/components/Spinner"
import { useAppStore } from "@/store/store"
import { UserData } from "@/types"
import { useState } from "react"
import { useNavigate } from "react-router"
import { sha256 } from 'js-sha256'
import { H1, Section, SpinnerWrapper, StyledButtonDiv, StyledUl } from "./Confirmation.styles"

const confirmOrder: ({ label: string, id: keyof UserData  })[] = [
  { label: 'FIRST NAME', id: 'name' },
  { label: 'EMAIL', id: 'email' },
  { label: 'PASSWORD', id: 'password' },
  { label: 'FAVORITE COLOR', id: 'color' },
  { label: 'TERMS AND CONDITIONS', id: 'terms' }
]

const transformField = (id: keyof UserData, value: UserData[keyof UserData]) => {
  if (id === 'password') {
    return '*'.repeat(value.toString().length)
  }

  if (id === 'terms') {
    return value ? 'AGREED' : 'NOT AGREED'
  }

  if (typeof value === 'string') {
    return value.toUpperCase()
  }

  return value;
}

export default function Confirmation() {
  const { userData } = useAppStore()
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleBackButtonClick = () => {
    navigate('/more-info')
  }

  const handleSubmit = async (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault()
    setIsSubmitting(true)

    const hashedPassword = await sha256(userData.password)

    submitUserData({ ...userData, password: hashedPassword })
      .then((resp) => {
        setIsSubmitting(false)

        if (resp.ok) {
          navigate('/success')
        } else {
          navigate('/error')
        }
      }).catch((err: Error) => {
        setIsSubmitting(false)
        console.error('Submit error:', err)
        
        navigate('/error')
      })
  }

  return (
    <Section>
      <H1>CONFIRMATION</H1>
      <StyledUl>
        {confirmOrder.map(({ id, label }) => <li key={id}>{label}: {transformField(id, userData[id])}</li>)}
      </StyledUl>
      <SpinnerWrapper $loading={isSubmitting}><Spinner /></SpinnerWrapper>
      <StyledButtonDiv>
        <Button onClick={handleBackButtonClick} type='button'>BACK</Button>
        <Button onClick={handleSubmit} type='button' disabled={isSubmitting}>SUBMIT</Button>
      </StyledButtonDiv>
    </Section>
  )
}
