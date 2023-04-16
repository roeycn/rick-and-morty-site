import * as React from 'react';
import {NextPage} from "next";
import CharacterFullDataCardView from "./CharacterFullDataCardView";
import {Result} from "../../../types/charactersTypes";

export type ChildProps = {
    result: Result
}

const CharacterFullDataCardContainer: NextPage<ChildProps> = (props) => {

    return (
        <CharacterFullDataCardView
            result = {props.result}
        />
    );
};

export default CharacterFullDataCardContainer