import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { filterProducts } from '../api/productAPI';
import Products from '../components/Products';
import Sorting from '../components/Sorting';
import { useMyContext } from '../context/store';
import useCustomRouter from '../hooks/useCustomRouter';
import useInfinityQuery from '../hooks/useInfinityQuery';


const Filter = () => {
  const limit = 5;
  const { filter, value } = useParams()
  const { sort } = useMyContext()

  const [products, setProducts] = useState([])
  const [stop, setStop] = useState(false)

  const url = filterProducts(filter, value, sort)
  const { 
    btnRender, data, loading, error 
  } = useInfinityQuery(url, [filter, value, sort], { 
    limit: limit, 
    stop: stop 
  })

  const { pushQuery } = useCustomRouter()

  useEffect(() => {
    if(!data) return;
    setProducts(prev => [...prev, ...data.products])

    if(data.products.length < limit)
      return setStop(true)
  },[data, limit])

  useEffect(() => {
    setProducts([])
    setStop(false)
  }, [filter, value, sort])

  return <div>
    <Sorting sort={sort}
    calback={(sort) => pushQuery({sort})}
     />
    <div className='products'>
      <Products 
      data={products} 
      loading={loading} 
      error={error} 
      />
    </div>

    { btnRender() }
  </div>;
};

export default Filter;
