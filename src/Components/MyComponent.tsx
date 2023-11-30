import React from 'react'
import { useContext } from 'react'
import { MyContext } from './Context'
const MyComponent = () => {
    const contextValue = useContext(MyContext)       //useContext returns the context value for the context you passed i.e theme context
    if ( !contextValue ) {
        return <div> Context not available </div>;
    }
    const {count, setCount} = contextValue;
    function handleCount () {
        setCount(prevCount => prevCount + 1);
    }
  return (
    <div>
        <div> {count} </div>
      <button onClick={handleCount}> Increase Count </button>
    </div>
  )
}

export default MyComponent
