import * as React from 'react';
import {NextPageWithLayout} from "../../../pages/page";
import Image from "next/image";

const Analytics: NextPageWithLayout = () => {
    return (
        <div className='w-full bg-white py-16 px-4 ' >
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={'./laptop.jpeg'} alt="/"/>
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md: text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                    <p >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book
                    </p>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Analytics
