import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <Link href="/">
        <Image src="/logo.png" width={30} height={30} alt="image" priority />
        <h1>Book me in</h1>
      </Link>
    </nav>
  );
};

export default Nav;
