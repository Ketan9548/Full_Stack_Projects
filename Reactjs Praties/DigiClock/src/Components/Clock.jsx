import { useEffect, useState } from "react";

const Clock = () => {
  let time = new Date().toLocaleTimeString();
  const [data, setData] = useState(time);

  const Updatetime = () => {
    time = new Date().toLocaleTimeString();
    setData(time);
  };

  useEffect(() => {
    const intervel = setTimeout(() => {
      Updatetime();
    }, 1000);
    return () => clearInterval(intervel);
  });

  return (
    <>
      <div className="grid place-items-center mt-8 mb-8">
        <p className=" font-bold text-9xl text-cyan-200 ">{data}</p>
      </div>
    </>
  );
};

export default Clock;
