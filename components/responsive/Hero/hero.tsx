import * as React from 'react';
import {NextPageWithLayout} from "../../../pages/page";
import Typed from 'react-typed';

const Hero: NextPageWithLayout = () => {

    return (
        <div className='text-white' >
            <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col'>
                <p className='text-blue-500 font-bold p-2'>developed by Roey Cohen: </p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Rick and Morty</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>all data of the</p>
                    <Typed className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                        strings={['Episodes', 'Characters', 'Locations']}
                        typeSpeed={100}
                        backSpeed={80}
                        loop
                        />
                </div>
                {/*<p className='md:text-2xl text-xl font-bold text-gray-500' >Monitor your data analytics to increase revenue for B2B, BTC, & SAAS platforms.</p>*/}
                {/*<button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>*/}
            </div>

        </div>
    );
};

export default Hero
