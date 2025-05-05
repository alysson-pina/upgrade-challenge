import userEvent from "@testing-library/user-event"
import { screen, waitForElementToBeRemoved } from '@testing-library/react'
import Home from "./Home"
import { render } from "@/test-utils/renderTest"

const updateMock = jest.fn()
const mockNavigate = jest.fn()

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: () => mockNavigate,
}));

describe('Home page', () => {
  beforeEach(() => {
    render(<Home />, { store: { updateUserData: updateMock } })
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  it('renders home page', () => {  
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
  
  it('receives user data and moves to next screen', async () => {
    const nameInput = screen.getByRole('textbox', { name: 'name' })
    const emailInput = screen.getByRole('textbox', { name: 'email' })
    const passwordInput = screen.getByLabelText('password')
    const nextButton = screen.getByRole('button', { name: /Next/i })

    await userEvent.type(nameInput, 'User')
    await userEvent.type(emailInput, 'test@email.com')
    await userEvent.type(passwordInput, '12345')
    await userEvent.click(nextButton)

    expect(nameInput).toHaveValue('User')
    expect(emailInput).toHaveValue('test@email.com')

    // simulate click on next button
    await userEvent.click(nextButton)
    expect(updateMock).toHaveBeenCalled()

    // screen should change after clicking on next
    expect(mockNavigate).toHaveBeenCalledWith('/more-info')
    waitForElementToBeRemoved(() => screen.queryByText('Sign up'))
  })
})
