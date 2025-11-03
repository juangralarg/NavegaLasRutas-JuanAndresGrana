import React, { useState, useEffect } from 'react';
import './ItemListContainer.css';
import { getProducts, getProductsByCategory } from '../data/mockAPIService';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Uso useParams para obtener si existe el categoryId de la direccion 
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true);

        // Si hay un categoryId, pido los productos de esa categoría.Si no, pedimos todos los productos.
        const asyncFunc = categoryId ? getProductsByCategory : getProducts;

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
            
    }, [categoryId]); // El efecto se ejecuta cada vez que el categoryId de la URL cambia.

    if (loading) {
        return <h1 className="loading-message">Cargando productos...</h1>;
    }

    return (
        <div className="item-list-container">
            <h1>{greeting}</h1>
            {/* Paso los productos al componente de presentación ItemList */}
            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;
