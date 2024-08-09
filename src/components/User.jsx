import React from 'react'
import useMain from '../contexts/mainContext.js'

const User = () => {
  const {user,setUser} = useMain()
  return (
    <div>
    review by
    <input onChange={(e)=>(setUser(e.target.value))}
    value={user}
    className="w-[50px] text-black rounded-xl ml-2 p-2 focus:outline-green-500 bg-amber-400"
    ></input>
    </div>
  )
}

export default User