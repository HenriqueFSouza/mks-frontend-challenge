'use client'

import { Box, Container, DetailsWrapper, PorductTitle, Price, PriceWrapper, ProductDescription, ProductImage } from "./styles";
import { Button } from "../button/page";
import { ProductType, ProductsResponseType } from "@/types/product";
import { useQuery } from '@tanstack/react-query'
import { Skeleton } from "../skeleton/page";
import { formatPrice } from "@/app/utils/formatPrice";

// async function getProducts(): Promise<ProductType[]> {
//   const { products } = await fetch(process.env.NEXT_PUBLIC_API_URL + `/products?page=1&rows=8&sortBy=id&orderBy=DESC`)
//     .then((res) => res.json()) as { products: ProductType[] }
//   return products
// }

export function Product() {

  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { products } = await fetch(process.env.NEXT_PUBLIC_API_URL + `/products?page=1&rows=8&sortBy=id&orderBy=DESC`).
        then((res) => res.json());
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

  return (
    <>
      {data?.map((product: ProductType) => (
        <Container data-testid='container'>
          <DetailsWrapper>
            <ProductImage
              data-testid='product-image'
              src={product.photo}
              alt='produto'
              width={110}
              height={130}
              quality={100}
            />

            <Box>
              <PorductTitle data-testid='product-title'>
                {product.name}
              </PorductTitle>

              <PriceWrapper>
                <Price data-testid='product-price'>
                  {formatPrice(product.price)}
                </Price>
              </PriceWrapper>
            </Box>


            <ProductDescription data-testid='product-description'>
              {product.description}
            </ProductDescription>

          </DetailsWrapper>

          <Button
            label='COMPRAR'
            product={product}
          />
        </Container>
      ))}
    </>
  )
}
