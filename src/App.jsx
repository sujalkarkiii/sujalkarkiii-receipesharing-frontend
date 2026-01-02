import { Route, Routes } from "react-router-dom"
import Login_page from './Pages/Login_page'
import Signup_page from './Pages/Signup_page'
import Home_page from './Pages/Home_page'
import Protectedpage from "./Pages/Protectedpage"
import Postpage from "./Pages/Postpage"
import Chatting_page from "./Pages/Chatting_page"
import Mine_page from "./Pages/Mine_page"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Goinise_post from "./Pages/Goinise_post"
const App = () => {
  return (
    <div>
      <Routes>
              <Route path='/signup' element={<Signup_page/>}/>
              <Route path='/' element={<Login_page/>}/>
              <Route element={<Protectedpage/>}>

              <Route path='/home' element={<Home_page/>}/>
              <Route path='/messege' element={<Chatting_page/>}/>
              
              <Route path='/post' element={<Postpage/>}/>
              <Route path='/me' element={<Mine_page/>}/>
              <Route path='/receipe' element={<Goinise_post/>}/>

              </Route>
      </Routes>
   <ToastContainer />
    </div>
  )
}

export default App
