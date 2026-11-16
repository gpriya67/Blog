import React, { useEffect } from "react";
import BlogProfileImage from "../assets/Blog Website Design.jpg";
import P1 from "../assets/p1.jpg";
import P2 from "../assets/p2.png";
import P3 from "../assets/p3.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css-3.png";
import JS from "../assets/js.png";
import REACTICON from "../assets/physics.png";
import DB from "../assets/data-server.png";
import NODE from "../assets/node-js.png";
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

const timeline = [
  { period: "Month 1–2", title: "Foundations", desc: "Learned HTML, CSS, and JavaScript fundamentals. Built static websites and practiced responsive layouts." },
  { period: "Month 3–4", title: "Frontend Development", desc: "Mastered React.js, component-based architecture, state management, and modern UI frameworks like Tailwind CSS." },
  { period: "Month 5–6", title: "Full Stack", desc: "Built full-stack applications with Node.js, Express, MongoDB, and Firebase authentication." },
];

const values = [
  { icon: "🎯", title: "Clean Code", desc: "Writing readable, maintainable, and well-documented code is my top priority." },
  { icon: "📱", title: "Responsive Design", desc: "Every project I build works flawlessly across all devices and screen sizes." },
  { icon: "⚡", title: "Performance", desc: "I optimize for speed and efficiency, ensuring the best user experience possible." },
  { icon: "🤝", title: "Collaboration", desc: "I believe in clear communication and working closely with clients to deliver exactly what they need." },
];

