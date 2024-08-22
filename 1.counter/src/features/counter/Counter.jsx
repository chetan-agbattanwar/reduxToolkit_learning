import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {increment, decrement, reset, incrementByAmount, decrementByAmount} from '../../reduxtoolkit/slice/counterSlice'

export const Counter = ()=>{
    const count  = useSelector(state=>state.value)
    // console.log(count);
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(2)

    return(
        <>
        <h3>count : { count}</h3>
        <div>
            <button onClick={()=>dispatch(increment())}>increment</button>
            <button onClick={()=>dispatch(reset())}>reset</button>
            <button onClick={()=>dispatch(decrement())}>decrement</button>
        </div>
        <div>
            <input type="number" 
            placeholder='accept number only'
            value={amount}
            onChange={e=>setAmount(e.target.value)} />

            <button onClick={()=>dispatch(incrementByAmount(amount))}>incrementAmountBy{amount}</button>
            <button onClick={()=>dispatch(decrementByAmount(amount))}>decrementAmountBy{amount}</button>
        </div>
        </>
    )
}