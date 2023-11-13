import { fireEvent, render, screen } from '@testing-library/react'
import CartItem from '../page'
import '@testing-library/jest-dom'

const mockProduct = {
  id: 1,
  brand: 'Brand 1',
  name: 'Product 1',
  photo:
    'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp',
  quantity: 2,
  price: '10.00',
  createdAt: '2021-09-30T00:00:00.000Z',
  updatedAt: '2021-09-30T00:00:00.000Z',
}

// Mock the addProduct function
const mockRemoveProduct = jest.fn()
const mockDecreaseProduct = jest.fn()
const mockIncreaseProduct = jest.fn()

jest.mock('@/contexts/cart-context', () => ({
  useCart: () => ({
    addProduct: mockIncreaseProduct,
    removeProduct: mockRemoveProduct,
    decreaseProduct: mockDecreaseProduct,
  }),
}))

describe('CartItem', () => {
  // Renders the product image, name, quantity, price and remove button.
  it('should render the product image, name, quantity, price and remove button', () => {
    // Act
    render(<CartItem product={mockProduct} />)

    // Assert
    expect(screen.getByText('Product 1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('R$ 10')).toBeInTheDocument()
    expect(screen.getByText('X')).toBeInTheDocument()
  })

  // Clicking on the remove button calls the removeProduct function from the cart context with the product id.
  it('should call the removeProduct function when the remove button is clicked', () => {
    // Act
    render(<CartItem product={mockProduct} />)
    fireEvent.click(screen.getByText('X'))

    // Assert
    expect(mockRemoveProduct).toHaveBeenCalledWith(1)
  })

  // Clicking on the increase button calls the addProduct function from the cart context with the product.
  it('should call the addProduct function when the increase button is clicked', () => {
    render(<CartItem product={mockProduct} />)

    // Act
    fireEvent.click(screen.getByText('+'))

    // Assert
    expect(mockIncreaseProduct).toHaveBeenCalledWith(mockProduct)
  })

  // Clicking on the decrease button calls the decreaseProduct function from the cart context with the product id.
  it('should call the decreaseProduct function when the decrease button is clicked', () => {
    render(<CartItem product={mockProduct} />)

    // Act
    fireEvent.click(screen.getByText('-'))

    // Assert
    expect(mockDecreaseProduct).toHaveBeenCalledWith(1)
  })
})
