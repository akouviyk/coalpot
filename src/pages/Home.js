import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import heroVideo from '../decoalpotvideo.mp4';
import logo from '../logo.png';
import './Home.css';

function usePageSEO() {
  useEffect(() => {
    document.title = "De' Coal Pot | Best Caribbean Restaurant in Cruz Bay, St. John USVI";
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      "De' Coal Pot is Cruz Bay's authentic West Indian restaurant. Family-owned, serving oxtail stew, curried goat, fresh conch & grilled seafood in St. John, USVI. 4.6★ on Google. Steps from the ferry dock. Open Mon–Sat 11am–9pm."
    );
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', 'https://www.decoalpot.com/');
  }, []);
}

const REVIEWS = [
  { text: "The oxtail stew was incredible — so tender it fell right off the bone and packed with rich, deep flavor. I'd come back just for this dish.", author: "Google Reviewer" },
  { text: "Wanted to try authentic Caribbean food and was recommended this spot by locals — 10/10 recommend! The oxtail stew was incredibly tender and flavorful.", author: "Google Reviewer" },
  { text: "Don't miss this gem! De Coal Pot stands out for kind hosts and fabulous food. Options for everyone and tons of yummy sides.", author: "Google Reviewer" },
  { text: "Great authentic Caribbean cuisine in Cruz Bay! The staff is warm and friendly. We'd definitely go back.", author: "Google Reviewer" },
];

function useInView(ref, threshold = 0.12) {
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold });
    o.observe(el); return () => o.disconnect();
  }, [ref, threshold]);
  return v;
}

function ImgPlaceholder({ label, style, className }) {
  return (
    <div className={`img-placeholder ${className || ''}`} style={style} aria-hidden="true">
      <span className="img-placeholder-icon">📷</span>
      <span className="img-placeholder-text">{label || 'Photo'}</span>
    </div>
  );
}

