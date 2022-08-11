import useDarkMode from "../../../hooks/useDarkMode";
import {FaMoon, FaSun} from "react-icons/fa";
import * as React from "react";
import {FunctionComponent} from "react";

interface Props {}

export const Themeicon: FunctionComponent  = ({ children }) => {

    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);

    return (
        <span onClick={handleMode}>
      {darkTheme ? (
          <FaSun size='24' className='text-gray-500 mr-3 ml-4 transition duration-300 ease-in-out hover:text-pink-400 cursor-pointer ml-auto mr-4' />
      ) : (
          <FaMoon size='24' className='text-gray-500 mr-3 ml-4 transition duration-300 ease-in-out hover:text-pink-400 cursor-pointer ml-auto mr-4' />
      )}
        </span>
    );

}
