const Services = () => {
    return (
        <section id="services" className="full-section">
            <div className="section-header">
                <div className="section-label">What We Offer</div>
                <h2 className="section-title">Complete Admission Support</h2>
                <p className="section-subtitle">From applications to arrival, we cover every aspect of your journey to Italy.</p>
            </div>

            <div className="services-grid">
                <div className="service-card appear-element">
                    <div className="service-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                            <path d="M6 12v5c3 3 9 3 12 0v-5" />
                        </svg>
                    </div>
                    <h3 className="service-title">University Admissions</h3>
                    <p className="service-desc">We secure spots in top public Italian universities by handling your entire application from selection to confirmation.</p>
                    <div className="service-meta">40+ Partner Universities</div>
                </div>

                <div className="service-card appear-element">
                    <div className="service-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                    </div>
                    <h3 className="service-title">Scholarship Guidance</h3>
                    <p className="service-desc">End-to-end support for regional and national scholarships covering tuition, housing, and living allowances.</p>
                    <div className="service-meta">Up to 12,000/year</div>
                </div>

                <div className="service-card appear-element">
                    <div className="service-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                        </svg>
                    </div>
                    <h3 className="service-title">Document Legalization</h3>
                    <p className="service-desc">Complete guidance on MOFA, HEC, and IBCC attestations ensuring your documents meet Italian requirements.</p>
                    <div className="service-meta">MOFA | HEC | IBCC</div>
                </div>

                <div className="service-card appear-element">
                    <div className="service-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="5" width="20" height="14" rx="2" />
                            <path d="M2 10h20" />
                        </svg>
                    </div>
                    <h3 className="service-title">Visa Assistance</h3>
                    <p className="service-desc">Detailed document preparation guidelines and mock interview sessions to help you present confidently.</p>
                    <div className="service-meta">Expert Guidelines</div>
                </div>
            </div>
        </section>
    );
};

export default Services;
