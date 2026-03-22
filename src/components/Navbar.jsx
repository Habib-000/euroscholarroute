import { useState } from 'react';

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <nav className="nav">
            <div className="logo">ESR</div>
            <div className={`nav-center ${menuActive ? 'active' : ''}`}>
                <a href="#services" className="nav-link">Services</a>
                <div className="nav-divider"></div>
                <a href="#why-italy" className="nav-link">Why Italy</a>
                <div className="nav-divider"></div>
                <a href="#contact" className="nav-link">Contact</a>
            </div>
            <div className="nav-right">
                <div className="user-profile">
                    <div className="user-avatar">ES</div>
                    <div className="user-info">
                        <div className="user-name">Euro Scholar Route</div>
                        <div className="user-id">Consult</div>
                    </div>
                </div>
                <div 
                    className={`menu-btn ${menuActive ? 'active' : ''}`}
                    id="menuBtn"
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
