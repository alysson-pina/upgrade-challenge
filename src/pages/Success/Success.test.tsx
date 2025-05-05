import { screen } from '@testing-library/react'
import { render } from '@/test-utils/renderTest'
import Success from "./Success"
import userEvent from '@testing-library/user-event'

const mockReset = jest.fn()
const mockNavigate = jest.fn()

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: () => mockNavigate,
}));

describe('Success page tests', () => {
  it('renders success page', () => {
    render(<Success />)
  
    const title = screen.getByText('SUCCESS!')
    const message = screen.getByText('YOU SHOULD RECEIVE A CONFIRMATION EMAIL SOON.')
    const restartButton = screen.getByRole('button', { name: /Restart/i })
  
    expect(title).toBeInTheDocument()
    expect(message).toBeInTheDocument()
    expect(restartButton).toBeInTheDocument()
  })

  it('resets state and restarts flow to home page', async () => {
    render(<Success />, { store: { reset: mockReset } })
  
    const restartButton = screen.getByRole('button', { name: /Restart/i })

    await userEvent.click(restartButton)

    expect(mockReset).toHaveBeenCalled()
    expect(mockNavigate).toHaveBeenCalledWith('/')
  })
})

