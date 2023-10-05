import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCartContext();
  const [orderId, setOrderId] = useState(null); // Nuevo estado para el ID de la orden

  const order = {
    // ...
  };

  const handleClick = () => {
    const db = getFirestore();
    const orderCollection = collection(db, 'orders');
    addDoc(orderCollection, order)
      .then(({ id }) => {
        setOrderId(id); // Actualizar el estado con el ID generado
      })
      .catch(error => {
        console.error('Error al crear la orden:', error);
      });
  };

  if (cart.length === 0) {
    return (
      <>
        <p>No hay elementos en el carrito</p>
        <Link to='/'>Hacer Compras</Link>
      </>
    );
  }

  return (
    <>
      {cart.map(product => <ItemCart key={product.id} product={product} />)}
      <p>
        total:{totalPrice()}
      </p>
      <button onClick={handleClick}>Emitir compra</button>
      <button onClick={() => clearCart()}>Limpiar Carrito</button>

      {orderId && ( // Renderizar el mensaje de confirmación si orderId está presente
        <div>
          <p>¡Compra realizada con éxito! ID de la orden: {orderId}</p>
        </div>
      )}
    </>
  );
};

export default Cart;
