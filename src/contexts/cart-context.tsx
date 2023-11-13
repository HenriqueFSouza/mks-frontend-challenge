'use client'

import { ProductType } from '@/types/product'
import { createContext, useContext, useState } from 'react'

export interface CartContextProps {
  open: boolean
  cartItems: ProductType[]
  openSidebar: () => void
  closeSidebar: () => void
  addProduct: (product: ProductType) => void
  removeProduct: (productId: number) => void
  decreaseProduct: (productId: number) => void
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState<boolean>(false)
  const [cartItems, setCartItems] = useState<ProductType[]>([])

  function closeSidebar() {
    setOpen(false)
  }

  function openSidebar() {
    setOpen(true)
  }

  function addProduct(product: ProductType) {
    setCartItems((state) => {
      const productInCart = state.some((prod) => prod.id === product.id)

      if (productInCart) {
        return state.map((prod) => {
          if (prod.id === product.id) {
            return { ...prod, quantity: prod.quantity + 1 }
          } else {
            return prod
          }
        })
      } else {
        return [...state, { ...product, quantity: 1 }]
      }
    })
  }

  function removeProduct(productId: number) {
    const newCart = cartItems.filter((product) => product.id !== productId)
    setCartItems(newCart)
  }

  function decreaseProduct(productId: number) {
    const cartIndex = cartItems.findIndex((product) => product.id === productId)

    if (cartItems[cartIndex].quantity === 1) {
      removeProduct(productId)
    } else {
      const newCart = cartItems.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: product.quantity - 1 }
        } else {
          return product
        }
      })
      setCartItems(newCart)
    }
  }

  return (
    <CartContext.Provider
      value={{
        open,
        cartItems,
        openSidebar,
        closeSidebar,
        addProduct,
        removeProduct,
        decreaseProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
