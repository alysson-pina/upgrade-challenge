import { Button } from "@/components/Button"
import { useAppStore } from "@/store/store"
import getFormData from "@/utils/getFormData"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { Section, Form } from "./Home.styles"

export default () => {
  const { userData: { name, email, password }, updateUserData, fetchColors, isLoadingColors } = useAppStore()
  const navigate = useNavigate()

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()

    const form = evt.currentTarget
    const formData = getFormData(form)
    
    if (!form.checkValidity()) {
      form.reportValidity()
    }

    updateUserData(formData)
    navigate('/more-info')
  }

  useEffect(() => {
    if (!isLoadingColors) {
      fetchColors()
    }
  }, [])

  return (
  <Section>
    <h1>Sign up</h1>
    <Form onSubmit={handleSubmit}>
      <input name="name" required placeholder="FIRST NAME" type="text" aria-label="name" min={2} defaultValue={name} />
      <input name="email" required placeholder="EMAIL" type="email" aria-label="email" minLength={6} defaultValue={email}  />
      <input name="password" required placeholder="PASSWORD" type="password" aria-label="password" min={4} defaultValue={password} />
      <Button type="submit">NEXT</Button>
    </Form>
  </Section>
)}
