import "./App.css";

function App() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">#</span>
          CCCo
        </div>
        <nav className="nav-links">
          <a href="#menu">Menu</a>
          <a href="#story">Story</a>
          <a href="#visit">Visit</a>
        </nav>
      </header>

      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Crafted Cravings Company</p>
          <h1>Warm modern flavors in a calm white space</h1>
          <p>
            A minimal cafe experience built around handcrafted drinks, baked
            treats, and soft amber accents inspired by the logo.
          </p>
          <div className="actions">
            <a className="button button-primary" href="#menu">
              View menu
            </a>
            <a className="button button-secondary" href="#visit">
              Plan your visit
            </a>
          </div>
        </div>

        <aside className="hero-card">
          <span className="card-pill">New flavor</span>
          <h2>Brown sugar latte</h2>
          <p>
            Rich espresso with toasted brown sugar, creamy milk, and orange zest
            for a smooth, memorable sip.
          </p>
          <div className="card-meta">
            <span>Espresso</span>
            <span>Seasonal</span>
          </div>
        </aside>
      </section>

      <section id="menu" className="section split">
        <div>
          <p className="eyebrow">Menu highlights</p>
          <h2>Every item is made to feel effortless and refined</h2>
          <p>
            From warm bakery favorites to signature coffee creations, we keep
            the menu concise, elegant, and full of flavor.
          </p>
        </div>
        <div className="card-grid">
          <article className="menu-card">
            <h3>Caramel croissant</h3>
            <p>
              Flaky pastry layered with brown butter, caramel, and sea salt.
            </p>
          </article>
          <article className="menu-card">
            <h3>Orange blossom latte</h3>
            <p>
              Silky espresso with orange blossom, honey, and lightly spiced
              milk.
            </p>
          </article>
          <article className="menu-card">
            <h3>Matcha almond muffin</h3>
            <p>
              Soft, nutty, and bright — a modern twist on a cozy morning treat.
            </p>
          </article>
        </div>
      </section>

      <section id="story" className="section feature">
        <div>
          <p className="eyebrow">Our story</p>
          <h2>Modern coffee culture with handcrafted warmth</h2>
          <p>
            CCCo blends clean design with a rich palette of browns and oranges.
            Every drink and bite is made to feel like a small moment of crafted
            comfort.
          </p>
        </div>
      </section>

      <section id="visit" className="section columns">
        <div className="info-panel">
          <p className="eyebrow">Visit us</p>
          <h2>Always open for everyday cravings</h2>
          <p>
            Drop in for coffee, breakfast, and a relaxed afternoon in a bright,
            modern environment.
          </p>
          <ul>
            <li>
              <strong>Hours:</strong> Mon–Sun 7:00am–7:00pm
            </li>
            <li>
              <strong>Location:</strong> 123 Crafted Lane
            </li>
            <li>
              <strong>Email:</strong> hello@cccocafe.com
            </li>
          </ul>
        </div>
        <div className="quote-panel">
          <p>
            “A quiet, thoughtful cafe with modern white space and amber accents
            — perfect for savoring coffee and conversation.”
          </p>
        </div>
      </section>

      <footer className="footer-bar">
        <p>Crafted Cravings Company — minimal design, bold flavors.</p>
      </footer>
    </main>
  );
}

export default App;
