import {useState, createContext } from "react";

export const ThemeContext = createContext();


export default function ThemeContextProvider({children}){
    const [theme, setTheme] = useState(true)
    const [mode, setMode] = useState("Dark Mode");
    function toggledTheme(){
        setTheme(theme?false:true);
        toggledMode();
    }
    function toggledMode(){
        setMode(mode==="Dark Mode"?"Light mode":"Dark Mode");
    }
    return(
        <ThemeContext.Provider value={{theme,mode, toggledTheme, toggledMode}}>
             {children}
        </ThemeContext.Provider>
    )
}

