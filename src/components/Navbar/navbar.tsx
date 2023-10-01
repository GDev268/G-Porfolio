import Link from "next/link";
import React from 'react';

const Navbar: React.FC = () => {
  return(
    <div className="navbar w-full">
      <div className="flex justify-end gap-16 p-2 pr-10">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </div>
  )
}

export default Navbar;
