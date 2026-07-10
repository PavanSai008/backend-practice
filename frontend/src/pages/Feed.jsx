import { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";

const Feed = () => {
  const [post, setPost] = useState([
    {
      _id: "6a4cbedeaec6f6796a55e02e",
      image: "https://ik.imagekit.io/Pavan008/image_RHf3qutWU.jpg",
      caption: "border-coolie",
    },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/post")
      .then((res) => setPost(res.data.posts));
  }, []);

  if (post.length === 0) {
    return <div>No posts found</div>;
  }
  return (
    <div className="flex flex-wrap justify-between">
      {post.map((posts) => (
        <Card post={posts} key={posts._id} />
      ))}
    </div>
  );
};

export default Feed;
