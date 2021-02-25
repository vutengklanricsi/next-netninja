import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <Image className="logo" src="/logo.png" width={128} height={77} alt="logo" />
      </div>
      <div className="navbar">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/ninjas">
          <a>Ninja listing</a>
        </Link>
      </div>
    </nav>
  );
}
