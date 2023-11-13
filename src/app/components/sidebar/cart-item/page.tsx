'use client'

import { ProductType } from "@/types/product";
import { Box, CloseIcon, ItemContainer, ItemImage, ItemName, ItemPrice, Qty, QtyButton, QtyButtonsWrapper, QtyValue, QtyWrapper } from "../styles";
import { useCart } from "@/contexts/cart-context";
import { formatPrice } from "@/app/utils/formatPrice";
type ProductProps = {
  product: ProductType
}

export function CartItem({ product }: ProductProps) {
  const { removeProduct, decreaseProduct, addProduct } = useCart()
  return (
    <ItemContainer>
      <CloseIcon small onClick={() => removeProduct(product.id)}>
        X
      </CloseIcon>
      <Box>
        <ItemImage
          src={product.photo}
          alt='produto'
          width={110}
          height={130}
          quality={100}
        />

        <ItemName>
          {product.name}
        </ItemName>
      </Box>

      <QtyWrapper>
        <Qty>
          Qtd:
        </Qty>

        <QtyButtonsWrapper>
          <QtyButton onClick={() => decreaseProduct(product.id)}>
            -
          </QtyButton>
          <QtyValue>
            {product.quantity}
          </QtyValue>
          <QtyButton onClick={() => addProduct(product)}>
            +
          </QtyButton>
        </QtyButtonsWrapper>
      </QtyWrapper>

      <ItemPrice>
        {formatPrice(product.price)}
      </ItemPrice>

    </ItemContainer>
  )
}