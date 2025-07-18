import React from 'react';
import Link from 'next/link'
const Tile = ({ title, content, link,bg }) => {
  return (
    
    <Link href={link} className=
    {bg === 0 ? "bg-purple-300 sm:w-40 lg:w-80 sm:h-40 lg:h-80 rounded-lg overflow-hidden shadow-md mx-4 my-4  transform hover:scale-110 transition duration-300"
    : bg===1 ? "bg-red-300 sm:w-40 lg:w-80 sm:h-40 lg:h-80 rounded-lg overflow-hidden shadow-md mx-4 my-4 transform hover:scale-110 transition duration-300"
    : bg ===2 ? "bg-blue-300 sm:w-40 lg:w-80 sm:h-40 lg:h-80 rounded-lg overflow-hidden shadow-md mx-4 my-4 transform hover:scale-110 transition duration-300"   
    : bg ===3 ? "bg-yellow-300 sm:w-40 lg:w-80 sm:h-40 lg:h-80 rounded-lg overflow-hidden shadow-md mx-4 my-4 transform hover:scale-110 transition duration-300"   
    : bg ===4 ? "bg-white sm:w-40 lg:w-80 sm:h-40 lg:h-80 rounded-lg overflow-hidden shadow-md mx-4 my-4 transform hover:scale-110 transition duration-300"   
    : bg ==5 ? "bg-green-300 sm:w-40 lg:w-80 sm:h-40 lg:h-80 rounded-lg overflow-hidden shadow-md mx-4 my-4 hover:shadow-lg transform hover:scale-110 transition duration-300"
    : "bg-gray-300 sm:w-40 lg:w-80 sm:h-40 lg:h-80 rounded-lg overflow-hidden shadow-md mx-4 my-4 transform hover:scale-110 transition duration-300"}>  
      <div className="p-4 text-center">
       
        <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
        <div className = "hidden lg:block mt-2">{content}</div>
        </div>
     

    </Link>
  );
};

export default Tile;
// {bg === 0 ? "bg-green-300 sm:w-48 lg:w-80 sm:h-48 lg:h-80 rounded-lg overflow-hidden shadow-md mx-4 my-4  transform hover:scale-110 transition duration-300"
//     : bg===1 ? "bg-red-300 sm:w-48 lg:w-80 sm:h-48 lg:h-80 rounded-lg overflow-hidden shadow-md mx-4 my-4 transform hover:scale-110 transition duration-300"
//     : bg ===2 ? "bg-blue-300 sm:w-48 lg:w-80 sm:h-48 lg:h-80 rounded-lg overflow-hidden shadow-md mx-4 my-4 transform hover:scale-110 transition duration-300"   
//     : bg ===3 ? "bg-yellow-300 sm:w-48 lg:w-80 sm:h-48 lg:h-80 rounded-lg overflow-hidden shadow-md mx-4 my-4 transform hover:scale-110 transition duration-300"   
//     : bg ===4 ? "bg-white sm:w-48 lg:w-80 sm:h-48 lg:h-80 rounded-lg overflow-hidden shadow-md mx-4 my-4 transform hover:scale-110 transition duration-300"   
//     : bg ==5 ? "bg-orange-300 sm:w-48 lg:w-80 sm:h-48 lg:h-80 rounded-lg overflow-hidden shadow-md mx-4 my-4 hover:shadow-lg transform hover:scale-110 transition duration-300"
//     : "bg-gray-300 sm:w-48 lg:w-80 sm:h-48 lg:h-80 rounded-lg overflow-hidden shadow-md mx-4 my-4 transform hover:scale-110 transition duration-300"}>  