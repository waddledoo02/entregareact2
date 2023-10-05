import React, { useEffect, useState } from 'react';

import ItemList from '../ItemList/ItemList';
import laptopnormal from '../Item/imagenes/laptopnormal.png';
import telefono from '../Item/imagenes/telefono.jpg';
import tv from '../Item/imagenes/tv.jpg';
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
  const products = [
    {
      id: 1, image: tv,
      title: "Televisor",
      category:"Electrodomesticos",
      price: 300,
    },
    {
      id: 2, image: telefono,
      title: "Iphone",
      category:"Celulares",
      price : 400,
    },
    {
      id: 3, image: laptopnormal,
      title: "Laptop",
      category:"Computadoras",
      price: 700,
    }
  ];
  console.log(products);
const [data,setData] = useState([]);

const {categoriaId} = useParams();

useEffect(() => {
  const getData = new Promise(resolve => {
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });

  if (categoriaId) {
    getData.then(res => {
      const filteredData = res.filter(product => product.category === categoriaId);
      setData(filteredData); 
      console.log(categoriaId)
      // Asigna el resultado del filtrado a setData
    });
  } else {
    getData.then(res => setData(res));
  }
}, [categoriaId]);





  return (
    <>
    
      <ItemList data ={data}></ItemList>
    </>
  )

}

export default ItemListContainer