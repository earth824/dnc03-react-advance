// Custom Hook: function start with 'use'
// reuse logic
// can use hook feature

import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

// function test() {
//   useState(); // cant use 'useState' inside normal function
// }

// function useMe() {
//   useState(); // can use inside custom hook
// }

export default function App() {
  return (
    <div>
      <UserList />
      <hr />
      <PostList />
    </div>
  );
}

function UserList() {
  const {
    data: users,
    loading,
    error
  } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) return <h1>Loading ...</h1>;
  if (error) return <h1>{error}</h1>;

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

function PostList() {
  const {
    data: posts,
    loading,
    error
  } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <h1>Loading ...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <div>
      <ul>
        {posts.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  );
}

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const res = await axios.get(url);
        setData(res.data);
      } catch {
        setError('Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [url]);

  return { data, loading, error };
}

// function UserList() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         setLoading(true);
//         const res = await axios.get(
//           'https://jsonplaceholder.typicode.com/users'
//         );
//         setUsers(res.data);
//       } catch {
//         setError('Something went wrong');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   if (loading) return <h1>Loading ...</h1>;
//   if (error) return <h1>{error}</h1>;

//   return (
//     <div>
//       <ul>
//         {users.map((el) => (
//           <li key={el.id}>{el.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// function PostList() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         setLoading(true);
//         const res = await axios.get(
//           'https://jsonplaceholder.typicode.com/posts'
//         );
//         setPosts(res.data);
//       } catch {
//         setError('Something went wrong');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   if (loading) return <h1>Loading ...</h1>;
//   if (error) return <h1>{error}</h1>;

//   return (
//     <div>
//       <ul>
//         {posts.map((el) => (
//           <li key={el.id}>{el.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
