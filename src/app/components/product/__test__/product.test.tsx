/* eslint-disable testing-library/no-wait-for-multiple-assertions */
import { render, screen, waitFor } from '@testing-library/react'
import Product from '../page'
import Providers from '@/app/utils/react-query-provider'

describe('Product', () => {
  // Displays a loading skeleton while fetching data.
  it('should display a loading skeleton while fetching data', async () => {
    // Arrange
    render(<Product />, { wrapper: Providers })

    // Act
    const skeleton = await screen.findAllByTestId('skeleton')

    // Assert
    expect(skeleton.length).toBe(8)
  })

  it('should render a list of products with details and a "COMPRAR" button', async () => {
    // Arrange
    render(<Product />, { wrapper: Providers })

    // Act
    // No action required.

    // Assert
    // eslint-disable-next-line testing-library/await-async-utils
    waitFor(() => {
      expect(screen.getAllByTestId('container')).toHaveLength(8)
      expect(screen.getAllByTestId('product-image')).toHaveLength(8)
      expect(screen.getAllByTestId('product-title')).toHaveLength(8)
      expect(screen.getAllByTestId('product-price')).toHaveLength(8)
      expect(screen.getAllByRole('button', { name: 'COMPRAR' })).toHaveLength(8)
    })
  })
})
