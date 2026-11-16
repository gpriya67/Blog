import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [log, setLog] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User Logged in !");
        setLog(true);
      } else {
        console.log("User Logout");
        setLog(false);
      }
    });

    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const logout = () => { signOut(auth); setMenuOpen(false); };
  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { label: "Home", path: "/home" },
    { label: "Blogs", path: "/blogs" },
    { label: "About", path: "/about" },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container-main">
          <div className="nav-inner">
            {/* Logo */}
            <Link to="/home" style={{ textDecoration: "none", flexShrink: 0 }}>
              <span className="nav-logo">Insido</span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="nav-links-desktop">
              {navLinks.map((item) => (
                <Link key={item.label} to={item.path} className={`nav-link ${isActive(item.path) ? "active" : ""}`}>
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="nav-cta-desktop">
              {log ? (
                <button onClick={logout} className="btn-dark" style={{ padding: "9px 22px" }}>Sign Out</button>
              ) : (
                <>
                  <button onClick={() => navigate("/login")} className="btn-outline" style={{ padding: "9px 22px" }}>Log In</button>
                  <button onClick={() => navigate("/signup")} className="btn-dark" style={{ padding: "9px 22px" }}>Sign Up</button>
                </>
              )}
            </div>

            {/* Mobile Hamburger */}
            <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? (
                <span style={{ fontSize: "18px", color: "var(--navy)", lineHeight: 1 }}>✕</span>
              ) : (
                <>
                  <span className="hamburger-line" />
                  <span className="hamburger-line" />
                  <span className="hamburger-line" />
                </>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="mobile-overlay">
          <button onClick={() => setMenuOpen(false)} className="mobile-close">✕</button>

          {navLinks.map((item) => (
            <Link key={item.label} to={item.path} onClick={() => setMenuOpen(false)}
              className="mobile-nav-link"
              style={{ color: isActive(item.path) ? "var(--navy)" : "var(--gray-400)" }}>
              {item.label}
            </Link>
          ))}

          <div className="mobile-cta">
            {log ? (
              <button onClick={logout} className="btn-dark" style={{ width: "100%" }}>Sign Out</button>
            ) : (
              <>
                <button onClick={() => { navigate("/login"); setMenuOpen(false); }} className="btn-outline" style={{ width: "100%" }}>Log In</button>
                <button onClick={() => { navigate("/signup"); setMenuOpen(false); }} className="btn-dark" style={{ width: "100%" }}>Sign Up</button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
