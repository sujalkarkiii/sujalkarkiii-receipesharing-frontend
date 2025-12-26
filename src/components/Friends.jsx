import { useEffect, useState } from "react";
import { handlenewfriend } from "../Database/connection";

const Friends = () => {
  const [loadingfriend, setloadingfriend]=useState([])
  useEffect(()=>{
    const loadfriend= async () => {
    const frienddata= await handlenewfriend()
    setloadingfriend(frienddata.myfriends.friends)

    }
    loadfriend()
  },[])
  return (
<>
{
  loadingfriend.map((req)=>(
    <div key={req._id} className="div">
      <p>{req.username}</p>
    </div>
  ))
}
</>
  );
};

export default Friends;
