import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {incNum, decNum} from '../Action/index'

const Redux = () => {
  const data = useSelector((state)=>state.changeNumber)
  const dispatch = useDispatch()
  return (
    <>
        <h1>Welcome To Redux</h1>
        <h2>Counter : {data}</h2>
        <div className='but'>
            <button className='btn btn-warning' onClick={()=>{dispatch(incNum())}}>Incr +</button>
            <button className='btn btn-warning' onClick={()=>{dispatch(decNum())}}>Decr -</button>
            </div>
    </>
  )
}

export default Redux