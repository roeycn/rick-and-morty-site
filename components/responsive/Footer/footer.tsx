import * as React from 'react';
import {NextPageWithLayout} from "../../../pages/page";
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from "react-icons/fa";

const Footer: NextPageWithLayout = () => {
    return (
            <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
                <div className='' >
                    <h1 className='text-left w-full text-3xl font-bold text-blue-500'>Rick and Morty Site</h1>
                    <p className='text-left py-4'>Created By Roey Cohen.
                        using Rick and Morty Api.
                       </p>
                    <div className='flex justify-between md:w-[75%] my-6'>
                        <FaFacebookSquare size={30} />
                        <FaInstagram size={30} />
                        <FaTwitterSquare size={30} />
                        <FaGithubSquare size={30} />
                        <FaDribbbleSquare size={30} />
                    </div>
                </div>

                <div className='lg:col-span-2 flex justify-between mt-6 mx-8'>
                    <div>
                        <h6 className='font-medium text-gray-400'>Site Map</h6>
                        <ul>
                            <li className='py-2 text-sm'>Main Page</li>
                            <li className='py-2 text-sm'>Episodes</li>
                            <li className='py-2 text-sm'>About</li>
                        </ul>
                    </div>

                    <div>
                        <h6 className='font-medium text-gray-400'>Api</h6>
                        <ul>
                            <li className='py-2 text-sm'>Rick And Morty Api</li>

                        </ul>
                    </div>

                    <div>
                        <h6 className='font-medium text-gray-400'>technologies used</h6>
                        <ul>
                            <li className='py-2 text-sm'>Nextjs</li>
                            <li className='py-2 text-sm'>React</li>
                            <li className='py-2 text-sm'>Tailwindcss</li>

                        </ul>
                    </div>


                </div>


            </div>
    );
};

export default Footer
