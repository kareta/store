import {ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT} from "../actions/types";

const initialState = {
  products: [
    {
      id: '1',
      name: 'Boots',
      price: 99.99,
    },
    {
      id: '2',
      name: 'Shoes',
      price: 79.99,
    },
    {
      id: '3',
      name: 'Loafers',
      price: 49.99,
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products],
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map(
          product => product.id !== action.payload.id
            ? product : (product = action.payload)
        ),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload),
      };
    default:
      return state;
  }
};