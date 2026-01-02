import {  hanldhome } from "../Database/connection";
import { useState, useEffect } from "react";

const Goinise_post = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const posts_data = await hanldhome()
      setPost(posts_data.homedata);
    };

    loadData();
  }, []);

  return (
    <div className="w-full flex flex-col items-center mt-10 px-4">
      {post.map((p) => (
        <div
          key={p._id}
          className="flex flex-col md:flex-row items-start border border-gray-300 rounded-lg shadow-lg p-6 mb-6 w-full max-w-4xl bg-white"
        >
          {/* Image on top-left */}
          <img
            src={p.image}
            alt={p.title}
            className="w-full md:w-64 h-64 object-cover rounded-lg mr-0 md:mr-6 mb-4 md:mb-0"
          />

          {/* Text content */}
          <div className="flex flex-col">
            <h2 className="font-bold text-2xl mb-2">{p.title}</h2>
            <h3 className="font-semibold text-lg mb-2">By: {p.postedBy.username}</h3>
            <p className="text-gray-700 mt-4">{p.preparation}</p> {/* if you have preparation field */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Goinise_post;
