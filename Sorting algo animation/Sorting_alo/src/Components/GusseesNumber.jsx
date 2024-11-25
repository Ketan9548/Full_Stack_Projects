import { useEffect, useState } from "react";
import RandomNumber from "./RandomNumber";

function GuessTheNumber() {
  const [data, setData] = useState(null);
  const [value, setValue] = useState("");
  const [counter, setCounter] = useState(0);
  const min = 10;
  const max = 20;

  const handlenumber = () => {
    if (counter < 100) {
      setCounter(counter + 1);
      if (counter === 0) {
        const number = RandomNumber(min, max);
        setData(number);
      }
    }
  };

  useEffect(() => {
    handlenumber();
  }, []);
  useEffect(()=>{
    if (parseInt(value)===data) {
        setData('')
    }
  },[])

  return (
    <>
      <div>
        <p className="font-bold text-3xl mb-8">Guess The Number</p>
        <p className="font-bold text-xl mb-5">
          Please Guess the number Between {min} to {max}
        </p>

        {parseInt(value) === data ? (
          <div>
            <p>Congratulations! You guessed the correct number - {data}</p>
          </div>
        ) : (
          <div>Try guessing</div>
        )}

        <div className="flex justify-center">
          <p className="mr-5">
            <input
              className="bg-slate-400 font-bold"
              type="text"
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
          </p>
          <p className="font-bold">Enter Number- {data}</p>
        </div>

        <p className="mt-2 mb-4">
          {counter === 100 ? (
            <div>
              <p>Maximum attempts reached. Please try again.</p>
            </div>
          ) : (
            <button
              className="bg-red-400 border-2 border-black rounded-md p-2"
              onClick={handlenumber}
            >
              Guess Button
            </button>
          )}
        </p>
      </div>
    </>
  );
}

export default GuessTheNumber;
