// Component Lifecycle (3 Phase)
// 1. Mounting: Component inserted into DOM, set initial state
// 2. Updating: State changed, component re-render
// 3. Unmounting: Component removed from DOM, all data lost

import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? 'Hide' : 'Show'}
      </button>
      <div style={{ height: '16px', width: '100px' }}></div>
      {show && <Counter />}
      <UserList />
    </div>
  );
}

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(res.data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <ul>
        {users.map((el) => (
          <li key={el.id}>{el.name}</li>
        ))}
      </ul>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // realtime chat (socket.io)
    // open connection
    const id = setInterval(() => {
      console.log('interval callback run');
    }, 1000);

    return () => {
      // disconnect socket connection
      console.log('Counter unmounting');
      clearInterval(id);
    };
  }, []);

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <button
        disabled={count === 0}
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        -
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
