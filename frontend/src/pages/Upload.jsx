import axios from "axios";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    axios
      .post("http://localhost:3000/create-post", formData)
      .then(() => navigate("/post"))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className=" bg-gray-800 flex flex-col items-center gap-10 justify-center  w-4/5 shadow-2xl p-5 rounded-2xl"
      >
        <input
          className="p-20 border-2 rounded-2xl mx-20 w-2/4"
          type="file"
          name="image"
          accept="image/*"
        />
        <input
          className="border rounded bg-amber-50 text-black w-2/5 mx-20 px-5 py-2"
          type="text"
          name="caption"
          required
          placeholder="Caption..."
        />
        <button
          className="px-4 py-2 bg-green-500 items-center w-1/4 mx-20 rounded border"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Upload;
