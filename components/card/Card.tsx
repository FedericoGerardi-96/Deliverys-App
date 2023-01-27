import React from 'react';
import Image from 'next/image';

import CardImagen  from "../../public/assets/pizza1.png";


const Card = () => {
  return (
    <>
        <div className="m-4 flex flex-col items-center bg-orange-50 rounded-lg md:flex-row md:max-w-sm">
            <div className="w-48">
                <Image className="w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={CardImagen} alt="img pizza" />
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">Margarita</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Medium | Cheese , onion, and tomato pure</p>
            </div>
        </div>
    </>
  )
}

export default Card