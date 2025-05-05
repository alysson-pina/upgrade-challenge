import { render, screen } from '@testing-library/react'
import App from "./App"

it('renders home page', () => {
  render(<App />)

  const title = screen.getByText('Sign up')
  const nameInput = screen.getByRole('textbox', { name: 'name' })
  const emailInput = screen.getByRole('textbox', { name: 'email' })
  const passwordInput = screen.getByLabelText('password')
  const nextButton = screen.getByRole('button', { name: /Next/i })

  expect(title).toBeInTheDocument()
  expect(nameInput).toBeInTheDocument()
  expect(emailInput).toBeInTheDocument()
  expect(passwordInput).toBeInTheDocument()
  expect(nextButton).toBeInTheDocument()
})
