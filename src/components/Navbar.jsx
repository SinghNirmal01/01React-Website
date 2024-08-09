import React from "react"
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faBars, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {Link , NavLink } from "react-router-dom"

export default function Navbar() {
  const [hidden, setHidden] = useState(true);

  function toogleMenu() {
    setHidden(!hidden);
  }

  return (
    <>
      <div className="select-none w-screen text-xl flex justify-between items-center p-2 px-4  bg-[#c6edf8]">
      
        <div>company</div>


        <div className="hidden md:flex gap-4 border-2 p-2 rounded-xl border-red-400">
          <Link to="/">home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About Us</Link>
        </div>
        <div className="hidden md:flex items-center bg-gray-500 text-white rounded-xl p-4" >
          <p className="mr-10">Join Us</p>
          <div>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>


        <div className="text-2xl md:hidden" onClick={toogleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        <div
          className={`${hidden ? 'hidden' : 'block'} fixed w-[40vw] bg-amber-300 right-0 top-[0px] rounded-xl p-1 z-5`}
        >
          <div className="text-2xl text-gray-700 text-right w-full p-2 rounded-2xl" >
            <button onClick={toogleMenu}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          </div>

          {/*navlinks*/}
          <NavLink to="/">
          <div 
          onClick={()=>{setHidden(!hidden)}}
          className="text-center bg-amber-200 rounded-xl p-1 m-1 mt-2 z-50">
            <div className="flex justify-center">
              <NavLink className="mr-5">Home</NavLink>
              <div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        </NavLink>

          <NavLink to="/Contact">
          <div 
          onClick={()=>{setHidden(!hidden)}}
          className="text-center bg-amber-200 rounded-xl p-1 m-1 mt-2">
            <div className="flex justify-center">
              <p className="mr-5">Contact</p>
              <div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
</NavLink>
          <NavLink to="/about">
          <div 
          onClick={()=>{setHidden(!hidden)}}
          className="text-center bg-amber-200 rounded-xl p-1 m-1 mt-2">
            <div className="flex justify-center">
              <p className="mr-5">About</p>
              <div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
</NavLink>

          <div onClick={()=>{setHidden(!hidden)}}
          className="text-center bg-gray-600 text-white rounded-xl p-1 m-1 mt-2">
            <div className="flex justify-center">
              <p className="mr-5">Join Us</p>
              <div>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}