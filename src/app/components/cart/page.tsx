'use client'

import Image from "next/image"
import { Container, Text } from "./styles"
import { useCart } from '@/contexts/cart-context'


export default function Cart() {
  const { cartItems, openSidebar } = useCart()

  return (
    <Container onClick={openSidebar}>
      <Image
        src='/cart.svg'
        alt='icone-carrinho'
        width={20}
        height={20}
      />
      <Text>{cartItems.length}</Text>
    </Container>
  )
}