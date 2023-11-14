export function formatPrice(price: string, quantity?: number) {
  if (quantity) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(Number(price) * quantity)
  } else {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(Number(price))
  }
}
