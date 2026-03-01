import React, { useState, useEffect } from 'react';
import './Menu.css';

function usePageSEO() {
  useEffect(() => {
    document.title = "Menu — De' Coal Pot | Caribbean Restaurant Cruz Bay St. John USVI";
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      "Full menu for De' Coal Pot, Cruz Bay's authentic West Indian restaurant in St. John USVI. Oxtail stew ($34.95), curried goat ($29.95), fresh conch ($35), grilled seafood, vegetarian dishes, cocktails & more."
    );
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', 'https://www.decoalpot.com/menu');
    const schemaId = 'json-ld-menu';
    let el = document.getElementById(schemaId);
    if (!el) { el = document.createElement('script'); el.id = schemaId; el.type = 'application/ld+json'; document.head.appendChild(el); }
    el.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'Menu',
      '@id': 'https://www.decoalpot.com/menu#menu',
      name: "De' Coal Pot Menu",
      url: 'https://www.decoalpot.com/menu',
      inLanguage: 'en',
    });
    const bcId = 'json-ld-bc-menu';
    let bcEl = document.getElementById(bcId);
    if (!bcEl) { bcEl = document.createElement('script'); bcEl.id = bcId; bcEl.type = 'application/ld+json'; document.head.appendChild(bcEl); }
    bcEl.textContent = JSON.stringify({
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.decoalpot.com/' },
        { '@type': 'ListItem', position: 2, name: 'Menu', item: 'https://www.decoalpot.com/menu' },
      ],
    });
    return () => { document.getElementById(schemaId)?.remove(); document.getElementById(bcId)?.remove(); };
  }, []);
}

const MENU = {
  'Appetizers': [
    { name: 'Soup of the Day', price: '$15.00', desc: 'Ask your server for today\'s selection.' },
    { name: 'Wing Dings', price: '$14.95', desc: 'Island-seasoned chicken wings.' },
    { name: 'Carib Side Salad', price: '$12.95', desc: 'Fresh garden salad, Caribbean style.' },
    { name: 'Classic Burger', price: '$17.95', desc: 'A classic done right.' },
    { name: 'Mahi Sandwich', price: '$24.95', desc: 'Fresh mahi on a toasted roll.' },
  ],
  'Main Food': [
    { name: 'Jagan Oxtail Stew', price: '$34.95', desc: 'Our signature West Indian oxtail stew — braised low and slow for hours. Fall-off-the-bone tender, rich, and deeply flavored.', badge: 'Fan Favorite' },
    { name: 'Trini Curried Goat Sauté', price: '$29.95', desc: 'Trinidadian-style curried goat — authentic West Indian preparation, slow-cooked in aromatic curry.', badge: 'Heritage Dish' },
    { name: 'Chicken Curry', price: '$23.95', desc: 'Tender chicken in an authentic West Indian curry.' },
    { name: 'Chicken Creole', price: '$23.95', desc: 'Tender chicken in a vibrant Creole sauce' },
    { name: 'Hard Nose', price: '$24.95', desc: 'A local St. John favorite — ask your server for today\'s preparation.' },
    { name: 'Vegetarian Delight', price: '$27.95', desc: 'Chef\'s rotating Caribbean vegetarian selection — seasonal vegetables, legumes, and island grains.', badge: 'Must Try' },
    { name: 'Herb Crusted Pork Chops', price: '$24.95', desc: 'Thick-cut pork chops with a fragrant herb crust.' },
    { name: 'Baby Back Ribs', price: '$26.95', desc: 'Slow-cooked fall-off-the-bone ribs with island BBQ sauce.' },
    { name: 'Grilled Salmon', price: '$29.95', desc: 'Fresh salmon grilled to order with West Indian seasonings.' },
    { name: 'Snapper Creole or Steamed', price: 'Market Price', desc: 'Fresh local Caribbean snapper — Creole-style or lightly steamed.' },
    { name: 'Ribeye Steak', price: 'Market Price', desc: 'Prime cut, cooked to order. Ask your server for today\'s price.' },
    { name: 'Conch', price: '$35.00', desc: 'Fresh Caribbean queen conch, prepared to order. A Virgin Islands staple.' },
  ],
  'Sides': [
    { name: 'Seasoned or white Rice' }, { name: 'Macaroni & Cheese' }, { name: 'French Fries' },
    { name: 'Linguine' }, { name: 'Steamed Vegetables' }, { name: 'Sweet Plantains' },
    { name: 'Salad' }, { name: 'Coleslaw' }, { name: 'Potato Salad' }, { name: 'Fungi' }, { name: 'Sweet Potato Stuffing' },
  ],
  'Cocktails': [
    { name: 'Piña Colada or Passion Fruit Colada', price: '$12', desc: 'Tropical and refreshing — a Caribbean classic.' },
    { name: 'Margarita', price: '$13', desc: 'Classic or on the rocks.' },
    { name: 'Rum Punch', price: '$12', desc: 'Authentic island-style rum punch.' },
    { name: 'Pain Killer', price: '$12', desc: 'The classic Virgin Islands cocktail.' },
    { name: 'Dark & Stormy', price: '$13', desc: 'Dark rum and ginger beer.' },
    { name: 'Bushwacker', price: '$13', desc: 'A St. John staple.' },
    { name: 'Mama Juana', price: '$6', desc: 'A Caribbean herbal spirit.' },
  ],
  'Beer & Wine': [
    { name: 'Heineken', price: '$6', desc: 'Beer' },
    { name: 'Modelo', price: '$6', desc: 'Beer' }, { name: 'Presidente', price: '$6', desc: 'Beer' },
    { name: 'Red Stripe', price: '$6', desc: 'Beer' }, { name: 'Elephant', price: '$6', desc: 'Beer' },
    { name: 'Corona', price: '$6', desc: 'Beer' }, { name: 'Carib', price: '$6', desc: 'Beer' },
    { name: 'Coors Light', price: '$6', desc: 'Beer' }, { name: 'Michelob Ultra', price: '$6', desc: 'Beer' },
    { name: 'Sauvignon Blanc', price: '$12', desc: 'White Wine' }, { name: 'Pinot Grigio', price: '$12', desc: 'White Wine' },
    { name: 'Chardonnay', price: '$12', desc: 'White Wine' }, { name: 'Moscato', price: '$12', desc: 'White Wine' },
    { name: 'Pinot Noir', price: '$12', desc: 'Red Wine' }, { name: 'Merlot', price: '$12', desc: 'Red Wine' },
    { name: 'Cabernet Sauvignon', price: '$12', desc: 'Red Wine' },
  ],
  'Drinks': [
    { name: 'Bottled Water', price: '$4', desc: 'Still' },
    { name: 'Sparkling or Still Water', price: '$7', desc: 'Premium sparkling or still water' },
    { name: 'Fresh Juices', price: '$5', desc: 'Passionfruit, Orange, Pineapple, Cranberry, Fruit Punch' },
    { name: 'Sodas', desc: 'Coke, Diet Coke, Sprite, Ginger Ale, Club Soda' },
  ],
};

