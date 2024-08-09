import React from 'react'
import AnimatedButton from './AnimatedButton.jsx'

const Card = () => {
  
  
  return (

    <div className="flex justify-center items-center">
    <div className="bg-orange-500 w-[100%] md:w-auto rounded min-h-[50px] mt-5 p-2 flex flex-col items-center justify-center">
    <p className="md:text-xl">ipsum commodo nostrud sint qui dolor culpa mollit do commodo</p>
    <div>
            <AnimatedButton text="checkout" className="scale-50 md:scale-100"/>
</div>
    </div>
    </div>
  )
}

export default Card