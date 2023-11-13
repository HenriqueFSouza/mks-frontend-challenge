import Image from 'next/image'
import styled from 'styled-components'

type Props = {
  open?: boolean
  small?: boolean
}
export const Container = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 486px;
  height: 100%;
  background: #0F52BA;
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
  position: fixed;
  top: 0;
  right: 0;
  right: ${({ open }) => open ? '0' : '-100%'};
  transition: ease-in-out 0.5s;
`

export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #0F52BA;
  padding: 30px 22px 40px 45px;
`

export const HeaderWrapper = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`

export const CartTitle = styled.h1`
  color: #FFF;
  font-size: 27px;
  font-weight: 700;
`

export const CloseIcon = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #000;
  color: #FFF;
  cursor: pointer;
  width: ${({ small }) => small ? '18px' : '38px'};
  height: ${({ small }) => small ? '18px' : '38px'};
  font-size: ${({ small }) => small ? '14px' : '20px'};
  font-weight: 400;
  line-height: 15px; 
  position: ${({ small }) => small ? 'absolute' : 'relative'};
  top: ${({ small }) => small ? '-5px' : '0'};
  right: ${({ small }) => small ? '-5px' : '0'};
`
export const Box = styled.div`
  display: flex;
  width: 50%;
  gap: 15px;
  align-items: center;
`
export const TotalValue = styled.p`
  color: #FFF;
  font-size: 28px;
  font-weight: 700;
  line-height: 15px; 
`

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  max-width: 379px;
  height: 95px;
  border-radius: 8px;
  background: #FFF;
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
  position: relative;
`

export const ItemImage = styled(Image)`
  width: 46px;
  height: 57px;
`

export const ItemName = styled.p`
 color: #2C2C2C;
  font-size: 13px;
  font-weight: 400;
  line-height: 17px; 
  max-width: 120px;
`

export const QtyWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Qty = styled.p`
  color: #000;
  font-size: 8px;
  font-weight: 400;
  margin-bottom: 5px;
`

export const QtyButtonsWrapper = styled.div`
  width: 70px;
  height: 25px;
  border-radius: 4px;
  border: 0.3px solid #BFBFBF;
  background: #FFF;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const QtyButton = styled.button`
  width: 25px;
  height: 25px;
  font-size: 16px;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
`
export const QtyValue = styled.div`
  width: 16px;
  height: 16px;
  background: none;
  color: #000;
  font-family: Montserrat;
  font-size: 12px;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 0.5px solid #BFBFBF;
  border-right: 0.5px solid #BFBFBF;
`
export const ItemPrice = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  margin-left: auto;
`
export const FinishButton = styled.button`
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
  background: #000;
  height: 80px;
  font-size: 28px;
  font-weight:600;
  line-height: 15px;
`