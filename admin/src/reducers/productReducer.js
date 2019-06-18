import {ADD_PRODUCT, DELETE_PRODUCT, RECEIVE_PRODUCTS, SET_PRODUCT_PAGE, UPDATE_PRODUCT} from "../actions/types";

const initialState = {
  products: [],
  page: [],
  perPage: 15,
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
    case SET_PRODUCT_PAGE:
      const start = action.payload > 1 ? (action.payload - 1) * state.perPage : 0;
      const end = start + state.perPage;
      const page = state.products.slice(start, end).map(product => product.id);
      return { ...state, page };
    case RECEIVE_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};