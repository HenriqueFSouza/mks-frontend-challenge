import { CartProvider } from '@/contexts/cart-context'
import { Wrapper } from './styles'
import Header from '../components/header/page'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CartProvider>
      <Wrapper>
        <Header />
        {children}
      </Wrapper>
    </CartProvider>
  )
}
