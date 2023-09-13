import React from 'react'
import Title from '../Title/Title'
import ItemCount from '../ItemCount/ItemCount'
const ItemListContainer = (props) => {
  return (
    <><Title greeting={props.texto}></Title><ItemCount></ItemCount></>
  )
}

export default ItemListContainer