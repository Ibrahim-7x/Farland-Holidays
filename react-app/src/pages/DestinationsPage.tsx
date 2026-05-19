import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { DESTINATIONS } from "../data/destinations";
import "./DestinationsPage.css";

const STYLE_FILTERS = [
  { value: "Beach", label: "Beach & Islands" },
  { value: "Culture", label: "Cultural & Heritage" },
  { value: "Adventure", label: "Adventure" },
  { value: "Wellness", label: "Wellness" },
  { value: "Family", label: "Family" },
  { value: "Spiritual", label: "Spiritual" },
];

type SortValue = "popular" | "price-asc" | "price-desc" | "alpha";

function parsePrice(s: string): number {
  return Number(s.replace(/[^0-9.]/g, "")) || 0;
}

export function DestinationsPage() {
  const [active, setActive] = useState<Set<string>>(new Set());
  const [sort, setSort] = useState<SortValue>("popular");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleFilter = (v: string) =>
    setActive((p) => {
      const n = new Set(p);
      if (n.has(v)) n.delete(v);
      else n.add(v);
      return n;
    });

  const toggleWish = (slug: string) =>
    setWishlist((p) => {
      const n = new Set(p);
      if (n.has(slug)) n.delete(slug);
      else n.add(slug);
      return n;
    });

  const filtered = useMemo(() => {
    const activeArr = Array.from(active);

    // No filters active → show ALL destinations (never blank)
    const matched =
      activeArr.length === 0
        ? DESTINATIONS
        : DESTINATIONS.filter((d) =>
            activeArr.some(
              (f) => d.styles.includes(f) || d.region.includes(f)
            )
          );

    if (sort === "price-asc")
      return [...matched].sort(
        (a, b) => parsePrice(a.fromPrice) - parsePrice(b.fromPrice)
      );
    if (sort === "price-desc")
      return [...matched].sort(
        (a, b) => parsePrice(b.fromPrice) - parsePrice(a.fromPrice)
      );
    if (sort === "alpha")
      return [...matched].sort((a, b) => a.name.localeCompare(b.name));
    return matched;
  }, [active, sort]);

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-bg">
          <img
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80"
            alt="World destinations"
          />
        </div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span>Destinations</span>
          </div>
          <h1 className="page-hero-title">Our Curated Collection</h1>
          <p className="page-hero-sub">
            Four hand-crafted journeys — each one fully costed, fully transparent, and
            ready to book.
          </p>
        </div>
      </div>

      <div className={`page-body ${filtersOpen ? "show-filters" : ""}`}>
        <aside className="filter-panel">
          <div className="filter-header">
            <h3>Filters</h3>
            <button type="button" className="filter-clear" onClick={() => setActive(new Set())}>
              Clear all
            </button>
          </div>

          <div className="filter-section">
            <div className="filter-label">Travel Style</div>
            <div className="filter-options">
              {STYLE_FILTERS.map((f) => (
                <div className="filter-option" key={f.value}>
                  <input
                    type="checkbox"
                    id={`f-${f.value}`}
                    checked={active.has(f.value)}
                    onChange={() => toggleFilter(f.value)}
                  />
                  <label htmlFor={`f-${f.value}`}>{f.label}</label>
                </div>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <div className="filter-label">Region</div>
            <div className="filter-options">
              <div className="filter-option">
                <input
                  type="checkbox"
                  id="f-sea"
                  checked={active.has("Southeast Asia")}
                  onChange={() => toggleFilter("Southeast Asia")}
                />
                <label htmlFor="f-sea">
                  Southeast Asia <span className="filter-count">3</span>
                </label>
              </div>
              <div className="filter-option">
                <input
                  type="checkbox"
                  id="f-me"
                  checked={active.has("Middle East")}
                  onChange={() => toggleFilter("Middle East")}
                />
                <label htmlFor="f-me">
                  Middle East <span className="filter-count">2</span>
                </label>
              </div>
            </div>
          </div>

          <div className="filter-section">
            <div className="filter-label">Departure</div>
            <div className="filter-options">
              <div className="filter-option">
                <input type="checkbox" id="f-may" />
                <label htmlFor="f-may">May</label>
              </div>
              <div className="filter-option">
                <input type="checkbox" id="f-jun" />
                <label htmlFor="f-jun">June</label>
              </div>
              <div className="filter-option">
                <input type="checkbox" id="f-sep" />
                <label htmlFor="f-sep">September</label>
              </div>
              <div className="filter-option">
                <input type="checkbox" id="f-oct" />
                <label htmlFor="f-oct">October</label>
              </div>
            </div>
          </div>
        </aside>

        <div className="content-area">
          <div className="content-toolbar">
            <div className="result-count">
              <strong>{filtered.length}</strong> destinations available
            </div>
            <div className="toolbar-right">
              <button
                type="button"
                className="mobile-filter-btn"
                aria-expanded={filtersOpen}
                onClick={() => setFiltersOpen((v) => !v)}
              >
                {filtersOpen ? "✕ Hide Filters" : "⚙ Filters"}
              </button>
              <select
                className="sort-select"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortValue)}
              >
                <option value="popular">Most Popular</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="alpha">Alphabetical</option>
              </select>
              <div className="view-toggle">
                <button
                  type="button"
                  className={`view-btn ${view === "grid" ? "active" : ""}`}
                  onClick={() => setView("grid")}
                  title="Grid view"
                >
                  ⊞
                </button>
                <button
                  type="button"
                  className={`view-btn ${view === "list" ? "active" : ""}`}
                  onClick={() => setView("list")}
                  title="List view"
                >
                  ☰
                </button>
              </div>
            </div>
          </div>

          {active.size > 0 && (
            <div className="active-filters">
              {Array.from(active).map((f) => (
                <div className="active-filter" key={f}>
                  {f}{" "}
                  <button type="button" onClick={() => toggleFilter(f)} aria-label={`Remove ${f}`}>
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className={`dl-dest-grid ${view === "list" ? "list-view" : ""}`}>
            {filtered.map((d) => (
              <Link
                to={`/destinations/${d.slug}`}
                key={d.slug}
                className="dest-card"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="dest-card-img">
                  <img src={d.image} alt={d.name} />
                  <div className="dest-img-overlay"></div>
                  <div className="dest-img-meta">
                    <div className="dest-region">{d.regionLabel}</div>
                    <div className="dest-name">{d.name}</div>
                  </div>
                  {d.badge && (
                    <div className="dest-top-badge">
                      <span>{d.badge}</span>
                    </div>
                  )}
                  <button
                    type="button"
                    aria-label={`Wishlist ${d.name}`}
                    className={`dest-wish ${wishlist.has(d.slug) ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleWish(d.slug);
                    }}
                  >
                    {wishlist.has(d.slug) ? "♥" : "♡"}
                  </button>
                </div>
                <div className="dest-card-body">
                  <div className="dest-rating">
                    <span className="dest-stars">{d.rating}</span>
                    <span className="dest-rating-text">{d.ratingText}</span>
                  </div>
                  <p className="dest-card-desc">{d.description}</p>
                  <div className="dest-card-tags">
                    {d.tags.map((t) => (
                      <span className="dest-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="dest-card-footer">
                    <div className="dest-price">
                      <small>From per person</small>
                      <strong>{d.fromPrice}</strong>
                    </div>
                    <span className="dest-card-cta">Explore →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
