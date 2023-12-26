import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import authService from './appwrite/auth'
import { login, logout } from "./store/authSlice"
import { Header, Footer } from "./components/index"

const App = () => {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()


  // check if user is login or not 
  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        userData ? dispatch(login({ userData }))
          : dispatch(logout())
      })
      .finally(() => setLoading(false))
  }, [])


  return !loading ? (
    <div>
      <Header /> 

      <main>
      Todo
      </main>

      <Footer />
    </div>
  )
    : null
}


export default App
