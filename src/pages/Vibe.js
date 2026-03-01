import React, { useRef, useState, useEffect } from 'react';
import './Vibe.css';

function usePageSEO() {
  useEffect(() => {
    document.title = "The Vibe — De' Coal Pot | Caribbean Restaurant Atmosphere Cruz Bay St. John";
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      "Experience the warm, authentic atmosphere of De' Coal Pot in Cruz Bay, St. John USVI. Locals call it a home away from home. Casual Caribbean dining, island music, and genuine West Indian hospitality."
    );
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', 'https://www.decoalpot.com/vibe');
    const bcId = 'json-ld-bc-vibe';
    let bcEl = document.getElementById(bcId);
    if (!bcEl) { bcEl = document.createElement('script'); bcEl.id = bcId; bcEl.type = 'application/ld+json'; document.head.appendChild(bcEl); }
    bcEl.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',      item: 'https://www.decoalpot.com/' },
        { '@type': 'ListItem', position: 2, name: 'The Vibe',  item: 'https://www.decoalpot.com/vibe' },
      ],
    });
    return () => { document.getElementById(bcId)?.remove(); };
  }, []);
}

function useInView(ref) {
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: 0.08 });
    o.observe(el); return () => o.disconnect();
  }, [ref]);
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

const MOMENTS = [
  { title: 'Warm Greetings',       desc: 'You\'ll be welcomed like someone expected you. Because at De\' Coal Pot in Cruz Bay, in a way, we always are.' },
  { title: 'Home Cooking Energy',  desc: 'Not pretentious. Not staged. Just the comfort of someone cooking authentic Caribbean food because they genuinely love it.' },
  { title: 'Island Conversation',  desc: 'Locals at the bar recommending what to order. Stories about St. John. Laughter that carries across the restaurant.' },
  { title: 'Steps from the Ferry', desc: 'Steps from the Cruz Bay ferry dock. Arrive from St. Thomas and walk straight into the best meal of your trip to St. John.' },
  { title: 'The Bar',              desc: 'Six seats. Cold drinks — rum punch, Pain Killers, Bushwackers. The right island music. An easy place to make friends.' },
  { title: 'Golden Hour',          desc: 'The Cruz Bay sun does what it does while your plate arrives. There\'s nowhere else in the US Virgin Islands you\'d rather be.' },
];

const QUOTES = [
  {
    text: "This was, without a doubt, the most amazing dining experience I've had. The BBQ half chicken with plantains, rice and coleslaw was incredible. The sunset — like something out of picture books. Dining in heaven.",
    order: "BBQ chicken, plantains, rice & coleslaw"
  },
  {
    text: "De' Coal Pot serves up good, authentic Caribbean cuisine in Cruz Bay. The staff is warm and friendly. We shared the oxtail stew with fried plantains and pasta. Delicious. We'd definitely go back.",
    order: "Oxtail stew, fried plantains, pasta"
  },
  {
    text: "I took some skeptical family members and they both couldn't stop raving about the meal. I'd recommend the vegetarian delight to anyone visiting St. John.",
    order: "Vegetarian delight"
  },
];

const PHOTO_LABELS = [
  'Restaurant exterior / Cruz Bay',
  'Dining room atmosphere',
  'Bar area',
  'Happy guests dining',
  'Sunset view from restaurant',
];

export default function Vibe() {
  usePageSEO();
  const mRef = useRef(null); const mV = useInView(mRef);
  const qRef = useRef(null); const qV = useInView(qRef);

  return (
    <div className="page vibe-page">

      {/* ─── HERO ─── */}
      <section className="page-hero" aria-labelledby="vibe-h1">
        <div className="container">
          <span className="label">The Atmosphere</span>
          <h1 id="vibe-h1">
            You'll hear the laughter before you open the door.
          </h1>
          <p>Authentic Caribbean dining in Cruz Bay, St. John — where locals and visitors share the same table.</p>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <div className="vibe-intro" role="complementary">
        <div className="container">
          <p>
            De' Coal Pot isn't theatrical. There are no hushed presentations or curated plating moments.
            What there is: warmth. Real conversation. The smell of authentic West Indian food reaching you
            before you find your seat. It's the kind of Cruz Bay restaurant where the regulars know the
            staff by name and visitors leave feeling like they found something most tourists miss.
          </p>
        </div>
      </div>

      {/* ─── PHOTO GRID ─── */}
      <section className="section" aria-label="Restaurant photos" aria-hidden="true">
        <div className="container">
          <div className="vibe-photo-grid">
            {PHOTO_LABELS.map((label, i) => (
              <div key={i} className="vibe-photo">
                <ImgPlaceholder label={label} style={{ minHeight: i === 0 ? '500px' : '240px' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MOMENTS ─── */}
      <section className="section moments-section" ref={mRef} aria-labelledby="moments-heading">
        <div className="container">
          <span className="label">What to Expect</span>
          <h2 id="moments-heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '0.5rem' }}>
            What makes De' Coal Pot different.
          </h2>
          <div className={`moments-grid reveal ${mV ? 'visible' : ''}`} role="list">
            {MOMENTS.map((m, i) => (
              <article key={m.title} className="moment" role="listitem" style={{ transitionDelay: `${i * 0.08}s` }}>
                <span className="moment-num" aria-hidden="true">0{i + 1}</span>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── QUOTES ─── */}
      <section className="section quotes-section" ref={qRef} aria-labelledby="quotes-heading">
        <div className={`container reveal ${qV ? 'visible' : ''}`}>
          <span className="label">Guest Reviews</span>
          <h2 id="quotes-heading">In their own words.</h2>
          <div className="quotes-grid" role="list">
            {QUOTES.map((q, i) => (
              <article
                key={i}
                className="quote-card"
                role="listitem"
                itemScope
                itemType="https://schema.org/Review"
              >
                <meta itemProp="itemReviewed" content="De' Coal Pot Restaurant" />
                <blockquote itemProp="reviewBody">
                  <p>"{q.text}"</p>
                </blockquote>
                <div className="quote-meta">
                  <span className="quote-order-label">They ordered</span>
                  <span className="quote-order" itemProp="name">{q.order}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
