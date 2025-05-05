import { Button } from "@/components/Button"
import { Spinner } from "@/components/Spinner"
import { useAppStore } from "@/store"
import getFormData from "@/utils/getFormData"
import { removeSpaces } from "@/utils/stringUtils"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { Link } from "react-router"
import { Input, Form, Label, Select, StyledButtonDiv } from "./MoreInfo.styles"


export default function MoreInfo() {
  const { colors, fetchColors, isLoadingColors, userData, updateUserData } = useAppStore()
  const navigate = useNavigate()

  const handleChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    updateUserData({ color: evt.target.value })
  }

  const handleCheboxTick = (evt: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData({ terms: evt.target.checked })
  }

  const handleBackButtonClick = () => {
    navigate('/')
  }

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
      evt.preventDefault()

      const form = evt.currentTarget
      const formData = getFormData(form)
      
      if (!form.checkValidity()) {
        form.reportValidity()
      }
  
      updateUserData(formData)
      navigate('/confirmation')
    }

  useEffect(() => {
    fetchColors().catch(console.error)
  }, [])

  return (
    <section>
      <h1>ADDITIONAL INFO</h1>
      <Form role="form" data-testid="more-info-form" onSubmit={handleSubmit}>

        {isLoadingColors ? <Spinner /> : (
          <Select
          id='color'
          name='color'
          required
          value={userData.color}
          onChange={handleChange}
          disabled={isLoadingColors}
          aria-label='favorite color'
          >
            <option value='default'>SELECT YOUR FAVORITE COLOR</option>
            {colors.map((color) => <option key={removeSpaces(color)} value={removeSpaces(color)}>{color}</option>)}
          </Select>
        )}
        
        <Label>
          <Input name='terms' required type='checkbox' defaultChecked={userData.terms} onChange={handleCheboxTick} />
          <span>I AGREE TO <Link to='/terms'>TERMS AND CONDITIONS.</Link></span>
        </Label>

        <StyledButtonDiv>
          <Button onClick={handleBackButtonClick} type='button'>BACK</Button>
          <Button type='submit'>NEXT</Button>
        </StyledButtonDiv>
      </Form>
    </section>
  )
}
