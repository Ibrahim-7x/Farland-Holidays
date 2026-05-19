import { Link } from "react-router-dom";
import "./AboutPage.css";

export function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="about-hero">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600&q=80"
            alt="Farland travel team"
          />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
          <h1 className="hero-title">Crafting Journeys With Purpose</h1>
          <p className="hero-sub">
            Farland Holidays is a boutique luxury travel company designing bespoke
            journeys for curious travelers. We combine deep destination knowledge,
            trusted partners, and a human-first service culture.
          </p>
          <div className="hero-actions">
            <Link to="/contact#inquiry-section" className="btn btn-gold">
              Start Planning
            </Link>
            <a href="#team" className="btn btn-outline-white">
              Meet Our Team
            </a>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="about-section reveal">
        <div className="about-container">
          <div className="section-eyebrow">Who We Are</div>
          <h2 className="section-title">A Travel Studio Built On Trust</h2>
          <p className="section-sub">
            We started Farland in 2008 to build the kind of travel company we wished
            existed. A partner who listens carefully, designs intelligently, and stays by
            your side from the first call to your return home.
          </p>

          <div className="story-grid">
            <div className="story-card">
              <p>
                Our specialists are destination obsessives. Every itinerary is built
                around what matters most to you: time, comfort, authenticity, and the
                little details that transform a trip into a memory.
              </p>
              <p>
                We work with hand-picked hotels, guides, and private experiences that
                reflect our standards. That means fewer options, but better outcomes for
                every traveler.
              </p>
              <div className="story-stats">
                <div className="stat-tile">
                  <strong>40+</strong>
                  <span>Countries</span>
                </div>
                <div className="stat-tile">
                  <strong>1,200+</strong>
                  <span>Journeys</span>
                </div>
                <div className="stat-tile">
                  <strong>4.9/5</strong>
                  <span>Avg Rating</span>
                </div>
              </div>
            </div>
            <div className="story-img">
              <img
                src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?w=900&q=80"
                alt="Farland concierge"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section
        className="about-section reveal"
        style={{ background: "var(--ivory-mid)" }}
      >
        <div className="about-container">
          <div className="section-eyebrow">What We Believe</div>
          <h2 className="section-title">Our Values Shape Every Itinerary</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">01</div>
              <h4>Thoughtful Design</h4>
              <p>
                We build each journey from scratch to match your pace, your style, and
                your sense of wonder.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">02</div>
              <h4>Local Partnerships</h4>
              <p>
                Our network of trusted hosts and guides opens doors to private experiences
                and hidden gems.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">03</div>
              <h4>Service With Care</h4>
              <p>
                We are responsive, proactive, and precise, with 24/7 support when you
                travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="about-section reveal">
        <div className="about-container">
          <div className="section-eyebrow">Our Journey</div>
          <h2 className="section-title">Milestones That Shaped Farland</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2008</div>
              <div className="timeline-text">
                Farland is founded with a focus on bespoke luxury travel and boutique
                service.
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2015</div>
              <div className="timeline-text">
                Expanded into multi-continent journeys and private expedition partnerships.
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-text">
                Introduced dedicated in-trip support and a global emergency response desk.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section
        className="about-section reveal"
        id="team"
        style={{ background: "var(--ivory-mid)" }}
      >
        <div className="about-container">
          <div className="section-eyebrow">Meet The Team</div>
          <h2 className="section-title">Specialists Who Know The Details</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-photo">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80"
                  alt="Alicia Moore"
                />
              </div>
              <div className="team-body">
                <h5>Alicia Moore</h5>
                <span>Head of Experiences</span>
                <p>Designs immersive journeys across Africa and the Indian Ocean.</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-photo">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80"
                  alt="Daniel Wright"
                />
              </div>
              <div className="team-body">
                <h5>Daniel Wright</h5>
                <span>Senior Travel Designer</span>
                <p>Specialist in Asia, private villas, and multi-stop cultural tours.</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-photo">
                <img
                  src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=600&q=80"
                  alt="Priya Shah"
                />
              </div>
              <div className="team-body">
                <h5>Priya Shah</h5>
                <span>Concierge Lead</span>
                <p>Coordinates on-trip services and ensures every detail is seamless.</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-photo">
                <img
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80"
                  alt="Morgan Lee"
                />
              </div>
              <div className="team-body">
                <h5>Morgan Lee</h5>
                <span>Partnerships Manager</span>
                <p>Works with boutique hotels and private guides worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="stats-band reveal">
        <div className="stats-inner">
          <div className="stats-card">
            <strong>98%</strong>
            <span>Repeat Clients</span>
          </div>
          <div className="stats-card">
            <strong>24/7</strong>
            <span>Trip Support</span>
          </div>
          <div className="stats-card">
            <strong>120</strong>
            <span>Hotel Partners</span>
          </div>
          <div className="stats-card">
            <strong>8</strong>
            <span>Senior Specialists</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta reveal">
        <div className="about-cta-inner">
          <h2 className="about-cta-title">Ready to design your next journey?</h2>
          <p className="about-cta-sub">
            Tell us where you want to go. We will handle the details, the logistics, and
            the special touches that make a trip unforgettable.
          </p>
          <div className="about-cta-actions">
            <Link to="/contact#inquiry-section" className="btn btn-gold">
              Plan My Trip
            </Link>
            <Link to="/destinations" className="btn btn-outline-white">
              Browse Destinations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
