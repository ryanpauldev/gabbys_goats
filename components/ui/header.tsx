"use client"; // Ensures this is a client component

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import MobileMenu from './mobile-menu';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image'
import Logo from '@/public/images/optimized/GG_Logo_J.png'

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
  const pathname = usePathname();
  const router = useRouter();
  const isDonate = pathname === '/donate';

  const handleScrollLink = async (to: string) => {
    if (isDonate) {
      // Navigate to home page
      await router.push('/');
      // Wait for navigation to complete then jump to section
      setTimeout(() => {
        const element = document.getElementById(to);
        if (element) {
          // Direct jump without smooth scrolling
          element.scrollIntoView({ block: 'start' });
          // Or alternatively, use window.scrollTo
          // const yOffset = element.getBoundingClientRect().top + window.scrollY;
          // window.scrollTo({ top: yOffset });
        }
      }, 100);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-purple-600 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Link
              href="/"
              className="block cursor-pointer"
              aria-label="Gabby's Goats Home"
            >
              <Image
                src={Logo}
                alt="Gabby's Goats Logo"
                width={144}  // w-36 equivalent
                height={72}  // h-18 equivalent
                priority
                quality={90}
              />
            </Link>
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
                  {isDonate ? (
                    // If on donate page, use Link with onClick handler
                    <Link
                      href="/"
                      onClick={() => handleScrollLink(item.to)}
                      className="font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    // Otherwise use ScrollLink as before
                    <ScrollLink
                      to={item.to}
                      smooth={true}
                      duration={350}
                      offset={-80} // Change from -80 to -50 for shorter scroll distance
                      className="font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out cursor-pointer"
                    >
                      {item.name}
                    </ScrollLink>
                  )}
                </motion.li>
              ))}

              {[
                { name: "Donate", href: "/donate" },
                { name: "Contact Us", href: "https://forms.gle/hYj46wLLRdxx34aa9" },
              ].map((item, index) => (
                <motion.li key={item.href} custom={index + 4} variants={navVariants}>
                  <Link
                    href={item.href}
                    className="font-medium text-white hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
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
