import {fetchProduct} from '../../store/action/ProductAction';
import {useSelector, useDispatch} from 'react-redux';
import { useState,useEffect } from "react";
import React from 'react'


export function useProducts() {




    const dispatch = useDispatch();

    
    const Products = useSelector(state => state.ProductReducer.products)
    console.log("students from studentReducer",Products);
      
    useEffect(() => {
        //    action call for fetching students
        console.log("call the action in custom hook for fetching setudents from firebase");
        dispatch(fetchProduct())
        }, [])

   
     

return[Products]
}