import { useEffect, useState } from "react";
import Randomarray from "./Random";

const Home = () => {
  const [arr, setarr] = useState([]);

  const Handelechange = () => {
    let value = Randomarray(10, 15);
    setarr(value);
  };
  useEffect(() => {
    Handelechange();
  }, []);

  return (
    <>
      <div className="bg-red-300 h-svh w-svw">
        <button onClick={Handelechange}>Generated Random Array</button>
      </div>
      <div className="flex flex-row justify-center flex-wrap p-4">
        {arr.map((value) => (
          <>
            <div
              className="flex items-end mx-2"
              style={{
                height: `${value * 10}px`,
                background: "red",
                width: "30px",
              }}
            >
              {value}
            </div>
          </>
        ))}
      </div>
      <p>good one</p>
    </>
  );
};

export default Home;
