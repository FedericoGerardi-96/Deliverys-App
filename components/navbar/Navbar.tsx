import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCartShopping,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (

    <>
        {/* <h1 className='text-3xl font-bold underline hover:text-[#f3f3f3]'>Navbar</h1> */}

        <div className='flex'>
            <div className="w-1/3 bg-blue-800">
                Icon
            </div>
            <div className="w-2/3 flex-nowrap bg-blue-400">
                <div>menu HOLA</div>
                <div>menu 2</div>
                <div>menu 3</div>
            </div>
            <div className="w-3/3 bg-blue-600">
                <FontAwesomeIcon
                    icon={faCartShopping}
                    style={{ fontSize: 100, color: "blue" }}
                />
            </div>
        </div>
    </>

    )
}

export default Navbar