function About() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* ===== HERO ===== */}
      <section className="hero-dark" style={{ paddingTop: "140px", paddingBottom: "80px" }}>
        <div className="container-main" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", maxWidth: "680px", margin: "0 auto" }}>
            <span className="badge animate-fade-up" style={{
              background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(255,255,255,0.15)", marginBottom: "20px", display: "inline-flex",
            }}>
              ✦ About Me
            </span>

            <h1 className="animate-fade-up delay-100" style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(32px, 5.5vw, 56px)", fontWeight: 800, color: "white",
              lineHeight: 1.15, marginBottom: "16px", letterSpacing: "-0.5px",
            }}>
              The Story{" "}
              <span style={{ fontStyle: "italic", fontWeight: 400 }}>Behind</span>
              {" "}the Code
            </h1>

            <p className="animate-fade-up delay-200" style={{
              fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7,
              maxWidth: "480px", margin: "0 auto",
            }}>
              Get to know the developer, the vision, and the passion that drives every project and article.
            </p>
          </div>
        </div>
      </section>

      {/* ===== INTRO SECTION ===== */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-main">
          <div className="about-grid" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center",
          }}>
            {/* Image */}
            <div className="animate-fade-up" style={{ textAlign: "center" }}>
              <div style={{ position: "relative", display: "inline-block" }}>
                <img src={BlogProfileImage} alt="Jacky Thomas" style={{
                  width: "100%", maxWidth: "360px", borderRadius: "var(--radius-lg)",
                  boxShadow: "var(--shadow-xl)", objectFit: "cover",
                }} />
                {/* Experience badge */}
                <div style={{
                  position: "absolute", bottom: "-16px", right: "-16px",
                  background: "var(--navy)", color: "white", borderRadius: "var(--radius-md)",
                  padding: "14px 20px", boxShadow: "var(--shadow-lg)",
                }}>
                  <div style={{ fontSize: "22px", fontWeight: 800, lineHeight: 1 }}>6+</div>
                  <div style={{ fontSize: "10px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px", opacity: 0.7 }}>Months Exp</div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="animate-fade-up delay-200">
              <div className="section-label">Who I Am</div>
              <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(26px, 3.5vw, 38px)", fontWeight: 800, color: "var(--text-dark)",
                lineHeight: 1.25, marginBottom: "18px",
              }}>
                Hi, I'm <span style={{ fontStyle: "italic" }}>Jacky Thomas</span> — a Full Stack Developer & Tech Writer
              </h2>
              <p style={{ fontSize: "15px", color: "var(--gray-500)", lineHeight: 1.75, marginBottom: "16px" }}>
                I'm passionate about building beautiful, functional web applications and sharing my knowledge through writing. I specialize in the MERN stack and enjoy turning complex ideas into clean, user-friendly experiences.
              </p>
              <p style={{ fontSize: "15px", color: "var(--gray-500)", lineHeight: 1.75, marginBottom: "28px" }}>
                With 6 projects completed and growing experience every day, I bring a fresh perspective and eagerness to every project I take on. I believe in writing clean code, designing for real users, and continuous learning.
              </p>

              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <button className="btn-dark" onClick={() => navigate("/blogs")}>Read My Articles</button>
                <button className="btn-outline">Download CV</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section style={{ padding: "80px 0", background: "var(--gray-50)" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>My Values</div>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, color: "var(--text-dark)",
            }}>
              What I <span style={{ fontStyle: "italic" }}>Stand</span> For
            </h2>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px",
          }}>
            {values.map((v, i) => (
              <div key={v.title} className="review-card animate-fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
                <div style={{ fontSize: "28px", marginBottom: "14px" }}>{v.icon}</div>
                <h4 style={{ fontSize: "16px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "8px" }}>{v.title}</h4>
                <p style={{ fontSize: "14px", color: "var(--gray-500)", lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Skills</div>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, color: "var(--text-dark)",
            }}>
              Technologies I <span style={{ fontStyle: "italic" }}>Work</span> With
            </h2>
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))",
            gap: "16px", maxWidth: "600px", margin: "0 auto",
          }}>
            {techStack.map((tech, i) => (
              <div key={tech.label} className="animate-fade-up" style={{
                animationDelay: `${i * 0.08}s`,
                display: "flex", flexDirection: "column", alignItems: "center", gap: "10px",
                padding: "20px 12px", background: "var(--gray-50)", border: "1px solid var(--border)",
                borderRadius: "var(--radius-md)", transition: "all 0.3s ease", cursor: "default",
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

      {/* ===== JOURNEY / TIMELINE ===== */}
      <section style={{ padding: "80px 0", background: "var(--gray-50)" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>My Journey</div>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, color: "var(--text-dark)",
            }}>
              How It All <span style={{ fontStyle: "italic" }}>Started</span>
            </h2>
          </div>

          <div style={{ maxWidth: "700px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "0" }}>
            {timeline.map((item, i) => (
              <div key={item.period} className="animate-fade-up" style={{
                animationDelay: `${i * 0.12}s`,
                display: "flex", gap: "24px", paddingBottom: i < timeline.length - 1 ? "36px" : "0",
                position: "relative",
              }}>
                {/* Timeline line */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{
                    width: "40px", height: "40px", borderRadius: "50%",
                    background: i === timeline.length - 1 ? "var(--navy)" : "white",
                    border: "2px solid var(--navy)",
                    color: i === timeline.length - 1 ? "white" : "var(--navy)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 800, fontSize: "14px", flexShrink: 0,
                  }}>{i + 1}</div>
                  {i < timeline.length - 1 && (
                    <div style={{ width: "2px", flex: 1, background: "var(--border)", marginTop: "8px" }} />
                  )}
                </div>

                {/* Content */}
                <div style={{ paddingTop: "6px" }}>
                  <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "1px" }}>{item.period}</span>
                  <h4 style={{ fontSize: "18px", fontWeight: 700, color: "var(--text-dark)", margin: "4px 0 8px" }}>{item.title}</h4>
                  <p style={{ fontSize: "14px", color: "var(--gray-500)", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO ===== */}
      <section style={{ padding: "80px 0" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Portfolio</div>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 800, color: "var(--text-dark)",
            }}>
              Featured <span style={{ fontStyle: "italic" }}>Projects</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {[
              { img: P1, title: "Project Alpha", tag: "Full Stack", desc: "A complete web application with user authentication, database integration, and responsive design." },
              { img: P2, title: "Project Beta", tag: "React App", desc: "An interactive single-page application built with React, featuring dynamic content and smooth animations." },
              { img: P3, title: "Project Gamma", tag: "Node.js API", desc: "A RESTful API service with Express and MongoDB, powering multiple frontend applications." },
            ].map((p, i) => (
              <div key={p.title} className="blog-card animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div style={{ overflow: "hidden" }}>
                  <img src={p.img} alt={p.title} className="blog-card-img" style={{ height: "200px" }} />
                </div>
                <div className="blog-card-body">
                  <span className="badge badge-navy" style={{ width: "fit-content" }}>{p.tag}</span>
                  <h3 className="blog-card-title">{p.title}</h3>
                  <p className="blog-card-excerpt">{p.desc}</p>
                  <span style={{ fontSize: "13px", color: "var(--accent)", fontWeight: 600, cursor: "pointer", marginTop: "auto" }}>View Project →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{ padding: "0 0 80px" }}>
        <div className="container-main">
          <div className="cta-dark">
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(22px, 3.5vw, 34px)", fontWeight: 800, marginBottom: "14px",
              position: "relative", zIndex: 1,
            }}>
              Interested in Working{" "}
              <span style={{ fontStyle: "italic", fontWeight: 400 }}>Together?</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "15px", marginBottom: "24px", position: "relative", zIndex: 1 }}>
              Let's connect and build something amazing.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
              <button className="btn-white" onClick={() => navigate("/blogs")}>Read My Blogs</button>
              <button className="btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.25)" }} onClick={() => navigate("/signup")}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;
