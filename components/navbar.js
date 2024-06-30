import Link from 'next/link'
import React, { Component, useState } from 'react'
import styles from '../styles/Home.module.css'
function Navbar() {
    return (
        <div className="navbar bg-sky-500/60 ">
            <div className="flex-auto">
                <ul className='l w-screen px-3 rounded text-black font-bold '>

                    <Link href = "/" className= "float-left text-primary-900 font-semibold text-3xl md:text-5xl tracking-tight transform hover:scale-110 transition duration-300">
                         &ensp; Hari Desikan
                         
                    </Link>     
                        <Link
                        href="../ResumeWebsite.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="float-right py-5 scale-150">
          
                        <img src="/resume.svg" alt="Resume" className={styles.logo} />
                        </Link>
                    
                    <p className= "float-right">&ensp; &emsp;</p>
                        <Link
                        href="https://github.com/HeuristicHari"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="float-right py-5 scale-150">
          
                        <img src="/github.svg" alt="Github" className={styles.logo} />
                         </Link>
                      
                </ul> 
            </div>              
        </div>
        
      );
}
export default Navbar;
