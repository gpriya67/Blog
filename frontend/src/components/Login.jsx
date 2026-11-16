import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User Logged in !");
        navigate("/home");
      }
    });
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        navigate("/home");
      })
      .catch(() => {
        console.log("Error Sign in");
        setError("Invalid email or password. Please try again.");
        setLoading(false);
      });
  };

  return (
    <div className="auth-container">
      {/* Left — Navy Decorative Panel */}
      <div className="auth-left">
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", maxWidth: "380px" }}>
          <div style={{
            width: "60px", height: "60px", borderRadius: "16px", background: "rgba(255,255,255,0.1)",
            display: "flex", alignItems: "center", justifyContent: "center",
            margin: "0 auto 28px", border: "1px solid rgba(255,255,255,0.15)",
          }}>
            <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "28px", fontWeight: 800, color: "white" }}>I</span>
          </div>

          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "32px", fontWeight: 800, color: "white", lineHeight: 1.2, marginBottom: "16px",
          }}>
            Welcome back to{" "}
            <span style={{ fontStyle: "italic" }}>Insido</span>
          </h2>

          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "15px", lineHeight: 1.7, marginBottom: "40px" }}>
            Sign in to explore articles, like your favorite posts, and join our developer community.
          </p>

          {/* Feature cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", textAlign: "left" }}>
            {[
              { icon: "📚", text: "Access all blog articles" },
              { icon: "♥", text: "Like and save favorites" },
              { icon: "✍️", text: "Admin can create posts" },
            ].map((f) => (
              <div key={f.text} style={{
                display: "flex", alignItems: "center", gap: "12px", padding: "12px 16px",
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "8px",
              }}>
                <span style={{ fontSize: "18px" }}>{f.icon}</span>
                <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", fontWeight: 500 }}>{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right — Form */}
      <div className="auth-right">
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

          <h1 style={{ fontSize: "30px", fontWeight: 800, color: "var(--text-dark)", marginBottom: "6px" }}>Sign In</h1>
          <p style={{ color: "var(--gray-500)", fontSize: "14px", marginBottom: "32px" }}>
            Enter your credentials to access your account
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

          <form onSubmit={handleLogin}>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div>
                <label className="form-label">Email Address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  required placeholder="your@email.com" className="form-input" />
              </div>
              <div>
                <label className="form-label">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                  required placeholder="••••••••" className="form-input" />
              </div>

              {error && (
                <p style={{ color: "#DC2626", cursor: "pointer", fontSize: "13px", fontWeight: 500 }}
                  onClick={() => navigate("/signup")}>
                  New user? Register here
                </p>
              )}

              <p style={{ color: "var(--accent)", fontSize: "14px", cursor: "pointer", fontWeight: 500 }}
                onClick={() => navigate("/signup")}>
                New user? <span style={{ fontWeight: 700 }}>Create an account →</span>
              </p>

              <button type="submit" className="btn-dark" disabled={loading}
                style={{ width: "100%", padding: "14px", fontSize: "15px", opacity: loading ? 0.6 : 1, marginTop: "4px" }}>
                {loading ? "Signing in..." : "Sign In"}
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
    </div>
  );
}

export default Login;
