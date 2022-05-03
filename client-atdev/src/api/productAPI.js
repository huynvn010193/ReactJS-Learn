import axios from 'axios';
import { toast } from 'react-toastify';

const handleError = (err) => {
  if(err.response.data.msg) {
    toast.error(err.response.data.msg);
    throw new Error(err.response.data.msg);
  } else {
    toast.error(err.message);
    throw new Error(err.message);
  }
}

export const getData = async ({ queryKey }) => {
  try {
    const res = await axios.get(`${queryKey[0]}`);
    return res.data;
  } catch (err) {
    // có 2 loại lỗi, là lỗi lập trình và lỗi hệ thống.
    console.log({err});
    handleError(err);
  }
  
}

export const getProducts = (limit, page, sort) => {
  return `/products?limit=${limit}&page=${page}&sort=${sort}`;
};

export const getOneProduct = (id) => {
  return `/products/${id}`;
};

export const searchProducts = (value, sort) => {
  return `/products?search=${value}&sort=${sort}`;
};

export const filterProducts = (filter, value, sort) => {
  return `/products?price[${filter}]=${value}&sort=${sort}`;
};

export const createProduct = async (data) => {
  return axios.post('/products', data)
};

export const updateProduct = async (data) => {
  return axios.put(`/products/${data.id}`, data)
};

export const deleteProduct = async (id) => {
  return axios.delete(`/products/${id}`)
};

