const Card = ({ post }) => {
  return (
    <div className="overflow-hidden text-black p-1 bg-gray-400 h-80 w-50 rounded-2xl shadow-2xl m-5 flex justify-center items-center flex-col">
      <img
        className="h-full object-cover rounded-t-2xl "
        src={post.image}
        alt={post.caption}
      />
      <p>{post.caption}</p>
    </div>
  );
};

export default Card;
