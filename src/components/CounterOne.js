import React from 'react'
import useCounter from '../hooks/useCounter'

const CounterOne = () => {
    const [count,increment,decrement,reset] = useCounter(0)
    return (
        <div>{count}

        <button onClick={increment}>Incrment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={reset}>Reset</button>
            
        </div>
    )
}

export default CounterOne
