import React from 'react'
function Card({name}){
    console.log(name);
    return(
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center gap-x-4 mt-6">
        <div className="shrink-0">
          <img
            className="size-12 object-cover rounded-full"
            src="https://images.pexels.com/photos/32117661/pexels-photo-32117661.jpeg"
            alt="ChitChat Logo"
          />
        </div>
        <div>
          <div className="text-xl font-medium text-black">{name}</div>
          <p className="text-slate-500">You have a new message!</p>
        </div>
      </div>
        
    )
}
export default Card

