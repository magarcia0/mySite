import Link from 'next/link';
import { useState } from 'react';
import useDarkMode from '../darkmode';
import Image from 'next/image';
import { menu } from '../../public/constants';

export const LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  // { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [theme, toggleTheme] = useDarkMode();

  return (
    <nav className="fixed w-screen z-10 flex flex-wrap items-center justify-between py-2 navbar-expand-lg bg-white dark:bg-slate-900 text-black shadow-sm shadow-gray-300 dark:shadow-gray-500">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <a>
              <Image src="/logo.png" alt="Marco Garcia - website logo" height={35} width={340} className="hover:cursor-pointer" />
            </a>
          </Link>
          <button
            className="text-black dark:text-white cursor-pointer text-xl leading-none px-0 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            aria-label="Hamburger Menu"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {menu}
          </button>
        </div>
        <div className={`lg:flex flex-grow items-center ${navbarOpen ? 'flex' : 'hidden'}`} id="example-navbar-danger">
          <ul className="flex text-black dark:text-white flex-col lg:flex-row list-none lg:ml-auto text-lg px-auto lg:px-11">
            {LINKS.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <div className="no-underline px-4 py-2 hover:text-blue-400">
                  <Link href={href}>{label}</Link>
                </div>
              </li>
            ))}
            <li>
              <button onClick={toggleTheme} className="text-black dark:text-white">
                {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
