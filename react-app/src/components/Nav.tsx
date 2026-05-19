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
            <NavLink to="/" end className={linkClass} onClick={closeMenu}>
              Home
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
          <button type="button" className="nav-icon" title="Search" aria-label="Search">
            ⌕
          </button>
          <button type="button" className="nav-icon" title="Wishlist" aria-label="Wishlist">
            ♡
          </button>
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
