import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./common/Footer";
import { auth } from "../config/firebase";
import P1 from "../assets/p1.jpg";
import P2 from "../assets/p2.png";
import P3 from "../assets/p3.png";
import BlogImage from "../assets/blogImage.png";

const placeholderImages = [P1, P2, P3, BlogImage];

const getReadTime = (content) => {
  if (!content) return "1 min read";
  return `${Math.max(1, Math.ceil(content.split(" ").length / 200))} min read`;
};

const categoryLabels = ["Technology", "Development", "Tutorial", "Insights", "Best Practices", "Web Dev"];

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [admin, setAdmin] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  // Edit state
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  // Delete confirm state
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  const navigate = useNavigate();

  const fetchBlogs = () => {
    axios
      .get("http://localhost:5000/api/blogs")
      .then((res) => {
        console.log(res.data);
        setBlogs(res.data);
        setLoading(false);
      })
      .catch(() => {
        console.log("Error fetching data");
        setLoading(false);
      });
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("User Logged in !");
        if (user.uid === "8KVeysmwyIPk02N8KMk6xsQITDT2") {
          console.log("She is admin");
          setAdmin(true);
        } else {
          console.log("she is not admin");
          setAdmin(false);
        }
      }
    });

    window.scrollTo(0, 0);
    setLoading(true);
    fetchBlogs();
  }, []);

  const handleLike = async (blog_id) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/blogs/like/${blog_id}`
      );
      if (response.status === 200) {
        fetchBlogs();
      }
    } catch (error) {
      console.error("Error liking the blog post:", error);
    }
  };

  const handleNewBlogSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    const today = new Date();
    const date = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const likes = 0;
    axios
      .post("http://localhost:5000/api/blogs", { newTitle, date, newContent, likes })
      .then((res) => {
        console.log(res.data);
        fetchBlogs();
        setSubmitting(false);
        setFormOpen(false);
      })
      .catch(() => {
        setSubmitting(false);
      });

    setNewTitle("");
    setNewContent("");
  };

  // ===== EDIT =====
  const startEdit = (blog) => {
    setEditingId(blog._id);
    setEditTitle(blog.newTitle);
    setEditContent(blog.newContent);
    setDeleteConfirmId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle("");
    setEditContent("");
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/blogs/${editingId}`, {
        newTitle: editTitle,
        newContent: editContent,
      });
      fetchBlogs();
      cancelEdit();
    } catch (error) {
      console.error("Error editing blog:", error);
    }
  };

  // ===== DELETE =====
  const handleDelete = async (blog_id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${blog_id}`);
      fetchBlogs();
      setDeleteConfirmId(null);
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  return (
    <div>
      {/* ===== HERO HEADER ===== */}
      <section className="hero-dark" style={{ paddingTop: "140px", paddingBottom: "60px" }}>
        <div className="container-main" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto" }}>
            <span className="badge animate-fade-up" style={{
              background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(255,255,255,0.15)", marginBottom: "20px", display: "inline-flex",
            }}>📚 Knowledge Hub</span>

            <h1 className="animate-fade-up delay-100" style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(32px, 5.5vw, 56px)", fontWeight: 800, color: "white",
              lineHeight: 1.15, marginBottom: "16px", letterSpacing: "-0.5px",
            }}>
              View All <span style={{ fontStyle: "italic", fontWeight: 400 }}>Knowledge</span> Posts
            </h1>

            <p className="animate-fade-up delay-200" style={{
              fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7,
              maxWidth: "480px", margin: "0 auto",
            }}>
              Explore articles on web development, best practices, and insights from the tech world.
            </p>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section style={{ padding: "48px 0 80px" }}>
        <div className="container-main">

          {/* ===== ADMIN PANEL ===== */}
          {admin && (
            <div className="admin-panel animate-fade-up" style={{ marginBottom: "48px" }}>
              <div className="admin-panel-header">
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{
                    width: "32px", height: "32px", borderRadius: "8px",
                    background: "var(--navy)", display: "flex", alignItems: "center", justifyContent: "center",
                    color: "white", fontSize: "14px", fontWeight: 700,
                  }}>✍</div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-dark)" }}>Admin Panel</div>
                    <div style={{ fontSize: "12px", color: "var(--gray-400)" }}>Add, edit, and delete blog posts</div>
                  </div>
                </div>
                <button onClick={() => setFormOpen(!formOpen)} className="btn-dark" style={{ padding: "8px 18px", fontSize: "13px" }}>
                  {formOpen ? "✕ Cancel" : "+ New Post"}
                </button>
              </div>

              {formOpen && (
                <div className="admin-panel-body">
                  <form onSubmit={handleNewBlogSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div>
                      <label className="form-label">Blog Title *</label>
                      <input type="text" placeholder="Enter a compelling title..." value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)} className="form-input" required />
                    </div>
                    <div>
                      <label className="form-label">Content *</label>
                      <textarea placeholder="Write your blog content here..." value={newContent}
                        onChange={(e) => setNewContent(e.target.value)} className="form-input"
                        rows="6" required style={{ resize: "vertical" }} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px", flexWrap: "wrap" }}>
                      <button type="button" className="btn-outline" onClick={() => setFormOpen(false)} style={{ padding: "10px 20px" }}>Cancel</button>
                      <button type="submit" className="btn-dark" disabled={submitting} style={{ padding: "10px 24px", opacity: submitting ? 0.6 : 1 }}>
                        {submitting ? "Publishing..." : "Publish Post"}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          )}

          {/* ===== FILTER TABS ===== */}
          <div className="animate-fade-up" style={{
            display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "36px",
            paddingBottom: "20px", borderBottom: "1px solid var(--border)",
          }}>
            {["All", "Technology", "Development", "Tutorial"].map((f) => (
              <button key={f} className={`cat-tab ${activeFilter === f ? "active" : ""}`} onClick={() => setActiveFilter(f)}>
                {f}
              </button>
            ))}
          </div>

          {/* ===== LOADING ===== */}
          {loading && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="skeleton" style={{ height: "340px" }} />
              ))}
            </div>
          )}

          {/* ===== EMPTY STATE ===== */}
          {!loading && blogs.length === 0 && (
            <div style={{ textAlign: "center", padding: "80px 20px" }}>
              <div style={{ fontSize: "56px", marginBottom: "16px" }}>📝</div>
              <h3 style={{ color: "var(--text-dark)", fontSize: "22px", fontWeight: 700, marginBottom: "8px" }}>No articles yet</h3>
              <p style={{ color: "var(--gray-400)", fontSize: "15px" }}>
                {admin ? "Be the first to create a blog post!" : "Check back soon for new articles."}
              </p>
            </div>
          )}

          {/* ===== BLOG GRID ===== */}
          {!loading && blogs.length > 0 && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
              {blogs.map((blog, index) => {
                const category = categoryLabels[index % categoryLabels.length];
                const image = placeholderImages[index % placeholderImages.length];
                const readTime = getReadTime(blog.newContent);
                const isEditing = editingId === blog._id;
                const isDeleting = deleteConfirmId === blog._id;

                return (
                  <article key={blog._id} className="blog-card animate-fade-up" style={{ animationDelay: `${(index % 6) * 0.08}s` }}>

                    {/* EDIT MODE */}
                    {isEditing ? (
                      <div style={{ padding: "20px" }}>
                        <div style={{ fontSize: "14px", fontWeight: 700, color: "var(--text-dark)", marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px" }}>
                          <span style={{ fontSize: "16px" }}>✏️</span> Edit Post
                        </div>
                        <form onSubmit={handleEditSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                          <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)}
                            className="form-input" placeholder="Title" required style={{ fontSize: "14px" }} />
                          <textarea value={editContent} onChange={(e) => setEditContent(e.target.value)}
                            className="form-input" rows="5" required style={{ resize: "vertical", fontSize: "14px" }} />
                          <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}>
                            <button type="button" className="btn-outline" onClick={cancelEdit} style={{ padding: "8px 16px", fontSize: "12px" }}>Cancel</button>
                            <button type="submit" className="btn-dark" style={{ padding: "8px 16px", fontSize: "12px" }}>Save Changes</button>
                          </div>
                        </form>
                      </div>
                    ) : (
                      <>
                        {/* Card Image */}
                        <div style={{ overflow: "hidden" }}>
                          <img src={image} alt={blog.newTitle} className="blog-card-img" />
                        </div>

                        {/* Card Body */}
                        <div className="blog-card-body">
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                            <span className="badge badge-accent" style={{ fontSize: "10px" }}>{category}</span>
                            <span style={{ fontSize: "12px", color: "var(--gray-400)" }}>{readTime}</span>
                          </div>

                          <h3 className="blog-card-title">{blog.newTitle}</h3>
                          <p className="blog-card-excerpt">{blog.newContent}</p>

                          {/* Author + Date */}
                          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "4px" }}>
                            <div style={{
                              width: "28px", height: "28px", borderRadius: "50%",
                              background: "var(--navy)", color: "white",
                              display: "flex", alignItems: "center", justifyContent: "center",
                              fontSize: "11px", fontWeight: 700, flexShrink: 0,
                            }}>JT</div>
                            <div>
                              <div style={{ fontSize: "12px", fontWeight: 600, color: "var(--text-dark)" }}>Jacky Thomas</div>
                              <div style={{ fontSize: "11px", color: "var(--gray-400)" }}>{blog.date}</div>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="blog-card-meta">
                            <button className="like-btn" onClick={() => handleLike(blog._id)}>
                              <span className="like-icon">♥</span>
                              <span>{blog.likes}</span>
                            </button>

                            {/* Admin: Edit & Delete buttons */}
                            {admin && (
                              <div style={{ display: "flex", gap: "6px", marginLeft: "auto" }}>
                                <button onClick={() => startEdit(blog)} title="Edit" style={{
                                  width: "32px", height: "32px", borderRadius: "6px",
                                  background: "var(--gray-50)", border: "1px solid var(--border)",
                                  cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                                  fontSize: "14px", transition: "all 0.2s ease", color: "var(--gray-600)",
                                }}>✏️</button>
                                <button onClick={() => setDeleteConfirmId(blog._id)} title="Delete" style={{
                                  width: "32px", height: "32px", borderRadius: "6px",
                                  background: "#FEF2F2", border: "1px solid #FECACA",
                                  cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
                                  fontSize: "14px", transition: "all 0.2s ease", color: "#EF4444",
                                }}>🗑️</button>
                              </div>
                            )}
                          </div>

                          {/* Delete confirmation */}
                          {isDeleting && admin && (
                            <div style={{
                              marginTop: "8px", padding: "12px", background: "#FEF2F2",
                              border: "1px solid #FECACA", borderRadius: "8px",
                            }}>
                              <p style={{ fontSize: "13px", color: "#DC2626", fontWeight: 600, marginBottom: "8px" }}>Delete this post?</p>
                              <div style={{ display: "flex", gap: "8px" }}>
                                <button onClick={() => handleDelete(blog._id)} style={{
                                  padding: "6px 14px", background: "#EF4444", color: "white",
                                  border: "none", borderRadius: "6px", fontSize: "12px",
                                  fontWeight: 600, cursor: "pointer",
                                }}>Yes, Delete</button>
                                <button onClick={() => setDeleteConfirmId(null)} style={{
                                  padding: "6px 14px", background: "white", color: "var(--gray-600)",
                                  border: "1px solid var(--border)", borderRadius: "6px",
                                  fontSize: "12px", fontWeight: 600, cursor: "pointer",
                                }}>Cancel</button>
                              </div>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section style={{ padding: "40px 0 80px", background: "var(--gray-50)" }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Testimonials</div>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 800, color: "var(--text-dark)",
            }}>
              Reviews That <span style={{ fontStyle: "italic" }}>Speak</span> Volumes
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
            {[
              { name: "Sarah Miller", role: "Product Manager", text: "The articles here are always well-researched and practical. They've helped our team adopt better development practices." },
              { name: "David Chen", role: "Frontend Developer", text: "Clear, concise, and to the point. Jacky's writing style makes complex topics easy to understand." },
              { name: "Emily Rogers", role: "UX Designer", text: "A fantastic resource for staying up-to-date with the latest in web technology and best practices." },
            ].map((review, i) => (
              <div key={review.name} className="review-card animate-fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div style={{ color: "#F59E0B", fontSize: "14px", marginBottom: "12px", letterSpacing: "2px" }}>★★★★★</div>
                <p style={{ fontSize: "14px", color: "var(--gray-600)", lineHeight: 1.7, marginBottom: "16px", fontStyle: "italic" }}>
                  "{review.text}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "50%",
                    background: "var(--gray-200)", display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "13px", fontWeight: 700, color: "var(--gray-600)",
                  }}>{review.name[0]}</div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "var(--text-dark)" }}>{review.name}</div>
                    <div style={{ fontSize: "12px", color: "var(--gray-400)" }}>{review.role}</div>
                  </div>
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
              fontSize: "clamp(22px, 3.5vw, 34px)", fontWeight: 800, marginBottom: "14px", position: "relative", zIndex: 1,
            }}>
              Ready to Take Your Business to the Next Level
              <br /><span style={{ fontStyle: "italic", fontWeight: 400 }}>with Powerful IT Solutions?</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "15px", marginBottom: "24px", position: "relative", zIndex: 1 }}>
              Get started today and explore all our resources.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
              <button className="btn-white" onClick={() => navigate("/signup")}>Get Started Free</button>
              <button className="btn-outline" style={{ color: "white", borderColor: "rgba(255,255,255,0.25)" }} onClick={() => navigate("/login")}>Login</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Blogs;
