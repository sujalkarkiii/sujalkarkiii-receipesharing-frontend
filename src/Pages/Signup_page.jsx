import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { hadlesignup } from "../Database/connection.js"

const Signup_page = () => {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [phonenumber, setphonenumber] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()




    const handleClick = async (e) => {
        e.preventDefault()
        const responses = { username, email, phonenumber, password }

        try {
           const result= await  hadlesignup(responses);
            console.log(result.messege);
            if (result.success)
            {
               navigate('/')
            }
            
        } catch (error) {
            console.log("error detected", error);
        }
    }
    return (
        <>
            <section>
                <form>

                    <div>
                        {/* username div */}
                        <div className="usernamediv">
                            <label htmlFor="Name">Username:</label>
                            <input type="text"
                                name="Name"
                                placeholder="Enter Username"
                                value={username}
                                onChange={(e) => setusername(e.target.value)}
                            />
                        </div>

                        {/*email div  */}
                        <div className="emaildiv">
                            <label htmlFor="Name">Email:</label>
                            <input type="email"
                                name="Name"
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e) => setemail(e.target.value)}

                            />
                        </div>

                        {/* phonenumer div */}
                        <div className="phonenumberdiv">
                            <label htmlFor="phonenumer">Phone Number:</label>
                            <input type="tel"
                                name="phonenumer"
                                    id="phonenumber"
                                placeholder="Enter Phone Number"
                                value={phonenumber}
                                onChange={(e) => setphonenumber(e.target.value)}

                            />
                        </div>

                        {/* passwword div */}

                        <div className="password">
                            <label htmlFor="password">Password:</label>
                            <input type="text"
                                id="password"
                                name="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setpassword(e.target.value)}

                            />
                        </div>

                    </div>
                    <button type="button" onClick={handleClick}>Sign Up</button>
                </form>

            </section>


        </>
    )
}

export default Signup_page
