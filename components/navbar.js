import Link from 'next/link'
import React, { Component, useState } from 'react'


function Navbar() {
    return (
        <div className="navbar bg-sky-500/40 ">
            <div className="flex-auto">
                <ul className='l w-screen px-3 rounded text-black font-bold '>

                    <p className= "float-left text-primary-900 font-semibold text-3xl md:text-5xl tracking-tight">
                         &ensp; Hari Desikan 
                          </p>
                         

                       
                         
                        

                     

                         <Link href="/first-post" className="float-right py-4">  Resume   </Link> 
                        &ensp; 
                        <p className= "float-right"> &ensp;</p>
                        <Link href="/second-post" className = "float-right py-4">  Github   </Link> 
                        &ensp;
                        </ul> 
            </div>
           
          
            
              
            
          </div>
        
      );
}
export default Navbar;
