const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your inquiry! We will contact you within 24 hours.');
        e.target.reset();
    };

    return (
        <section id="contact" className="full-section">
            <div className="section-header">
                <div className="section-label">Get In Touch</div>
                <h2 className="section-title">Send Us an Inquiry</h2>
                <p className="section-subtitle">Ready to begin your journey? Drop us a message and our team will respond within 24 hours.</p>
            </div>

            <div className="contact-container">
                <div className="contact-info">
                    <a href="https://wa.me/923302480007" target="_blank" rel="noopener noreferrer" className="contact-item appear-element" style={{ textDecoration: 'none' }}>
                        <div className="contact-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                        </div>
                        <div>
                            <div className="contact-label">Pak WhatsApp</div>
                            <div className="contact-value">+92 330 2480007</div>
                        </div>
                    </a>
                    <div className="contact-item appear-element">
                        <div className="contact-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                        </div>
                        <div>
                            <div className="contact-label">Pakistan Office</div>
                            <div className="contact-value">Gulberg III, Lahore, Pakistan</div>
                        </div>
                    </div>
                    <a href="https://wa.me/971558059027" target="_blank" rel="noopener noreferrer" className="contact-item appear-element" style={{ textDecoration: 'none' }}>
                        <div className="contact-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                        </div>
                        <div>
                            <div className="contact-label">UAE WhatsApp</div>
                            <div className="contact-value">+971 55 8059027</div>
                        </div>
                    </a>
                    <div className="contact-item appear-element">
                        <div className="contact-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                        </div>
                        <div>
                            <div className="contact-label">UAE Office</div>
                            <div className="contact-value">Dubai Silicon Oasis, Dubai, UAE</div>
                        </div>
                    </div>
                    <a href="mailto:info@euroscholarroute.com" className="contact-item appear-element" style={{ textDecoration: 'none' }}>
                        <div className="contact-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <path d="M22 6l-10 7L2 6" />
                            </svg>
                        </div>
                        <div>
                            <div className="contact-label">Email</div>
                            <div className="contact-value">info@euroscholarroute.com</div>
                        </div>
                    </a>
                    <div className="contact-item appear-element">
                        <div className="contact-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 6v6l4 2" />
                            </svg>
                        </div>
                        <div>
                            <div className="contact-label">Business Hours</div>
                            <div className="contact-value">Mon-Sat: 10 AM - 7 PM</div>
                        </div>
                    </div>
                </div>

                <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Full Name</label>
                        <input type="text" className="form-input" placeholder="Enter your full name" required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <input type="email" className="form-input" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Subject</label>
                        <input type="text" className="form-input" placeholder="How can we help you?" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Message</label>
                        <textarea className="form-input form-textarea" placeholder="Tell us about your goals..."></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Inquiry</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
