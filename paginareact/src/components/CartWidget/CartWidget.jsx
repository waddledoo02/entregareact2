import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const CartWidget = () => {
  const { totalProducts } = useCartContext()
  return (
    <>
      <Link to='/cart' className="bi bi-cart4"></Link>
      <span>{totalProducts()||''}</span>
    </>
  )
}

export default CartWidget