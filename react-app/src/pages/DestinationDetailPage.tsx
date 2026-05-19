import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { DESTINATIONS, getDestination } from "../data/destinations";
import "./DestinationDetailPage.css";

function getComponentIcon(label: string): string {
  const l = label.toLowerCase();
  if (l.includes("flight")) return "✈️";
  if (l.includes("hotel") || l.includes("resort")) return "🏨";
  if (l.includes("excursion") || l.includes("tour")) return "🎯";
  if (l.includes("transfer")) return "🚌";
  return "📋";
}

function parseComponentDetails(details: string): { primary?: string; pills: string[] } {
  if (details.includes("—")) {
    const idx = details.indexOf("—");
    const primary = details.slice(0, idx).trim();
    const rest = details.slice(idx + 1).trim();
    return {
      primary,
      pills: rest
        .split("·")
        .map((s) => s.trim())
        .filter(Boolean),
    };
  }
  if (details.includes("·")) {
    return {
      pills: details
        .split("·")
        .map((s) => s.trim())
        .filter(Boolean),
    };
  }
  return { primary: details, pills: [] };
}

function parseStars(stars: string): { filled: number; total: number } {
  // "5 Star" or "5/4 Star" — pick the higher of the two for display
  const nums = stars.match(/\d+/g) ?? ["5"];
  const filled = Math.max(...nums.map(Number));
  return { filled: Math.min(filled, 5), total: 5 };
}

