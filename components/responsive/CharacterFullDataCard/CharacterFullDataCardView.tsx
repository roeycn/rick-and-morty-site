import * as React from 'react';
import {NextPage} from "next";
import Link from "next/link";
import Head from "next/head";
import {Result} from "../../../types/charactersTypes";

export type ChildProps = {
    result: Result
}

const CharacterFullDataCardView: NextPage<ChildProps> = (props) => {

    const data = props.result

    return (
        <div className="" >
            <Head>
                <title> { data.name }</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main >
                <h1 className="title">{ data.name }</h1>
                <div className="profile">
                    <div className="profile-image">
                        <img src={ data.image } alt={ data.name } />
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
    );
};

export default CharacterFullDataCardView