const SIDES_NOTE = 'All mains served with your choice of sides: Seasoned Rice, Mac & Cheese, French Fries, Linguine, Steamed Vegetables, Sweet Plantains, Salad, Coleslaw, Fungi, or Sweet Potato Stuffing.';

export default function Menu() {
  usePageSEO();
  const [active, setActive] = useState('Appetizers');
  const cats = Object.keys(MENU);
  const isSides = active === 'Sides';

  return (
    <div className="page menu-page">

      <section className="page-hero" aria-labelledby="menu-hero-heading">
        <div className="container">
          <span className="label">The Menu</span>
          <h1 id="menu-hero-heading">
            Authentic West Indian &amp; Caribbean cuisine.
          </h1>
          <p>Made with heritage. Cooked with heart. Every dish tells a story.</p>
        </div>
      </section>

      <div className="menu-notice" role="note">
        <div className="container">
          <p>Menu and prices subject to change · Ask your server about daily specials · Market price items vary</p>
        </div>
      </div>

      <section className="section" aria-label="Menu categories">
        <div className="container">

          <nav className="menu-tabs" aria-label="Menu sections">
            {cats.map(c => (
              <button
                key={c}
                className={`menu-tab ${active === c ? 'active' : ''}`}
                onClick={() => setActive(c)}
                aria-pressed={active === c}
              >
                {c}
              </button>
            ))}
          </nav>

          {active === 'Main Food' && (
            <div className="sides-note" role="note">
              <p>{SIDES_NOTE}</p>
            </div>
          )}

          {isSides ? (
            <div className="sides-grid" role="list" aria-label="Available side dishes">
              {MENU['Sides'].map(s => (
                <div key={s.name} className="side-chip" role="listitem">{s.name}</div>
              ))}
            </div>
          ) : (
            <div className="menu-items" key={active} role="list">
              {MENU[active].map((item, i) => (
                <article
                  key={item.name}
                  className="menu-item"
                  role="listitem"
                  style={{ animationDelay: `${i * 0.04}s` }}
                  itemScope
                  itemType="https://schema.org/MenuItem"
                >
                  <div className="menu-item-body">
                    <div className="menu-item-head">
                      <h3 itemProp="name">{item.name}</h3>
                      {item.badge && <span className="item-badge">{item.badge}</span>}
                    </div>
                    {item.desc && <p itemProp="description">{item.desc}</p>}
                  </div>
                  {item.price && (
                    <span className="item-price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                      <span itemProp="price">{item.price}</span>
                      <meta itemProp="priceCurrency" content="USD" />
                    </span>
                  )}
                </article>
              ))}
            </div>
          )}

          <footer className="menu-footer">
            <div className="advisory" role="note">
              <strong>Consumer Advisory</strong>
              <p>
                Consuming raw or undercooked meats, poultry, seafood, shellfish, or eggs may increase
                risk of foodborne illness especially if you have certain medical conditions.
              </p>
            </div>
            <a href="tel:+13402050001" className="btn btn-solid">
              Call to Order · (340) 205-0001
            </a>
          </footer>

        </div>
      </section>

    </div>
  );
}
