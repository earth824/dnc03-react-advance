import axios from 'axios';

export default function App() {
  return <div>App</div>;
}

// callback, promise
// axios => promise based
// handle promise object:
// 1. then, catch, finally
// 2. async/await (*** most popular nowaday)

async function run() {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  console.log(res.data);
}

run();
