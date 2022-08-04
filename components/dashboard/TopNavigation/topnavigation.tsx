import {
    FaSearch,
    FaHashtag,
    FaRegBell,
    FaUserCircle,
    FaMoon,
    FaSun,
} from 'react-icons/fa';
import useDarkMode from '../../../hooks/useDarkMode';
import {FunctionComponent} from "react";
import * as React from "react";
import {Themeicon} from "../ThemeIcon/themeicon";

interface Props {}

export const Topnavigation: FunctionComponent  = ({ children }) => {
    return (
        <div className="flex flex-row items-center justify-evenly bg-gray-300 dark:bg-gray-700 bg-opacity-90 w-full h-16 m-0 shadow-lg">
            <Themeicon />
            <BellIcon />
            <UserCircle />
        </div>
    )

}

const BellIcon = () => <FaRegBell size='24' className='top-navigation-icon' />;
const UserCircle = () => <FaUserCircle size='24' className='top-navigation-icon' />;
