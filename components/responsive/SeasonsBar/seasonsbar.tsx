import * as React from 'react';
import {NextPageWithLayout} from "../../../pages/page";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {useState} from "react";
import Link from 'next/link'
import {useRouter} from "next/router";

const SeasonsBar: NextPageWithLayout = () => {

    const router = useRouter();
    const currentRoute = router.asPath;

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        console.log("changing nav from : " + nav)
        setNav(!nav)
    }

    console.log(currentRoute)

    return (
        <div className='flex justify-between items-center h-24 mx-auto px-4 text-white bg-amber-600' >

            <ul className='hidden md:flex mx-auto'>
                <li className='p-4 hover:underline'>
                    <Link href="/season/1">
                        <a className={currentRoute === "/season/1" ? 'text-blue-700' : "text-white"}>Session One</a>
                    </Link>
                </li>
                <li className='p-4 hover:underline'>
                    <Link href="/season/2">
                        <a className={currentRoute === "/season/2" ? 'text-blue-700' : "text-white"}>Session Two</a>
                    </Link>
                </li>
                <li className='p-4 hover:underline'>
                    <Link href="/season/3">
                        <a className={currentRoute === "/season/3" ? 'text-blue-700' : "text-white"}>Session Three</a>
                    </Link>
                </li>
                <li className='p-4 hover:underline'>
                    <Link href="/season/4">
                        <a className={currentRoute === "/season/4" ? 'text-blue-700' : "text-white"}>Session Four</a>
                    </Link>
                </li>
                <li className='p-4 hover:underline'>
                    <Link href="/season/5">
                        <a className={currentRoute === "/season/5" ? 'text-blue-700' : "text-white"}>Session Five</a>
                    </Link>
                </li>
            </ul>

            <div onClick={handleNav} className='absolute right-3 md:hidden'>
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }
            </div>
            <div className= {!nav ? 'absolute fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-amber-600 ease-in-out duration-500' : 'fixed left-[-100%]'} >
                <h1 className='text-left w-full text-3xl font-bold text-[#00df9a] m-4'>Select Session</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-600'>
                        <Link href="/season/1">
                        <a onClick={handleNav} className={currentRoute === "/episodes/season/1" ? 'text-blue-700' : "text-white"}>Session One</a>
                        </Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link href="/season/2">
                            <a onClick={handleNav} className={currentRoute === "/episodes/season/2" ? 'text-blue-700' : "text-white"}>Session Two</a>
                        </Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link href="/season/3">
                            <a onClick={handleNav} className={currentRoute === "/episodes/season/3" ? 'text-blue-700' : "text-white"}>Session Three</a>
                        </Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link href="/season/4">
                            <a onClick={handleNav} className={currentRoute === "/episodes/season/4" ? 'text-blue-700' : "text-white"}>Session Four</a>
                        </Link>
                    </li>
                    <li className='p-4 border-b border-gray-600'>
                        <Link href="/season/5">
                            <a onClick={handleNav} className={currentRoute === "/episodes/season/5" ? 'text-blue-700' : "text-white"}>Session Five</a>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default SeasonsBar
