import {ADD_PRODUCT, DELETE_PRODUCT, RECEIVE_PRODUCT_PAGE, SET_PRODUCT_PAGE, UPDATE_PRODUCT} from './types';
import axios from 'axios';

export const addProduct = product => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const updateProduct = product => {
  return {
    type: UPDATE_PRODUCT,
    payload: product,
  };
};

export const deleteProduct = id => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};

export const setProductPage = page => {
  return {
    type: SET_PRODUCT_PAGE,
    payload: page,
  };
};

export const fetchProductPage = page => dispatch => {
  const url = `http://localhost:3001/api/products?page=${page}`;
  return axios.get(url).then(res => {
    const payload = {
      products: res.data.result,
      pageCount: res.data.pages,
    };
    dispatch(receiveProductPage(payload));
  });
};

export const receiveProductPage = payload => {
  return {
    type: RECEIVE_PRODUCT_PAGE,
    payload,
  };
};