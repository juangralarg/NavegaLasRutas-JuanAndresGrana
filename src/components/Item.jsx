import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

// Componente de presentación para un solo producto en la lista.
const Item = ({ id, name, img, price, stock }) => {
    return (
        <article className="card-item">
            <header className="header">
                <h2 className="item-header">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="item-img" />
            </picture>
            <section className="info">
                <p className="info-price">
                    Precio: ${price}
                </p>
                <p className="info-stock">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="item-footer">
                {/* Este Link nos lleva al detalle del producto usando su ID */}
                <Link to={`/item/${id}`} className="option-detail">Ver detalle</Link>
            </footer>
        </article>
    );
};

export default Item;