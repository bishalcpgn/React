import { useEffect, useState } from "react"
import { ThemeProvider } from "./context/Theme"
import ThemeButton from "./components/ThemeButton"
import Card from "./components/Card"

function App() {

  const [themeMode, setThemeMode] = useState('light')

  // defining theme changing functions of Theme.js 
  const lightTheme = () => setThemeMode("light")
  const darkTheme = () => setThemeMode("dark")


  // to change theme of document when state of themeMode is changed
  useEffect(() => {
    const htmlElement = document.querySelector('html');
    htmlElement.classList.remove('light', 'dark');
    htmlElement.classList.add(themeMode);
  }, [themeMode])



  return (
    <>

      <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>

        <div className=" m-10 flex items-center justify-center">
          <ThemeButton />
        </div>

       <div>
         <Card />
         </div>

      </ThemeProvider>

    </>
  )
}

export default App






