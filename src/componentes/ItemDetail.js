import React from "react";

function ItemDetail (item){
    return (
        <div className="productos-content">
            {items.map(item => {
                return <Item key={items.id} title={items.title} description={items.description} img={items.pictureUrl} price={items.price} detalle={items.detalle}/>
            })}
        </div>
    );
}

export default ItemDetail