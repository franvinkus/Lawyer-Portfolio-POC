'use client'

import { useState } from 'react'
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'

const logoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-FyWDlfYK4xpyXPvLGGRh0sGqPM5MB4.png'

const services = [
  { number: '01', title: 'Corporate & Commercial Transactions', text: 'Expert legal guidance for business contracts, mergers, and corporate governance.' },
  { number: '02', title: 'Infrastructur and Energy Projects', text: 'Comprehensive legal support for large-scale infrastructure and energy developments.' },
  { number: '03', title: 'Banking and Financing', text: 'Tailored solutions for corporate finance, lending, and complex investment transactions.' },
  { number: '04', title: 'Employment', text: 'Strategic guidance for modern employers and their people.' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="DKMS Lawyers home" onClick={closeMenu}>
          <img src={logoUrl} alt="DKMS Lawyers" />
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About us</a>
          <div className="nav-dropdown">
            <button onClick={() => setServicesOpen(!servicesOpen)} aria-expanded={servicesOpen}>
              Services <ChevronDown size={15} className={servicesOpen ? 'rotate' : ''} />
            </button>
            {servicesOpen && (
              <div className="dropdown-panel">
                {services.map((service) => <a key={service.number} href="#services" onClick={closeMenu}>{service.title}</a>)}
              </div>
            )}
          </div>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="#contact" className="nav-cta" onClick={closeMenu}>Start a conversation <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-kicker"><span /> Independent legal counsel · Since 1998</div>
        <div className="hero-grid">
          <h1>Clarity in<br /><em>complexity.</em></h1>
          <div className="hero-aside">
            <p>DKMS Lawyers is a forward-thinking law firm helping people and businesses move with confidence.</p>
            <a href="#about" className="text-link">Get to know us <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="hero-footer"><span>Thoughtful advice.</span><span>Decisive action.</span><span className="hero-line" /></div>
      </section>

      <section id="about" className="about section-shell">
        <div className="section-label">01 / About us</div>
        <div className="about-content">
          <h2>Law with a<br /><em>human edge.</em></h2>
          <div className="about-copy"><p>We believe great legal work starts with listening. Our team combines deep expertise with a practical, personal approach — giving every client the perspective and confidence to take their next step.</p><p>From the first conversation to the final outcome, we make the complicated feel clear.</p><a href="#contact" className="text-link">Meet the firm <ArrowUpRight size={16} /></a></div>
        </div>
      </section>

      <section id="services" className="services section-shell">
        <div className="section-label">02 / What we do</div>
        <div className="services-heading">
          <h2>Built around<br /><em>your priorities.</em></h2><p>Focused expertise, delivered with perspective.</p></div>
        <div className="service-list">
          {services.map((service) => <article className="service-row" key={service.number}><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.text}</p><ArrowUpRight className="service-arrow" size={21} /></article>)}
        </div>
      </section>

      <section id="contact" className="contact section-shell">
        <div className="section-label">03 / Contact</div>
        <div className="contact-content"><h2>Let&apos;s make<br /><em>things clear.</em></h2><div><p>Tell us what you&apos;re working through. We&apos;ll get back to you shortly.</p><a href="mailto: info@dkmslawyers.com " className="contact-email"> info@dkmslawyers.com  <ArrowUpRight size={18} /></a></div></div>
        <div className="contact-details"><div><span>Office</span><p>Jl. Mega Kuningan Barat No. 3,<br/> Kec. Setiabudi, Jakarta Selatan 12950</p></div><div><span>Phone</span><p>+62-21-5229907</p></div><div><span>Hours</span><p>Mon–Fri, 8:30–5:30</p></div></div>
      </section>

      <footer className="site-footer"><img src={logoUrl} alt="DKMS Lawyers" /><span>© {new Date().getFullYear()} DKMS Lawyers</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}