export default function Home() {
  usePageSEO();

  const storyRef = useRef(null);
  const dishesRef = useRef(null);
  const reviewsRef = useRef(null);
  const ctaRef = useRef(null);

  const storyV = useInView(storyRef);
  const dishesV = useInView(dishesRef);
  const reviewsV = useInView(reviewsRef);
  const ctaV = useInView(ctaRef);

  const [activeReview, setActiveReview] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveReview(p => (p + 1) % REVIEWS.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="home">

      {/* ─── HAPPY HOUR BANNER ─── */}
      <div className="hh-banner" role="complementary" aria-label="Happy Hour promotion">
        <div className="hh-banner-track">
          {/* Duplicated for seamless marquee loop */}
          {[0, 1].map(n => (
            <div className="hh-banner-segment" key={n} aria-hidden={n === 1}>
              <span className="hh-star">✦</span>
              <span className="hh-time">2–4 PM</span>
              <span className="hh-label">Happy Hour Daily</span>
              <span className="hh-dot">·</span>
              <span className="hh-item">Cocktails</span>
              <span className="hh-dot">·</span>
              <span className="hh-item">Shots</span>
              <span className="hh-dot">·</span>
              <span className="hh-item">Spritz Specials</span>
              <span className="hh-dot">·</span>
              <span className="hh-tagline">@ De' Coal Pot — Where Locals Eat!</span>
              <span className="hh-star">✦</span>
              <span className="hh-time">2–4 PM</span>
              <span className="hh-label">Happy Hour Daily</span>
              <span className="hh-dot">·</span>
              <span className="hh-item">Cocktails</span>
              <span className="hh-dot">·</span>
              <span className="hh-item">Shots</span>
              <span className="hh-dot">·</span>
              <span className="hh-item">Spritz Specials</span>
              <span className="hh-dot">·</span>
              <span className="hh-tagline">@ De' Coal Pot — Where Locals Eat!</span>
              <span className="hh-star">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── HERO ─── */}
      <section className="hero" aria-label="De' Coal Pot — Authentic Caribbean Restaurant Cruz Bay St. John USVI">
        <video
          className="hero-video"
          src={heroVideo}
          autoPlay muted loop playsInline
          aria-hidden="true"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="hero-content">
          <img
            src={logo}
            alt="De' Coal Pot Restaurant — Authentic Caribbean Cuisine, Cruz Bay St. John USVI"
            className="hero-logo"
            width="340"
            height="220"
            fetchpriority="high"
            style={{ borderRadius: 999 }}
          />
          <p className="hero-sub">Cruz Bay · St. John · US Virgin Islands</p>
          <div className="hero-actions">
            <Link to="/menu" className="btn btn-solid">View Menu</Link>
            <Link to="/visit" className="btn btn-outline">Find Us</Link>
          </div>
        </div>
        <div className="hero-scroll" aria-hidden="true" />
      </section>

      {/* ─── INTRO ─── */}
      <div className="intro-strip" role="complementary">
        <div className="container">
          <p>
            Before there were gas stoves, there was the coal pot — and before there were trends, there was tradition.
            Family-owned, locally rooted, authentically West Indian Caribbean cuisine in Cruz Bay, St. John, USVI.
          </p>
        </div>
      </div>

      {/* ─── STORY ─── */}
      <section
        className="section story-section"
        ref={storyRef}
        aria-labelledby="story-heading"
      >
        <div className={`container story-grid reveal ${storyV ? 'visible' : ''}`}>
          <div className="story-text">
            <span className="label">Our Story</span>
            <h2 id="story-heading">Heritage on every plate.</h2>
            <p>
              De' Coal Pot is a family-owned authentic West Indian restaurant in Cruz Bay, St. John, US Virgin Islands.
              Born from Norma Herman's kitchen, our recipes have been passed down through generations right here on this island.
              What you taste isn't from a cookbook — it's memory, family, and St. John.
            </p>
            <p>
              In Cruz Bay, surrounded by "Caribbean-inspired" tourist menus, we serve the real thing —
              authentic oxtail stew, curried goat, fresh conch, grilled seafood, and more,
              cooked the way West Indians have cooked for generations.
            </p>
            <Link to="/our-story" className="text-link">Read our story →</Link>

            <div className="story-stat-block" aria-label="Restaurant highlights">
              <div className="stat">
                <span className="stat-num">4.6★</span>
                <span className="stat-label">Google Rating</span>
              </div>
              <div className="stat">
                <span className="stat-num">600+</span>
                <span className="stat-label">Reviews</span>
              </div>
              <div className="stat">
                <span className="stat-num">100%</span>
                <span className="stat-label">Locally Owned</span>
              </div>
            </div>
          </div>

          <div className="story-visual" aria-hidden="true">
            <div className="story-img-main">
              <ImgPlaceholder label="Restaurant interior / dining atmosphere" style={{ height: '100%' }} />
            </div>
            <div className="story-img-inset">
              <ImgPlaceholder label="Chef / kitchen" style={{ height: '100%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── ATMOSPHERE IMAGE STRIP ─── */}
      <div className="atmosphere-strip" aria-hidden="true">
        <div className="atm-panel">
          <ImgPlaceholder label="Food close-up" style={{ height: '100%' }} />
        </div>
        <div className="atm-panel atm-panel-center">
          <ImgPlaceholder label="Restaurant / outdoor seating" style={{ height: '100%' }} />
          <div className="atm-overlay">
            <h3>"Authentic Caribbean dining in Cruz Bay"</h3>
            <p>St. John, USVI</p>
          </div>
        </div>
        <div className="atm-panel">
          <ImgPlaceholder label="Oxtail stew dish" style={{ height: '100%' }} />
        </div>
      </div>

      {/* ─── HAPPY HOUR FEATURE ─── */}
      <section className="hh-section" aria-labelledby="hh-heading">
        <div className="hh-section-inner container">
          <div className="hh-text">
            <span className="label">Daily Special</span>
            <h2 id="hh-heading">Happy Hour<br />2 – 4 PM</h2>
            <p>Every day, from 2 to 4 PM — come unwind with us. Cocktail specials, shots, and spritz deals that make Cruz Bay feel like paradise.</p>
            <ul className="hh-list" aria-label="Happy hour offerings">
              <li><span className="hh-cheers">🥂</span> Cocktail specials</li>
              <li><span className="hh-cheers">🍹</span> Rum punch &amp; Pain Killers</li>
              <li><span className="hh-cheers">✨</span> Shots &amp; Spritz</li>
              <li><span className="hh-cheers">🍺</span> Cold island beers</li>
            </ul>
            <a href="tel:+13406901127" className="btn btn-solid" style={{ marginTop: '1.75rem' }}>
              Call to Reserve · (340) 690-1127
            </a>
          </div>
          <div className="hh-card" aria-hidden="true">
            <div className="hh-card-top">
              <div className="hh-card-time">2–4<span>PM</span></div>
              <div className="hh-card-label">Happy Hour<br />Every Day</div>
            </div>
            <div className="hh-card-cheers">Cheers! 🥂</div>
            <div className="hh-card-tagline">@ De' Coal Pot · Where Locals Eat!</div>
          </div>
        </div>
      </section>

      {/* ─── DISHES ─── */}
      <section
        className="section dishes-section"
        ref={dishesRef}
        aria-labelledby="dishes-heading"
      >
        <div className={`container reveal ${dishesV ? 'visible' : ''}`}>
          <div className="section-head">
            <span className="label">The Food</span>
            <h2 id="dishes-heading">
              Cruz Bay's most-loved Caribbean dishes.
            </h2>
          </div>
          <div className="dishes-grid" role="list">
            {[
              { name: 'Jagan Oxtail Stew', price: '$34.95', cat: 'Main', desc: 'Our signature — braised low and slow for hours. Fall-off-the-bone tender, rich, and deeply flavored.' },
              { name: 'Trini Curried Goat', price: '$29.95', cat: 'Main', desc: 'Trinidadian-style curried goat, slow-cooked and deeply flavored. A true West Indian heritage dish.' },
              { name: 'Fresh Conch', price: '$35.00', cat: 'Seafood', desc: 'Fresh Caribbean queen conch, prepared to order. A St. John classic.' },
              { name: 'Grilled Snapper', price: 'Market Price', cat: 'Seafood', desc: 'Fresh local snapper — Creole-style or lightly steamed with island seasonings.' },
              { name: 'Vegetarian Delight', price: '$27.95', cat: 'Vegetarian', desc: "Chef's rotating selection of seasonal Caribbean vegetables and island grains." },
              { name: 'Baby Back Ribs', price: '$26.95', cat: 'Main', desc: 'Slow-cooked fall-off-the-bone ribs with island BBQ sauce.' },
              { name: 'Herb Crusted Pork Chops', price: '$24.95', cat: 'Main', desc: 'Thick-cut pork chops with a fragrant herb crust.' },
              { name: 'Grilled Salmon', price: '$29.95', cat: 'Seafood', desc: 'Fresh salmon grilled to order with West Indian seasonings.' },
            ].map(d => (
              <article key={d.name} className="dish-card" role="listitem">
                <div className="dish-card-img">
                  <ImgPlaceholder label={d.name} style={{ height: '100%' }} />
                </div>
                <div className="dish-card-body">
                  <div className="dish-card-top">
                    <span className="dish-cat">{d.cat}</span>
                    <span className="dish-price">{d.price}</span>
                  </div>
                  <h3>{d.name}</h3>
                  <p>{d.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="dishes-cta">
            <Link to="/menu" className="btn btn-solid">Full Menu</Link>
            <a href="tel:+13406901127" className="text-link">Call (340) 205-0001 →</a>
          </div>
        </div>
      </section>

      {/* ─── REVIEWS ─── */}
      <section
        className="section reviews-section"
        ref={reviewsRef}
        aria-labelledby="reviews-heading"
      >
        <div className={`container reveal ${reviewsV ? 'visible' : ''}`}>
          <span className="label" id="reviews-heading" style={{ textAlign: 'center', display: 'block' }}>
            What Guests Say
          </span>
          <div className="review-box" itemScope itemType="https://schema.org/Review">
            <blockquote key={activeReview} itemProp="reviewBody">
              "{REVIEWS[activeReview].text}"
            </blockquote>
            <cite itemProp="author" itemScope itemType="https://schema.org/Person">
              — <span itemProp="name">{REVIEWS[activeReview].author}</span>
            </cite>
            <div className="review-dots" role="tablist" aria-label="Review navigation">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === activeReview}
                  className={`dot ${i === activeReview ? 'active' : ''}`}
                  onClick={() => setActiveReview(i)}
                  aria-label={`Show review ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="section cta-section"
        ref={ctaRef}
        aria-labelledby="cta-heading"
      >
        <div className={`container cta-inner reveal ${ctaV ? 'visible' : ''}`}>
          <span className="label">Come Visit</span>
          <h2 id="cta-heading">
            Authentic Caribbean dining in Cruz Bay, St. John.
          </h2>
          <p>
            Steps from the Cruz Bay ferry dock. Walk-ins welcome Mon–Sat 11am–9pm, Sun 4pm–9pm.
            Parties of 5+ please call ahead.
          </p>
          <address className="cta-address">
            <span>1E 96 Cruz Bay, St. John, USVI 00830</span>
          </address>
          <div className="cta-actions">
            <Link to="/visit" className="btn btn-solid">Hours &amp; Directions</Link>
            <a href="tel:+13406901127" className="btn btn-outline">(340) 690-1127</a>
          </div>
        </div>
      </section>

    </div>
  );
}
