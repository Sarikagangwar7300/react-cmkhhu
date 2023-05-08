import React from 'react';
import './style.css';

export default function App() {
  let arr = [1, 1, 2, 3];

  let newArr = [];
  arr.filter((item, index) => {
    if (arr.indexOf(item) == index) newArr.push(item);
  });

  console.log(newArr);

  let input = 'aaazzcbbbdddd';
  let count = {};
  let output;

  input.split('').map((value, index) => {
    count[value] = count[value] ? count[value] + 1 : 1;
  });

  console.log(count);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
