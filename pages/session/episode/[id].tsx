import {GetServerSideProps, GetStaticProps, NextPage} from "next";
import { useRouter } from "next/router";
import {EpisodesResultOnly, EpisodesResults, Result} from "../../../types/types";
import React from "react";
import { withRouter } from 'next/router'
import {NextPageWithLayout} from "../../page";

// export type ChildProps = {
//     data?: Result | null
// }

// const EpisodePage: NextPage< {characters: string[]} > = ({characters}) => {
const EpisodePage: NextPage = () => {

    const router = useRouter()
    // const {
    //     query: { data },
    // } = router

    const data : String[] = router.query

  console.log(" data : " + {data})

  return (
      <div className=''>
          AAAA
          {data}
      </div>
  );
}

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
