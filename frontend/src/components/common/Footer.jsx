import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-dark">
      <div className="container-main">
        {/* Top */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "32px", marginBottom: "40px",
        }}>
          {/* Brand */}
          <div style={{ minWidth: "180px" }}>
            <span style={{
              fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 800,
              fontSize: "22px", color: "white", display: "block", marginBottom: "12px",
            }}>Insido</span>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", lineHeight: 1.7, maxWidth: "220px" }}>
              Your source for insights, ideas, and innovation in the world of technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "white", fontSize: "13px", fontWeight: 700, marginBottom: "14px", letterSpacing: "0.5px" }}>Quick Links</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <Link to="/home" className="footer-link">Home</Link>
              <Link to="/blogs" className="footer-link">Blogs</Link>
              <Link to="/about" className="footer-link">About</Link>
            </div>
          </div>

          {/* Account */}
          <div>
            <h4 style={{ color: "white", fontSize: "13px", fontWeight: 700, marginBottom: "14px", letterSpacing: "0.5px" }}>Account</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <Link to="/login" className="footer-link">Login</Link>
              <Link to="/signup" className="footer-link">Sign Up</Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 style={{ color: "white", fontSize: "13px", fontWeight: 700, marginBottom: "14px", letterSpacing: "0.5px" }}>Connect</h4>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {["Tw", "Li", "Gh"].map((s) => (
                <div key={s} style={{
                  width: "34px", height: "34px", borderRadius: "8px",
                  background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.6)", fontSize: "11px", fontWeight: 700, cursor: "pointer",
                }}>{s}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.1)", marginBottom: "20px" }} />

        {/* Bottom */}
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: "8px",
        }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px" }}>© {year} Insido. All rights reserved.</p>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px" }}>Built with React & Node.js</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
