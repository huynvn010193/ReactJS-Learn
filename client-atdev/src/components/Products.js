import React from 'react';
import ProductCard from './ProductCard';

const Products = ({ data }) => {

  return <>
      {
        data.map(product => (
          <ProductCard key={product._id} product={product} />
        ))
      }
  </>;
};

export default Products;
