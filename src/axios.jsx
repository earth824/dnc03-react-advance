import axios from 'axios';
import { useState } from 'react';

export default function App() {
  return (
    <div>
      <Test />
      <Test />
      <Test />
    </div>
  );
}

let x = 0;

function Test(props) {
  // props is read only
  return <div>{x * 2}</div>;
}

// callback, promise
// axios => promise based
// handle promise object:
// 1. then, catch, finally
// 2. async/await (*** most popular nowaday)

async function run() {
  try {
    // axios throw error if response has error (4xx, 5xx) promise reject
    // get, delete: (url, options)
    // const res = await axios.get('https://jsonplaceholder.typicode.com/users', {
    //   headers: {
    //     Authorization: 'Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    //   },
    // });

    // post, put, patch: (url, data, options)
    const res = await axios.post(
      'https://jsonplaceholder.typicode.com/users',
      {
        email: 'a@mail.com',
        age: 29
      },
      { headers: { Authorization: 'Bearer xxxxxxxxxxxxxxxxxx' } }
    );
    console.log(res.data); // res.data: only success response (2xx) promise resolve
  } catch (error) {
    console.log('Error occured');
    console.log(error.message);
  }
}

run();

// async function run 5s
// sync function run 3s
// code after

// PURE FUNCTION vs. IMPURE FUNCTION
// PURE FUNCTION satisfy 2 rule
// 1. must not change value outside function
// 2. same input return same output

// let x = 5;

// function double(a) {
//   return 2 * a;
// }
// // double(2) ==> 4
// // double(5) ==> 10

// function impure() {
//   x = x + 1;
//   return 2 * x;
// }

// console.log(impure()); // 12
// console.log(impure()); // 14

// REACT (1. class component, 2. function component)
// early: component have state: only class component can be used
// since v 16.8: function component can have state - useState(one of react hook)
// another hook - effect: useEffect, context: useContext, ref: useRef, custom: use* (useAuth, useFetch) etc.
// rule of hook
// 1. can be called inside function component or custom hook(function begin with 'use')
// function a() {
//   useState()
// }
// function useAuth() {
//   useState()
// }
// 2. call at top level
function Counter() {
  // useState
  const handleClick = () => {
    // useState(); cant be called inside this funtion
  };
  // useState
  return <div onClick={handleClick}>Test</div>;
}
