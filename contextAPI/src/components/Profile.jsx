import React , {useContext} from 'react'
import { UserContext } from '../App'


const Profile = () => {

    const { userDetails } = useContext(UserContext)

    
  
    return <div><br />Welcome {userDetails.username}!</div>;

}

export default Profile

