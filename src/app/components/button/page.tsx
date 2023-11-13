'use client'

import { ProductType } from '@/types/product'
import { Icon, StyledButton } from './styles'
import { useCart } from '@/contexts/cart-context'

export default function Button({
  label,
  product,
}: {
  label: string
  product: ProductType
}) {
  const { addProduct } = useCart()

  return (
    <StyledButton onClick={() => addProduct(product)}>
      <Icon
        src="/shopping-bag.svg"
        alt="icone-compra"
        width={100}
        height={100}
      />
      {label}
    </StyledButton>
  )
}
