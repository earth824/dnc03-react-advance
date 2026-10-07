import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default function App() {
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  console.log('Component');

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?title=${searchTerm}`
      );
    };
    const timerId = setTimeout(() => {
      fetchPosts();
    }, 500);

    console.log('Effect: ', timerId);

    return () => {
      console.log('Cleaning Effect: ', timerId);
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  return (
    <div>
      {/* <UserList /> */}
      {/* <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Timer />} */}
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={async (e) => {
          setSearchTerm(e.target.value);
          // debouncing
          // const searchTerm = e.target.value;
          // const res = await axios.get(
          //   `https://jsonplaceholder.typicode.com/posts?title=${searchTerm}`
          // );
        }}
      />
    </div>
  );
}

// function Timer() {
//   const [num, setNum] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       console.log('effect');
//       // console.log(num);
//       setNum((prev) => prev + 1);
//     }, 1000);

//     return () => {
//       console.log('Timer removed');
//       // clear interval
//       clearInterval(intervalId);
//     }; // cleaning effect function
//   }, []);

//   return <h1>{num}</h1>;
// }

// function UserList() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         setLoading(true);
//         const res = await axios.get(
//           'https://jsonplaceholder.typicode.com/userss'
//         );
//         console.log(res.data);
//         setUsers(res.data);
//       } catch (error) {
//         setError('Something went wrong');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);
//   // useEffect( () => {});
//   // useEffect( () => {});

//   if (loading) return <h1>Loading ...</h1>;
//   if (error) return <h1>{error}</h1>;

//   return (
//     <ul>
//       {users.map((el) => (
//         <li key={el.id}>{el.name}</li>
//       ))}
//     </ul>
//   );
// }

// let x = 0;

// function UserList(props) {
//   const [a, setA] = useState(true);
//   const [count, setCount] = useState(0);

//   console.log('Before effect');
//   // x = x + 1;
//   // const res = axios.get('https://jsonplaceholder.typicode.com/users');
//   useEffect(() => {
//     // this callback fn called effect function
//     // this fn will be run after component render(if dependency array not provided: second parameter of useEffect)
//     // dependency array will determine when the callback will be run
//     // []: callback will be run only after first render
//     // [a]: callback will be run if 'a' has been changed
//     console.log('Inside effect fn');
//   }, [a]);

//   console.log('After effect');

//   return (
//     <div>
//       <h1>Current State: {`${a}`}</h1>
//       <button onClick={() => setA(!a)}>Toggle</button>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count - 1)}>-</button>
//     </div>
//   );
// }

// SIDE EFFECT
// ex. read data from external(network request), mutate data outside function
// EFFECT HOOK: handle side effect
