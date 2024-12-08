import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../API/endPoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";
function Results() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setLoading(false);

        setProducts(res.data);
      })
      .catch((err) => {
        setLoading(false);

        console.log(err);
      });
  }, []);
  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category /{categoryName}</p>
          <div className={classes.product_container}>
            {products.map((product, i) => {
              return <ProductCard key={i} product={product} renderAdd={true} />;
            })}
          </div>
        </section>
      )}
    </Layout>
  );
}

export default Results;
