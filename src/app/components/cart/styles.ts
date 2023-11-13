'use client'
import styled from 'styled-components'

export const Container = styled.button`
  width: 90px;
  height: 45px;
  border-radius: 8px;
  background: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`

export const Text = styled.p`
  color: #000;
  font-family: 'Montserrat';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
`
