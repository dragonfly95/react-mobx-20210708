
import React from 'react';
import { useObserver } from 'mobx-react'
import useStore from '../useStore'

const Counter = () => {
    const { counter } = useStore();

    const increase = () => {
        counter.increase();
    }

    const decrease = () => {
        counter.decrease();
    }

    return useObserver(() => (
        <div>
            <h1>{counter.number}</h1>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    )) 
}

export default Counter