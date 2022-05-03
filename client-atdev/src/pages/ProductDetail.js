import React from 'react';
import { useParams } from 'react-router-dom'
import { getData } from '../api/productAPI';
import ProductInfo from '../components/ProductInfo';
// import useQuery from '../hooks/useQuery';

import { useQuery } from 'react-query';


const ProductDetail = () => {
  const { id } = useParams();
  // const url = getOneProduct(id);

  // const { data, loading, error } = useQuery(url);
  const key = `/products/${id}`;
  const { data, isLoading, error } = useQuery(key, getData);

  return <main>
    { data && <ProductInfo 
      product={data}
      loading={isLoading}
      error={error} 
    />}
    

  { error && <p style={{textAlign: 'center'}}>{error.message}</p>}

  </main>;
};

export default ProductDetail;
