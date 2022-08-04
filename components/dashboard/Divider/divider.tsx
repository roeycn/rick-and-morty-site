import * as React from 'react';
import {FunctionComponent, ReactNode} from "react";
import styles from "./divider.module.scss"



interface Props {}

export const Divider: FunctionComponent  = ({ children }) => {
    return (
        <div >
            <hr className= "bg-gray-200 dark:bg-gray-800 border border-gray-200 dark:border-gray-800 rounded-full mx-2"/>
        </div>
    )

}
