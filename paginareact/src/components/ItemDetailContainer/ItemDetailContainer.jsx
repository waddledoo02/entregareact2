import React, { useEffect, useState } from 'react'
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';

import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

  const [data, setData] = useState({});
  const { idProducto } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'products', idProducto);
    getDoc(queryDoc)
      .then(res => setData({ id: res.id, ...res.data() }))
  }, [idProducto]);

  return (
    <ItemDetail product={data} />
  )
}

export default ItemDetailContainer;
