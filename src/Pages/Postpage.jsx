import { useState } from "react";
import { createPost } from "../Database/connection";

const Postpage = () => {
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [preparation, setPreparation] = useState("");
  const [image, setImage] = useState(null);

  const handleClick = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("shortDescription", shortDescription);
    formData.append("preparation", preparation);
    if (image) formData.append("image", image);

    try {
      const postData = await createPost(formData);
      if (postData.success) {
        alert("Post uploaded successfully!");
        // Reset form
        setTitle("");
        setShortDescription("");
        setPreparation("");
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
            <label className="mb-1 font-semibold text-green-800">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              className="p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* SHORT DESCRIPTION */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-green-800">
              Short Description (shown in feed):
            </label>
            <textarea
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              placeholder="Enter short description"
              rows={3}
              className="p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* PREPARATION */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-green-800">
              Preparation (how dish is prepared):
            </label>
            <textarea
              value={preparation}
              onChange={(e) => setPreparation(e.target.value)}
              placeholder="Enter preparation details"
              rows={5}
              className="p-3 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* IMAGE */}
          <div className="flex flex-col">
            <label className="mb-1 font-semibold text-green-800">Image:</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="button"
            onClick={handleClick}
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
