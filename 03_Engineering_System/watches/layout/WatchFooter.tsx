"use client";

export function WatchFooter() {
  return (
    <footer style={{
      background: "#121212",
      borderTop: "1px solid rgba(212,197,169,0.06)",
      padding: "clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 3rem)",
    }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "clamp(2rem, 4vw, 3rem)",
          alignItems: "start",
        }}>
          {/* Brand */}
          <div>
            <span style={{
              fontFamily: "'Cinzel', serif",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.25em",
              color: "#B89947",
              display: "block",
              marginBottom: 8,
            }}>
              ATELIER HORLOGÈRE
            </span>
            <span style={{
              fontFamily: "'Courier Prime', monospace",
              fontSize: 9,
              letterSpacing: "0.25em",
              color: "rgba(212,197,169,0.3)",
              display: "block",
            }}>
              GENÈVE · EST. 1887
            </span>
          </div>

          {/* Navigation */}
          <div>
            <span style={{
              fontFamily: "'Courier Prime', monospace",
              fontSize: 8,
              letterSpacing: "0.35em",
              color: "rgba(212,197,169,0.25)",
              display: "block",
              marginBottom: 16,
            }}>
              NAVIGATION
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {["Archive", "About", "Gallery", "Journal", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    fontFamily: "'Courier Prime', monospace",
                    fontSize: 10,
                    letterSpacing: "0.15em",
                    color: "rgba(212,197,169,0.4)",
                    textDecoration: "none",
                    transition: "color 0.3s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#B89947"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(212,197,169,0.4)"; }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <span style={{
              fontFamily: "'Courier Prime', monospace",
              fontSize: 8,
              letterSpacing: "0.35em",
              color: "rgba(212,197,169,0.25)",
              display: "block",
              marginBottom: 16,
            }}>
              LOCATION
            </span>
            <div style={{
              fontFamily: "'Courier Prime', monospace",
              fontSize: 10,
              color: "rgba(212,197,169,0.4)",
              lineHeight: 1.8,
            }}>
              <span style={{ display: "block" }}>Rue du Rhône 42</span>
              <span style={{ display: "block" }}>1204 Genève</span>
              <span style={{ display: "block" }}>Suisse</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <span style={{
              fontFamily: "'Courier Prime', monospace",
              fontSize: 8,
              letterSpacing: "0.35em",
              color: "rgba(212,197,169,0.25)",
              display: "block",
              marginBottom: 16,
            }}>
              CONTACT
            </span>
            <div style={{
              fontFamily: "'Courier Prime', monospace",
              fontSize: 10,
              color: "rgba(212,197,169,0.4)",
              lineHeight: 1.8,
            }}>
              <a href="mailto:curator@horlogere.ch" style={{
                color: "rgba(212,197,169,0.4)",
                textDecoration: "none",
                display: "block",
                transition: "color 0.3s",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#B89947"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(212,197,169,0.4)"; }}
              >
                curator@horlogere.ch
              </a>
              <a href="mailto:archive@horlogere.ch" style={{
                color: "rgba(212,197,169,0.4)",
                textDecoration: "none",
                display: "block",
                transition: "color 0.3s",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#B89947"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(212,197,169,0.4)"; }}
              >
                archive@horlogere.ch
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          marginTop: "clamp(3rem, 6vw, 5rem)",
          paddingTop: 24,
          borderTop: "1px solid rgba(212,197,169,0.04)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
        }}
          className="sm:flex-row sm:justify-between">
          <span style={{
            fontFamily: "'Courier Prime', monospace",
            fontSize: 9,
            letterSpacing: "0.2em",
            color: "rgba(212,197,169,0.2)",
          }}>
            © {new Date().getFullYear()} ATELIER HORLOGÈRE. ALL RIGHTS RESERVED.
          </span>
          <span style={{
            fontFamily: "'Courier Prime', monospace",
            fontSize: 9,
            letterSpacing: "0.2em",
            color: "rgba(212,197,169,0.15)",
          }}>
            ARCHIVE OF FINE TIMEPIECES · PART OF WKALAN
          </span>
        </div>
      </div>
    </footer>
  );
}
