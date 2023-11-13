import Product from '../components/product'
import { Container, ProductsContainer } from './styles'

export default function Home() {
  return (
    <Container>
      <ProductsContainer>
        <Product />
      </ProductsContainer>
    </Container>
  )
}
