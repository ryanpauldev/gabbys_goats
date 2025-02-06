"use client"; // Ensures this is a client component

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import MobileMenu from './mobile-menu';

// Dynamically import react-scroll to avoid SSR issues
const ScrollLink = dynamic(() =>
  import("react-scroll").then((mod) => mod.Link),
  { ssr: false }
);

// Animation variants for smooth fade-in effect
const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.5, ease: "easeOut" },
  }),
};

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-purple-600 shadow-md">
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

          {/* Desktop navigation with animation */}
          <motion.nav
            className="hidden md:flex md:grow"
            initial="hidden"
            animate="visible"
          >
            <motion.ul className="flex grow justify-end flex-wrap items-center">
              {[
                { name: "Home", to: "home" },
                { name: "Meet Gabby", to: "meet_gabby" },
                { name: "About Us", to: "about_us" },
                { name: "Tributes", to: "tributes" },
              ].map((item, index) => (
                <motion.li key={item.to} custom={index} variants={navVariants}>
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={700}
                    offset={-80}
                    className="font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer"
                  >
                    {item.name}
                  </ScrollLink>
                </motion.li>
              ))}

              {[
                { name: "Donate", href: "https://buy.stripe.com/test_00gaFV86L7SFfhS7st" },
                { name: "Contact Us", href: "https://forms.gle/hYj46wLLRdxx34aa9" },
              ].map((item, index) => (
                <motion.li key={item.href} custom={index + 4} variants={navVariants}>
                  <Link
                    href={item.href}
                    className="font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
