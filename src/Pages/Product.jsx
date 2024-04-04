import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Bredcrums from '../Components/Bredcrums/Bredcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import ReleatedProduct from '../Components/ReleatedProduct/ReleatedProduct';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
        <Bredcrums product={product}/>
        <ProductDisplay product={product}/>
        <DescriptionBox />
        <ReleatedProduct />
    </div>
  )
}

export default Product