import React, { useState, useEffect, useMemo } from 'react';
import { getData, getProducts } from '../api/productAPI';

import Pagination from '../components/Pagination';
import Products from '../components/Products';
import Sorting from '../components/Sorting';
import { useMyContext } from '../context/store';
import useCustomRouter from '../hooks/useCustomRouter';
// import useQuery from '../hooks/useQuery';
import { useQuery } from 'react-query';

const Home = () => {
  const { refresh: refreshing , page, limit, sort } = useMyContext()
  // const [products, setProducts] = useState([])

  const { pushQuery } = useCustomRouter()

  // const url = getProducts(limit, page, sort);

  // const { data, loading, error } = useQuery(url, [refresh], {
  //   saveCache: true
  // })

  const key = `/products?limit=${limit}&page=${page}&sort=${sort}`;
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: key,
    queryFn: getData,
  });

  const totalPages = useMemo(() => {
    if(!data?.count) return 0;
    // setProducts(() => data.products)
    return Math.ceil(data.count/limit)
  }, [data?.count, limit]);
    
  // khi refreshing thay đổi lập tức chạy lại hàm useQuery
  useEffect(() => {
    refetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshing])
  
  return <main>
    <Sorting sort={sort}
    calback={(sort) => pushQuery({page, sort})}
     />
    {data && 
      <Products 
        data={data.products} 
        loading={isLoading} 
        error={error}
      />
    }

    { error && <p style={{textAlign: 'center'}}>{error.message}</p>}
    
    <Pagination totalPages={totalPages}/>
  </main>;
};

export default Home;
