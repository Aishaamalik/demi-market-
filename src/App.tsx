import React, { useState } from 'react';
import './App.css';

const services = [
  {
    title: 'Core Software Services',
    items: [
      'Custom Software Development',
      'Web apps, desktop software, backend systems',
      'ERP, CRM, HRM, POS systems',
    ],
  },
  {
    title: 'Mobile App Development',
    items: [
      'iOS & Android apps (native or cross-platform like React Native/Flutter)',
      'App maintenance & optimization',
    ],
  },
  {
    title: 'Web Development',
    items: [
      'Full-stack development (Frontend + Backend)',
      'Static and dynamic websites',
      'E-commerce platforms',
    ],
  },
  {
    title: 'UI/UX Design',
    items: [
      'User research & prototyping',
      'Wireframing & visual design',
      'Interactive and responsive design',
    ],
  },
  {
    title: 'Social Media Management',
    items: [
      'Brand growth on Facebook, Instagram, LinkedIn, Twitter, TikTok',
      'Content creation, scheduling, analytics, and community management',
      'Influencer & ad campaigns (optional)'
    ],
  },
];

const socialMediaServices = [
  {
    icon: '🎯',
    title: 'Strategy & Planning',
    desc: 'Custom content calendars aligned with your business goals',
  },
  {
    icon: '🖼️',
    title: 'Content Creation',
    desc: 'Graphics, reels, carousels, and short-form videos tailored for each platform',
  },
  {
    icon: '📊',
    title: 'Analytics & Reporting',
    desc: 'Monthly reports on growth, engagement, and ROI',
  },
  {
    icon: '👥',
    title: 'Community Management',
    desc: 'Comment responses, DM handling, and audience engagement',
  },
  {
    icon: '📅',
    title: 'Scheduled Posting & Automation',
    desc: 'Automated tools for consistent posting and timing optimization',
  },
  {
    icon: '🤝',
    title: 'Influencer & Ad Campaigns (Optional)',
    desc: 'Collaborate with niche influencers and run paid promotions',
  },
];

const testimonials = [
  {
    quote: 'Demi Market transformed our business with a custom ERP and a stunning website! Their team is professional, responsive, and truly understands business needs.',
    name: 'Sarah Lim',
    title: 'COO, RetailPro Solutions',
  },
  {
    quote: 'We launched our mobile app on time and on budget. The UI/UX was top-notch and our users love it. Highly recommended!',
    name: 'James Tan',
    title: 'Founder, FitTrack',
  },
  {
    quote: 'Their social media management grew our brand presence and engagement by 300% in just a few months. The analytics and reporting are clear and actionable.',
    name: 'Aisha Rahman',
    title: 'Marketing Lead, UrbanEats',
  },
];

function App() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const nextTestimonial = () => setTestimonialIdx((testimonialIdx + 1) % testimonials.length);
  const prevTestimonial = () => setTestimonialIdx((testimonialIdx - 1 + testimonials.length) % testimonials.length);

  // Contact form state
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');

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

  return (
    <div className="dm-root">
      <nav className="dm-navbar">
        <div className="dm-logo">Demi Market <span>Software Solutions</span></div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
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
              <h3>{service.title}</h3>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="dm-service-card dm-social-media">
          <h3>Social Media Management</h3>
          <p>We help you build and grow your brand across major platforms like Facebook, Instagram, LinkedIn, Twitter, and TikTok.</p>
          <div className="dm-social-features">
            {socialMediaServices.map((s) => (
              <div className="dm-social-feature" key={s.title}>
                <span className="dm-social-icon">{s.icon}</span>
                <div>
                  <strong>{s.title}</strong>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="dm-section dm-about" id="about">
        <h2>About Us</h2>
        <div className="dm-about-detail">
          <p><strong>Demi Market Software Solutions</strong> is a leading provider of digital transformation services, specializing in custom software, web and mobile app development, UI/UX design, and social media management. With a passion for innovation and a commitment to excellence, we empower businesses to thrive in the digital age.</p>
          <ul>
            <li><strong>Our Mission:</strong> To deliver innovative, reliable, and scalable digital solutions that drive business growth and efficiency.</li>
            <li><strong>Our Vision:</strong> To be the trusted technology partner for businesses seeking to excel in a rapidly evolving digital landscape.</li>
            <li><strong>Our Values:</strong> Integrity, customer-centricity, innovation, and continuous improvement.</li>
            <li><strong>Our Team:</strong> Our experts bring decades of combined experience in software engineering, design, and digital marketing. We believe in close collaboration, transparent communication, and delivering measurable results.</li>
          </ul>
        </div>
      </section>
      <section className="dm-section dm-testimonials">
        <h2>Testimonials</h2>
        <div className="dm-testimonial-carousel">
          <button className="dm-testimonial-arrow" onClick={prevTestimonial} aria-label="Previous testimonial">&#8592;</button>
          <div className="dm-testimonial-slide">
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
