/* eslint-disable react/prop-types */
import { useState } from "react";
import { addReview } from "../../api/review";

const AddProductReview = ({onClose, refresh}) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState("")

   const submitData = async (data) => {
    await addReview(123123, data)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission here
    const review_data = {
        productId: 123123,
        title: title,
        description: description,
        rating: rating
    }

    //Submit data to database
    submitData(review_data)

    //Send event to refresh data
    refresh()

    // Reset form fields
    setTitle("")
    setDescription("")
    setRating("")
    onClose()
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-75">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4 w-auto">Create Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-2 font-bold">
              Title:
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-2 font-bold">
              Description:
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              rows={4}
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="stars" className="block mb-2 font-bold">
              Stars:
            </label>
            <input
              type="number"
              id="stars"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="flex justify-end">
          <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-700 mx-1"
              onClick={() => onClose()}
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-700 mx-1"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductReview;
