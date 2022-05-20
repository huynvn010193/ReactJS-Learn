import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useInfiniteQuery, useQueryClient } from 'react-query';
import { getInfiniteData, searchProducts } from '../api/productAPI';
import Products from '../components/Products';
import Sorting from '../components/Sorting';
import { useMyContext } from '../context/store';
// import useCustomRouter from '../hooks/useCustomRouter';
// import useInfinityQuery from '../hooks/useInfinityQuery';


const Search = () => {
  const limit = 2;
  const { value } = useParams();
  const { sort } = useMyContext()

  // const [products, setProducts] = useState([])
  // const [stop, setStop] = useState(false)

  // const { pushQuery } = useCustomRouter()

  // const url = searchProducts(value, sort)
  // const { 
  //   btnRender, data, loading, error 
  // } = useInfinityQuery(url, [value, sort], { 
  //   limit: limit, 
  //   stop: stop 
  // })

  // useEffect(() => {
  //   if(!data) return;
  //   setProducts(prev => [...prev, ...data.products])

  //   if(data.products.length < limit)
  //     return setStop(true)
  // },[data, limit])

  // useEffect(() => {
  //   setProducts([])
  //   setStop(false)
  // }, [value, sort])

  const key = `/products?search=${value}&sort=${sort}`;

  const queryClient = useQueryClient();
  queryClient.setQueryData('keys', { k1: '', k2: key });
  
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(key, getInfiniteData, {
    getNextPageParam: (lastPage, pages) => {
      // lastPage.nextCursor,
      const { products } = lastPage;
      if(products.length >= limit) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    }
  });

  return <div>
    <Sorting sort={sort} />
    <div className='products'>
      {
        data?.pages.map((page, index) => (
          <Products
            key={index} 
            data={page.products} 
            loading={isFetching} 
            error={error} 
          />
        ))
      }
    </div>
    <button
      className="btn-load_more"
      onClick={() => fetchNextPage()}
      disabled={!hasNextPage || isFetchingNextPage}
      >
        Load more
      </button>
  </div>;
};

export default Search;
