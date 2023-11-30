import React, { useContext } from 'react'
import {CounterContext} from './Counter'

const ShowCounter = () => {
    const CounterValue = useContext(CounterContext);
    if (!CounterValue) {
        return <div> Context Not Available </div>
    }
    const {count} = CounterValue;
  return (
    <div>
      {count}
    </div>
  )
}

export default ShowCounter
