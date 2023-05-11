import React from "react";
import './styles.css'


export default function Banner({link, image, name, id}) {

    const onClick = () => {
        window.open(link, '_self');
    };

    return (
        <div 
          className='banner-container'
          onClick={onClick}
          id= {id} 
        >
          <img src={image} alt='banner-image' className='banner-image' 
          /> 
          


        </div>
    );
};