'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isDocked,setIsDocked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 60){
        setIsDocked(true);
      }
      else{
        setIsDocked(false);
      }
    };

    window.addEventListener('scroll',handleScroll);


    return () => { 
      window.removeEventListener('scroll',handleScroll);
    };
  }, []);

  return (
    <>
      <div className="navCollision"></div>
        <div className={isDocked ? "navbar2 flex justify-end gap-16 p-2 pr-10" : "navbar flex justify-end gap-16 p-2 pr-10"}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>
    </>
  );
}



