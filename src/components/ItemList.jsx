import React from 'react';
import './ItemList.css';
import Item from './Item';

// Componente de presentación: solo se encarga de mostrar la lista de productos.
const ItemList = ({ products }) => {
    return (
        <div className="item-list">
            {/* Uso el map para renderizar un componente Item por cada producto */}
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    );
};

export default ItemList;