import React, { useState, useEffect, useRef } from 'react';

const useInview = () => {
  const [inview, setInView] = useState(false);
  const ref = useRef();
   
  useEffect(() => {
    const el = ref.current;

    const observer = new IntersectionObserver(entries => {
      
      // Khi sử dụng hàm IntersectionObserver => tiến hành quan sát. Khi button loadmore xuất hiện trên màn hình
      // thì thuộc tính isIntersecting => true. Khi biến mất thì giá trị => false
      setInView(entries[0].isIntersecting);
    })

    if(el) observer.observe(el);

    return () => {
      if(el) observer.unobserve(el);
    }

  }, []);

  return (
    { inview, ref }
  )
}

export default useInview;