import { Container, LogoImage } from './styles'
import Cart from '../cart/page'
import Link from 'next/link'
import SideBar from '../sidebar'

export function Header() {
  return (
    <Container>
      <Link href="/">
        <LogoImage
          src="/logo.png"
          alt="logo"
          width={200}
          height={200}
          quality={100}
        />
      </Link>

      <Cart />
      <SideBar />
    </Container>
  )
}
