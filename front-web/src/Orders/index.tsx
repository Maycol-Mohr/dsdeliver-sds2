import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';

import ProductsList from './ProductsList';
import StepsReader from './StepsHeader';
import './styles.css'
import { OrderLocationdata, Product } from './types';

function Orders() {
    const [products, setProducts] = useState<Product[]>([]);
    
    const [orderLocation, setOrderLocation] = useState<OrderLocationdata>();

    useEffect(() => {
        fetchProducts()
        .then(response => setProducts(response.data))
        .catch(error => console.log(error))
    }, []);



    return (
        <div className="orders-container">
            <StepsReader />
            <ProductsList products={products} />
            <OrderLocation />
            
        </div>
    )
}

export default Orders;