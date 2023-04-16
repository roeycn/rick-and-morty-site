import React, {useEffect, useRef, useState} from "react";
import {NextPageWithLayout} from "../../page";
import Navbar from "../../../components/responsive/NavBar/navbar";
import Footer from "../../../components/responsive/Footer/footer";
import {Result} from "../../../types/charactersTypes";
import {GetServerSideProps} from "next";
import CharacterFullDataCardContainer from "../../../components/responsive/CharacterFullDataCard/CharacterFullDataCardContainer.tsx ";

const CharactersPage : NextPageWithLayout< {data : Result } > = ( {data} ) => {

    return (
        <div className='bg-black'>
            <Navbar />
            <div className='flex flex-wrap justify-center bg-white max-w-[1240px] mx-auto px-4 my-8'>
                <CharacterFullDataCardContainer
                    result = { data }/>
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