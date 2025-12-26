
import { frineds, handlecanclerequest, handlecheckrequest, handlesendrequest } from "../Database/connection"
import { useEffect, useState } from "react"
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

    }
    else {

      await handlesendrequest(userId)
      setrequested(r => ({ ...r, [userId]: true }))

    }
  }

  return (
    <>
      {/* USERS LIST ON TOP-LEFT */}
      <div className="fixed top-4 left-4 bg-white shadow-lg p-4 rounded-lg w-48">
        <h2 className="font-bold mb-2">Users</h2>
        {users.map((user) => (
          <div key={user._id} className="border-b py-1">
            <p>{user.username}
              <button onClick={() => sendrequest(user._id)}>
                {

                  requested[user._id] ? "-" : "+"
                }
              </button>
            </p>

          </div>
        ))}
      </div>
    </>
  )
}

export default User_page
