import React from 'react';
import Feature from '../Features/Feature';

const PriceCart = ({price}) => {

    return (
        <div className='bg-yellow-300 rounded-md p-4 my-6 mx-6 flex flex-col'>
            <h2 className='text-center'>            
            <span className='text-5xl font-bold text-green-500'>${price.price}</span>
            <span>/month</span>
            </h2>

            <h5 className='text-2xl font-bold text-center'>{price.membershipType}</h5>
            <p className='text-xl font-bold underline mb-4'>Features</p>
            {
                price.benefits.map((benefit, idx ) => <Feature key={idx} benefit={benefit}></Feature>)
            }
            <button className='w-full bg-orange-600 py-2 rounded-md text-white font-bold mt-auto hover:bg-green-500'>Buy Now</button>
            {/* use mt-auto, flex, flex-col to vartically bottom position button*/}
        </div>
    );
};

export default PriceCart;