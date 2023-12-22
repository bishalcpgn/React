import React from 'react';


const Result = (props) => (



  <div className='shadow-lg mt-4 p-2'>

    {
      //Checking if weather has values
     props.weather
      ?
      <>
        <h2 className='text-4xl text-center'>{props.weather.name}</h2>

        <div className='flex justify-around mt-2'>
          <div>Max Temperature: {props.weather.main.temp_max}</div>
          <div>Min Temperature: {props.weather.main.temp_min}</div>
        </div>
      </>

      :

      <>
        <div >Please enter a city.</div>
      </>
    }
  </div>
)


export default Result;
