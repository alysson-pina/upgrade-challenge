import userEvent from "@testing-library/user-event";
import { screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import Confirmation from "./Confirmation"
import { render } from "@/test-utils/renderTest";
import { act } from "react";

const mockData = { name: 'Test', email: 'a@bcd.com', color: 'Black', password: '12345', terms: true }
const mockNavigate = jest.fn()

jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: () => mockNavigate,
}));

describe('Confirmation page', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ success: true }),
      })
    ) as jest.Mock;
  })

  afterEach(() => {
    jest.restoreAllMocks();
  })

  it('renders confirmation page', () => {
    render(<Confirmation />, { store: { userData: mockData } })

    const title = screen.getByText(/Confirmation/i)
    const nameLabel = screen.getByText(/First Name/i)
    const nameValue = screen.getByText(mockData.name, { exact: false })
    const emailLabel = screen.getByText(/Email/i)
    const emailValue = screen.getByText(mockData.email, { exact: false })
    const passwordLabel = screen.getByText(/Password/i)
    const termsLabel = screen.getByText(/Terms and Conditions/i)
    const termsValue = screen.getByText(/Agreed/i)
  
    expect(title).toBeInTheDocument()
    expect(nameLabel).toBeInTheDocument()
    expect(nameValue).toBeInTheDocument()
    expect(emailLabel).toBeInTheDocument()
    expect(emailValue).toBeInTheDocument()
    expect(passwordLabel).toBeInTheDocument()
    expect(termsLabel).toBeInTheDocument()
    expect(termsValue).toBeInTheDocument()
  })
  
  it('submits user data successfully', async () => {
    render(<Confirmation />, { store: { userData: mockData } })

    const submitButton = screen.getByRole('button', { name: /Submit/i })

    await userEvent.click(submitButton);
    await waitFor(() => {
      const [url, options] = (fetch as jest.Mock).mock.calls[0];
      const body = JSON.parse(options.body);
      
      expect(url).toBe('http://localhost:3001/api/submit');
      expect(options.method.toLowerCase()).toBe('post');
      
      expect(body).toEqual({
        name: mockData.name,
        email: mockData.email,
        color: mockData.color,
        terms: true,
        password: expect.stringMatching(/.+/)
      });
    })

    // screen should change after clicking on submit
    expect(mockNavigate).toHaveBeenCalledWith('/success')
    waitForElementToBeRemoved(() => screen.queryByText(/Confirmation/i));
  })

  it('loads error page in case of bad data', async () => {
    render(<Confirmation />, { store: { userData: { color: '', email: '', name: '', password: '', terms: false } } })

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ success: false }),
      })
    ) as jest.Mock;

    const submitButton = screen.getByRole('button', { name: /Submit/i })

    await act(async () => {
      await userEvent.click(submitButton);
    })

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/error');
    });

    // screen should change after clicking on submit
    waitForElementToBeRemoved(() => screen.queryByText(/Confirmation/i));
  })

  it('loads error page in case of network errors', async () => {
    render(<Confirmation />, { store: { userData: mockData } })

    global.fetch = jest.fn(() =>
      Promise.reject({
        ok: false,
        json: () => Promise.resolve(),
      })
    ) as jest.Mock;

    const submitButton = screen.getByRole('button', { name: /Submit/i })

    await userEvent.click(submitButton);
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('/error');
    });

    // screen should change after clicking on submit
    waitForElementToBeRemoved(() => screen.queryByText(/Confirmation/i));
  })
})
