import { useEffect, useState } from 'react';

const PageDots = () => {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'services', 'process', 'why-italy', 'contact'];
            const scrollPos = window.scrollY + window.innerHeight / 2;

            sections.forEach(sectionId => {
                const section = document.getElementById(sectionId);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionBottom = sectionTop + section.offsetHeight;

                    if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                        setActiveSection(sectionId);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const target = document.getElementById(sectionId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="page-dots">
            {['home', 'services', 'process', 'why-italy', 'contact'].map(section => (
                <div
                    key={section}
                    className={`page-dot ${activeSection === section ? 'active' : ''}`}
                    onClick={() => scrollToSection(section)}
                />
            ))}
        </div>
    );
};

export default PageDots;
