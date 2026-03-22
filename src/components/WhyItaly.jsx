const WhyItaly = () => {
    return (
        <section id="why-italy" className="full-section">
            <div className="section-header">
                <div className="section-label">Benefits</div>
                <h2 className="section-title">Why Choose Italy?</h2>
                <p className="section-subtitle">Italy offers a unique combination of academic excellence, affordable education, and rich cultural experiences.</p>
            </div>

            <div className="why-italy-grid">
                <div className="italy-card appear-element">
                    <div className="italy-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            <path d="M9 12l2 2 4-4" />
                        </svg>
                    </div>
                    <h3 className="italy-title">No IELTS Required</h3>
                    <p className="italy-desc">Many Italian universities accept students without IELTS, making the application process simpler.</p>
                </div>
                <div className="italy-card appear-element">
                    <div className="italy-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                    </div>
                    <h3 className="italy-title">Fully-Funded Scholarships</h3>
                    <p className="italy-desc">Access regional and national scholarships covering tuition, accommodation, and living expenses.</p>
                </div>
                <div className="italy-card appear-element">
                    <div className="italy-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                    </div>
                    <h3 className="italy-title">Schengen Visa Access</h3>
                    <p className="italy-desc">Study in Italy and travel freely across 26 European countries with your student Schengen visa.</p>
                </div>
                <div className="italy-card appear-element">
                    <div className="italy-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                            <path d="M6 12v5c3 3 9 3 12 0v-5" />
                        </svg>
                    </div>
                    <h3 className="italy-title">World-Class Universities</h3>
                    <p className="italy-desc">Italy hosts some of the oldest and most prestigious universities in the world, recognized globally.</p>
                </div>
            </div>
        </section>
    );
};

export default WhyItaly;
