import { useContext } from 'react';
import { createContext } from 'react';
import { useState } from 'react';

// 1. Create context
const AuthContext = createContext();
// const ThemeContext = createContext()

export default function App() {
  const [state, setState] = useState(0);

  const increaseByOne = () => {
    setState(state + 1);
  };

  return (
    <div>
      {/* 2. Provide data into Context */}
      <AuthContext value={{ state, increaseByOne }}>
        <LevelOne count={state} />
      </AuthContext>
    </div>
  );
}

function LevelOne({ count }) {
  return (
    <div>
      <LevelTwo count={count} />
    </div>
  );
}

function LevelTwo({ count }) {
  return (
    <div>
      <LevelThree count={count} />
    </div>
  );
}

function LevelThree({ count }) {
  // 3. Consume value from the context
  const ctx = useContext(AuthContext); // { state, increaseByOne }
  return <div onClick={ctx.increaseByOne}>{ctx.state}</div>;
}
