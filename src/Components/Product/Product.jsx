import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
import Loader from "../Loader/Loader";

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setLoading(false);

        //   console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        setLoading(false);

        console.log(err);
      });
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className={classes.product_container}>
          {products.map((product, i) => {
            return <ProductCard product={product} renderAdd={true} />;
          })}
        </section>
      )}
    </>
  );
}

export default Product;
