import {ADD_PRODUCT, DELETE_PRODUCT, SET_PRODUCT_PAGE, UPDATE_PRODUCT} from './types';

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