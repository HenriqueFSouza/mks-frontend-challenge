'use client'

import { useCart } from '@/contexts/cart-context'
import {
  CartTitle,
  CartWrapper,
  CloseIcon,
  Container,
  FinishButton,
  HeaderWrapper,
  ItemContainer,
  ItemsContainer,
  ItemImage,
  ItemName,
  ItemPrice,
  Qty,
  QtyButton,
  QtyButtonsWrapper,
  QtyValue,
  Box,
  QtyWrapper,
} from './styles'
import { formatPrice } from '@/app/utils/formatPrice'

export default function SideBar() {
  const {
    open,
    cartItems,
    closeSidebar,
    removeProduct,
    decreaseProduct,
    addProduct,
  } = useCart()

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
              <ItemContainer key={product.id}>
                <CloseIcon
                  small
                  onClick={() => removeProduct(product.id)}
                  data-testid="remove-item"
                >
                  X
                </CloseIcon>
                <Box>
                  <ItemImage
                    src={product.photo}
                    alt="produto"
                    width={110}
                    height={130}
                    quality={100}
                  />

                  <ItemName>{product.name}</ItemName>
                </Box>

                <QtyWrapper>
                  <Qty>Qtd:</Qty>

                  <QtyButtonsWrapper>
                    <QtyButton onClick={() => decreaseProduct(product.id)}>
                      -
                    </QtyButton>
                    <QtyValue>{product.quantity}</QtyValue>
                    <QtyButton onClick={() => addProduct(product)}>+</QtyButton>
                  </QtyButtonsWrapper>
                </QtyWrapper>

                <ItemPrice>{formatPrice(product.price)}</ItemPrice>
              </ItemContainer>
            ))}
        </ItemsContainer>
      </CartWrapper>

      <FinishButton>Finalizar compra</FinishButton>
    </Container>
  )
}
