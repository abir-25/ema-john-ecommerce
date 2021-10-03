import React from 'react';
import useProducts from '../../hooks/useProducts';

const OrderReview = () => {

    const [products, setProducts] = useProducts();

    return (
        <div>
            <h1>Length: {products.length}</h1>
            <h2>This is Order Review</h2>
        </div>
    );
};

export default OrderReview;