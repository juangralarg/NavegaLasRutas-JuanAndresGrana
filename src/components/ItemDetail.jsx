import React from 'react';
import './ItemDetail.css';
import ItemCount from './ItemCount';

// AQui con esto muestro todos los detalles de un producto.
const ItemDetail = ({ name, img, category, description, price, stock }) => {

    const handleOnAdd = (quantity) => {
        // Esta función se ejecutará cuando el usuario haga clic en "Agregar al carrito"
        // Me falta agregar la lógica para guardar en el carrito.
        console.log(`Se agregaron ${quantity} unidades de ${name}`);
        alert(`Agregaste ${quantity} ${name} al carrito!`);
    };

    return (
        <article className="card-item-detail">
            <div className="detail-content">
                <picture className="detail-img-container">
                    <img src={img} alt={name} className="item-img-detail" />
                </picture>
                <section className="info-detail">
                    <header className="header-detail">
                        <h2 className="item-header-detail">
                            {name}
                        </h2>
                    </header>
                    <p className="info-category">
                        Categoría: {category}
                    </p>
                    <p className="info-description">
                        {description}
                    </p>
                    <p className="info-price-detail">
                        ${price}
                    </p>
                    <footer className="item-footer-detail">
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    </footer>
                </section>
            </div>
        </article>
    );
};

export default ItemDetail;