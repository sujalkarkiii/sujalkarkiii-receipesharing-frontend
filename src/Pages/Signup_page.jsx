import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { hadlesignup } from "../Database/connection.js"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup_page = () => {
    const [username, setusername] = useState("")
    const [email, setemail] = useState("")
    const [phonenumber, setphonenumber] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate()

// sigup handle function garxa
    const handleClick = async (e) => {
        e.preventDefault();

        // Check garxa if all fields are filled
        if (!username || !email || !phonenumber || !password) {
            toast.error("Please fill all fields!", { position: "top-center" });
            return;
        }

        const responses = { username, email, phonenumber, password }

        try {
            const result = await hadlesignup(responses);

            if (result.success) {
                toast.success("Registration Successful!", { position: "top-center" });
                setTimeout(() => navigate('/'), 2000); // redirect after 2 sec
            } else {
                toast.error(result.message || "Registration failed!", { position: "top-center" });
            }

        } catch (error) {
            toast.error("Already resistred!", { position: "top-center" });
            console.error("Error detected:", error);
        }
    }




    return (
        <section className="flex items-center justify-center min-h-screen bg-green-50 p-4">
            <form className="bg-green-50 p-6 w-full max-w-sm rounded-xl shadow-md">
                {/* Username */}
                <div className="flex flex-col mb-4">
                    <label className="mb-1 font-semibold text-green-800">Username:</label>
                    <input
                        type="text"
                        placeholder="Enter Username"
                        className="p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col mb-4">
                    <label className="mb-1 font-semibold text-green-800">Email:</label>
                    <input
                        type="email"
                        placeholder="Enter Email"
                        className="p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                    />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col mb-4">
                    <label className="mb-1 font-semibold text-green-800">Phone Number:</label>
                    <input
                        type="tel"
                        placeholder="Enter Phone Number"
                        className="p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={phonenumber}
                        onChange={(e) => setphonenumber(e.target.value)}
                    />
                </div>

                {/* Password */}
                <div className="flex flex-col mb-4">
                    <label className="mb-1 font-semibold text-green-800">Password:</label>
                    <input
                        type="password"
                        placeholder="Enter Password"
                        className="p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                    />
                </div>

                <button
                    type="button"
                    onClick={handleClick}
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition mb-2"
                >
                    Sign Up
                </button>

                <button
                    type="button"
                    onClick={(e) => navigate('/')}
                    className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition"
                >
                    Login
                </button>
            </form>

            {/* Toast Container */}
            <ToastContainer />
        </section>
    )
}

export default Signup_page
