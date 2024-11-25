let Randomarray = (num1, num2) => {
  let arr = [];
  while (arr.length < num2 - num1) {
    const randomValue = Math.floor(Math.random() * (num2 - num1 + 1) + num1);
    if (!arr.includes(randomValue)) {
      arr.push(randomValue);
    }
  }
  return arr;
};

export default Randomarray;
  