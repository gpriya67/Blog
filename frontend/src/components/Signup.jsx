import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User Logged in !");
        navigate("/home");
      }
    });
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("Failed");
        if (err.code === "auth/email-already-in-use") {
          setError("This email is already registered.");
        } else {
          setError("Registration failed. Please try again.");
        }
        setLoading(false);
      });

    console.log("User registered:", { email, password });
    navigate("/login");
  };

  // Password strength
  const getStrength = () => {
    if (!password) return null;
    if (password.length >= 10) return { label: "Strong", color: "#10B981", width: "100%" };
    if (password.length >= 6) return { label: "Decent", color: "var(--accent)", width: "60%" };
    return { label: "Too short", color: "#EF4444", width: "30%" };
  };
  const strength = getStrength();

  return (
    <div className="auth-container">
      {/* Left — Form */}
      <div className="auth-right" style={{ order: 1 }}>
        <div style={{ width: "100%", maxWidth: "400px" }} className="animate-fade-up">
          {/* Back */}
          <button onClick={() => navigate("/home")} style={{
            background: "none", border: "none", color: "var(--gray-400)", fontSize: "14px",
            cursor: "pointer", marginBottom: "36px", padding: 0, fontFamily: "'Inter', sans-serif",
            transition: "color 0.3s ease",
          }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--navy)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gray-400)")}
          >
            ← Back to Home
          </button>

          <h1 style={{ fontSize: "30px", fontWeight: 800, color: "var(--text-dark)", marginBottom: "6px" }}>Create Account</h1>
          <p style={{ color: "var(--gray-500)", fontSize: "14px", marginBottom: "32px" }}>
            Join the community and start exploring
          </p>

          {/* Error */}
          {error && (
            <div style={{
              padding: "12px 16px", background: "#FEF2F2", border: "1px solid #FECACA",
              borderRadius: "8px", color: "#DC2626", fontSize: "13px", fontWeight: 500, marginBottom: "20px",
              display: "flex", alignItems: "center", gap: "8px",
            }}>
              <span>⚠</span> {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div>
                <label className="form-label">Email Address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  required placeholder="your@email.com" className="form-input" />
              </div>
              <div>
                <label className="form-label">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                  required placeholder="Min. 6 characters" className="form-input" />
                {/* Strength bar */}
                {strength && (
                  <div style={{ marginTop: "8px" }}>
                    <div style={{ height: "3px", background: "var(--gray-200)", borderRadius: "2px", overflow: "hidden" }}>
                      <div style={{ height: "100%", width: strength.width, background: strength.color, borderRadius: "2px", transition: "width 0.3s ease" }} />
                    </div>
                    <span style={{ fontSize: "11px", color: strength.color, fontWeight: 600, marginTop: "4px", display: "block" }}>
                      {strength.label}
                    </span>
                  </div>
                )}
              </div>
              <div>
                <label className="form-label">Confirm Password</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                  required placeholder="Re-enter your password" className="form-input" />
              </div>

              <p style={{ color: "var(--accent)", fontSize: "14px", cursor: "pointer", fontWeight: 500 }}
                onClick={() => navigate("/login")}>
                Already have an account? <span style={{ fontWeight: 700 }}>Sign in →</span>
              </p>

              <button type="submit" className="btn-dark" disabled={loading}
                style={{ width: "100%", padding: "14px", fontSize: "15px", opacity: loading ? 0.6 : 1, marginTop: "4px" }}>
                {loading ? "Creating account..." : "Create Account"}
              </button>
            </div>
          </form>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px", margin: "24px 0" }}>
            <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
            <span style={{ color: "var(--gray-400)", fontSize: "12px", fontWeight: 500 }}>or</span>
            <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
          </div>

          <button type="button" className="btn-outline" onClick={() => navigate("/blogs")}
            style={{ width: "100%", padding: "12px" }}>
            Browse Blogs as Guest
          </button>
        </div>
      </div>

      {/* Right — Navy Decorative Panel */}
      <div className="auth-left" style={{ order: 2 }}>
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "360px" }}>
          <div style={{ fontSize: "48px", marginBottom: "24px" }}>🚀</div>

          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "32px", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: "16px",
          }}>
            Start Your{" "}
            <span style={{ fontStyle: "italic" }}>Journey</span> Today
          </h2>

          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "15px", lineHeight: 1.7, marginBottom: "36px" }}>
            Create an account to like articles, save your favorites, and join our developer community.
          </p>

          {/* Stats */}
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { value: "Free", label: "Forever" },
              { value: "24/7", label: "Access" },
              { value: "∞", label: "Articles" },
            ].map((s) => (
              <div key={s.label} style={{
                padding: "16px 20px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "12px", textAlign: "center", minWidth: "75px",
              }}>
                <div style={{ fontSize: "20px", fontWeight: 800, color: "white", lineHeight: 1, marginBottom: "4px" }}>{s.value}</div>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Quote card */}
          <div style={{
            marginTop: "32px", padding: "20px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "12px", textAlign: "left",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
              <div style={{
                width: "32px", height: "32px", borderRadius: "50%", background: "rgba(255,255,255,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 700, color: "white",
              }}>JT</div>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "white" }}>Jacky Thomas</div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)" }}>Author & Developer</div>
              </div>
            </div>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", lineHeight: 1.6, fontStyle: "italic" }}>
              "I write about web development, share my learnings, and help others grow as developers."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
