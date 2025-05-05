import { screen } from '@testing-library/react'
import { render } from '@/test-utils/renderTest'
import Error from "./Error"
import userEvent from '@testing-library/user-event'

const mockNavigate = jest.fn()
const mockReset = jest.fn()

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: () => mockNavigate,
}));

describe('Error page tests', () => {
  it('renders error page', () => {
    render(<Error />)

    const title = screen.getByText(/Error!/i)
    const message = screen.getByText('UH OH. SOMETHING WENT WRONG. PLEASE TRY AGAIN LATER.')
    const restartButton = screen.getByRole('button', { name: /Restart/i })

    expect(title).toBeInTheDocument()
    expect(message).toBeInTheDocument()
    expect(restartButton).toBeInTheDocument()
  })

  it('resets state and restarts flow to home page', async () => {
    render(<Error />, { store: { reset: mockReset } })
  
    const restartButton = screen.getByRole('button', { name: /Restart/i })

    await userEvent.click(restartButton)

    expect(mockReset).toHaveBeenCalled()
    expect(mockNavigate).toHaveBeenCalledWith('/')
  })
})
