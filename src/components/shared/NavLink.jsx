"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const path = usePathname();
  const isActive = href === path;
  return (
    <Link
      className={`${isActive ? "border-b-2 border-b-gray-700" : ""}`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;
