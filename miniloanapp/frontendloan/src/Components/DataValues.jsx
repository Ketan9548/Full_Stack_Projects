import { useState, useEffect } from "react";
import axios from "axios";

const DataValues = () => {
  const [data, setdata] = useState([]);
  const url = "http://localhost:3200/";

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  }, []);

  return (
    <>
      <div>
        {data.map((val) => (
          <>
            <p>{val.n1}</p>
          </>
        ))}
      </div>
    </>
  );
};

export default DataValues;
