import React from 'react';
import {formatPrice} from "./formatPrice";
import * as SC from "../styles/ProductCard.styles";

export const enum ProductCardCurrency {
  RUB = 'RUB',
  USD = 'USD',
  EUR = 'EUR'
}

export interface ProductCardProps {
  title: string;
  origin: string;
  price: number;
  currency: ProductCardCurrency
  imageUrl: string;
}

export const ProductCard = ({title, origin, price, currency, imageUrl}: ProductCardProps) => {
  return (
    <SC.ProductCard>
      <SC.ProductCardImage src={imageUrl} alt={title}/>
      <SC.ProductCardInfo>
        <SC.ProductCardOrigin>{origin}</SC.ProductCardOrigin>
        <SC.ProductCardTitle>{title}</SC.ProductCardTitle>
        <SC.ProductCardPrice>{formatPrice(price, currency)}</SC.ProductCardPrice>
      </SC.ProductCardInfo>
    </SC.ProductCard>
  );
};