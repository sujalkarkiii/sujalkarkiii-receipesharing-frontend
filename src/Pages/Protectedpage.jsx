
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { handleprotection } from "../Database/connection";
import Navbar from "../components/Navbar";
const Protectedpage = () => {

  const [isAuth, setAuth] = useState(null)

  useEffect(() => {
    const checkauthenticate = async () => {

      try {
         await handleprotection()
        setAuth(true)

      } catch (error) {
      setAuth(false)
    }
  }
  checkauthenticate()
  }, [])
  
  if(isAuth==null) return <p>loading...</p>
  if(!isAuth) return <Navigate to="/" replace />
  return (
    <>
    <Navbar/>
    
    <Outlet />
    </>

  )
}

export default Protectedpage
