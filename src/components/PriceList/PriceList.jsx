import React, { useEffect, useState } from 'react';
import PriceCart from '../PriceCart/PriceCart';


const PriceList = () => {
    const [prices, setPrice] = useState([]);

    useEffect(() => {

        fetch('prices.json')
            .then(response => response.json())
            .then(data => setPrice(data))
    }, [])
    console.log(prices);
    return (
        <div>
            <h2 className='text-5xl text-white bg-purple-950 font-bold p-4 text-center'>awesome affordable price</h2>
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    prices.map(price => <PriceCart key={price.id} price={price}></PriceCart>)
                }
            </div>
        </div>
    );
};

export default PriceList;