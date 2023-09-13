import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
const ItemDetail = () => {
  const onAdd =(quantity)=>{
    console.log('Compraste ${quantity} unidades')
  }
  return (
    <>
    <ItemCount initial={1} stock={5} onAdd={onAdd}></ItemCount>
    </>
  )
}

export default ItemDetail