import {ADD_PRODUCT,UPDATE_PRODUCT,DELETE_PRODUCT,FETCH_PRODUCT} from './Types';
import {db} from '../../config/firebaseconfig';




export const fetchProduct = () => async (dispatch, previouState) => {
    try {
      
      let GetProducts = await db.collection("products").get();
      let Products = [];
      GetProducts.forEach((doc) => {
        Products.push({
          docID: doc.id,
          ...doc.data(),
        });
      });
  
      console.log("data from firebase into action", Products);
      dispatch({
        type: FETCH_PRODUCT,
        payload: Products,
      });
    }
     catch (error) {
      console.log("error", error);
      alert(error);
    } 
  };