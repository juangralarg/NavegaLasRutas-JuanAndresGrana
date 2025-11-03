import React, { useState, useEffect } from 'react';
import './ItemDetailContainer.css';
import { getProductById } from '../data/mockAPIService';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

// Componente contenedor: obtiene el detalle de un producto específico.
const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);

        getProductById(itemId)
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error(error);
                setProduct(null); // Asegurarse de que no se muestre un producto anterior si hay error
            })
            .finally(() => {
                setLoading(false);
            });
            
    }, [itemId]); // Se ejecuta cada vez que el itemId de la URL cambia.

    if (loading) {
        return <h1 className="loading-message">Cargando detalle del producto...</h1>;
    }

    if (!product) {
        return <h1 className="loading-message">El producto no existe.</h1>
    }

    return (
        <div className='item-detail-container'>
            <ItemDetail {...product} />
        </div>
    );
};

export default ItemDetailContainer;