import { render, screen } from '@testing-library/react'
import App from '../App'

test('test test', () => {
  render(<App />)
  const footer = screen.getByText('footer')
  expect(footer).toBeInTheDocument()
})
