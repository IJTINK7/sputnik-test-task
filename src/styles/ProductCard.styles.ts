import {styled} from '@mui/material/styles';

export const ProductCard = styled('div')`
  flex-basis: calc(25% - 6px);
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #EEE;
  background: #fafafa;
  
  @media (max-width: 768px) {
    flex-basis: calc(50% - 4px);
  }
  
  @media (max-width: 500px) {
    flex-basis: 100%;
  }
`

export const ProductCardImage = styled('img')`
  width: 100%;
  height: auto;
  object-fit: cover;
`

export const ProductCardInfo = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
  padding: 8px;
`
export const ProductCardOrigin = styled('div')`
  font-size: 12px;
  font-weight: lighter;
  color: #777;
`
export const ProductCardTitle = styled('div')`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
`
export const ProductCardPrice = styled('div')`
  font-size: 18px;
  margin-top: 4px;
  padding-top: 8px;
  font-weight: 600;
  white-space: nowrap;
  border-top: 1px solid #eee;
`

