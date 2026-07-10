import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-screen flex flex-col">
        <h1 className="flex justify-center text-7xl">Landing Page</h1>
        <p className="flex justify-center items-center text-gray-300 m-15">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam
          illo tempore, nostrum exercitationem porro aspernatur eligendi
          ratione. Quibusdam saepe optio, ea maiores dolorum illo nihil pariatur
          architecto, natus sequi deserunt autem officia! Totam laborum
          praesentium iste magni molestias iusto officia provident fugiat fugit
          assumenda temporibus eligendi in ea, amet ducimus quam officiis quidem
          ab culpa. Vel atque eaque, consequatur laborum cum impedit qui
          perspiciatis ratione accusantium expedita officiis dolor
          necessitatibus beatae accusamus architecto blanditiis velit rem
          deleniti veniam eveniet? Praesentium cum quibusdam recusandae quas
          doloremque a rerum adipisci sed ipsum. Repudiandae ipsa eveniet beatae
          quas? Maiores accusamus numquam voluptates omnis eligendi nemo optio
          culpa aut consequatur ad reiciendis ab tempora, ipsum nulla deserunt
          nostrum at corporis minus vitae temporibus doloribus quibusdam
          distinctio dignissimos quo! Numquam fugiat, sed qui non sunt ullam
          tempore cum ratione quo facilis vero possimus, doloribus corrupti
          dolores. Quasi et deleniti consequatur quibusdam ea in commodi!
        </p>
        <div className="flex justify-center">
          <button
            className="m-4 bg-green-300 text-black border-black border px-2 py-1 rounded "
            onClick={() => navigate("/create-post")}
          >
            Upload
          </button>
          <button
            className="m-4 bg-green-300 text-black border-black border px-2 py-1 rounded "
            onClick={() => navigate("/post")}
          >
            Feed
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
