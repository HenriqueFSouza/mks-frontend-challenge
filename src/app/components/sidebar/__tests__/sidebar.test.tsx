/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render, screen } from '@testing-library/react'
import SideBar from '..'
import '@testing-library/jest-dom'

const mockCartItems = [
  {
    id: 1,
    brand: 'Brand 1',
    name: 'Product 1',
    photo:
      'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp',
    quantity: 2,
    price: '10.00',
    createdAt: '2021-09-30T00:00:00.000Z',
    updatedAt: '2021-09-30T00:00:00.000Z',
  },
]

// Mock the addProduct function
const mockRemoveProduct = jest.fn()
const mockDecreaseProduct = jest.fn()
const mockIncreaseProduct = jest.fn()

jest.mock('@/contexts/cart-context', () => ({
  useCart: () => ({
    cartItems: mockCartItems,
    addProduct: mockIncreaseProduct,
    removeProduct: mockRemoveProduct,
    decreaseProduct: mockDecreaseProduct,
  }),
}))
describe('Sidebar', () => {
  it('should render the cart sidebar with the correct items, title and close button', () => {
    // Arrange
    const { getByText, getByTestId } = render(<SideBar />)

    // Assert
    expect(getByText('Carrinho de compras')).toBeInTheDocument()
    expect(getByTestId('close-button')).toBeInTheDocument()
    expect(getByText('Product 1')).toBeInTheDocument()
    expect(getByText('2')).toBeInTheDocument()
    expect(getByText('R$ 10')).toBeInTheDocument()
    expect(getByTestId('remove-item')).toBeInTheDocument()
  })

  it('should call the addProduct function when the increase button is clicked', () => {
    render(<SideBar />)

    // Act
    fireEvent.click(screen.getByText('+'))

    // Assert
    expect(mockIncreaseProduct).toHaveBeenCalledWith(mockCartItems[0])
  })

  it('should call the decreaseProduct function when the decrease button is clicked', () => {
    render(<SideBar />)

    // Act
    fireEvent.click(screen.getByText('-'))

    // Assert
    expect(mockDecreaseProduct).toHaveBeenCalledWith(1)
  })

  it('should call the removeProduct function when the remove button is clicked', () => {
    // Act
    render(<SideBar />)

    // Act
    fireEvent.click(screen.getByTestId('remove-item'))

    // Assert
    expect(mockRemoveProduct).toHaveBeenCalledWith(1)
  })
})
