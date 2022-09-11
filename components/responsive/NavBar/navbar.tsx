import * as React from 'react';
import {NextPageWithLayout} from "../../../pages/page";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {useState} from "react";
import Link from "next/link";

const Navbar: NextPageWithLayout = () => {

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        console.log("changing nav from : " + nav)
        setNav(!nav)
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white' >
            <h1 className='text-left w-full text-3xl font-bold text-blue-500'>
                <Link href="/">
                    <a>Rick and Morty </a>
                </Link>
            </h1>
            <ul className='hidden md:flex'>
                <li className='p-4'>
                    <Link href="/session/1">
                        <a>Episodes</a>
                    </Link>
                </li>
                <li className='p-4'>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
            </ul>

            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }
            </div>
            <div className= {!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'} >
                <h1 className='text-left w-full text-3xl font-bold text-blue-500 m-4'>
                    <Link href="/">
                        <a >Rick and Morty </a>
                    </Link>
                </h1>
                <ul className='uppercase p-4'>
                        <li className='p-4 border-b border-gray-600'>
                            <Link href="/session/1">
                                <a onClick={handleNav} >Episodes</a>
                            </Link>
                        </li>
                       <li className='p-4 border-b border-gray-600'>
                           <Link href="/about">
                               <a onClick={handleNav} >About</a>
                            </Link>
                       </li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar
