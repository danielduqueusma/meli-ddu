import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Search from './search'
import { BrowserRouter as Router } from 'react-router-dom'

beforeEach(() => {
  render(
    <Router>
      <Search></Search>
    </Router>
  )
})

test('Renders Search component', () => {})

test('Renders input placeholder component', () => {
  const placeholder = screen.getByPlaceholderText(/nunca dejes de buscar/i)
  expect(placeholder).toBeInTheDocument()
})

test('Should search a product', async () => {
  const placeholder = screen.getByPlaceholderText(/nunca dejes de buscar/i)

  fireEvent.change(placeholder, {
    target: { value: 'Games' }
  })
  await waitFor(() => {
    expect(placeholder.value).toBe('Games')
  })
})

test('Should search with click', () => {
    const { container } = render(<Router>
        <Search></Search>
      </Router>);
    fireEvent.click(container.querySelector('.icon'));

})
