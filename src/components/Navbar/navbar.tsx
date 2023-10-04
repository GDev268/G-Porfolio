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
        <div className={isDocked ? "navbar2 relative" : "navbar relative"}>
          <div className={"flex justify-between items-center gap-4 p-2 pr-20 pl-20"}>
            <div className="flex items-center gap-4">
              <a className="block" href="/">Home</a>
              <a className="block" href="/about">About</a>
            </div>
            <div className="flex items-center gap-4">
              <a className="block" href="/">Home</a>
              <a className="block" href="/about">About</a>
            </div>
          </div>
        </div>
    </>
  );
}



