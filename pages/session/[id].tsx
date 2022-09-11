import {GetServerSideProps, GetStaticProps, NextPage} from "next";
import { useRouter } from "next/router";
import {EpisodesResultOnly, EpisodesResults, Result} from "../../types/types";
import React from "react";
import Episodecard from "../../components/responsive/EpisodeCard/episodecard";
import Navbar from "../../components/responsive/NavBar/navbar";
import Footer from "../../components/responsive/Footer/footer";
import Episodesbar from "../../components/responsive/EpisodesBar/episodesbar";



const SessionPage : NextPage< {id: String, episodes: Result[]} > = ({id, episodes}) => {

  const router = useRouter();

  console.log(" you are in page : " + id)

  return (
      <div className='bg-black'>
          <div className=''>
              <Navbar />
          </div>
          <Episodesbar />
              <div className = 'container bg-white mx-auto grid md:grid-cols-5 p-12'>
                {renderGenre(episodes)}
              </div>
          <Footer />
      </div>
  );
}

function renderGenre(episodes: Result[]) {
  console.log("roey " + episodes)
  return (
      episodes.map((episode, index, results) => {
        return (
            <div key={index} className='mx-auto my-4 w-full py-[3rem] px-4 bg-white text-black'>
                <Episodecard data={results[index]}/>
            </div>
        );
      })
  );
}

export async function getStaticPaths() {

    // paths: { params: { id: String([1,2,3]) } },
    return {
        paths: [
            { params: { id: ["1"].toString() } },
            { params: { id: ["2"].toString() } },
            { params: { id: ["3"].toString() } },
            { params: { id: ["4"].toString() } },
            { params: { id: ["5"].toString() } },
        ],
        fallback: false,
    };
}

export async function getStaticProps({ params }: { params: { id: String } }) {

    // `https://rickandmortyapi.com/api/episode?page=${params.id}`
    let res;
    const sessionOneUrl = `https://rickandmortyapi.com/api/episode/1,2,3,4,5,6,7,8,9,10,11`;
    const sessionTwoUrl = `https://rickandmortyapi.com/api/episode/12,13,14,15,16,17,18,19,20,21`;
    const sessionThreeUrl = `https://rickandmortyapi.com/api/episode/22,23,24,25,26,27,28,29,30,31`;
    const sessionFourUrl = `https://rickandmortyapi.com/api/episode/32,33,34,35,36,37,38,39,40,41`;
    const sessionFiveUrl = `https://rickandmortyapi.com/api/episode/42,43,44,45,46,47,48,49,50,51`;

    if (params.id === "1") {
        console.log(" you are in page : " + params.id)

         res = await fetch(
            `https://rickandmortyapi.com/api/episode/1,2,3,4,5,6,7,8,9,10,11`
        );
    } else if (params.id === "2") {
        console.log(" you are in page : " + params.id)

         res = await fetch(
            `https://rickandmortyapi.com/api/episode/12,13,14,15,16,17,18,19,20,21`
        );
    } else if (params.id === "3") {
        console.log(" you are in page : " + params.id)

        res = await fetch(
            `https://rickandmortyapi.com/api/episode/22,23,24,25,26,27,28,29,30,31`
        );
    } else if (params.id === "4") {
        console.log(" you are in page : " + params.id)

        res = await fetch(
            `https://rickandmortyapi.com/api/episode/32,33,34,35,36,37,38,39,40,41`
        );
    } else if (params.id === "5") {
        console.log(" you are in page : " + params.id)

        res = await fetch(
            `https://rickandmortyapi.com/api/episode/42,43,44,45,46,47,48,49,50,51`
        );
    }

    const data : Array<EpisodesResultOnly> = await res?.json();

    console.log(" results: " + data)

    return {
        props: {
            id: params.id,
            episodes: data,
        },
    };
}


// export const getStaticProps: GetStaticProps = async (context) => {
//
//     const res_1 = await fetch("https://rickandmortyapi.com/api/episode?page=1");
//     const {results} : EpisodesResults = await res_1.json();
//
//     return {
//         props: {
//             episodes: results,
//         },
//     };
// };

export default SessionPage;
