import * as React from 'react';
import {NextPageWithLayout} from "../../../pages/page";
import { useRouter } from "next/router";


const Sessionepisodes: NextPageWithLayout = () => {

    const router = useRouter();

    const handleNav = () => {
        console.log("user press on episodes button")
        router.push('season/1')
    }

    return (
        <div className='w-full bg-white py-16 px-4 ' >
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={'./logo_2.png'} alt="/"/>
                <div className='flex flex-col justify-center'>
                    <p className='text-blue-500 font-bold'>All Episodes</p>
                    <h1 className='md: text-4xl sm:text-3xl text-2xl font-bold py-2'>Select Your Favorite Episode: </h1>
                    <p >
                        5 Seasons , 51 episodes
                    </p>
                    <button
                        onClick={handleNav}
                        className='bg-black text-blue-500 w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>See All Episodes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sessionepisodes
