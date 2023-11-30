import React, { ReactNode, useState } from 'react'
import { createContext } from 'react';

interface countProps {
    count : number;
}
interface childrenProps {
    children : ReactNode;
}
export const CounterContext = createContext<countProps| null>(null)

const Counter : React.FC<childrenProps> = ( {children} ) => {
    const [ count, setCount ] = useState<number>(0);
    function handleCount() {
        setCount(prevCount => prevCount + 1);
    }
    const value : countProps = {
        count : count
    }
  return (
    <div>
        <CounterContext.Provider value={value}>
            {children}
        </CounterContext.Provider>
        <div> {count} </div>
      <button onClick={handleCount}> Count + </button>
    </div>
  )
}

export default Counter
