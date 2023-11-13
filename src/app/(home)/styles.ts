'use client'
import styled from 'styled-components'


export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: #FFF;
`

export const Container = styled.div`
  background: #FFF;
  min-height: calc(100vh - 90px);
  display: grid;
  justify-items: center;
  align-items: center;
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: max-content;
  gap: 60px;
`