import {ADD_PRODUCT, UPDATE_PRODUCT} from './types';

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