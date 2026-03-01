import React, { useRef, useState, useEffect } from 'react';
import './Visit.css';

function usePageSEO() {
  useEffect(() => {
    document.title = "Visit Us — De' Coal Pot | Hours, Location & Directions — Cruz Bay, St. John USVI";
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      "Visit De' Coal Pot in Cruz Bay, St. John, USVI. Located at 1E 96 Cruz Bay, steps from the ferry dock. Open Mon–Sat 11am–9pm, Sunday 4pm–9pm. Call (340) 690-1127 for reservations. Walk-ins welcome."
    );
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', 'https://www.decoalpot.com/visit');

    const schemaId = 'json-ld-visit';
    let el = document.getElementById(schemaId);
    if (!el) { el = document.createElement('script'); el.id = schemaId; el.type = 'application/ld+json'; document.head.appendChild(el); }
    el.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'Do I need a reservation at De\' Coal Pot?', acceptedAnswer: { '@type': 'Answer', text: 'Walk-ins are always welcome. For parties of 5 or more, please call ahead at (340) 690-1127.' } },
        { '@type': 'Question', name: 'Does De\' Coal Pot have vegetarian options?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. De\' Coal Pot has a full vegetarian Caribbean menu including the popular Vegetarian Delight ($27.95), veggie patties, curried chickpeas, and lentil dal.' } },
        { '@type': 'Question', name: 'How close is De\' Coal Pot to the Cruz Bay ferry dock?', acceptedAnswer: { '@type': 'Answer', text: 'De\' Coal Pot is steps from the Cruz Bay ferry dock on St. John, USVI.' } },
        { '@type': 'Question', name: 'What are De\' Coal Pot\'s hours?', acceptedAnswer: { '@type': 'Answer', text: 'Open Monday through Saturday 11:00 AM to 9:00 PM, and Sunday 4:00 PM to 9:00 PM.' } },
        { '@type': 'Question', name: 'Can De\' Coal Pot accommodate large groups?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. De\' Coal Pot has hosted groups up to 30 people. Call (340) 690-1127.' } },
      ],
    });

    const bcId = 'json-ld-bc-visit';
    let bcEl = document.getElementById(bcId);
    if (!bcEl) { bcEl = document.createElement('script'); bcEl.id = bcId; bcEl.type = 'application/ld+json'; document.head.appendChild(bcEl); }
    bcEl.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.decoalpot.com/' },
        { '@type': 'ListItem', position: 2, name: 'Visit', item: 'https://www.decoalpot.com/visit' },
      ],
    });

    return () => { document.getElementById(schemaId)?.remove(); document.getElementById(bcId)?.remove(); };
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

const HOURS = [
  { day: 'Monday', hours: '11:00 AM – 9:00 PM' },
  { day: 'Tuesday', hours: '11:00 AM – 9:00 PM' },
  { day: 'Wednesday', hours: '11:00 AM – 9:00 PM' },
  { day: 'Thursday', hours: '11:00 AM – 9:00 PM' },
  { day: 'Friday', hours: '11:00 AM – 9:00 PM' },
  { day: 'Saturday', hours: '11:00 AM – 9:00 PM' },
  { day: 'Sunday', hours: '4:00 PM – 9:00 PM' },
];

const TODAY = new Date().toLocaleDateString('en-US', { weekday: 'long' });

const FAQS = [
  { q: 'Do I need a reservation?', a: 'Walk-ins are always welcome. For parties of 5 or more, please call ahead at (340) 690-1127.' },
  { q: 'Does De\' Coal Pot have vegetarian food?', a: 'Yes — we have a dedicated Caribbean vegetarian menu including our popular Vegetarian Delight ($27.95), veggie patties, curried chickpeas, and lentil dal. No one leaves hungry.' },
  { q: 'How close are you to the Cruz Bay ferry?', a: 'We\'re steps from the Cruz Bay ferry dock on St. John, USVI. If you\'re coming from St. Thomas, you can walk directly to us after arriving. We\'re next to the Upstairs Bar, across from the Longboard.' },
  { q: 'What are your hours?', a: 'Monday through Saturday, 11:00 AM to 9:00 PM. Sunday, 4:00 PM to 9:00 PM.' },
  { q: 'Can you accommodate large groups?', a: 'Yes. We\'ve hosted celebrations and group dinners up to 30 people. Call (340) 205-0001 or (340) 205-0001 to make arrangements.' },
  { q: 'Does the menu change?', a: 'Our signature dishes are available most days, but some items rotate with the market. Call ahead or check our Facebook @DeCoalPot for daily specials.' },
];

