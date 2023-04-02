import React from 'react';
import "./ItemList.css";
import Item from './Item';



const ItemList = ({products}) => {
  
  return (
    <div>
      <ul className="item-list-container">
        {products.map((product) => (
            <Item product={product} key={product.id}/>
        ))}
      </ul>

    </div>
  );
};

export default ItemList
