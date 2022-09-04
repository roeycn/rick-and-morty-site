import React, { useState, useEffect } from 'react'
import Navbar from "../../../components/responsive/NavBar/navbar";
import Cards from "../../../components/responsive/Cards/cards";
import Footer from "../../../components/responsive/Footer/footer";
import {GetStaticProps, NextPage} from "next";
import {Result, EpisodesResults, AllResults} from "../../../types/types";
import Episodesbar from "../../../components/responsive/EpisodesBar/episodesbar";

const Page : NextPage< {episodes: Result[], episodes2: Result[], episodes3: Result[]} > = ({episodes, episodes2, episodes3}) => {


    // const [data, setData] = useState<Result[]>();
    // const url = `https://rickandmortyapi.com/api/episode?page=1`
    // const fetchEpisodes = () => {
    //     axios.get<Result[]>(url).then((response) => {
    //         console.log(response.data);
    //         setData(response.data);
    //     })
    // };
    //
    // useEffect(() => {
    //   fetchEpisodes()
    // })

    return (
        <div >

        </div>
    )

}

export default Page;




export const getStaticProps: GetStaticProps = async (context) => {
    const res_1 = await fetch("https://rickandmortyapi.com/api/episode?page=1");
    // const res_2 = await fetch("https://rickandmortyapi.com/api/episode?page=2");
    // const res_3 = await fetch("https://rickandmortyapi.com/api/episode?page=3");
    const {results} : EpisodesResults = await res_1.json();
    // let secondResults : EpisodesResults = await res_2.json();
    // let thirdResults : EpisodesResults = await res_3.json();

    //  results = results.filter(data => data.episode.)
    // with any -> const { results } = await res.json();

    return {
        props: {
            episodes: results,
            // episodes2: secondResults,
            // episodes3: thirdResults
        },
    };
};


// export const getStaticProps: GetStaticProps = async (context) => {
//     // const res_1 = await fetch("https://rickandmortyapi.com/api/episode?page=1");
//     // const res_2 = await fetch("https://rickandmortyapi.com/api/episode?page=2");
//     // const res_3 = await fetch("https://rickandmortyapi.com/api/episode?page=3");
//
//
//     const [EpisodesResults , EpisodesResults2] = await Promise.all([
//         fetch(`https://rickandmortyapi.com/api/episode?page=1`),
//         fetch(`https://rickandmortyapi.com/api/episode?page=2`)
//     ]);
//     const [operations, incidents] = await Promise.all([
//         EpisodesResults.json(),
//         EpisodesResults2.json()
//     ]);
//
//
//     console.log("roey " + operations.toString())
//
//     return {
//         props: {
//             operations,
//             incidents
//         }
//       };


    // const {results} : AllResults = await res_1.json();
    // const {results_2} : AllResults = await res_2.json();
    // const {results_3} : AllResults = await res_3.json();

    // with any -> const { results } = await res.json();

    // const {results, results_2} : AllResults = await Promise.all([res_1, res_2])
    //
    //
    // console.log("roey " + response)
    //
    // return {
    //     props: {
    //         episodes: responses[0],
    //         episodes2: responses[1],
    //         // episodes3: results_3,
    //     },
    // };
// };

