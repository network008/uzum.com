import React from "react";
import Skeleton from "../skeleton/Skeleton";
import { PRODUCTS } from "../../static";
import "./Products.css";
import ProductWrapper from "../product-wrapper/ProductWrapper";

function Products() {
  return (
    <div className="container">
      <h2>Products</h2>
      <ProductWrapper data={PRODUCTS}/>
      <Skeleton />
    </div>
  );
}

export default Products;
