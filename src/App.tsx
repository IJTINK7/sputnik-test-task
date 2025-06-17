import React from 'react';
import './App.css';
import {ProductCard, ProductCardCurrency, ProductCardProps} from "./components/ProductCard";
import * as SC from "./styles/ProductCardWrapper.styles"

const mockData: ProductCardProps[] = [
  {
    title: "Название товара 1",
    origin: "Россия",
    price: 34900,
    currency: ProductCardCurrency.RUB,
    imageUrl: "/download.jpeg"
  },
  {
    title: "Название товара 2",
    origin: "Америка",
    price: 124,
    currency: ProductCardCurrency.USD,
    imageUrl: "/download.jpeg"
  },
  {
    title: "Название товара 3",
    origin: "Литва",
    price: 2234,
    currency: ProductCardCurrency.EUR,
    imageUrl: "/download.jpeg"
  },
]

function App() {
  return (
    <SC.ProductCardWrapper>
      {
        mockData?.map((product, index) => <ProductCard key={`${index}-${product.title}`} {...product} /> ) || <div>Товары отсутсвуют</div>
      }
    </SC.ProductCardWrapper>
  );
}

export default App;
