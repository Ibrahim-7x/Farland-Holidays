import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useScrollSolid } from "../hooks/useScrollSolid";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "active" : undefined;

export function Nav() {
  const solid = useScrollSolid(60);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    const onResize = () => {
      if (window.innerWidth > 860) setMenuOpen(false);
    };
    document.addEventListener("click", onClickOutside);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("click", onClickOutside);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navClassName = [
    solid ? "solid" : "",
    menuOpen ? "nav-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav id="site-nav" className={navClassName} ref={navRef}>
      <div className="nav-inner">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          Farland<span> Holidays</span>
        </Link>
        <ul className="nav-links" id="primary-nav">
          <li>
            <NavLink to="/" end className={linkClass} onClick={closeMenu} aria-label="Home">
              <svg
                className="nav-home-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 11.5 12 4l9 7.5" />
                <path d="M5 10.5V20h4.5v-5h5v5H19V10.5" />
              </svg>
            </NavLink>
          </li>
          <li>
            <NavLink to="/destinations" className={linkClass} onClick={closeMenu}>
              Destinations
            </NavLink>
          </li>
          <li>
            <NavLink to="/deals" className={linkClass} onClick={closeMenu}>
              Deals
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClass} onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClass} onClick={closeMenu}>
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="nav-right">
          <Link
            to="/contact#inquiry-section"
            className="btn btn-gold"
            style={{ padding: "10px 20px", fontSize: 10 }}
          >
            Plan my trip ↗
          </Link>
        </div>
        <button
          className="nav-hamburger"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
