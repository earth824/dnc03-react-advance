// OPTIMIZING PERFORMANCE
// Wasted render
// cause a problem when too frequently or heavy calculation

// React.memo

import { useCallback } from 'react';
import { memo } from 'react';
import { useState } from 'react';

export default function App() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  // useCallback(fn, dependencies)
  const handleIncrease = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleDecrease = useCallback(() => {
    if (count > 0) setCount(count - 1);
  }, [count]);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      <button onClick={() => setCount(count + 2)}>Change Count</button>
      {show && (
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          excepturi maxime blanditiis fugiat! Mollitia numquam libero
          exercitationem veritatis eos provident?
        </p>
      )}
      <Counter
        count={count}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
    </div>
  );
}

// memo(Component) or React.memo(Component)
// check props: if props change component re-render
const Counter = memo(({ count, onIncrease, onDecrease }) => {
  console.log('Counter');
  // filter large array
  return (
    <div>
      <button onClick={onDecrease}>-</button>
      <span>{count}</span>
      <button onClick={onIncrease}>+</button>
    </div>
  );
});
