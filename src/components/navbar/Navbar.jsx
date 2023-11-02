"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";
import { FaBars } from "react-icons/fa";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About",
    url: "/about",
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 5,
    title: "Dashboard",
    url: "/dashboard/login",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dash",
  },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const session = useSession();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    // Add event listener to close mobile menu when clicking outside of it
    const handleBodyClick = (e) => {
      if (mobileMenuOpen && !e.target.closest(".mobile-menu-container")) {
        setMobileMenuOpen(false);
      }
    };

    // Remove the event listener when the component unmounts
    return () => {
      document.body.removeEventListener("click", handleBodyClick);
    };
  }, [mobileMenuOpen]);

  return (
    <div className="flex items-center justify-between p-4 sm:p-6 lg:p-8">
      <Link href="/" className="text- text-xl">
        चिकित्सालय
      </Link>

      {/* Mobile menu toggle button with -colored React Icons */}
      <div className="sm:hidden">
        <div className="text-" onClick={toggleMobileMenu}>
        <FaBars className="text- text-xl" style={{ marginLeft: "-100px" }} /> {/* Adjust the margin-left for icon position */}
        </div>
      </div>

      <div className={`sm:flex space-x-4 mobile-menu-container ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className="block text- p-2 hover:bg-blue-600">
            {link.title}
          </Link>
        ))}
        <div className="block text- p-2 hover:bg-blue-600">
        </div>
      </div>
    </div>
  );    
};

export default Navbar;
