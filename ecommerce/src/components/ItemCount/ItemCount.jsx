
import React,{useState} from 'react';
const ItemCount = () => {
  const [count,setCount] = useState(1);
  return (
    <div className='counter'>
      <button>+</button>
      <span> {count}</span>
      <button>-</button>
      <div>
        <button>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount