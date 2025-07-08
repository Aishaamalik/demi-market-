import React, { useState } from 'react';
import './App.css';

const services = [
  {
    icon: '💻',
    title: 'Core Software Services',
    items: [
      'Custom Software Development',
      'Web apps, desktop software, backend systems',
      'ERP, CRM, HRM, POS systems',
    ],
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    items: [
      'iOS & Android apps (native or cross-platform like React Native/Flutter)',
      'App maintenance & optimization',
    ],
  },
  {
    icon: '🌐',
    title: 'Web Development',
    items: [
      'Full-stack development (Frontend + Backend)',
      'Static and dynamic websites',
      'E-commerce platforms',
    ],
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    items: [
      'User research & prototyping',
      'Wireframing & visual design',
      'Interactive and responsive design',
    ],
  },
  {
    icon: '📢',
    title: 'Social Media Management',
    items: [
      'Brand growth on Facebook, Instagram, LinkedIn, Twitter, TikTok',
      'Content creation, scheduling, analytics, and community management',
      'Influencer & ad campaigns (optional)'
    ],
  },
];

const testimonials = [
  {
    avatar: '👩🏻',
    quote: 'Demi Market transformed our business with a custom ERP and a stunning website! Their team is professional, responsive, and truly understands business needs.',
    name: 'Sarah Lim',
    title: 'COO, RetailPro Solutions',
  },
  {
    avatar: '👨🏽',
    quote: 'We launched our mobile app on time and on budget. The UI/UX was top-notch and our users love it. Highly recommended!',
    name: 'James Tan',
    title: 'Founder, FitTrack',
  },
  {
    avatar: '👩🏾',
    quote: 'Their social media management grew our brand presence and engagement by 300% in just a few months. The analytics and reporting are clear and actionable.',
    name: 'Aisha Rahman',
    title: 'Marketing Lead, UrbanEats',
  },
];

function App() {
  // Hamburger menu state
  const [navOpen, setNavOpen] = useState(false);
  // Testimonial carousel state
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  // Contact form state
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  const nextTestimonial = () => setTestimonialIdx((testimonialIdx + 1) % testimonials.length);
  const prevTestimonial = () => setTestimonialIdx((testimonialIdx - 1 + testimonials.length) % testimonials.length);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    setFormError('');
    try {
      const res = await fetch('https://formspree.io/f/mdkzrdev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
        }),
      });
      if (res.ok) {
        setFormStatus('success');
        setForm({ name: '', email: '', company: '', message: '' });
      } else {
        setFormStatus('error');
        setFormError('Submission failed. Please try again.');
      }
    } catch (err) {
      setFormStatus('error');
      setFormError('Network error. Please try again.');
    }
  };

  // Close nav on link click (mobile)
  const handleNavClick = () => setNavOpen(false);

  return (
    <div className="dm-root">
      <nav className="dm-navbar">
        <div className="dm-logo">Demi Market</div>
        <div className="dm-hamburger" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle navigation" tabIndex={0} role="button">
          <span style={{ transform: navOpen ? 'rotate(45deg) translateY(8px)' : '' }}></span>
          <span style={{ opacity: navOpen ? 0 : 1 }}></span>
          <span style={{ transform: navOpen ? 'rotate(-45deg) translateY(-8px)' : '' }}></span>
        </div>
        <ul className={navOpen ? 'open' : ''}>
          <li><a href="#home" onClick={handleNavClick}>Home</a></li>
          <li><a href="#services" onClick={handleNavClick}>Services</a></li>
          <li><a href="#about" onClick={handleNavClick}>About</a></li>
          <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
        </ul>
      </nav>
      <header className="dm-hero" id="home">
        <h1>Demi Market Software Solutions</h1>
        <p>Your partner for digital transformation, custom software, and brand growth.</p>
        <a href="#contact" className="dm-cta-btn">Get in Touch</a>
      </header>
      <section className="dm-section" id="services">
        <h2>Our Services</h2>
        <div className="dm-services-grid">
          {services.map((service) => (
            <div className="dm-service-card" key={service.title}>
              <div className="dm-service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="dm-section dm-about" id="about">
        <h2>About Us</h2>
        <div className="dm-about-detail">
          <div className="dm-about-text">
            <p><strong>Demi Market Software Solutions</strong> is a leading provider of digital transformation services, specializing in custom software, web and mobile app development, UI/UX design, and social media management. With a passion for innovation and a commitment to excellence, we empower businesses to thrive in the digital age.</p>
            <ul>
              <li><strong>Our Mission:</strong> To deliver innovative, reliable, and scalable digital solutions that drive business growth and efficiency.</li>
              <li><strong>Our Vision:</strong> To be the trusted technology partner for businesses seeking to excel in a rapidly evolving digital landscape.</li>
              <li><strong>Our Values:</strong> Integrity, customer-centricity, innovation, and continuous improvement.</li>
              <li><strong>Our Team:</strong> Our experts bring decades of combined experience in software engineering, design, and digital marketing. We believe in close collaboration, transparent communication, and delivering measurable results.</li>
            </ul>
          </div>
          <div className="dm-about-img">
            {/* Placeholder image, replace with your team/company image if desired */}
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" alt="Our Team" />
          </div>
        </div>
      </section>
      <section className="dm-section dm-testimonials">
        <h2>Testimonials</h2>
        <div className="dm-testimonial-carousel">
          <button className="dm-testimonial-arrow" onClick={prevTestimonial} aria-label="Previous testimonial">&#8592;</button>
          <div className="dm-testimonial-slide">
            <div className="dm-testimonial-avatar">{testimonials[testimonialIdx].avatar}</div>
            <em>"{testimonials[testimonialIdx].quote}"</em>
            <div className="dm-testimonial-author">
              <span className="dm-testimonial-name">{testimonials[testimonialIdx].name}</span>
              <span className="dm-testimonial-title">{testimonials[testimonialIdx].title}</span>
            </div>
          </div>
          <button className="dm-testimonial-arrow" onClick={nextTestimonial} aria-label="Next testimonial">&#8594;</button>
        </div>
        <div className="dm-testimonial-dots">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={idx === testimonialIdx ? 'active' : ''}
              onClick={() => setTestimonialIdx(idx)}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </section>
      <section className="dm-section dm-contact" id="contact">
        <h2>Contact Us</h2>
        <form className="dm-contact-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleFormChange}
            required
            disabled={formStatus === 'loading'}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleFormChange}
            required
            disabled={formStatus === 'loading'}
          />
          <input
            type="text"
            name="company"
            placeholder="Company (optional)"
            value={form.company}
            onChange={handleFormChange}
            disabled={formStatus === 'loading'}
          />
          <textarea
            name="message"
            placeholder="How can we help you?"
            value={form.message}
            onChange={handleFormChange}
            required
            disabled={formStatus === 'loading'}
          />
          <button type="submit" disabled={formStatus === 'loading'}>
            {formStatus === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {formStatus === 'success' && (
          <div className="dm-contact-success">Thank you! Your message has been sent.</div>
        )}
        {formStatus === 'error' && (
          <div className="dm-contact-error">{formError}</div>
        )}
      </section>
      <footer className="dm-footer">
        <div>© {new Date().getFullYear()} Demi Market Software Solutions. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
