import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { hadlelogin } from "../Database/connection.js"
const Login_page = () => {
    const [identifier, setidentifier] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()


    const handleClick = async (e) => {
        e.preventDefault()
        const responses = { identifier, password }

        try {
            const login = await hadlelogin(responses);

            if (login.success) {

                navigate('/home',{state:{successMessage:"login success"}})
            }

        } catch (error) {
            console.log("error detected", error);
        }
    }
    return (
        <>
<section className="flex justify-center p-6">
    <form className="bg-green-50 p-6 w-full max-w-sm rounded-xl shadow-md">
        
        <div className="mb-4">
            {/* username div */}
            <div className="flex flex-col mb-4">
                <label className="mb-1 font-semibold text-green-800">Email/PhoneNumber:</label>
                <input
                    type="text"
                    placeholder="Enter email or phone number"
                    className="p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    onChange={(e) => setidentifier(e.target.value)}
                />
            </div>

            {/* password div */}
            <div className="flex flex-col">
                <label className="mb-1 font-semibold text-green-800">Password:</label>
                <input
                    type="password"
                    placeholder="Enter Password"
                    className="p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    onChange={(e) => setpassword(e.target.value)}
                />
            </div>
        </div>

        <button
            type="button"
            onClick={handleClick}
            className="w-full bg-green-600 text-white py-3 mt-2 rounded-lg font-bold hover:bg-green-700 transition"
        >
            Login
        </button>

        <Link to="/signup">
            <button
                type="button"
                className="w-full bg-green-200 text-green-800 py-3 mt-3 rounded-lg font-semibold hover:bg-green-300 transition"
            >
                Signup
            </button>
        </Link>
    </form>
</section>
        </>
    )
}

export default Login_page
