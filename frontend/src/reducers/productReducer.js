import {
  RECEIVE_PRODUCT_PAGE,
  SET_PRODUCT_PAGE,
} from "../actions/types";
import _ from 'lodash';

const initialState = {
  products: [],
  page: [],
  pageCount: 1,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT_PAGE: {
      const start = action.payload > 1 ? (action.payload - 1) * state.perPage : 0;
      const end = start + state.perPage;
      const page = state.products.slice(start, end).map(product => product.id);
      return { ...state, page };
    }
    case RECEIVE_PRODUCT_PAGE: {
      const products = _.unionBy(state.products, action.payload.products, 'id');
      const pageCount = action.payload.pageCount;
      const page = action.payload.products.map(product => product.id);
      return { ...state, products, pageCount, page };
    }
    default:
      return state;
  }
};