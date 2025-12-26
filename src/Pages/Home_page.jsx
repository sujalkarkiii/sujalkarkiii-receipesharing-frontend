import { Link, useLocation } from "react-router-dom"
import User_page from "../components/List_ofuser"
import Feed from "../components/Feed"
import { logout } from "../Database/connection"
import { useNavigate } from "react-router-dom";
import { useEffect} from "react"
import {Toaster, toast} from "react-hot-toast"

const Home_page = () => {
const location=useLocation()

const navigate = useNavigate();
  const handleloginout= async()=>{
    await logout()
    navigate("/")
  }

  
    useEffect(() => {
     if(location.state?.successMessage)
     {
      toast.success(location.state.successMessage,{ duration:2500})
       window.history.replaceState({}, document.title);
     }
    }, [])
  return (
<>
  <User_page />
  <Feed />

  {/* FRIENDS BUTTON (Top Left) */}
  <Link to="/friends">
    <button
      type="button"
      className="
        fixed top-4 left-4
        bg-green-300 text-green-900
        px-4 py-2 rounded shadow
        hover:bg-green-400
        transition
      "
    >
      Friends
    </button>
  </Link>

  {/* POST BUTTON (Top Right - ALWAYS) */}
  <Link to="/post">
    <button
      type="button"
      className="
        fixed top-4 right-4
        bg-green-500 text-white
        px-4 py-2 rounded shadow
        hover:bg-green-600
        transition
      "
    >
      Post
    </button>
  </Link>

  {/* MESSAGE BUTTON (Below Post) */}
  <Link to="/messege">
    <button
      type="button"
      className="
        fixed top-16 right-4
        bg-green-500 text-white
        px-4 py-2 rounded shadow
        hover:bg-green-600
        transition
      "
    >
      Message
    </button>
  </Link>

  {/* ME BUTTON (Below Message) */}
  <Link to="/me">
    <button
      type="button"
      className="
        fixed top-28 right-4
        bg-green-500 text-white
        px-4 py-2 rounded shadow
        hover:bg-green-600
        transition
      "
    >
      Me
    </button>
  </Link>

    <button
      type="button"
      className="
        fixed top-42 right-4
        bg-green-500 text-white
        px-4 py-2 rounded shadow
        hover:bg-green-600
        transition
      "
      onClick={handleloginout}
    >
      logout
    </button>
<Toaster />
</>

  )
}

export default Home_page
