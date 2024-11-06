import express from "express";
import cors from "cors";

const app = express();
const port = 3200;

app.use(cors());

const data = [
  {
    id: 1,
    n1: "kapil",
    n2: "sumit",
    n3: "nayan",
  },
  {
    id: 2,
    fist: 21,
    second: 43,
    thired: 46,
  },
];

app.get("/", (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
