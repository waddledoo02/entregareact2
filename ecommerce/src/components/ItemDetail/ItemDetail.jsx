import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
const ItemDetail = () => {
  const onAdd = (_quantity)=>{
    console.log('Compraste ${_quantity} Unidades');
  }
  return (
    <>
    <ItemCount initial={1} stock={5} onAdd={onAdd}></ItemCount>
    </>
  )
}

export default ItemDetail