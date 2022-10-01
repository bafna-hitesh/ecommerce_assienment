import React from 'react';

const Product = ({ product }) => {
  
  return (
    <div className='product-card'>
      <div className='product-image'>
        <img className='product-image card-img' src={product.image} alt='' />
      </div >
      <div className='product-details'>
        <h3 className='product-heading'>
        <div  id='product-title'>
            {product.name}
        </div>
        <div  id='product-brand-title'>
            {product.brandName}
        </div>
        </h3>
        <h3 className='product-heading'>
        <div  id='product-description'>
            {product.description}
        </div>
        </h3>
        <div className='rating'>
          <span>
            <i className='fas fa-star'></i>
          </span>
          <span>
            <strong>{product.ratings}.0</strong>/5.0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;

