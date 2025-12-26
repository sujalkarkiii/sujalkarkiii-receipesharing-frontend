import { hanldhome } from "../Database/connection"
import { useState,useEffect } from "react"
const Feed = () => {


      const [post, setpost] = useState([])

  useEffect(() => {
    const loaddata = async () => {
      const posts_data = await hanldhome()
      setpost(posts_data.homedata)
    }
    loaddata()
  }, [])

  return (
<>
  {/* POSTS DISPLAY CENTER */}
  <div className="w-full flex justify-center mt-10 px-4">
    <div className="w-full max-w-3xl flex flex-col items-center">
      {post.map((posts) => (
        <div
          key={posts._id}
          className="flex items-start border border-gray-300 rounded-lg shadow-lg p-4 mb-6 w-full bg-white"
        >
          <img
            src={posts.image}
            alt={posts.title}
            className="w-32 h-32 object-cover rounded-lg mr-6"
          />

          <div className="flex flex-col">
            <h2 className="font-bold text-lg mb-1">
              {posts.postedBy.username}
            </h2>
            <h3 className="font-semibold text-md mb-2">{posts.title}</h3>
            <p className="text-gray-700">{posts.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</>

  )
}

export default Feed
