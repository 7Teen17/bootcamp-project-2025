import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    //Wrapper to put space around Navbar while keeping it width:100%
    <header className="p-5">
      <div className="sticky w-full h-20 bg-black flex flex-row justify-between text-white items-center p-5 rounded-xl">
        <h1 className="font-(family-name:--font-geist-mono) font-bold text-4xl pl-3">
          Dominic Siino
        </h1>
        <nav className="w-1/4">
          <ul className="w-full flex flex-row justify-around font-(family-name:--font-geist-sans)">
            <Link href="/" className="hover:text-green-300">
              Home
            </Link>
            <Link href="/blogs" className="hover:text-green-300">
              Blogs
            </Link>
            <Link href="/portfolio" className="hover:text-green-300">
              Portfolio
            </Link>
            <Link href="/resume" className="hover:text-green-300">
              Resume
            </Link>
            <Link href="/about" className="hover:text-green-300">
              Contact
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
