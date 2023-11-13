'use client'

import Image from 'next/image'
import styled from 'styled-components'

export const Container = styled.div`
  width: 240px;
  height: 280px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
`
export const DetailsWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 15px;
  background: #fff;
`
export const ProductImage = styled(Image)`
  &:hover {
    transform: scale(1.05);
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
`
export const PorductTitle = styled.h1`
  color: #2c2c2c;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
`

export const Box = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const PriceWrapper = styled.div`
  height: 26px;
  border-radius: 5px;
  background: #373737;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`

export const Price = styled.p`
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
`
export const DescriptionWrapper = styled.div`
  height: 40px;
  width: 100%;
  // add ellipsis to the text
  overflow: hidden;
  text-overflow: ellipsis;
`
export const ProductDescription = styled.p`
  color: #2c2c2c;
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
`
