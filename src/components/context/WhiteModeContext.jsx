import { createContext, useContext, useEffect, useState } from 'react';

const WhiteModeContext = createContext();

export function WhiteModeProvider({children}){
    const [whiteMode, setWhiteMode] = useState(false);
    const toggleWhiteMode = () => {
        setWhiteMode((mode)=>!mode);
        updateWhiteMode(!whiteMode);
    }

    useEffect(()=>{
        const isWhite = 
        localStorage.theme === 'white' ||
        (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: white').matches);
            setWhiteMode(isWhite);
            updateWhiteMode(isWhite);
    }, []);
    return (
        <WhiteModeContext.Provider value={{ whiteMode, toggleWhiteMode }}>
            {children}
        </WhiteModeContext.Provider>
    )
}

function updateWhiteMode(whiteMode) {
    if(whiteMode) {
        document.documentElement.classList.add('white');
        localStorage.theme = 'white';
    } else {
        document.documentElement.classList.remove('white');
        localStorage.theme = 'dark';
    }
}

export const useWhiteMode = () => useContext(WhiteModeContext);
