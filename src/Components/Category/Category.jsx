import React from "react";
import classes from "./Category.module.css";
import { categoryImage } from "./Category/CategoryInfo";
import CategoryCard from "./CategoryCard";
function Category() {
  return (
    <section className= {classes.category_container}>
      {categoryImage?.map((info,i) => {
        return <CategoryCard data={info} key={i}/>
        
              
      })}
    </section>
  );
}

export default Category;
