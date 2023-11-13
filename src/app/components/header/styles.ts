'use client'

import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background: #0f52ba;
  height: 90px;
  padding: 1.8rem 3rem;
  @media (min-width: 1400px) {
    padding: 1.8rem 10rem;
  }
`

export const LogoImage = styled(Image)`
  width: 180px;
  height: 40px;
`
