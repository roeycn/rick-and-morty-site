import {NextPage} from "next";
import { useRouter } from "next/router";
import {Character, EpisodesResultOnly, Result} from "../../../../types/types";
import React, {useEffect, useState} from "react";
import Image from "next/image";


const EpisodePage: NextPage = () => {

    const router = useRouter()

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


    // todo - fix refresh bug, add navigation to characters page, deploy.

    useEffect(() => {

        // isReady: boolean - Whether the router fields are updated client-side and ready for use.
        if (!router.isReady) return;

        console.log("roey useeffect has been called: " + res.name)

        getImages(res).then(r => console.log("roey results: " + r));

    }, [router.isReady])

  return (
      <div className='justify-between items-center max-w-[1240px] mx-auto px-4 my-8 text-white'>
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


export default EpisodePage;
