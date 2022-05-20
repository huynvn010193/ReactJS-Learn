import React from 'react';
import { useParams } from 'react-router-dom'
import { getData } from '../api/productAPI';
import ProductInfo from '../components/ProductInfo';
// import useQuery from '../hooks/useQuery';

import { useQuery, useQueryClient } from 'react-query';


const ProductDetail = () => {
  const { id } = useParams();

  const queryClient = useQueryClient();
  const keys = queryClient.getQueryData('keys');
  
  // const url = getOneProduct(id);

  // const { data, loading, error } = useQuery(url);
  const key = `/products/${id}`;
  const { data, isLoading, error, refetch } = useQuery(key, getData,{
    // khi id tồn tại mới chạy.
    enabled: !!id,
    placeholderData: () => {
      if(keys?.k1) {
        const data = queryClient.getQueryData(keys.k1);
        const product = data.products.find(d => d._id === id);
        return product;
      }
      if(keys?.k2) {
        let product;
        const pages = queryClient.getQueryData(keys.k2).pages;
        console.log(pages);
      }
    }
  });

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
