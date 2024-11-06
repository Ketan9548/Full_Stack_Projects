import { useEffect, useState } from "react";
import axios from "axios";

const Books = () => {
  const [data, setData] = useState([]);
  const url = "http://localhost:3321/api/show";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        let val = Object.entries(res.data.books);
        setData(val);
        console.log(val);
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
      });
  }, [url]);

  return (
    <>
      <div>
        <p className="flex justify-center font-bold text-3xl">All Books</p>
      </div>
      <div className="grid w-screen grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5 mb-5">
        {data.map((val, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img
                className="rounded-t-lg w-full h-72 object-cover"
                src={val[1].image}
                alt=""
              />
            </a>
            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Book Name: {val[1].BookName}
              </h5>
              <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                Price: {val[1].price}
              </p>
              <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                Author: {val[1].author}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Description: {val[1].description}
              </p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Updated At: {new Date(val[1].updatedAt).toLocaleString("en-us")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Books;
