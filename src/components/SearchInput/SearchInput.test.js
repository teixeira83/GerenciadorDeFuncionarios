import { render, screen } from '@testing-library/react'
import SearchInput from './index'

describe('Search Input Component', () => {
  test('Should be started an empty string', () => {

      render(<SearchInput />)
      
      const inputValue = screen.getByPlaceholderText('Pesquisar')
      expect(inputValue).toHaveTextContent('')
  })
})