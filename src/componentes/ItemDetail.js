import React from "react";



function ItemDetail (Product){
  return (
      <div className="productos-content">
         
            {Product.map(product => {
                return <Product  product={product} key={product.id} />
                
                // title={product.title} description={product.description} img={product.pictureUrl} price={product.price} detalle={product.detalle}
            })}
        </div>
    );
}
export default ItemDetail
