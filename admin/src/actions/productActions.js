import {ADD_PRODUCT, DELETE_PRODUCT, RECEIVE_PRODUCTS, SET_PRODUCT_PAGE, UPDATE_PRODUCT} from './types';
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

export const fetchProducts = () => dispatch => {
    return axios.get('http://localhost:3001/api/products').then(res => {
        dispatch(receiveProducts(res.data));
        dispatch(setProductPage(1));
    });
};

export const receiveProducts = (json) => {
    return {
        type: RECEIVE_PRODUCTS,
        payload: json,
    };
};