export function DestinationDetailPage() {
  const { slug } = useParams();
  const destination = getDestination(slug);
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("dd-hero");
      if (!hero) return;
      setStickyVisible(hero.getBoundingClientRect().bottom < 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const lowestPrice = useMemo(() => {
    if (!destination?.pricing) return null;
    return destination.pricing.reduce((min, p) =>
      Number(p.amount.replace(/,/g, "")) < Number(min.amount.replace(/,/g, ""))
        ? p
        : min
    );
  }, [destination]);

  if (!destination) {
    return (
      <div className="dd-notfound">
        <h2>Destination not found</h2>
        <p>We couldn't find that destination — please choose one from the list.</p>
        <Link to="/destinations" className="btn btn-gold">
          Browse all destinations →
        </Link>
      </div>
    );
  }

  const related = DESTINATIONS.filter((d) => d.slug !== destination.slug).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section id="dd-hero">
        <div className="hero-bg">
          <img src={destination.heroImage} alt={destination.name} />
        </div>
        <div className="hero-overlay"></div>
        <div className="dd-hero-content">
          <div className="dd-breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <Link to="/destinations">Destinations</Link>
            <span className="sep">/</span>
            <span>{destination.name}</span>
          </div>
          <div className="dd-hero-region">
            {destination.regionLabel} · {destination.subtitle}
          </div>
          <h1 className="dd-hero-title">{destination.name}</h1>
          <p className="dd-hero-tagline">{destination.tagline}</p>
          <div className="dd-hero-meta">
            {destination.metaItems.map((m, i) => (
              <div key={i} className="dd-hero-meta-item">
                <div className="dot"></div>
                <strong>{m.strong}</strong> {m.rest}
              </div>
            ))}
          </div>
          <div className="dd-hero-btns">
            <a href="#inquiry" className="btn btn-gold">
              Enquire now ↗
            </a>
            <a href="#package-details" className="btn btn-outline-white">
              View package details
            </a>
          </div>
        </div>
      </section>

      {/* STICKY BAR */}
      <div className={`sticky-bar ${stickyVisible ? "visible" : ""}`}>
        <div className="sticky-bar-inner">
          <div className="sticky-dest">{destination.name}</div>
          <div className="sticky-price">
            <small>From per person</small>
            {destination.fromPrice}
          </div>
          <div className="sticky-actions">
            <a href="#inquiry" className="btn btn-gold">
              Enquire now ↗
            </a>
            <a href="#package-details" className="btn btn-outline">
              View details
            </a>
          </div>
        </div>
      </div>

      <div className="dd-page-wrap">
        <div className="dd-main-grid">
          <div>
            {/* OVERVIEW */}
            <section className="dd-section reveal" id="overview">
              <div className="section-eyebrow">01 — Overview</div>
              <h2 className="section-title">{destination.subtitle}</h2>
              <p className="section-body">{destination.description}</p>

              {destination.highlights && (
                <div className="highlights-grid">
                  {destination.highlights.map((h, i) => (
                    <div className="highlight-card" key={i}>
                      <div className="highlight-icon">{h.icon}</div>
                      <div className="highlight-text">
                        <h4>{h.title}</h4>
                        <p>{h.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* PACKAGE DETAILS */}
            <section className="dd-section reveal" id="package-details">
              <div className="section-eyebrow">02 — What's included</div>
              <h2 className="section-title">Package Details</h2>
              <p className="section-body">
                Every component below is included in your published price. Customise any
                element with our travel specialists.
              </p>

              {destination.components && (
                <div className="included-summary">
                  <div className="included-summary-header">
                    <h3>What's Included</h3>
                    <div className="from-tag">
                      From <strong>{destination.fromPrice}</strong>
                      <span>per person</span>
                    </div>
                  </div>
                  <div className="included-grid">
                    {destination.components.map((c, i) => {
                      const icon = getComponentIcon(c.label);
                      const parsed = parseComponentDetails(c.details);
                      const isTransfer = c.label.toLowerCase().includes("transfer");
                      return (
                        <div className="included-card" key={i}>
                          <div className="included-icon" aria-hidden="true">
                            {icon}
                          </div>
                          <div className="included-content">
                            <div className="included-label">{c.label}</div>
                            {parsed.primary && (
                              <div className="included-primary">
                                {parsed.primary}
                              </div>
                            )}
                            {parsed.pills.length > 0 && (
                              <div className="included-pills">
                                {parsed.pills.map((p, j) => (
                                  <span
                                    key={j}
                                    className={`included-pill ${
                                      isTransfer ? "accent" : ""
                                    }`}
                                  >
                                    {p}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {destination.packages && (
                <div className="packages-table-wrap">
                  <table className="packages-table">
                    <thead>
                      <tr>
                        <th>Package</th>
                        <th>Rating</th>
                        <th>Duration</th>
                        <th>Hotels</th>
                        <th>Room</th>
                        <th style={{ textAlign: "right" }}>Price (GBP)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {destination.packages.map((p, i) => {
                        const isRecommended = i === 1;
                        const { filled, total } = parseStars(p.stars);
                        return (
                          <tr
                            key={p.id}
                            className={isRecommended ? "recommended" : ""}
                          >
                            <td className="pkg-name">
                              {p.name}
                              {isRecommended && (
                                <span className="recommended-badge">
                                  Most popular
                                </span>
                              )}
                            </td>
                            <td className="pkg-stars" aria-label={p.stars}>
                              {Array.from({ length: total }).map((_, k) => (
                                <span
                                  key={k}
                                  className={`pkg-star ${k >= filled ? "dim" : ""}`}
                                >
                                  ★
                                </span>
                              ))}
                            </td>
                            <td>{p.duration}</td>
                            <td className="pkg-hotels">
                              {p.hotels.split(" + ").map((h, k) => (
                                <span key={k} style={{ display: "block" }}>
                                  <strong>{h}</strong>
                                </span>
                              ))}
                            </td>
                            <td>
                              <span className="pkg-room-badge">{p.roomType}</span>
                            </td>
                            <td className="pkg-price">{p.priceDisplay}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="packages-mobile">
                    {destination.packages.map((p, i) => {
                      const isRecommended = i === 1;
                      const { filled, total } = parseStars(p.stars);
                      return (
                        <div
                          className={`pkg-mobile-card ${
                            isRecommended ? "recommended" : ""
                          }`}
                          key={p.id}
                        >
                          <div className="pkg-mobile-card-head">
                            <div className="pkg-mobile-name">{p.name}</div>
                            <div className="pkg-mobile-price">{p.priceDisplay}</div>
                          </div>
                          <div className="pkg-mobile-stars" aria-label={p.stars}>
                            {Array.from({ length: total }).map((_, k) => (
                              <span
                                key={k}
                                className={`pkg-star ${k >= filled ? "dim" : ""}`}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                          <div className="pkg-mobile-row">
                            <span className="lbl">Duration</span>
                            <span className="val">{p.duration}</span>
                          </div>
                          <div className="pkg-mobile-row">
                            <span className="lbl">Hotels</span>
                            <span className="val">
                              {p.hotels.split(" + ").map((h, k) => (
                                <span key={k} style={{ display: "block" }}>
                                  <strong>{h}</strong>
                                </span>
                              ))}
                            </span>
                          </div>
                          <div className="pkg-mobile-row">
                            <span className="lbl">Room</span>
                            <span className="val">
                              <span className="pkg-room-badge">{p.roomType}</span>
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {destination.packagesNote && (
                <p className="packages-note">{destination.packagesNote}</p>
              )}
            </section>

            {/* MONTHLY PRICING */}
            {destination.pricing && destination.pricing.length > 0 && (
              <section className="dd-section reveal pricing-section" id="pricing">
                <div className="section-eyebrow">03 — Pricing per departure</div>
                <div className="pricing-header">
                  <div>
                    <h3>Choose your month</h3>
                    <p>
                      All prices are per person. Speak to our specialists to confirm
                      availability and lock in your preferred departure date.
                    </p>
                  </div>
                </div>
                <div className="pricing-grid">
                  {destination.pricing.map((p) => {
                    const isFeatured = lowestPrice && p.month === lowestPrice.month;
                    return (
                      <div
                        key={p.month}
                        className={`price-card ${isFeatured ? "featured" : ""}`}
                      >
                        <div className="price-month">{p.month}</div>
                        <div className="price-amount">{p.display}</div>
                        <span className="price-per">per person · {p.currency}</span>
                        <a href="#inquiry" className="price-cta">
                          Enquire for {p.month} →
                        </a>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* RELATED */}
            <section className="dd-section reveal">
              <div className="section-eyebrow">04 — You may also love</div>
              <h2 className="section-title">More from our collection</h2>
              <div className="related-grid">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={`/destinations/${r.slug}`}
                    className="related-card"
                  >
                    <div className="related-img">
                      <img src={r.image} alt={r.name} />
                      <div className="related-overlay"></div>
                      <div className="related-name-overlay">{r.name}</div>
                    </div>
                    <div className="related-body">
                      <div className="related-region">{r.regionLabel}</div>
                      <div className="related-price">
                        <strong>{r.fromPrice}</strong>
                        <span>Explore →</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* INQUIRY SIDEBAR */}
          <div id="inquiry">
            <form
              className="inquiry-box"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks — our specialist will reply within 2 working hours.");
              }}
            >
              <div className="inquiry-header">
                <div className="inquiry-header-price">
                  <small>Tailor-made packages from</small>
                  {destination.fromPrice} <span>per person</span>
                </div>
              </div>
              <div className="inquiry-body">
                <div className="form-group">
                  <label className="form-label" htmlFor="dd-name">Your name</label>
                  <input className="form-input" id="dd-name" type="text" placeholder="Full name" />
                </div>
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="dd-email">Email</label>
                    <input
                      className="form-input"
                      id="dd-email"
                      type="email"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="dd-phone">Phone</label>
                    <input
                      className="form-input"
                      id="dd-phone"
                      type="tel"
                      placeholder="+44..."
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="dd-month">Preferred month</label>
                  <select className="form-input" id="dd-month" defaultValue="">
                    <option value="" disabled>
                      Select a departure month
                    </option>
                    {destination.pricing?.map((p) => (
                      <option key={p.month}>{p.month} — {p.display}</option>
                    ))}
                    {destination.packages?.map((p) => (
                      <option key={p.id}>September — {p.name} ({p.priceDisplay})</option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="dd-trav">Travellers</label>
                  <select className="form-input" id="dd-trav" defaultValue="2 adults">
                    <option>2 adults</option>
                    <option>1 adult</option>
                    <option>2 adults + children</option>
                    <option>Family (4+)</option>
                    <option>Group (6+)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="dd-req">Special requests</label>
                  <textarea
                    className="form-input"
                    id="dd-req"
                    rows={3}
                    placeholder="Honeymoon, dietary needs, accessibility, etc."
                    style={{ resize: "vertical" }}
                  ></textarea>
                </div>

                <div className="inquiry-divider"></div>
                <div className="inquiry-includes">
                  <div className="inc-item">No booking fees charged</div>
                  <div className="inc-item">Expert consultation included</div>
                  <div className="inc-item">{destination.transfersIncluded}</div>
                  <div className="inc-item">Price match guarantee</div>
                </div>

                <div className="inquiry-btns">
                  <button
                    type="submit"
                    className="btn btn-gold"
                    style={{ width: "100%", justifyContent: "center", padding: 15 }}
                  >
                    Get My Free Quote ↗
                  </button>
                  <Link
                    to="/contact#inquiry-section"
                    className="btn btn-outline"
                    style={{ width: "100%", justifyContent: "center", padding: 14 }}
                  >
                    ✦ Talk to a Specialist
                  </Link>
                </div>

                <div className="inquiry-trust">
                  <span className="itrust">Secure enquiry</span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 10,
                      color: "var(--stone-dark)",
                    }}
                  >
                    Reply within 2 working hours
                  </span>
                </div>

                <div className="inquiry-expert">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=70"
                    alt="Specialist"
                    className="expert-avatar"
                  />
                  <div className="expert-info">
                    <p>Emma Clarke</p>
                    <small>Travel Specialist · 8 years experience</small>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
