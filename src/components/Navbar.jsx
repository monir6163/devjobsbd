"use client";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ModeToggle } from "./toggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <section className="md:container mx-auto bg-white shadow dark:bg-gray-900">
      <header className="">
        <div className="flex items-center justify-between px-4 py-6">
          <Link
            className="flex items-center text-xl font-bold tracking-wider text-gray-900 dark:text-gray-100 animate-pulse"
            href="/"
          >
            <FlagIcon className="h-6 w-6" />
            <span className="ml-2 text-xl font-semibold uppercase text-blue-900 dark:text-gray-100">
              Devjobsbd
            </span>
          </Link>
          <nav className="hidden lg:flex space-x-4">
            {navLinks?.map((link, i) => (
              <Button key={i} className="shadow" variant="outline">
                <Link
                  className="text-gray-700 dark:text-gray-100"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </Button>
            ))}
            <ModeToggle />
          </nav>
          <div className="block lg:hidden">
            <ModeToggle />
          </div>
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="flex items-center px-3 py-2 border rounded text-gray-700 dark:text-gray-100 border-gray-400 dark:border-gray-600 hover:text-gray-900 hover:border-gray-900"
            >
              <svg
                className="h-3 w-3 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 3.25C0 2.00736 1.00736 1 2.25 1H17.75C18.9926 1 20 2.00736 20 3.25C20 4.49264 18.9926 5.5 17.75 5.5H2.25C1.00736 5.5 0 4.49264 0 3.25ZM0 9.75C0 8.50736 1.00736 7.5 2.25 7.5H17.75C18.9926 7.5 20 8.50736 20 9.75C20 10.9926 18.9926 12 17.75 12H2.25C1.00736 12 0 10.9926 0 9.75ZM2.25 14C1.00736 14 0 15.0074 0 16.25C0 17.4926 1.00736 18.5 2.25 18.5H17.75C18.9926 18.5 20 17.4926 20 16.25C20 15.0074 18.9926 14 17.75 14H2.25Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      {/* Responsive Right Sidebar */}
      <div
        className={`fixed inset-0 bg-black opacity-25 z-40 lg:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      />
      <nav
        ref={sidebarRef}
        className={`lg:hidden fixed inset-y-0 left-0 z-50 bg-white shadow dark:bg-gray-900 w-3/4 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 ease-in-out`}
      >
        <div className="w-full pt-4 flex justify-between px-4">
          <Link
            className="flex animate-pulse items-center text-sm font-bold tracking-wider text-gray-900 dark:text-gray-100"
            href="/"
          >
            <FlagIcon className="h-6 w-6" />
            <span className="ml-2 text-base font-semibold uppercase text-blue-900 dark:text-gray-100">
              Devjobsbd
            </span>
          </Link>
          <svg
            onClick={toggleMenu}
            className="h-8 w-8 fill-current text-blue-900 animate-pulse hover:text-gray-800"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Close</title>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.7071 12.7071C13.0976 12.3166 13.0976 11.6834 12.7071 11.2929L10.4142 9L12.7071 6.70711C13.0976 6.31658 13.0976 5.68342 12.7071 5.29289C12.3166 4.90237 11.6834 4.90237 11.2929 5.29289L9 7.58579L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L7.58579 9L5.29289 11.2929C4.90237 11.6834 4.90237 12.3166 5.29289 12.7071C5.68342 13.0976 6.31658 13.0976 6.70711 12.7071L9 10.4142L11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071Z"
            />
          </svg>
        </div>
        <div className="flex flex-col items-center py-16 px-4">
          <ul className="w-full h-full divide-y divide-gray-200 dark:divide-gray-800">
            {navLinks?.map((link, i) => (
              <li key={i} className="py-4">
                <Link
                  className="text-gray-700 dark:text-gray-100"
                  href={link.href}
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
}

function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}
