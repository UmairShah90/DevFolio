import React, { useContext } from 'react'
import { ThemeContext } from "../Context/ThemeContext";
import { BsToggleOff } from "react-icons/bs";

function ToggleTheme() {
    const ContextTheme = useContext(ThemeContext);

  const { toggleTheme } = ContextTheme; 
    return (
        <div>
            <BsToggleOff onClick={toggleTheme}/>
        </div>
    )
}

export default ToggleTheme;
