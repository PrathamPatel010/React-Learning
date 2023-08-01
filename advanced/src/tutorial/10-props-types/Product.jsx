import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from '../../assets/default-img.png';

const Product = ({image,name,price}) => {
    const url = image && image.url;
    console.log(image,name,price);
    return(
        <article className="container">
            <img src={url || defaultImg} className="img img-fluid"  alt={name}/>
            <h4>{name}</h4>
            <p>${price || 3.99}</p>
        </article>
    )
}

Product.propTypes = {
    image:PropTypes.object.isRequired,
    name:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
};


// This is one of the approach. other is to use short-cirtcuit operators.
// Product.defaultProps = {
//     name:'heaven',
//     price:500,
//     image:{
//         url:defaultImg,
//     },
// }

export default Product;