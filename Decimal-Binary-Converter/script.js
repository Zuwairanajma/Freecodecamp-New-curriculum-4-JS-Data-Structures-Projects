const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");

const animationData = [
    {
      inputVal: 5,
      marginTop: 300,
      addElDelay: 1000,
      msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
      showMsgDelay: 15000,
      removeElDelay: 20000,
    },
    {
      inputVal: 2,
      marginTop: -200,
      addElDelay: 1500,
      msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
      showMsgDelay: 10000,
      removeElDelay: 15000,
    },
    {
      inputVal: 1,
      marginTop: -200,
      addElDelay: 2000,
      msg: 'decimalToBinary(1) returns "1" (base case) and gives that value to the stack below. Then it pops off the stack.',
      showMsgDelay: 5000,
      removeElDelay: 10000,
    }
  ];
  
  const decimalToBinary = (input) => {
    if (input === 0 || input === 1) {
      return String(input);
    } else {
      return decimalToBinary(Math.floor(input / 2)) + (input % 2);
    }
  };