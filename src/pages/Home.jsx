import { useState } from "react";
import LocationModal from "../components/LocationModal";

const Home = () => {
  const [click, setClick] = useState(false);
  console.log(click);
  return (
    <div>
      <div className=" text-center">
        <h1 className="text-6xl text-blue-300 font-extrabold">
          Today's <span className="text-blue-500">Weather</span>
        </h1>
        <p className="text-lg text-gray-500 py-4 ">
          See today’s weather right where you stand.
        </p>
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          onClick={() => setClick(true)}
          className="text-lg bg-blue-500 text-white font-medium rounded-3xl py-1 px-4 cursor-pointer hover:scale-105 transition-all delay-75"
        >
          Check Weather
        </button>
      </div>

      {/* ------------->  Modal */}

      {click && <LocationModal close={() => setClick(false)}></LocationModal>}
    </div>
  );
};

export default Home;
