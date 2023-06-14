import React from 'react'
import Empty from "../../components/empty/Empty"
import { useSelector } from 'react-redux'
import ProductWrapper from '../../components/product-wrapper/ProductWrapper';

function Wishlist() {
    const heart = useSelector(s => s.heart.value)
    console.log(heart);
    return (
        <div className='container'>
        {
            heart.length ?
            <ProductWrapper data={heart} />
            : 
            <Empty title="Sevimlilar" />
        }

        </div>
    )
}

export default Wishlist