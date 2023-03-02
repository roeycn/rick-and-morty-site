import React, {useEffect, useRef, useState} from "react";
import { NextPageWithLayout } from './../page';
import Navbar from "../../components/responsive/NavBar/navbar";
import Footer from "../../components/responsive/Footer/footer";
import {CharactersResponse, Response} from "../../types/charactersTypes";
import Image from "next/image";
import Link from "next/link";
import Characterscard from "../../components/CharacterCard/characterscard";

const defaultEndpoint = `https://rickandmortyapi.com/api/character/`;

const AllCharactersPage : NextPageWithLayout< {data : CharactersResponse } > = ( {data} ) => {

    const { info , results: defualtResults = [] } = data
    const [results, updateResults] = useState(defualtResults);
    const [page, updatePage] = useState({
        ...info,
        current: defaultEndpoint
    });
    const { current } = page;

    useEffect(() => {
        // Don't bother making a request if it's the default endpoint as we
        // received that on the server

        if ( current === defaultEndpoint ) return;

        console.log("current = " + current)  // current = https://rickandmortyapi.com/api/character/?page=2

        // In order to use async/await, we need an async function, and you can't
        // make the `useEffect` function itself async, so we can create a new
        // function inside to do just that

        async function request() {
            const res = await fetch(current)
            const nextData = await res.json();

            updatePage({
                current,
                ...nextData.info
            });

            // If we don't have `prev` value, that means that we're on our "first page"
            // of results, so we want to replace the results and start fresh

            if ( !nextData.info?.prev ) {
                updateResults(nextData.results);
                return;
            }

            // Otherwise we want to append our results

            updateResults(prev => {
                return [
                    ...prev,
                    ...nextData.results
                ]
            });
        }

        request();
    }, [current]);


    console.log("Characters Pages: " + info.pages.toString())

    const listItems = results.map((value, index, array) =>
            <div key={index}
                 className="mx-8 my-4 justify-center block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

                <Characterscard
                  id={value.id}
                  imgSrc={value.image}
                  name={value.name}
                  isLast={index === results.length-1}
                  newLimit={() => handleLoadMore()}
                />

            </div>
        )

    function handleLoadMore() {
        updatePage(prev => {
            return {
                ...prev,
                current: page?.next
            }
        });
    }

    return (
        <div className='bg-black'>
            <Navbar />
            <div className='flex flex-wrap justify-center bg-white max-w-[1240px] mx-auto px-4 my-8'>
                { listItems }
            </div>
            {/*<p className='flex flex-wrap justify-center bg-white max-w-[240px] mx-auto'>*/}
            {/*    <button onClick={handleLoadMore}>Load More</button>*/}
            {/*</p>*/}
            <Footer />
        </div>
    )

}

export default AllCharactersPage;

export async function getServerSideProps() {
    const res = await fetch(defaultEndpoint)
    const data : CharactersResponse = await res.json();
    return {
        props: {
            data : data
        }
    }
}