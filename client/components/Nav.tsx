import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Logo() {
  return (
    <svg
      aria-label="Anthony Shrout"
      className="h-[39px] w-[45px]"
      viewBox="0 0 45 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5732 -0.129883L17.1162 3.51465L17.1699 3.6416L17.1182 3.76855L7.09766 28.6123H22.9883L23.0664 28.834L23.3936 29.7588C23.4512 29.9129 25.371 34.9493 32.7354 35.4668C37.3383 35.7902 40.733 32.6179 41.3652 29.4072C41.722 27.5976 41.2356 25.8943 39.9893 24.4121C38.736 22.9218 36.7074 21.6491 33.9873 20.75C30.3611 19.5509 27.4348 17.6902 25.5449 15.3486C23.8075 13.1959 22.9631 10.6486 23.1924 8.17188C23.5718 4.07173 26.776 0.938363 31.1211 0.348633L31.4727 0.305664C38.8023 -0.491795 41.9533 5.38512 42.0908 5.64844L42.2451 5.94336L41.9492 6.09766L40.6162 6.79199L39.4766 7.39453L39.1836 7.5498L39.0273 7.25684C38.9392 7.09232 36.7271 3.08019 31.5859 3.77734C28.7794 4.15757 26.8653 6.02192 26.6367 8.49121C26.4942 10.0384 27.0494 11.7025 28.2363 13.1729C29.6868 14.9687 32.0413 16.462 35.0732 17.4639C38.7368 18.6757 41.4703 20.4794 43.1582 22.8477C44.6822 24.9862 45.2443 27.4465 44.7793 29.96L44.7822 29.9658L44.7607 30.0781C43.7502 35.203 38.8113 38.9481 33.3369 38.9482C33.0562 38.9482 32.7743 38.9391 32.4912 38.918V38.917C25.1028 38.3978 21.848 34.1659 20.6816 32.0723H5.70215L3.32129 37.9746L3.2373 38.1826H-0.493164L-0.308594 37.7256L14.958 -0.125L15.2588 -0.871094L15.5732 -0.129883Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.665785"
      />
    </svg>
  );
}

export default function Nav() {
  const location = useLocation();
  const isDarkHero = location.pathname === "/work" || location.pathname === "/contact";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 40);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  const useLightVariant = isScrolled || isDarkHero;
  const theme = isScrolled
    ? "bg-black text-white"
    : isDarkHero
      ? "bg-transparent text-white"
      : "bg-transparent text-[#121212]";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b-2 transition-colors duration-300 ${theme} ${useLightVariant ? "border-white" : "border-[#121212]"}`}>
      <div className="flex h-[63px] items-center justify-between px-[17px] sm:px-6 md:px-[30px] lg:px-[17px]">
        <Link to="/" aria-label="Home" onClick={closeMenu}>
          <Logo />
        </Link>
        <nav className="hidden items-center gap-10 md:flex lg:gap-[65px]" aria-label="Main navigation">
          <Link to="/about" className="font-sans text-[21px] uppercase transition-opacity hover:opacity-70">About</Link>
          <Link to="/work" className="font-sans text-[21px] uppercase transition-opacity hover:opacity-70">Work</Link>
          <Link to="/services" className="font-sans text-[21px] uppercase transition-opacity hover:opacity-70">Services</Link>
          <Link to="/contact" className={`bg-[#121212] px-5 py-[5px] font-sans text-[20px] uppercase text-[#121212] transition-colors hover:opacity-80 ${useLightVariant ? "bg-white" : "text-white"}`}>Contact</Link>
        </nav>
        <button
          type="button"
          className="flex h-11 w-11 flex-col items-end justify-center gap-1.5 md:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className={`block h-[2px] w-7 bg-current transition-transform ${isMenuOpen ? "translate-y-[4px] -rotate-45" : ""}`} />
          <span className={`block h-[2px] w-5 bg-current transition-opacity ${isMenuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-[2px] w-7 bg-current transition-transform ${isMenuOpen ? "-translate-y-[4px] rotate-45" : ""}`} />
        </button>
      </div>
      {isMenuOpen && (
        <nav className={`border-t border-current px-6 py-4 md:hidden ${isScrolled ? "bg-black" : "bg-black/90 text-white"}`} aria-label="Mobile navigation">
          <Link to="/about" onClick={closeMenu} className="block border-b border-current/30 py-4 font-sans text-xl uppercase">About</Link>
          <Link to="/work" onClick={closeMenu} className="block border-b border-current/30 py-4 font-sans text-xl uppercase">Work</Link>
          <Link to="/services" onClick={closeMenu} className="block border-b border-current/30 py-4 font-sans text-xl uppercase">Services</Link>
          <Link to="/contact" onClick={closeMenu} className="block py-4 font-sans text-xl uppercase">Contact</Link>
        </nav>
      )}
    </header>
  );
}
