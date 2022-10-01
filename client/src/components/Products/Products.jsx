import React from 'react';

import Product from './Product';
import './Products.css';

const Products = ({product}) => {
 const [value, setValue] = React.useState([]);

 const options = [
  { label: 'SORT BY', value: '' },
  { label: 'Men', value: 'Mens' },
  { label: 'Women', value: 'women' },
  { label: 'Denim', value: 'Denim' },
  { label: 'IndoPrimo', value: 'IndoPrimo' },
  { label: 'Campus', value: 'Campus' },
  { label: 'Addidas', value: 'Addidas' },
  { label: 'Mizago', value: 'Mizago' },
  { label: 'Harpa', value: 'Harpa' },
  { label: 'Montrez', value: 'Montrez' },
];

const handleChange = (event) => {
  setValue(event.target.value);
};

const filterData = product.filter((item)=> {
  return value.includes(item.brandName) || value.includes(item.category)
            
})
return (
  <>
  <div className='dropdown-container'>
      <label >
        <select value={value} onChange={handleChange} multiple={false}>
          {options.map((option) => (
            <option value={option.value} >{option.label}</option>
          ))}
        </select>
      </label>
    </div>
  <div className='products-container'>
    {
    value.length > 0 ? 
    filterData.map((product) => (
      <Product key={product._id} product={product} />
    ))
    :
    product.map((product) => (
      <Product key={product._id} product={product} />
    ))
    }
  </div>
  </>
);
};

export default Products;
