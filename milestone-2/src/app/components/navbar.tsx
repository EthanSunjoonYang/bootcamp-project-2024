import React from "react";
import style from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className={style.navbar} >
      <nav className = "navbar">
            <h1 className = "logo"><a href="index.html">Ethan Yang</a></h1>
            <ul className = "nav-list">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/blogs">Blog</Link></li>
                <li><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/resume">Resume</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
  );
}