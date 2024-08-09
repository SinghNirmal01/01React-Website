import React , {useContext} from 'react';
import useMain from '../contexts/mainContext.js'
import User from './User'
const Reviews = ({ title, description }) => {
 
 const {user,serUser} = useMain()
 
  return (
    <div className="max-w-sm rounded shadow-lg bg-orange-300 mt-4 hover:bg-orange-400 transition duration-300">
      <div className="px-2 py-4">
        <div className="font-bold text-xl mb-2 text-center text-black uppercase">{user}</div>
        <p className="text-gray-900 text-base">
          {description}
        </p>
      </div>
      <div>
      <User />
      </div>
    </div>
  );
};

export default Reviews;