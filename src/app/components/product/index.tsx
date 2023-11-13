/* eslint-disable prettier/prettier */
'use client'

import {
  Box,
  Container,
  DetailsWrapper,
  Icon,
  PorductTitle,
  Price,
  PriceWrapper,
  ProductDescription,
  ProductImage,
  StyledButton,
} from './styles'
import { ProductType } from '@/types/product'
import { useQuery } from '@tanstack/react-query'
import Skeleton from '../skeleton'
import { formatPrice } from '@/app/utils/formatPrice'
import { useCart } from '@/contexts/cart-context'


export default function Product() {
  const { addProduct } = useCart()

  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { products } = await fetch(
        process.env.NEXT_PUBLIC_API_URL +
        `/products?page=1&rows=8&sortBy=id&orderBy=DESC`,
      ).then((res) => res.json())
      return products as ProductType[]
    },
  })

  if (isLoading) {
    const products = Array.from({ length: 8 })
    return (
      <>
        {products.map((_, index) => (
          <Skeleton key={index} />
        ))}
      </>
    )
  }

  if (error) {
    return <p>Erro ao carregar os produtos</p>
  }

  return (
    <>
      {data?.map((product: ProductType) => (
        <Container data-testid="container" key={product.id}>
          <DetailsWrapper>
            <ProductImage
              data-testid="product-image"
              src={product.photo}
              alt="produto"
              width={110}
              height={130}
              quality={100}
            />

            <Box>
              <PorductTitle data-testid="product-title">
                {product.name}
              </PorductTitle>

              <PriceWrapper>
                <Price data-testid="product-price">
                  {formatPrice(product.price)}
                </Price>
              </PriceWrapper>
            </Box>

            <ProductDescription data-testid="product-description">
              {product.description}
            </ProductDescription>
          </DetailsWrapper>

          <StyledButton onClick={() => addProduct(product)}>
            <Icon
              src="/shopping-bag.svg"
              alt="icone-compra"
              width={100}
              height={100}
            />
            COMPRAR
          </StyledButton>
        </Container>
      ))}
    </>
  )
}
