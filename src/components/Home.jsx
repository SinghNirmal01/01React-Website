import React , {useState} from 'react'
import Card from './Card'
import AnimatedButton from "./AnimatedButton.jsx"
import AnimatedBox from './AnimatedBox.jsx'
import Reviews from './Reviews.jsx'
import Footer from './Footer.jsx'
import {MainProvider} from '../contexts/mainContext.js'

const Home = () => {
  const data = [
    {
      id:1
    },
    {
      id:2
    },
    {
      id:3
    },
    {
      id:4
    },
    {
      id:5
    }
    ]
  const [user, setUser] = useState("john")
  return (
<MainProvider value={{user , setUser}}>
    <div className="select-none w-full bg-gray-950  p-4">
      <h1
        className="text-3xl text-center text-green-500 p-2"
      >
        Hello
      </h1>
      <div className=" m-auto bg-gray-900 rounded-lg p-4 text-white text-center max-w-2xl">
        <div>
          <div className="text-xl p-4 text-center">
            occaecat proident ullamco incididunt velit exercitation est nulla nisi occaecat id aute deserunt qui ea non magna qui ex adipisicing
          </div>
        </div>

        <AnimatedButton text="Let's Go"/>
      </div>
      <section>
        <div className="flex justify-center items-center">
        <AnimatedBox title="our courses"/>
        {/*  <h1 className="text-2xl text-black text-center p-2 border-2 bg-[#009688] rounded-xl mt-10">
            our courses
          </h1>*/}
        </div>
        <div id="cards" className="grid gap-4 p-2 grid-cols-2 sm:grid-cols-3 md:p-4 md:mt-10 md:gap-14 2xl:grid-cols-5">
{data.map((item)=> (<Card />))}
        </div>
      </section>
      
      <section>
            <h1 className="text-3xl text-white text-center p-4 m-6 border-2 rounded-lg bg-teal-500 font-bold ">customer reviews</h1>
      <div className="w-full text-white grid grid-cols-2 gap-4 md:grid-cols-3">

 <Reviews
        title="jon doe"
        description="This is an amazing product! I absolutely love it and would recommend it to anyone."
              />
 <Reviews
        title="mical wat"
        description="This is an amazing product! I absolutely love it and would recommend it to anyone."
              />
 <Reviews
        title="john"
        description="This is an amazing product! I absolutely love it and would recommend it to anyone."
              />
 <Reviews
        title="rustom james"
        description="This is an amazing product! I absolutely love it and would recommend it to anyone."
              />
      </div>
      </section>
      <Footer />
    </div>
    </MainProvider>
  )
}

export default Home