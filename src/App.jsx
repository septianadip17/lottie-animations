import Lottie from "lottie-react";
import Cloud from "./assets/animations/cloud.json";

const App = () => {
  return (
    <div className=" text-white">
      <div className=" justify-center items-center grid space-y-5 mt-52">
        <p className=" text-center">React + Vite</p>
        <p className=" text-center">Lottie Animations</p>
        <Lottie animationData={Cloud} />
        <h1 className=" text-purple-500 text-5xl font-bold  ">
          <span className=" text-white">Lets</span>code!
        </h1>

        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => alert("clicked")}
          >
            {" "}
            Click me
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
