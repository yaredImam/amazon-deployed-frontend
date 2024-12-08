import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../API/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import { ClipLoader } from "react-spinners";
import Loader from "../../Components/Loader/Loader";
function ProductDetail() {
  const { productID } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${productUrl}/products/${productID}`)
      .then((res) => {
        setLoading(false);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          key={productID}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </Layout>
  );
}

export default ProductDetail;
