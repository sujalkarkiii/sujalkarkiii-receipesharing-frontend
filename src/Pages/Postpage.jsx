import { useState } from "react";
import { createPost } from "../Database/connection";

const Postpage = () => {


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleclick = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("image", image);
    
    try {
      const postdata = await createPost(formdata);
      if (postdata.success) {
        alert("Post uploaded successfully!");

        // Reset form
        setTitle("");
        setDescription("");
        setImage(null);
      }
    } catch (error) {
      console.error(error);
      alert("Error uploading post");
    }
  };

  return (
<section className="flex justify-center mt-10 px-4">
  <div className="w-full max-w-lg bg-green-50 p-6 rounded-xl shadow-md">
    <form className="flex flex-col gap-4">

      {/* TITLE */}
      <div className="flex flex-col">
        <label htmlFor="title" className="mb-1 font-semibold text-green-800">
          Title:
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter title"
        />
      </div>

      {/* DESCRIPTION */}
      <div className="flex flex-col">
        <label htmlFor="description" className="mb-1 font-semibold text-green-800">
          Description:
        </label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter description"
        />
      </div>

      {/* IMAGE */}
      <div className="flex flex-col">
        <label htmlFor="image" className="mb-1 font-semibold text-green-800">
          Image:
        </label>
        <input
          type="file"
          name="image"
          id="image"
          onChange={(e) => setImage(e.target.files[0])}
          className="p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* SUBMIT BUTTON */}
      <button
        type="button"
        onClick={handleclick}
        className="bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition"
      >
        Submit
      </button>

    </form>
  </div>
</section>

  );
};

export default Postpage;
