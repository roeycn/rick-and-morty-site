import {GetServerSideProps, GetStaticProps, NextPage} from "next";
import {EpisodesResultOnly, EpisodesResults, Result} from "../../../types/types";
import React, {useEffect, useRef, useState} from "react";
import Episodecard from "../../../components/responsive/EpisodeCard/episodecard";
import Footer from "../../../components/responsive/Footer/footer";
import Navbar from "../../../components/responsive/NavBar/navbar";
import SeasonsBar from "../../../components/responsive/SeasonsBar/seasonsbar";


const SessionPage : NextPage< {id: String, episodes: Result[]} > = ({id, episodes}) => {

    console.log(" you are in page : " + id)

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    console.log("observe entry: ", entry)
                    // process just the cards that are intersecting.
                    // isIntersecting is a property exposed by the interface
                   if (entry.isIntersecting) {
                       animateCards(entry.target)
                  //   the image is now in place, stop watching
                  //     observer.unobserve(entry.target);
                   } else {
                       animateCardsAgain(entry.target)
                   }
                })
            },
            {
                rootMargin: "0px 0px 0px 0px",
                threshold: 1.0,
            }
        )

        const cards = document.querySelectorAll(".card")
        cards.forEach(card => {
            observer.observe(card)
        })
        return () => {
            cards.forEach((card) => {
                observer.unobserve(card);
            });
        }
    }, [])


    const animateCards = (card: any) => {
        setIsVisible(true)
        card.className = "card ";
    }

    const animateCardsAgain = (card: any) => {
        setIsVisible(false)
        card.className = "card animate-wiggle";
    }


  return (
      <div className='bg-black'>
          <Navbar />
          <SeasonsBar />
              <div className = 'container bg-white mx-auto grid md:grid-cols-3 p-12 '>
                {renderGenre(episodes)}
                {/*  <div className={"card"} onLoad={() => setIsVisible(true)}>*/}
                {/*      <Episodecard data={episodes[0]} />*/}
                {/*  </div>*/}
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
            <div key={index} className='mx-auto w-full py-[3rem] px-4 bg-white text-black'>
                <div className={"card"} >
                <Episodecard data={results[index]}/>
                </div>
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
             sessionOneUrl
        );
    } else if (params.id === "2") {
        console.log(" you are in page : " + params.id)

         res = await fetch(
             sessionTwoUrl
        );
    } else if (params.id === "3") {
        console.log(" you are in page : " + params.id)

        res = await fetch(
            sessionThreeUrl
        );
    } else if (params.id === "4") {
        console.log(" you are in page : " + params.id)

        res = await fetch(
            sessionFourUrl
        );
    } else if (params.id === "5") {
        console.log(" you are in page : " + params.id)

        res = await fetch(
            sessionFiveUrl
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
