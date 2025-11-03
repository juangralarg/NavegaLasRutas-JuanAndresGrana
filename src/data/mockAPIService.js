import { products } from './data';

// Devuelve todos los productos después de un dilay.
export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500); // Retardo de 500ms
  });
};

// Función que devuelve un solo producto por su ID.
export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(prod => prod.id === productId);
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Producto no encontrado'));
      }
    }, 500);
  });
};

// Función que devuelve los productos filtrados por categoría.
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const filteredProducts = products.filter(prod => prod.category === categoryId);
            resolve(filteredProducts);
        }, 500);
    });
};