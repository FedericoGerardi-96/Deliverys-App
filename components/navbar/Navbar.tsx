import React from 'react';

import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NoblezaImg  from "../../public/assets/logo-sin-fondo.png";

import {
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (

    <>
        {/* <h1 className='text-3xl font-bold underline hover:text-[#f3f3f3]'>Navbar</h1> */}

        <div className='flex'>
            <div className="w-1/3">
                <Image
                    src={NoblezaImg}
                    alt="Nobleza Logo"
                    style={{
                    width: '100px',
                    height: '100px',
                    }}
                />
            </div>
            <div className="w-2/3 flex flex-nowrap">
                <div className="w-1/3">menu HOLA</div>
                <div className="w-1/3">menu 2</div>
                <div className="w-1/3">menu 3</div>
            </div>
            <div className="w-3/3">
                <FontAwesomeIcon
                    icon={faCartShopping}
                    style={{ fontSize: 50, color: "#E86A12" }}
                />
            </div>
        </div>
    </>

    )
}

export default Navbar