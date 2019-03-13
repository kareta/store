import {ADD_PRODUCT, DELETE_PRODUCT, SET_PRODUCT_PAGE, UPDATE_PRODUCT} from "../actions/types";

const initialState = {
  products: [],
  page: [],
  perPage: 15,
};

for (let i = 0; i < 100; i++) {
  initialState.products.push({
    id: i.toString(),
    name: 'Boots ' + i,
    price: 99.99,
  });
}

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
      const start = action.payload > 0 ? action.payload * state.perPage : 0;
      const end = start + state.perPage;
      const page = state.products.slice(start, end).map(product => product.id);
      return { ...state, page };
    default:
      return state;
  }
};