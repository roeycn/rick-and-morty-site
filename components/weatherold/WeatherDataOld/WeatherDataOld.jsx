import Image from 'next/image';
import React from 'react';

const WeatherDataOld = ({ data }) => {
    return (
        <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[60vh] m-auto p-4 text-gray-300 z-10'>

            {/* Top */}
            <div className='relative flex flex-col sm:flex-row justify-between pt-12'>
                <p className='text-9xl'>{data.main.temp.toFixed(0)}&#176;</p>

                <div className='flex flex-col items-center mt-14 sm:mt-0'>
                    <Image
                        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                        alt='/'
                        width='100'
                        height='100'
                    />
                    <p className='text-2xl'>{data.weather[0].main}</p>
                </div>

            </div>

            {/* Bottom */}
            <div className='bg-black/50 relative p-6 rounded-md mt-14 sm:mt-0'>
                <p className='text-2xl text-center pb-6'>Weather in {data.name}</p>
                <div className='flex flex-col sm:flex-row justify-between text-center'>
                    <div className='mt-1 sm:mt-0'>
                        <p className='font-bold text-2xl'>{data.main.feels_like.toFixed(0)}&#176;</p>
                        <p className='text-xl'>Feels Like</p>
                    </div>
                    <div  className='mt-4 sm:mt-0'>
                        <p className='font-bold text-2xl'>{data.main.humidity}%</p>
                        <p className='text-xl'>Humidity</p>
                    </div>
                    <div className='mt-4 sm:mt-0'>
                        <p className='font-bold text-2xl'>{data.wind.speed.toFixed(0)} MPH</p>
                        <p className='text-xl'>Winds</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WeatherDataOld;