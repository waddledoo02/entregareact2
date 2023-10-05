import React from 'react';
import "./Item.css";
import { Link } from 'react-router-dom';
const Item = ({info}) => {
  return (
    <>
      <img src={info.image} alt="" className='product'/>
      <p className='product'>{info.title}</p>
      <Link to={`item/${info.id}`}>Comprar</Link>
      </>
    
  )
}

export default Item