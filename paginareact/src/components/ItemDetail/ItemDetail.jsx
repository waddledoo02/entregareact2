
import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css"
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
const ItemDetail = ({product}) => {

const [goToCart, setGoToCart] = useState(false);
const {addProduct} = useCartContext();
  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(product,quantity);
  }

  return (
    <>
    <div>
      <h1>{product.title}</h1>
      <img className="product"src={product.image} alt="" />
      {
        goToCart
        ?<Link to='/cart'>Terminar Compra</Link>
        :<ItemCount initial={1} stock={5} onAdd={onAdd} />
      }
    </div>
    </>
  )
}

export default ItemDetail
