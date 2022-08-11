import * as React from 'react';
import {NextPageWithLayout} from "../../../pages/page";

const Newsletter: NextPageWithLayout = () => {
    return (
        <div className='w-full py-16 text-white px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                <h1 className='text-left md:text-4xl sm:text-3xl text-2xl font-bold'>Want tips & tricks to optimize your flow?</h1>
                <p className='text-left'>Sign up our newsletter and stay up to date</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email'/>
                        <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 text-black'>Notify Me</button>
                    </div>
                    <p className=''>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy.</span></p>
                </div>
            </div>
        </div>
    );
};

export default Newsletter
