import React, { useState, createContext } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'


const UserContext = createContext(null)



const App = () => {

  const [userDetails, setUserDetails] = useState({})

  return (
    <div>
      
      <p> Context API in React </p>

      <UserContext.Provider value={{userDetails, setUserDetails}}>
        <Login />
        <Profile />
      </UserContext.Provider>


    </div>

  )
}

export default App

export { UserContext }