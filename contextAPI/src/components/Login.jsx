import React, { useState, useContext } from 'react'
import { UserContext } from '../App';



function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUserDetails } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault() 
        let user = {username, password}
        setUserDetails(user)   
    }


    return (
        <div>

            <h2>Login </h2>

            <input type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='username' />

            <input type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'/>


            <button onClick={handleSubmit}>Submit</button>

        </div>
    )
}

export default Login