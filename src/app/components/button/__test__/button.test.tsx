import { fireEvent, render } from '@testing-library/react';
import { Button } from '../page';

const mockProduct = {
  id: 1,
  brand: 'Brand 1',
  name: 'Product 1',
  photo: 'https://mks-sistemas.nyc3.digitaloceanspaces.com/products/hyperxcloudstinger.webp',
  quantity: 2,
  price: '10.00',
  createdAt: '2021-09-30T00:00:00.000Z',
  updatedAt: '2021-09-30T00:00:00.000Z'
};

// Mock the addProduct function
const mockAddProduct = jest.fn();

jest.mock('@/contexts/cart-context', () => ({
  useCart: () => ({
    addProduct: mockAddProduct
  })
}));
describe('Button', () => {
  it('should add product to cart when button is clicked', () => {

    // Render the Button component
    const { getByText } = render(<Button label="COMPRAR" product={mockProduct} />);

    // Simulate a button click
    fireEvent.click(getByText('COMPRAR'));

    // Verify that the addProduct function is called with the correct product
    expect(mockAddProduct).toHaveBeenCalledWith(mockProduct);
  });
});