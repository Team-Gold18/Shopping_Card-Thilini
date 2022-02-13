import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { useDispatch } from "react-redux";
import {setProducts} from '../redux/actions/productAction'

const ProductListing = () => {
  {
    /* access the reduct store */
  }
  const products = useSelector((state) => state);
  //   console.log(products);
  const dispatch=useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("error", err);
      });
    dispatch( setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

console.log("products",products)
  return (
    <div className="ui grid container">
      <br />
      <h1>
        <ProductComponent />
      </h1>
    </div>
  );
};

export default ProductListing;
