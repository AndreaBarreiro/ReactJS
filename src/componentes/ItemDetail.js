import React from "react";



function ItemDetail (Product){
  return (
      <div className="productos-content">
         
            {Product.map(product => {
                return <Product  product={product} key={product.id} />
            })}
        </div>
    );
}
export default ItemDetail
