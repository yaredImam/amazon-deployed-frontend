import React from 'react'
import classes from "./Carousel.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { imgs } from './images/data'
function CarouselEffect() {
  return (
    <div>
        <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}>
    {imgs?.map((singleItem,i)=>{
        return(
            <img src={singleItem} alt="carousel img" key={i} />
        )
    })}
        </Carousel>
        <div className={classes.hero_img}>
            
        </div>
      
    </div>
  )
}

export default CarouselEffect