export default function Visit() {
  usePageSEO();
  const infoRef = useRef(null); const infoV = useInView(infoRef);
  const faqRef = useRef(null); const faqV = useInView(faqRef);
  const [open, setOpen] = useState(null);

  return (
    <div className="page visit-page">

      {/* ─── HERO ─── */}
      <section className="page-hero" aria-labelledby="visit-h1">
        <div className="container">
          <span className="label">Find Us</span>
          <h1 id="visit-h1">
            Cruz Bay, St. John, US Virgin Islands.
          </h1>
          <p>
            Steps from the ferry dock · Mon–Sat 11am–9pm · Sun 4pm–9pm ·{' '}
            <a href="tel:+13406901127">(340) 690-1127</a>
          </p>
        </div>
      </section>

      {/* ─── INFO BLOCKS ─── */}
      <section
        className="section"
        ref={infoRef}
        aria-labelledby="info-heading"
        itemScope
        itemType="https://schema.org/Restaurant"
      >
        <meta itemProp="name" content="De' Coal Pot Restaurant" />
        <meta itemProp="telephone" content="+13406901127" />
        <meta itemProp="servesCuisine" content="West Indian, Caribbean, Trinidadian" />
        <meta itemProp="priceRange" content="$$" />

        <div className={`container info-grid reveal ${infoV ? 'visible' : ''}`}>

          {/* Location */}
          <div className="info-block" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <h2>Location</h2>
            <address>
              <p>
                <span itemProp="streetAddress">1E 96 Cruz Bay</span><br />
                <span itemProp="addressLocality">Cruz Bay</span>,{' '}
                <span itemProp="addressRegion">St. John</span>,{' '}
                <span itemProp="addressCountry">USVI</span>{' '}
                <span itemProp="postalCode">00830</span>
              </p>
              <p className="info-note">
                Next to Upstairs Bar · Across from the Longboard<br />
                Steps from the Cruz Bay ferry dock
              </p>
            </address>
            <a
              href="https://maps.google.com/?cid=15153271169309715715"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-solid"
              style={{ marginTop: '1.5rem', display: 'inline-block' }}
              aria-label="Get directions to De' Coal Pot on Google Maps"
            >
              Get Directions
            </a>
          </div>

          {/* Hours */}
          <div className="info-block">
            <h2>Hours</h2>
            <div className="hours-list" itemProp="openingHoursSpecification" itemScope itemType="https://schema.org/OpeningHoursSpecification">
              {HOURS.map(({ day, hours }) => (
                <div key={day} className={`hour-row ${day === TODAY ? 'today' : ''}`}>
                  <span className="hour-day">
                    <span itemProp="dayOfWeek">{day}</span>
                    {day === TODAY && <span className="today-pill">Today</span>}
                  </span>
                  <span className="hour-time">{hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="info-block">
            <h2>Contact</h2>
            <div className="contact-rows">
              <div className="contact-row">
                <span>Reservations</span>
                <a href="tel:+13406901127" itemProp="telephone">(340) 690-1127</a>
              </div>
              <div className="contact-row">
                <span>General</span>
                <a href="tel:+13402050001">(340) 205-0001</a>
              </div>
              <div className="contact-row">
                <span>Website</span>
                <a href="https://www.decoalpot.com" itemProp="url">decoalpot.com</a>
              </div>
              <div className="contact-row">
                <span>Facebook</span>
                <a href="https://www.facebook.com/DeCoalPot" target="_blank" rel="noopener noreferrer">@DeCoalPot</a>
              </div>
            </div>
            <p className="info-note" style={{ marginTop: '1.5rem' }}>
              Parties of 5 or more — please call ahead.<br />
              Walk-ins welcome every day.
            </p>
          </div>

        </div>
      </section>

      {/* ─── MAP ─── */}
      <div className="map-wrap" aria-label="Google Maps location of De' Coal Pot, Cruz Bay St. John USVI">
        <iframe
          title="De' Coal Pot Restaurant — 1E 96 Cruz Bay, St. John, USVI"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.5!2d-64.7943461!3d18.3308548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c041213c74fcf91%3A0xd24bce3dccdf0b11!2sDe&#39;%20Coal%20Pot!5e0!3m2!1sen!2sus!4v1699999999999"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Map showing De' Coal Pot location in Cruz Bay, St. John USVI"
        />
      </div>

      {/* ─── FAQ ─── */}
      <section className="section faq-section" ref={faqRef} aria-labelledby="faq-heading">
        <div className={`container reveal ${faqV ? 'visible' : ''}`}>
          <span className="label">Good to Know</span>
          <h2 id="faq-heading">
            Frequently asked questions.
          </h2>
          <div className="faq-list" role="list">
            {FAQS.map((f, i) => (
              <div
                key={i}
                className={`faq-item ${open === i ? 'open' : ''}`}
                role="listitem"
                itemScope
                itemType="https://schema.org/Question"
              >
                <button
                  className="faq-q"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span itemProp="name">{f.q}</span>
                  <span className="faq-icon" aria-hidden="true">{open === i ? '−' : '+'}</span>
                </button>
                {open === i && (
                  <div
                    id={`faq-answer-${i}`}
                    className="faq-a"
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text">{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
