import { useState, useEffect } from 'react'
import Search from './components/Search'
import Result from './components/Result'
import axios from 'axios'

const App = () => {

  const [search, setSearch] = useState("")
  const [weather, setWeather] = useState("")

  // requesting data from openweather 
  const getWeatherData = () => {
    if ( search != "") {
      // API key is from temp-mail
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=1cf6e746e4b2c8430f90cd962a9970af`)
      .then((response) => {
        // updating weather state 
        setWeather(response.data) })
      .catch((error) => { console.error(error) })
      }
  }
  
  
  return (
    <div className=' max-w-2xl  mx-auto shadow-black-50 shadow-xl mt-5 p-3 ' >
      <Search search={search} setSearch={setSearch} getWeatherData={getWeatherData} />
      < Result weather={weather}/>

    </div>
  )

}

export default App