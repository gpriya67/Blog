import React, { useEffect } from "react";
import BlogProfileImage from "../assets/Blog Website Design.jpg";
import CSS from "../assets/css-3.png";
import HTML from "../assets/html.png";
import DB from "../assets/data-server.png";
import JS from "../assets/js.png";
import REACTICON from "../assets/physics.png";
import NODE from "../assets/node-js.png";
import P1 from "../assets/p1.jpg";
import P2 from "../assets/p2.png";
import P3 from "../assets/p3.png";
import BlogImage from "../assets/blogImage.png";
import { useNavigate } from "react-router-dom";
import Footer from "./common/Footer";

const techStack = [
  { icon: HTML, label: "HTML5" },
  { icon: CSS, label: "CSS3" },
  { icon: JS, label: "JavaScript" },
  { icon: REACTICON, label: "React" },
  { icon: DB, label: "Database" },
  { icon: NODE, label: "Node.js" },
];

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>

      {/* ===== HERO — Dark Navy (matches reference) ===== */}
      <section className="hero-dark" style={{ paddingTop: "140px", paddingBottom: "80px" }}>
        <div className="container-main" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto 48px" }}>
            <div className="animate-fade-up" style={{ marginBottom: "16px" }}>
              <span className="badge" style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.9)", border: "1px solid rgba(255,255,255,0.15)" }}>
                ✦ Knowledge Hub
              </span>
            </div>

            <h1 className="animate-fade-up delay-100" style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "white",
              letterSpacing: "-1px",
              marginBottom: "20px",
            }}>
              Insights,{" "}
              <span style={{ fontStyle: "italic", fontWeight: 400 }}>Ideas</span>
              {" "}& Innovation
            </h1>

            <p className="animate-fade-up delay-200" style={{
              fontSize: "17px", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, maxWidth: "520px", margin: "0 auto 32px",
            }}>
              Discover curated articles on web development, design, and modern technology. Built by Jacky Thomas.
            </p>

            <div className="animate-fade-up delay-300" style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <button className="btn-white" onClick={() => navigate("/blogs")}>
                Read Articles
              </button>
              <button className="btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.25)" }} onClick={() => navigate("/login")}>
                Get Started
              </button>
            </div>
          </div>

          {/* 3 hero images (like the reference) */}
          <div className="image-grid-3 animate-fade-up delay-400" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <img src={P1} alt="Project 1" style={{ height: "200px" }} />
            <img src={P2} alt="Project 2" style={{ height: "200px" }} />
            <img src={P3} alt="Project 3" style={{ height: "200px" }} />
          </div>
        </div>
      </section>

      {/* ===== ABOUT / INTRO SECTION ===== */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="grid-responsive">

            {/* Left */}
            <div className="animate-fade-up">
              <div className="section-label">About the Author</div>
              <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 800, color: "var(--text-dark)", lineHeight: 1.2, marginBottom: "16px",
              }}>
                Hi, I'm <span style={{ fontStyle: "italic" }}>Jacky Thomas</span>
              </h2>
              <p style={{ fontSize: "15px", color: "var(--gray-500)", lineHeight: 1.75, marginBottom: "24px", maxWidth: "420px" }}>
                I create stunning, high-performance websites for your company. Check out my work — I won't disappoint you. Try me for 7 days before you decide anything.
              </p>

              <div style={{ display: "flex", gap: "40px", marginBottom: "32px", flexWrap: "wrap" }}>
                <div>
                  <div className="stat-number">6</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div>
                  <div className="stat-number">6</div>
                  <div className="stat-label">Months Exp</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <button className="btn-dark">Hire Me</button>
                <button className="btn-outline">Download CV</button>
              </div>
            </div>

            {/* Right — Image */}
            <div className="animate-fade-up delay-200 hidden md:block" style={{ textAlign: "center" }}>
              <img src={BlogProfileImage} alt="Jacky Thomas" style={{
                width: "100%", maxWidth: "380px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-xl)",
                objectFit: "cover",
              }} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section style={{ padding: "40px 0 80px" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Tech Stack</div>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "28px", fontWeight: 700, color: "var(--text-dark)" }}>
              Technologies I Work With
            </h3>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))",
            gap: "16px", maxWidth: "600px", margin: "0 auto",
          }}>
            {techStack.map((tech, i) => (
              <div key={tech.label} className="animate-fade-up" style={{
                animationDelay: `${i * 0.08}s`,
                display: "flex", flexDirection: "column", alignItems: "center", gap: "10px",
                padding: "20px 12px",
                background: "var(--gray-50)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)",
                transition: "all 0.3s ease", cursor: "default",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--navy)"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "var(--shadow-md)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <img src={tech.icon} alt={tech.label} style={{ width: "40px", height: "40px", objectFit: "contain" }} />
                <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--gray-500)", textTransform: "uppercase", letterSpacing: "0.5px" }}>{tech.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO SECTION ===== */}
      <section style={{ padding: "80px 0", background: "var(--gray-50)" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Portfolio</div>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "var(--text-dark)", marginBottom: "12px",
            }}>
              Checkout My Live Projects
            </h2>
            <p style={{ color: "var(--gray-500)", fontSize: "15px" }}>A selection of recent work</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {[
              { img: P1, title: "Project Alpha", tag: "Full Stack" },
              { img: P2, title: "Project Beta", tag: "React App" },
              { img: P3, title: "Project Gamma", tag: "Node.js API" },
            ].map((project, i) => (
              <div key={project.title} className="blog-card animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div style={{ overflow: "hidden" }}>
                  <img src={project.img} alt={project.title} className="blog-card-img" style={{ height: "220px" }} />
                </div>
                <div className="blog-card-body">
                  <span className="badge badge-navy" style={{ width: "fit-content" }}>{project.tag}</span>
                  <h3 className="blog-card-title">{project.title}</h3>
                  <span style={{ fontSize: "13px", color: "var(--accent)", fontWeight: 600, cursor: "pointer" }}>View Project →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BLOG CTA ===== */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="grid-responsive">
            {/* Image */}
            <div className="hidden md:block animate-fade-up">
              <img src={BlogImage} alt="Blog" style={{
                width: "100%", maxWidth: "380px", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-xl)",
              }} />
            </div>

            {/* Text */}
            <div className="animate-fade-up delay-200">
              <div className="section-label">Blog</div>
              <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "var(--text-dark)", lineHeight: 1.2, marginBottom: "16px",
              }}>
                I Like to Write{" "}
                <span style={{ fontStyle: "italic" }}>Blogs</span> About Tech
              </h2>
              <p style={{ fontSize: "15px", color: "var(--gray-500)", lineHeight: 1.75, marginBottom: "28px", maxWidth: "420px" }}>
                Dive deep into web development, design patterns, and technology trends. I share my expertise and insights here.
              </p>
              <button className="btn-dark" onClick={() => navigate("/blogs")}>
                Read My Blogs →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER (matches reference dark banner) ===== */}
      <section style={{ padding: "0 0 80px" }}>
        <div className="container-main">
          <div className="cta-dark">
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 800, marginBottom: "16px", position: "relative", zIndex: 1,
            }}>
              Ready to Take Your Business to the Next Level<br />
              <span style={{ fontStyle: "italic", fontWeight: 400 }}>with Powerful IT Solutions?</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "15px", marginBottom: "28px", position: "relative", zIndex: 1 }}>
              Let's work together to build something amazing.
            </p>
            <button className="btn-white" style={{ position: "relative", zIndex: 1 }}>
              Get Started Today
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
