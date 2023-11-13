'use client'

import Image from 'next/image'
import styled from 'styled-components'

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #fff;
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  background: #0f52ba;
  height: 30px;
  border-radius: 0px 0px 8px 8px;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;

  &:hover {
    filter: brightness(0.9);
  }
`

export const Icon = styled(Image)`
  width: 12px;
  height: 12px;
`
