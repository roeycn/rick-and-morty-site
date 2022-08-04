import * as React from 'react';
import {FunctionComponent, ReactNode} from "react";
import styles from "./sidebaricon.module.scss"

interface Props {
    icon: ReactNode;
    text: string;
}

export const SidebarIcon: FunctionComponent<Props> = ({icon, text}) => {

    return (
        // <div className={styles["sidebar-icon"]}> // 2nd option - define it in css
           <div
               className="  relative flex items-center justify-center
                            h-12 w-12 mt-2 mb-2 mx-auto
                            bg-gray-400 hover:bg-green-600 dark:bg-gray-800
                            text-green-500 hover:text-white
                            hover:rounded-xl rounded-3xl
                            transition-all duration-300 ease-linear
                            cursor-pointer shadow-lg group"
           >
            {icon}
            <span className= "absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100" >
                {text}
            </span>
        </div>
    );
}
