import React, {useEffect, useRef, useState} from "react";
import {NextPageWithLayout} from "../../page";
import Navbar from "../../../components/responsive/NavBar/navbar";
import Footer from "../../../components/responsive/Footer/footer";
import {Result} from "../../../types/charactersTypes";
import {GetServerSideProps} from "next";
import Head from "next/head";
import Link from "next/link";

const CharactersPage : NextPageWithLayout< {data : Result } > = ( {data} ) => {

    return (
        <div className='bg-black'>
            <Navbar />
                <div className='flex flex-wrap justify-center bg-white max-w-[1240px] mx-auto px-4 my-8'>

                    <Head>
                        <title>{ data.name }</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>

                    <main >
                        <h1 className="title">{ data.name }</h1>
                        <div className="profile">
                            <div className="profile-image">
                                <img src={data.image} alt={data.name} />
                            </div>
                            <div className="profile-details">
                                <h2>Character Details</h2>
                                <ul>
                                    <li>
                                        <strong>Name:</strong> { data.name }
                                    </li>
                                    <li>
                                        <strong>Status:</strong> { data.status }
                                    </li>
                                    <li>
                                        <strong>Gender:</strong> { data.gender }
                                    </li>
                                    <li>
                                        <strong>Species:</strong> { data.species }
                                    </li>
                                    <li>
                                        <strong>Location:</strong> { data.location.name }
                                    </li>
                                    <li>
                                        <strong>Originally From:</strong> { data.origin.name }
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p className="back">
                            <Link href="/characters">
                                <a>
                                    Back to All Characters
                                </a>
                            </Link>
                        </p>
                    </main>
                </div>
            <Footer />
        </div>
    )

}

export default CharactersPage;

export const getServerSideProps: GetServerSideProps = async (context) => {

    const { id } = context.query

    const defaultEndpoint = `https://rickandmortyapi.com/api/character`;
    const res = await fetch(`${defaultEndpoint}/${id}`);
    const data : Result = await res.json();

    console.log(`${defaultEndpoint}/${id}`)
    return {
        props: {
            data : data
        }
    };
};