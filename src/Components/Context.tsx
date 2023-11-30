import React, { ReactNode, SetStateAction, useState } from "react";
import { createContext } from "react";
import MyComponent from "./MyComponent";
interface props {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}
interface children {
    children : ReactNode
}
export const MyContext = createContext<props | null>(null);
const Context : React.FC<children>= ({ children }) => {
  const [count, setCount] = useState<number>(0);
  const contextValue: props = {
    count: count,
    setCount: setCount,
  };
  return (
    <div>
      <MyContext.Provider value={contextValue}>
        { children }
      </MyContext.Provider>
    </div>
  );
};

export default Context;
