import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../../Components/Spinner";
import { MdOutlineAddBox } from "react-icons/md";
import { useEffect, useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:9990/books")
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 w-full h-screen overflow-auto">
      <div className="flex justify-center items-center gap-x-4 mb-4">
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-600 text-3xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="overflow-auto">
          <table className="table-auto w-full text-left border-collapse border border-slate-500">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-slate-600 p-2">No</th>
                <th className="border border-slate-600 p-2">Title</th>
                <th className="border border-slate-600 p-2">Author</th>
                <th className="border border-slate-600 p-2">Publish Year</th>
                <th className="border border-slate-600 p-2">Operation</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((book, index) => (
                <tr key={book.id}>
                  <td className="border border-slate-700 p-2">{index + 1}</td>
                  <td className="border border-slate-700 p-2">{book.title}</td>
                  <td className="border border-slate-700 p-2">{book.author}</td>
                  <td className="border border-slate-700 p-2">
                    {book.Publishyear}
                  </td>
                  <td className="border border-slate-700 p-2">
                    <div className="flex gap-x-2">
                      <Link to={`/books/details/${book.id}`}>
                        <BsInfoCircle className="text-2xl text-green-800" />
                      </Link>
                      <Link to={`/books/edit/${book.id}`}>
                        <AiOutlineEdit className="text-2xl text-yellow-500" />
                      </Link>
                      <Link to={`/books/delete/${book.id}`}>
                        <MdOutlineDelete className="text-2xl text-red-700" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
