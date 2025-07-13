/* components/MiniTile.jsx */
import React from 'react';
import Link from 'next/link';

const colour = {
  0: 'bg-[#D4A537]',  // gold
  1: 'bg-[#C0C0C0]',  // silver
  2: 'bg-[#8B0000]',  // dark (blood) red
  3: 'bg-[#00A4D6]',  // cerulean
  4: 'bg-[#ECB98A]',  // light brown
  5: 'bg-gray-200',   // spacer
};



export default function MiniTile({ title, link, bg = 9 }) {
  return (
    <Link
      href={link}
      className={`
        ${colour[bg] ?? colour[9]}
        sm:w-20 lg:w-24  sm:h-20 lg:h-24 
        rounded-lg overflow-hidden shadow-md
        mx-1 my-1                         
        flex items-center justify-center text-center
        transform hover:scale-110 transition duration-300
      `}
    >
      <h3 className="text-sm md:text-base font-semibold px-2">{title}</h3>
    </Link>
  );
}
