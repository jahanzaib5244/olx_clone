import {FETCH_PRODUCT} from '../action/Types';



let initialState = {
    error:'',
    products: [],
  };

export default function ProductReducer(state = initialState, action) {
    switch (action.type) {

        case FETCH_PRODUCT:
          console.log("data in reducer from fetch action", action.payload);
          // work  / logic will be her
          return {
            ...state,
            products: action.payload,
          };
          default:
      return state;
    }

}
