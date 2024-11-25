let RandomNumber = (num1, num2) => {
    let randomValue = Math.floor(Math.random() * (num2 - num1 + 1) + num1);
    return  randomValue;
  };
  
  export default RandomNumber;
    