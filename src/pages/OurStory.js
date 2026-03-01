import React, { useRef, useState, useEffect } from 'react';
import './OurStory.css';

function usePageSEO() {
  useEffect(() => {
    document.title = "Our Story — De' Coal Pot | West Indian Restaurant Cruz Bay St. John USVI";
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      "The story of De' Coal Pot — a family-owned authentic West Indian restaurant in Cruz Bay, St. John, USVI. Founded by Norma Herman, rooted in Caribbean culinary heritage spanning West African, South Asian, and island traditions."
    );
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', 'https://www.decoalpot.com/our-story');
    const bcId = 'json-ld-bc-story';
    let bcEl = document.getElementById(bcId);
    if (!bcEl) { bcEl = document.createElement('script'); bcEl.id = bcId; bcEl.type = 'application/ld+json'; document.head.appendChild(bcEl); }
    bcEl.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.decoalpot.com/' },
        { '@type': 'ListItem', position: 2, name: 'Our Story', item: 'https://www.decoalpot.com/our-story' },
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

const TIMELINE = [
  { era: 'Growing Up in St. John', text: 'Norma Herman grew up right here on St. John, USVI, absorbing the rhythms of Caribbean cooking — the slow braises, the aromatic curries, the morning roti made before the heat of the day. These aren\'t recipes she learned from books; they are the flavors of home.' },
  { era: 'The Coal Pot Tradition', text: 'In West Indian culture, the coal pot is the clay vessel where life happened. It sat in every yard, cooked every stew, and was the heart of the home long before modern stoves arrived. Our name honors that tradition — slow food, made with fire, made with care.' },
  { era: 'The Cultural Heritage', text: 'West Indian and Caribbean cuisine is the story of convergence — West African slow-braising techniques, South Asian curry mastery brought by Indian indentured laborers, and the tropical abundance of the Caribbean islands. Every dish at De\' Coal Pot carries that layered history in its flavor.' },
  { era: 'Opening in Cruz Bay', text: 'Norma and Glycerius Herman opened De\' Coal Pot to share what they grew up with. In Cruz Bay, St. John — a town full of tourist-facing restaurants — they built something different: an authentic gathering place for locals and visitors to share a table.' },
];

export default function OurStory() {
  usePageSEO();
  const tlRef = useRef(null); const tlV = useInView(tlRef);
  const cRef = useRef(null); const cV = useInView(cRef);

  return (
    <div className="page our-story-page">

      {/* ─── PAGE HERO ─── */}
      <section className="page-hero" aria-labelledby="story-h1">
        <div className="container">
          <span className="label">Our Story</span>
          <h1 id="story-h1">
            A family-owned West Indian restaurant rooted in the Virgin Islands.
          </h1>
          <p>The heritage, the people, and the culture behind every dish we serve.</p>
        </div>
      </section>

      {/* ─── QUOTE ─── */}
      <div className="quote-strip" role="complementary">
        <div className="container">
          <blockquote>
            <p>"Before there were gas stoves, there was the coal pot. Before there were trends, there was tradition."</p>
          </blockquote>
        </div>
      </div>

      {/* ─── STORY BODY ─── */}
      <section className="section" ref={tlRef} aria-labelledby="timeline-heading">
        <div className="container">
          <div className={`story-body-grid reveal ${tlV ? 'visible' : ''}`}>

            <div className="story-body-img" aria-hidden="true">
              <ImgPlaceholder label="Norma Herman / founders" style={{ height: '100%' }} />
              <p className="story-body-img-caption">Norma &amp; Glycerius Herman — De' Coal Pot, Cruz Bay, St. John</p>
            </div>

            <div>
              <span className="label">How We Got Here</span>
              <h2 id="timeline-heading" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: '2.5rem' }}>
                The story behind De' Coal Pot.
              </h2>
              <div className="timeline">
                {TIMELINE.map((item, i) => (
                  <div key={item.era} className="tl-item" style={{ transitionDelay: `${i * 0.12}s` }}>
                    <div className="tl-dot" aria-hidden="true" />
                    <div className="tl-body">
                      <h3>{item.era}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CULTURE ─── */}
      <section className="section culture-section" ref={cRef} aria-labelledby="culture-heading">
        <div className={`container reveal ${cV ? 'visible' : ''}`}>
          <span className="label">Culinary Roots</span>
          <h2 id="culture-heading">
            Three continents. One Caribbean table.
          </h2>
          <p className="culture-intro">
            West Indian food is one of the world's great culinary convergences. Understanding these roots
            is understanding what makes a dish at De' Coal Pot taste unlike anything else in the Virgin Islands.
          </p>
          <div className="influences" role="list">
            {[
              { origin: 'West Africa', note: 'The art of slow-braising, root vegetables, and the oxtail stew tradition — West African culinary wisdom is the backbone of Caribbean cooking.', img: 'West African culinary traditions' },
              { origin: 'South Asia', note: 'Indian indentured laborers brought curry mastery, roti, turmeric, and aromatic spice blends that define our curried goat and chicken dishes.', img: 'Curry spices & South Asian influence' },
              { origin: 'The Caribbean', note: 'Local seafood traditions, tropical produce, conch, plantains, and the island soul that ties it all together into something uniquely Virgin Islands.', img: 'Caribbean tropical ingredients' },
            ].map(item => (
              <article key={item.origin} className="influence" role="listitem">
                <div className="influence-img">
                  <ImgPlaceholder label={item.img} style={{ height: '100%' }} />
                </div>
                <h3>{item.origin}</h3>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
