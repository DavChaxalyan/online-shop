import React from 'react';
import "./releatedProduct.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const ReleatedProduct = () => {
  return (
    <div className='releatedproducts'>
        <h1>Related Product</h1>
        <hr />
        <div className="releatedproducts-item">
            {
                data_product.map((item, ind) => {
                    return <Item key={ind} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })
            }
        </div>
    </div>
  )
}

export default ReleatedProduct