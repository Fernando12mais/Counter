import App from '../App'
import { render, screen, fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom'

describe('App component tests', () => {
  beforeEach(() => {
    render(<App />)
  })
  it('it should render  the counter component', () => {
    const title = screen.getByText('count is: 0')
    expect(title).toBeInTheDocument()
  })
  it('it should have a increment button', () => {
    const buttonIncrement = screen.getByTestId('increment-button')
    expect(buttonIncrement).toBeInTheDocument()
  })
  it('it should increment counter by 1 after each click', () => {
    const buttonIncrement = screen.getByTestId('increment-button')
    const title = screen.getByText('count is: 0')
    fireEvent.click(buttonIncrement)
    expect(title).toHaveTextContent('count is: 1')
    fireEvent.click(buttonIncrement)
    expect(title).toHaveTextContent('count is: 2')
  })
  it('it should decrement counter by 1 after each click', () => {
    const buttonDecrement = screen.getByTestId('decrement-button')
    const title = screen.getByText('count is: 0')
    fireEvent.click(buttonDecrement)
    expect(title).toHaveTextContent('count is: -1')
    fireEvent.click(buttonDecrement)
    expect(title).toHaveTextContent('count is: -2')
  })
})
