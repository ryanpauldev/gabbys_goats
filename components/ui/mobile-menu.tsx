'use client'
import dynamic from "next/dynamic";
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

// Dynamically import react-scroll to avoid SSR issues
const ScrollLink = dynamic(() =>
  import("react-scroll").then((mod) => mod.Link),
  { ssr: false }
);

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)
  const pathname = usePathname();
  const router = useRouter();
  const isDonate = pathname === '/donate';
  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  const handleScrollLink = async (to: string) => {
    if (isDonate) {
      await router.push('/');
      setTimeout(() => {
        const element = document.getElementById(to);
        if (element) {
          element.scrollIntoView({ block: 'start' });
        }
      }, 100);
    }
    setMobileNavOpen(false);
  };

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-white hover:text-white transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/* Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
        style={mobileNavOpen ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
      >
        <ul className="bg-purple-600 px-4 py-2 text-center">
          {[
            { name: "Home", to: "home" },
            { name: "Meet Gabby", to: "meet_gabby" },
            { name: "About Us", to: "about_us" },
            { name: "Dear Ellen", to: "dear_ellen" },
            { name: "Tributes", to: "tributes" },
          ].map((item) => (
            <li key={item.to}>
              {isDonate ? (
                <Link
                  href="/"
                  onClick={() => handleScrollLink(item.to)}
                  className="font-medium text-white hover:text-gray-200 px-4 py-3 block transition duration-150 ease-in-out cursor-pointer"
                >
                  {item.name}
                </Link>
              ) : (
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={350}
                  offset={-80}
                  className="font-medium text-white hover:text-gray-200 px-4 py-3 block transition duration-150 ease-in-out cursor-pointer"
                  onClick={() => setMobileNavOpen(false)}
                >
                  {item.name}
                </ScrollLink>
              )}
            </li>
          ))}
          
          {/* External links */}
          {[
            { name: "Donate", href: "/donate" },
            { name: "Contact Us", href: "https://forms.gle/hYj46wLLRdxx34aa9" },
          ].map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-medium text-white hover:text-gray-200 px-4 py-3 block transition duration-150 ease-in-out cursor-pointer"
                {...(item.name === "Contact Us" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onClick={() => setMobileNavOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}