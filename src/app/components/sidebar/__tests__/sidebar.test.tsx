/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react'
import SideBar from '../page'

describe('Sidebar', () => {
  it('should render the cart sidebar with the correct title and close button', () => {
    // Arrange
    const { getByText, getByTestId } = render(<SideBar />)

    // Act
    const titleElement = getByText('Carrinho de compras')
    const closeButton = getByTestId('close-button')

    // Assert
    expect(titleElement).toBeInTheDocument()
    expect(closeButton).toBeInTheDocument()
  })
})
