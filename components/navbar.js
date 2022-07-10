import Link from "next/link";
import { useState } from "react";
import useDarkMode from "../components/darkmode";
import Image from "next/image";
import logo from "../pages/img/logo.png"

export const LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const menu = (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z"
      fill="currentColor"
    />
    <path
      d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z"
      fill="currentColor"
    />
    <path
      d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z"
      fill="currentColor"
    />
  </svg>
);

export default function Nav() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between py-2 navbar-expand-lg bg-purple-600 text-black shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <Image src={logo}
              alt="website logo"
              height={35}
              width={340}
              className="hover:cursor-pointer"
              />
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-0 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              aria-label="Hamburger Menu"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {menu}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex text-white flex-col lg:flex-row list-none lg:ml-auto font-bold text-lg px-auto lg:px-11">
              {LINKS.map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <div className="no-underline px-4 py-2 font-bold text-white hover:text-blue-400 0">
                    <Link href={href}>{label}</Link>
                  </div>
                </li>
              ))}
              <li>
                {colorTheme === "light" ? (
                  <svg
                    onClick={() => setTheme("light")}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-yellow-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ) : (
                  <svg
                    onClick={() => setTheme("dark")}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-indigo-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}