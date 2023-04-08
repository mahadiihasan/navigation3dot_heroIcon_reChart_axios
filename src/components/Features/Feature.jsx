import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({benefit}) => {
    return (
        <div className='flex items-center'>
            <CheckCircleIcon className='h-5 w-5 text-green-700'></CheckCircleIcon>
            <span className='pl-4'>{benefit}</span>
        </div>
    );
};

export default Feature;