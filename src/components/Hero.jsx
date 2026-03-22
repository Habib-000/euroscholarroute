import { useEffect, useRef } from 'react';

const Hero = () => {
    const statsRef = useRef(null);
    const visualRef = useRef(null);

    useEffect(() => {
        // Counter Animation
        const animateCounter = (element, target) => {
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = target + '+';
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current) + '+';
                }
            }, 30);
        };

        const observerOptions = { threshold: 0.3 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counters = entry.target.querySelectorAll('.stat-number');
                    counters.forEach(counter => {
                        const target = parseInt(counter.dataset.target);
                        if (target && !counter.classList.contains('animated')) {
                            counter.classList.add('animated');
                            animateCounter(counter, target);
                        }
                    });
                }
            });
        }, observerOptions);

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        // Parallax effect
        const handleScroll = () => {
            const scrolled = window.scrollY;
            if (visualRef.current && scrolled < 600) {
                visualRef.current.style.transform = `translateY(${scrolled * 0.15}px)`;
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            if (statsRef.current) observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="home" className="full-section">
            <div className="hero">
                <div className="hero-left">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        Now accepting Fall 2026 applications
                    </div>
                    <h1 className="hero-headline">
                        <span className="circle"></span> YOUR
                        <br />GATEWAY <span className="circle"></span> TO
                        <br />MASTER&apos;S 
                        <br /><span className="highlight">SCHOLARSHIPS</span>
                        <br /><span className="circle"></span> IN ITALY !
                    </h1>
                    <p className="hero-subtext">
                        Expert guidance from Pakistan to Italy. Zero tuition fee opportunities, complete admission support, and scholarship assistance — all under one roof.
                    </p>
                    <div className="hero-buttons">
                        <a href="#process" className="btn btn-neu">Explore Process</a>
                        <a href="#services" className="btn btn-glass">
                            View Services
                            <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="hero-right">
                    <div className="hero-sidebar">
                        <a href="#contact" className="sidebar-item" style={{ textDecoration: 'none' }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="7" r="4" />
                                <path d="M5.5 21a8.38 8.38 0 0 1 13 0" />
                            </svg>
                            Get Started
                        </a>
                        <a href="#contact" className="sidebar-item" style={{ textDecoration: 'none' }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                            </svg>
                            Send Inquiry
                        </a>
                        <a href="#contact" className="sidebar-item" style={{ textDecoration: 'none' }}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                            Apply Now
                        </a>
                        <div className="social-icons">
                            <a href="#" className="social-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                    <rect x="2" y="2" width="20" height="20" rx="5" />
                                    <circle cx="12" cy="12" r="4" fill="#e0e5ec" />
                                </svg>
                            </a>
                            <a href="#" className="social-icon">f</a>
                            <a href="#" className="social-icon">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Box */}
            <div className="stats-box" ref={statsRef}>
                <div className="stat-item">
                    <div className="stat-number" data-target="500">0+</div>
                    <div className="stat-label">Students Placed</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number" data-target="350">0+</div>
                    <div className="stat-label">Scholarships Won</div>
                </div>
                <div className="stat-item">
                    <div className="stat-number" data-target="40">0+</div>
                    <div className="stat-label">Partner Universities</div>
                </div>
            </div>

            {/* Visual Container */}
            <div className="visual-container">
                <div className="hero-visual" ref={visualRef}>
                    <img src="https://images.adsttc.com/media/images/51f2/e3f2/e8e4/4eee/1e00/0002/large_jpg/1212_FP479849_indesign.jpg?1374872546" alt="Italian University Campus" />
                    <div className="play-button">
                        <div className="play-icon"></div>
                    </div>
                </div>
            </div>

            {/* Glass Cards */}
            <div className="glass-cards">
                <div className="glass-card">
                    <div className="card-thumbnail">
                        <img src="https://images.ctfassets.net/2htm8llflwdx/5flsH9fCjAHskciaJBPtu6/1517066404fb6021ab121d93d5a04ca5/Shorelight_Study_Abroad__for_Academic_Success.jpg" alt="Students" />
                        <span className="card-badge">500+</span>
                    </div>
                    <div className="card-content">
                        <div className="card-title">Free Eligibility Check</div>
                        <div className="card-desc">Get your academic profile assessed within 24 hours and discover your options.</div>
                    </div>
                    <div className="card-arrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                    </div>
                </div>
                <div className="glass-card">
                    <div className="card-thumbnail">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Italy_-_Pisa.jpg" alt="Italy" />
                        <span className="card-badge">EU</span>
                    </div>
                    <div className="card-content">
                        <div className="card-title">Study in Italy</div>
                        <div className="card-desc">Access fully-funded scholarships and zero tuition opportunities at top universities.</div>
                    </div>
                    <div className="card-arrow">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bottom-section">
                <div className="bottom-left">
                    <h2>From Application<br />To <span>Arrival</span> In A<br />Single Journey</h2>
                    <p>Every student is unique. We assess your profile and craft a tailored roadmap to Italy.</p>
                    <a href="#process" className="arrow-link">
                        See Process
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                    </a>
                </div>

                <div className="video-slider">
                    <div className="slider-title">Explore Your Journey Steps</div>
                    <div className="slider-track">
                        <div className="video-card">
                            <svg className="video-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                            <div className="video-card-title">University Selection</div>
                        </div>
                        <div className="video-card">
                            <svg className="video-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                            <div className="video-card-title">Scholarship Application</div>
                        </div>
                        <div className="video-card">
                            <svg className="video-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                            <div className="video-card-title">Visa Preparation</div>
                        </div>
                        <div className="video-card">
                            <svg className="video-card-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17L17 7M17 7H7M17 7v10" />
                            </svg>
                            <div className="video-card-title">Travel &amp; Settle</div>
                        </div>
                    </div>
                </div>

                <div className="page-indicator">
                    <div className="scroll-indicator">
                        <div className="scroll-line"></div>
                        <span>Scroll</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
