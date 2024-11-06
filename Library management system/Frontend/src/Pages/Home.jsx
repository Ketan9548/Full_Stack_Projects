import library from '../assets/StudentStudy.jpg';
import library1 from '../assets/StudentStudy1.jpg';

function Home() {
  return (
    <div> {/* Add top padding to create space below the navbar */}
      <div className="flex flex-col md:flex-row bg-slate-700 md:h-screen h-auto">
        <div className="md:h-96 h-auto w-full md:w-2/5 flex flex-col justify-center text-7xl p-10">
          <h2 className="text-white">Book Store For You.....</h2>
          <button className="text-sm border-2 font-bold text-white border-black mt-3 p-2 w-24 hover:bg-white hover:text-slate-700 hover:font-bold">
            View Books
          </button>
        </div>
        <div className="flex-col justify-center items-center md:w-3/5 h-screen">
          <img className="h-52 pt-8 md:w-2/4 p-4" src={library} alt="Student Study" />
          <p className='text-white font-bold text-xl text-center'>Knowledge is the bedrock of a meaningful life.</p>
          <img className="pl-28 h-48 md:w-2/4 p-4" src={library1} alt="Student Study" />
        </div>
      </div>
    </div>
  );
}

export default Home;
