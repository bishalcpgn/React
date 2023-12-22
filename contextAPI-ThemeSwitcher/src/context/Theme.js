import React, { createContext, useContext } from 'react'

const ThemeContext = createContext({
    themeMode: "light",
    lightTheme: () => { },
    darkTheme: () => { }
})


export const ThemeProvider = ThemeContext.Provider

// custom hook that return values of ThemeContext so, that
// we don't need to import our ThemeContext 
export default function useTheme() {
    return useContext(ThemeContext)
}