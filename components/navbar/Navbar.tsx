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
      <nav className="px-2 sm:px-4 py-2.5 bg-orange-50 w-full z-20 top-0 left-0">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex">
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm rounded-lg md:hidden hover:bg-orange-100 focus:outline focus:ring-2" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <Image
                src={NoblezaImg}
                alt="Nobleza Logo"
                style={{
                width: '100px',
                height: '100px',
                }}
              />
              <span className="self-center text-xl font-bold whitespace-nowrap">Nobleza Deliverys</span>
          </div>
          <div className="flex md:order-2">
            <FontAwesomeIcon
                icon={faCartShopping}
                style={{ fontSize: 50}}
                type="button"
                className="color:E86A12 focus:outline-none text-[#E86A12] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0" />
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
              <ul className="flex flex-col p-4 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:text-black text-black">
                <li>
                    <a href="#" className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:text-orange-700 md:p-0" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pl-3 pr-4  rounded md:p-0 hover:underline hover:decoration-orange-400">Quienes somos</a>
                </li>
                <li>
                    <a href="#" className="block py-2 pl-3 pr-4 md:p-0 hover:underline hover:decoration-orange-400">Contact</a>
                </li>
              </ul>
          </div>
        </div>
      </nav>

    </>

    )
}

export default Navbar