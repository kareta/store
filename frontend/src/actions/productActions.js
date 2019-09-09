import {RECEIVE_PRODUCT_PAGE, SET_PRODUCT_PAGE} from './types';
import axios from 'axios';

export const setProductPage = page => {
  return {
    type: SET_PRODUCT_PAGE,
    payload: page,
  };
};

export const fetchProductPage = page => dispatch => {
  const url = `/products?page=${page}`;
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