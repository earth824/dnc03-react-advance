import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

export default function App() {
  const inputRef = useRef(null); // { current: null }
  const fileRef = useRef(null);

  useEffect(() => {
    console.log(inputRef.current);
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} /> {/* inputRef.current = <input />  */}
      {/* document.querySelector('input') */}
      <button
        onClick={() => {
          console.log(inputRef.current.value);
        }}
      >
        Click
      </button>
      <input type="file" style={{ display: 'none' }} ref={fileRef} />
      <div
        style={{ width: '200px', height: '200px', backgroundColor: 'gray' }}
        onClick={() => {
          fileRef.current.click();
        }}
      >
        Choose photo
      </div>
    </div>
  );
}

// export default function App() {
//   const [state, setState] = useState(0);
//   const ref = useRef(0); // ref equal to: { current: 0 }

//   return (
//     <div>
//       <h1>State: {state}</h1>
//       <button onClick={() => setState(state + 1)}>Update State</button>
//       <h1>Ref: {ref.current}</h1>
//       <button
//         onClick={() => {
//           console.log('click');
//           ref.current = ref.current + 1;
//           console.log(ref.current);
//         }}
//       >
//         Update Ref
//       </button>
//     </div>
//   );
// }

// Component memory: State(state changed cause component to re-render)
// Another component memory: Ref (when ref value change not cause component to re-render)
// useRef => { current: ? }: can mutate directly(not need setState fn)
// use case: use with DOM
