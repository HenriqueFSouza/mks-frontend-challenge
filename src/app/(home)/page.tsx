import Product from '../components/product/page'
import { Container, ProductsContainer } from './styles'

export default async function Home() {
  return (
    <Container>
      <ProductsContainer>
        <Product />
      </ProductsContainer>
    </Container>
  )
}
