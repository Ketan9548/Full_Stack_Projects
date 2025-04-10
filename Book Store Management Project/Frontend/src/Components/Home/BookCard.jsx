import { useState } from "react";
import { Link } from "react-router-dom";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { PiBookOpenTextLight } from "react-icons/pi";
import BookModal from "./BookModal";

const BookCard = ({ datas }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {datas.map((item) => (
        <div
          key={item._id}
          className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
        >
          <h2 className="flex-row mb-2">
            <span className="font-bold">Year: </span>
            {item.Publishyear}
          </h2>
          {/* <h4 className="my-2 text-gray-500 text-sm lg:text-base">{item._id}</h4> */}
          <div className="flex justify-start items-center gap-x-2">
            <PiBookOpenTextLight className="text-red-300 text-2xl lg:text-3xl" />
            <h2 className="my-1 text-sm lg:text-lg">{item.title}</h2>
          </div>
          <div className="flex justify-start items-center gap-x-2">
            <BiUserCircle className="text-red-300 text-2xl lg:text-3xl" />
            <h2 className="my-1 text-sm lg:text-lg">{item.author}</h2>
          </div>
          <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
            <BiShow
              className="text-2xl lg:text-3xl text-blue-800 hover:text-black cursor-pointer"
              onClick={() => setShowModal(true)}
            />
            <Link to={`/books/details/${item._id}`}>
              <BsInfoCircle className="text-xl lg:text-2xl text-green-800 hover:text-black" />
            </Link>
            <Link to={`/books/edit/${item._id}`}>
              <AiOutlineEdit className="text-xl lg:text-2xl text-yellow-600 hover:text-black" />
            </Link>
            <Link to={`/books/delete/${item._id}`}>
              <MdOutlineDelete className="text-xl lg:text-2xl text-red-600 hover:text-black" />
            </Link>
          </div>
          {showModal && (
            <BookModal datas={item} onClose={() => setShowModal(false)} />
          )}
        </div>
      ))}
    </div>
  );
};

export default BookCard;
