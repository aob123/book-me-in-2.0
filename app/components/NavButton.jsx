import React from "react";
import Link from "next/link";
const NavButton = ({ item }) => {
  return (
    <Link href={item.path}>
      <div className="navButton">{item.name}</div>
    </Link>
  );
};

export default NavButton;
