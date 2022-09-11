import * as React from 'react';
import {NextPageWithLayout} from "../../../pages/page";
import {Result, EpisodesResults} from "../../../types/types";
import Router, { withRouter } from "next/router";

export type ChildProps = {
    data?: Result | null
}

const Episodecard: NextPageWithLayout<ChildProps> = ({data}) => {
    // console.log(data?.episode)

    // const router = useRouter();

    function handleNav() {
        console.log("user press on episodes button")
        // router.push('episode/1')
        Router.push({
            pathname: 'episode/1',
            query: {data: data?.characters},
        })

    }

    return (
                <div className='flex flex-col h-[330px] shadow-xl rounded-lg hover:scale-105 duration-300' >
                    {/*<img className='w-20 mx-auto mt-[-3rem] bg-white' src={'./single.png'} alt="/"/>*/}
                    <h2 className='text-xl font-bold text-center text-gray-600'>{data?.episode}</h2>
                    <p className='text-center text-xl font-bold pt-1'>{data?.name}</p>
                    <div className='mt-auto mb-1'>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>{data?.air_date}</p>
                        <p className='py-2 border-b mx-8 mt-8'>{data?.id}</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'
                            onClick={handleNav}>More Details</button>
                    </div>
                </div>
    );
};

export default Episodecard
