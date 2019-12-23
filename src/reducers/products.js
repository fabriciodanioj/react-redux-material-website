import { INITIAL_STATE } from '../static/state';

export function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        data: [...state.products, action.product],
      };
    default:
      return state;
  }
}
