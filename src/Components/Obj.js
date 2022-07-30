import React, { useState } from 'react'

const Obj = () => {
    const [data, setData] = useState({
        name: "",
        password: "",
        email: ""
    })

    const handleInput = (e) => {
        // console.log(e.target.value, e.target.value);
        setData({...data, [e.target.name] : e.target.value})
    }
    console.log(data);
  return (
    <>
        <form>
        <input type="text" placeholder="Enter Name" name="name" onChange={handleInput}></input>
        <input type="password" placeholder="Enter Password" name="password" onChange={handleInput}></input>
        <input type="email" placeholder="Enter Email" name="email" onChange={handleInput}></input>
        <button className='btn btn-warning'>Submit</button>

        </form>
    </>
  )
}

export default Obj