import userEvent from "@testing-library/user-event"
import { screen, waitFor } from '@testing-library/react'
import MoreInfo from "./MoreInfo"
import { render } from "@/test-utils/renderTest"

const updateMock = jest.fn()
const mockNavigate = jest.fn()

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: () => mockNavigate,
}));

describe('Home page', () => {
  beforeEach(() => {
    render(<MoreInfo />, { store: { updateUserData: updateMock, colors: ['black', 'white'] }})
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('renders more info page', () => {
    const title = screen.getByText(/Additional Info/i)
    const favoriteColor = screen.getByText(/Select your favorite color/i)
    const consent = screen.getByText(/I Agree to/i)
    const colorDropdown = screen.getByRole('combobox', { name: /color/i } )
    const termsLink = screen.getByRole('link', { name: /Terms and Conditions/i } )
    const checkbox = screen.getByRole('checkbox', { name: /terms/i })
    const backButton = screen.getByRole('button', { name: /back/i })
    const nextButton = screen.getByRole('button', { name: /next/i })
  
    expect(colorDropdown).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(favoriteColor).toBeInTheDocument()
    expect(consent).toBeInTheDocument()
    expect(termsLink).toBeInTheDocument()
    expect(checkbox).toBeInTheDocument()
    expect(backButton).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()
  })
  
  
  it('updates user data and moves to next screen', async () => {
    const checkbox = screen.getByRole('checkbox', { name: /terms/i })
    const colorDropdown = screen.getByRole('combobox', { name: /color/i } )
    const nextButton = screen.getByRole('button', { name: /next/i })

    await userEvent.selectOptions(colorDropdown, screen.getByText(/black/i))

    expect(updateMock).toHaveBeenCalledWith({ color: 'black' })
  
    await userEvent.click(checkbox)
    expect(updateMock).toHaveBeenCalledWith({ terms: true })

    // simulate click on next button
    await userEvent.click(nextButton)

    // screen should change after clicking on next
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/confirmation')
    })
  })

  it('goes back to previous screen', async () => {
    const backButton = screen.getByRole('button', { name: /back/i })

    // simulate click on next button
    await userEvent.click(backButton)

    // screen should change after clicking on next
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/')
    })
  })
})
