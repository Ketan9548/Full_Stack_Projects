import Clock from "./Clock";

const Home = () => {
  return (
    <>
      <div className="w-full bg-black h-screen">
        <div className="grid place-items-center ">
          <div className="bg-slate-950 p-28 border-2 mt-48 rounded-3xl hover:cursor-pointer">
            <Clock />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
