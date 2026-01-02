import { frineds, handlecanclerequest, handlecheckrequest, handlesendrequest } from "../Database/connection"
import { useEffect, useState } from "react"
import { toast } from "react-toastify";

const User_page = () => {
  const [users, setusers] = useState([])
  const [requested, setrequested] = useState({})

  const loadUsers = async () => {
    const loaduser = await frineds()
    setusers(loaduser.homedata)
  }

  useEffect(() => {
    loadUsers()
  }, [])

  useEffect(() => {
    const loadRequests = async () => {
      const requestedIds = await handlecheckrequest();
      const requestedStatus = {};

      if (requestedIds.exists) {
        requestedIds.validare.forEach(req => {
          req.sentto.forEach(id => {
            requestedStatus[id] = true; 
          });
        });
        setrequested(requestedStatus);
      }
    };

    loadRequests();
  }, []);

  const sendrequest = async (userId) => {
    if (requested[userId]) {
      await handlecanclerequest(userId)
      setrequested(r => ({ ...r, [userId]: false }))
      toast.error("Friend request canceled!", { position: "top-right", autoClose: 2500 }); 
    } else {
      await handlesendrequest(userId)
      setrequested(r => ({ ...r, [userId]: true }))
      toast.success("Friend request sent!", { position: "top-right", autoClose: 2500 });  
    }
  }

  return (
    <div className="fixed top-20 left-4 bg-white shadow-lg p-4 rounded-lg w-48">
      <h2 className="font-bold mb-2">Users</h2>
      {users.map((user) => (
        <div key={user._id} className="border-b py-1 flex justify-between items-center">
          <span>{user.username}</span>
          <button 
            onClick={() => sendrequest(user._id)}
            className="px-2 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            {requested[user._id] ? "-" : "+"}
          </button>
        </div>
      ))}
    </div>
  )
}

export default User_page;
