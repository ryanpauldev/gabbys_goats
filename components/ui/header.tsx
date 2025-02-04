"use client"; // Ensures this is a client component

import dynamic from "next/dynamic";
import Link from "next/link";
import MobileMenu from './mobile-menu'

// Dynamically import react-scroll to avoid SSR issues
const ScrollLink = dynamic(() =>
  import("react-scroll").then((mod) => mod.Link),
  { ssr: false }
);

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-80}
              className="block cursor-pointer"
              aria-label="Cruip"
            >
              <img src="\GG_Logo_J.png" alt="Logo" className="w-36 h-18" />
            </ScrollLink>

          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <ScrollLink
                  to="meet_gabby"
                  smooth={true}
                  duration={700}
                  offset={-80}
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer"
                >
                  Meet Gabby
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about_us"
                  smooth={true}
                  duration={600}
                  offset={-80} // Adjust for fixed header
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer"
                >
                  About Us
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="dedications"
                  smooth={true}
                  duration={600}
                  offset={-80} // Adjust for fixed header
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer"
                >
                  Tributes
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="donate"
                  smooth={true}
                  duration={600}
                  offset={-80} // Adjust for fixed header
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer"
                >
                  Donate
                </ScrollLink>
              </li>
              <li>
                <Link
                  href="https://forms.gle/hYj46wLLRdxx34aa9"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
