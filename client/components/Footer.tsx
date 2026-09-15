import { Link, useLocation } from "react-router-dom";

function Socials() {
  return (
    <div className="flex items-center gap-3">
      <span aria-label="Twitter" className="text-sm">
        𝕏
      </span>
      <span aria-label="Instagram" className="text-sm">
        ◎
      </span>
      <span aria-label="LinkedIn" className="text-sm">
        in
      </span>
    </div>
  );
}

export default function Footer() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const sectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <footer className="border-y border-[#121212] bg-white px-6 py-8 text-[#121212] md:px-[62px] md:py-7 lg:px-[90px] lg:py-[42px]">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
          <strong className="font-sans text-2xl font-black uppercase tracking-wide lg:text-4xl">
            Anthony Shrout
          </strong>
          <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] font-medium">
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <a href={sectionHref("contact")}>Contact</a>
            <a href="#privacy">Privacy</a>
          </nav>
          <Socials />
        </div>
        <div className="border-t border-[#121212]" />
        <div className="flex flex-col items-center gap-1 text-[10px] md:flex-row md:justify-between">
          <span>© 2026 Company. All rights reserved.</span>
          <span>Trusted with the moment</span>
        </div>
      </div>
    </footer>
  );
}
