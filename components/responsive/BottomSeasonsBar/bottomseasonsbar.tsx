import * as React from 'react';
import {NextPageWithLayout} from "../../../pages/page";
import {useState} from "react";
import Link from 'next/link'
import {useRouter} from "next/router";

const BottomSeasonsBar: NextPageWithLayout = () => {

    const router = useRouter();
    const currentRoute = router.asPath;

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        console.log("changing nav from : " + nav)
        setNav(!nav)
    }

    console.log(currentRoute)

    return (

        <div
            className="fixed bottom-0 left-0 z-50 w-full h-16 bg-gray-300 border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-5 mx-auto">

                <Link href="/season/1">
                    <button type="button"
                            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg
                            className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <circle cx="10" cy="10" r="5" stroke="#5cb85c" fill={currentRoute === "/season/1" ? "#5cb85c" : "#FF0000"}></circle>
                        </svg>
                        <span
                            className={currentRoute === "/season/1" ? 'text-sm text-blue-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500' : "text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"}>Season 1</span>
                    </button>
                </Link>

                <Link href="/season/2">
                    <button type="button"
                            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg
                            className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <circle cx="10" cy="10" r="5" stroke="#5cb85c" fill={currentRoute === "/season/2" ? "#5cb85c" : "#FF0000"}></circle>
                        </svg>
                        <span
                            className={currentRoute === "/season/2" ? 'text-sm text-blue-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500' : "text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"}>Season 2</span>
                    </button>
                </Link>

                <Link href="/season/3">
                    <button type="button"
                            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg
                            className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <circle cx="10" cy="10" r="5" stroke="#5cb85c" fill={currentRoute === "/season/3" ? "#5cb85c" : "#FF0000"}></circle>
                        </svg>
                        <span
                            className={currentRoute === "/season/3" ? 'text-sm text-blue-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500' : "text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"}>Season 3</span>
                    </button>
                </Link>

                <Link href="/season/4">
                    <button type="button"
                            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg
                            className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <circle cx="10" cy="10" r="5" stroke="#5cb85c" fill={currentRoute === "/season/4" ? "#5cb85c" : "#FF0000"}></circle>
                        </svg>
                        <span
                            className={currentRoute === "/season/4" ? 'text-sm text-blue-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500' : "text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"}>Season 4</span>
                    </button>
                </Link>

                <Link href="/season/5">
                    <button type="button"
                            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                        <svg
                            className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                            fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <circle cx="10" cy="10" r="5" stroke="#5cb85c" fill={currentRoute === "/season/5" ? "#5cb85c" : "#FF0000"}></circle>
                        </svg>
                        <span
                            className={currentRoute === "/season/5" ? 'text-sm text-blue-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500' : "text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"}>Season 5</span>
                    </button>
                </Link>

            </div>
        </div>

    );
};

export default BottomSeasonsBar