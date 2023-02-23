import {NextPage} from "next";
import { useRouter } from "next/router";
import {Character, EpisodesResultOnly, Result} from "../../../types/types";
import React, {useEffect, useState} from "react";
import Episodecard from "../../../components/responsive/EpisodeCard/episodecard";
import Image from "next/image";

// export type ChildProps = {
//     data?: Result | null
// }

// const EpisodePage: NextPage< {characters: string[]} > = ({characters}) => {
const EpisodePage: NextPage = () => {


    const router = useRouter()
   // const query = router.query;


   // const { a, b, c } = router.query;

    let res : Result = router.query;

    // 2nd way
    // const {
    //     query: {id, name, episode, characters, url, air_date, created}
    // } = router
    //
    //
    // const props = {
    //     id,
    //     name,
    //     episode,
    //     characters,
    //     url,
    //     air_date,
    //     created,
    // }



    const [characters, setCharacters] = useState<Character[]>();




    async function getImages(res : Result) {
        const arr: Character[] = [];
        try {
            // const employees = await fetchAllEmployees(baseApi)
            await Promise.all(
                res.characters!.map(async api => {
                    console.log("roey getImages map: " + api)
                    const response = await fetch(api)
                    const data : Character = await response.json();
                    arr.push(data);
                  //  setCharacters(arr)
                    console.log("roey array size : " + arr.length)
                    return arr;
                })
            )
        } catch (error) {
            console.log(error)
        }
        setCharacters(arr);
    }

    const listItems = characters?.map((value, index, array) =>
        <div key={index}
        className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <a href="#">

            {/*// next image have auto lazy-load*/}
            <Image
                className='rounded-t-lg'
                src={characters?.at(index)?.image!}
                width={220}
                height={220}
                alt="/"
                />

        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{characters?.at(index)?.name}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{characters?.at(index)?.gender}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{characters?.at(index)?.species}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{characters?.at(index)?.origin.name}</p>
            {/*<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{characters?.at(index)?.origin}</p>*/}
            {/*<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{characters?.at(index)?.species}</p>*/}
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{characters?.at(index)?.status}</p>
        </div>
        </div>
            )






    // @ts-ignore

    // todo - fix refresh bug, add navigation to characters page, deploy.

    useEffect(() => {

        // isReady: boolean - Whether the router fields are updated client-side and ready for use.
        if (!router.isReady) return;

        console.log("roey useeffect has been called: " + res.name)

        getImages(res).then(r => console.log("roey results: " + r));

    }, [router.isReady])

  return (
      <div className=' justify-between items-center max-w-[1240px] mx-auto px-4 my-8 text-white'>
          <div className="block mx-auto p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{res?.name}</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">{res?.episode}</p>
              <p className="font-normal text-gray-700 dark:text-gray-400">{res?.air_date}</p>
          </div>


          );

          <div className= 'container bg-white mx-auto grid md:grid-cols-5 p-12'>
              {listItems}
          </div>




      </div>
  );
}


//const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Array of ids

// const responses = await Promise.all(
//     ids.map(async id => {
//         const res = await fetch(
//             `https://jsonplaceholder.typicode.com/posts/${id}`
//         ); // Send request for each id
//     })
// );

const baseApi = 'https://rickandmortyapi.com/api/episode/1'
const aApi = 'https://rickandmortyapi.com/api/character/2'
const bApi = 'https://rickandmortyapi.com/api/character/3'

const fetchAllEmployees = async (url: string): Promise<Result> => {
    const response = await fetch(url)
    const { data } = await response.json()
    return data
}


// function getImages(): Promise.all {
//     // For now, consider the data is stored on a static `users.json` file
//     return fetch('/users.json')
//         // the JSON body is taken from the response
//         .then(res => res.json())
//         .then(res => {
//             // The response has an `any` type, so we need to cast
//             // it to the `User` type, and return it from the promise
//             return res as User[]
//         })
// }


// EpisodePage.getInitialProps = async ({ req }) => {
//
//     const data : String[] = await req.
//
//     return {
//         props: {
//             characters: data,
//         },
//     };
// }



// export async function getStaticPaths() {
//     return {
//         paths: [
//             { params: { id: ["1"].toString() } },
//             { params: { id: ["2"].toString() } },
//             { params: { id: ["3"].toString() } },
//             { params: { id: ["4"].toString() } },
//             { params: { id: ["5"].toString() } },
//         ],
//         fallback: false,
//     };
// }

// export async function getStaticProps({ params }: { params: { id: String } }) {
//     let res;
//     if (params.id === "1") {
//         console.log(" you are in page : " + params.id)
//
//         res = await fetch(
//             `https://rickandmortyapi.com/api/episode/1,2,3,4,5,6,7,8,9,10,11`
//         );
//     }
//
//     const data : Array<EpisodesResultOnly> = await res?.json();
//     console.log(" results: " + data)
//     return {
//         props: {
//             id: params.id,
//             episodes: data,
//         },
//     };
// }

export default EpisodePage;
