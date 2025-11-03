import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <i className="fa-solid fa-cart-shopping"></i>
            
            <span className="cart-count">0</span>{/* El número es estático por ahora */}
        </div>
    );
};

export default CartWidget;
