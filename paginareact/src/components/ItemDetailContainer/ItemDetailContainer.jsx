import React, { useEffect, useState } from 'react'
import {getFirestore,doc,getDoc} from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import laptopnormal from '../Item/imagenes/laptopnormal.png'
import telefono from '../Item/imagenes/telefono.jpg'
import tv from '../Item/imagenes/tv.jpg'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  
  const [data, setData] = useState({});
  const { idProducto } = useParams();

  useEffect(() => {
   const querydb = getFirestore();
   const queryDoc = doc(querydb,'products','cZEvDjvaUuXcZStwSLhu');
   getDoc(queryDoc)
   .then(res=>setData   ({id:res.id,...res.data()}))
  }, [idProducto]);
  
  return (
    <ItemDetail product={data} />
  )
}

export default ItemDetailContainer;
