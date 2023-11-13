'use client'

import { useCart } from '@/contexts/cart-context'
import CartItem from './cart-item/page'
import {
  CartTitle,
  CartWrapper,
  CloseIcon,
  Container,
  FinishButton,
  HeaderWrapper,
  ItemsContainer,
} from './styles'

export default function SideBar() {
  const { open, cartItems, closeSidebar } = useCart()

  return (
    <Container open={open}>
      <CartWrapper>
        <HeaderWrapper>
          <CartTitle>Carrinho de compras</CartTitle>

          <CloseIcon onClick={closeSidebar} data-testid="close-button">
            X
          </CloseIcon>
        </HeaderWrapper>

        <ItemsContainer>
          {cartItems &&
            cartItems.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
        </ItemsContainer>
      </CartWrapper>

      <FinishButton>Finalizar compra</FinishButton>
    </Container>
  )
}
