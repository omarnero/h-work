import React, { useState } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();

    // function hndLogin() {
    //     navigate('/login');
    // }
    function redirect() {
        window.location.href = "https://consumertestconnect.com/cash-750";
    }
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('Registration submitted:', { name, email });
        redirect();
    };

    const navItems = [
        { label: 'Home', href: '#home', active: true },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Offers', href: '#offers' },
        { label: 'Leaderboard', href: '#leaderboard' },
        { label: 'Winners', href: '#winners' },
        { label: 'FAQ', href: '#faq' },
    ];

    const benefits = [
        {
            title: '100% Safe',
            subtitle: '& Secure',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 11 2 2 4-4" />
                </svg>
            ),
        },
        {
            title: 'Quick & Easy',
            subtitle: 'Entries',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 11 3 3L22 4" />
                    <path d="M21 12a9 9 0 1 1-9-9" />
                </svg>
            ),
        },
        {
            title: 'Thousands',
            subtitle: 'of Winners',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
        },
    ];

    const steps = [
        {
            number: '1',
            title: 'Create Account',
            desc: 'Sign up for free and create your account in seconds.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
            ),
        },
        {
            number: '2',
            title: 'Complete Tasks',
            desc: 'Complete easy offers, surveys, download apps and more to earn entries.',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                    <path d="m9 14 2 2 4-4" />
                </svg>
            ),
        },
        {
            number: '3',
            title: 'Earn Entries',
            desc: 'The more tasks you complete, the more entries you get!',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 9a3 3 0 0 1 0-6h20a3 3 0 0 1 0 6v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9z" />
                    <path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0z" />
                    <path d="M12 9v6" />
                </svg>
            ),
        },
        {
            number: '4',
            title: 'Win $750',
            desc: 'One lucky winner will receive $750 Cash App cash!',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="8" width="18" height="14" rx="2" ry="2" />
                    <path d="M12 5V3a2 2 0 0 1 2-2h2" />
                    <path d="M12 5V3a2 2 0 0 0-2-2H8" />
                    <path d="M12 5v17" />
                    <path d="M3 12h18" />
                </svg>
            ),
        },
    ];

    const stats = [
        {
            value: '250,000+',
            label: 'Happy Users',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            ),
        },
        {
            value: '1,500,000+',
            label: 'Tasks Completed',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
            ),
        },
        {
            value: '$250,000+',
            label: 'Paid to Winners',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
                    <path d="M12 2a4 4 0 0 1 4 4v6H8V6a4 4 0 0 1 4-4z" />
                </svg>
            ),
        },
        {
            value: '4.8 / 5',
            label: 'User Rating',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            ),
        },
    ];

    return (
        <div className="app-container">
            {/* SVG Filter to remove black backgrounds from images */}
            <svg width="0" height="0" style={{ position: 'absolute', pointerEvents: 'none' }}>
                <defs>
                    <filter id="remove-black-bg">
                        <feColorMatrix type="matrix" values="
                      1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      3 3 3 0 -1
                    " />
                    </filter>
                </defs>
            </svg>

            {/* Header / Navbar */}
            <header className="navbar">
                <a href="#home" className="nav-brand">
                    <div className="nav-logo-icon">$</div>
                    <span className="nav-logo-text">Cash<span>Give</span></span>
                </a>

                <ul className="nav-menu">
                    {navItems.map((item, idx) => (
                        <li key={idx}>
                            <a href={item.href} className={`nav-link ${item.active ? 'active' : ''}`}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="nav-actions">
                    <button className="btn btn-outline">Log In</button>
                    <button className="btn btn-primary">Sign Up</button>
                    <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </svg>
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div style={{
                    background: '#0d121a',
                    borderBottom: '1px solid #1c2635',
                    padding: '1.5rem 5%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.2rem',
                    position: 'absolute',
                    top: '70px',
                    left: 0,
                    right: 0,
                    zIndex: 100
                }}>
                    {navItems.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.href}
                            className="nav-link"
                            onClick={() => setMobileMenuOpen(false)}
                            style={{ fontSize: '1.1rem', fontWeight: 500 }}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}

            {/* Main Content */}
            <main>
                {/* Hero Section */}
                <section id="home" className="hero-section">
                    {/* Hero Left Content */}
                    <div className="hero-content">
                        <h1 className="hero-title-win">WIN</h1>
                        <div className="hero-title-amount">$750</div>
                        <h2 className="hero-title-cashapp">CASH APP <span>CASH!</span></h2>

                        <p className="hero-description">
                            Complete simple tasks, earn entries and be the next winner!
                        </p>

                        <form className="hero-form" onSubmit={handleFormSubmit}>
                            <div className="hero-form-fields">
                                <div className="form-input-wrapper">
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="form-input"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                </div>
                                <div className="form-input-wrapper">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="form-input"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <svg className="input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                            </div>
                            <div className="hero-form-actions">
                                <button type="submit" className="btn btn-primary btn-large">
                                    Sign Up & Enter Now
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>

                                <a className="btn btn-outline btn-large" href='#how-it-works'>
                                    How It Works
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" style={{ width: '14px', height: '14px', marginLeft: '4px' }}>
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </a>
                            </div>
                        </form>

                        <div className="hero-benefits">
                            {benefits.map((b, idx) => (
                                <div key={idx} className="benefit-item">
                                    <div className="benefit-icon-wrapper">
                                        {b.icon}
                                    </div>
                                    <div className="benefit-text">
                                        <strong>{b.title}</strong>
                                        <span>{b.subtitle}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hero Right Showcase */}
                    <div className="hero-showcase">
                        {/* Pedestal */}
                        <div className="pedestal">
                            <div className="pedestal-ring-1"></div>
                            <div className="pedestal-ring-2"></div>
                        </div>

                        {/* Glowing 3D Glass Card */}
                        <div className="glass-card-wrapper">
                            <div className="glass-card">
                                <div className="card-logo">$</div>
                                <div>
                                    <div className="card-subtext">CASH APP</div>
                                    <div className="card-title">GIVEAWAY</div>
                                </div>
                                <div className="card-prize">$750</div>
                                <div className="card-badge">CASH</div>
                            </div>
                        </div>

                        {/* Floating Bills */}
                        <img src="/flying_dollar.png" alt="Flying Dollar Bill" className="flying-dollar-img bill-1" />
                        <img src="/flying_dollar.png" alt="Flying Dollar Bill" className="flying-dollar-img bill-2" />
                        <img src="/flying_dollar.png" alt="Flying Dollar Bill" className="flying-dollar-img bill-3" />

                        {/* Lucky Winner Circular Sticker */}
                        <div className="winner-badge">
                            <div className="winner-badge-value">$750</div>
                            <div className="winner-badge-label">To 1 Lucky Winner!</div>
                        </div>

                        {/* Sparkles / Glowing dots background */}
                        <div className="particles">
                            <div className="particle p1"></div>
                            <div className="particle p2"></div>
                            <div className="particle p3"></div>
                            <div className="particle p4"></div>
                            <div className="particle p5"></div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section id="how-it-works" className="how-it-works-section">
                    <div className="section-container">
                        <div className="section-header">
                            <h2 className="section-title">
                                HOW <span>IT</span> WORKS
                            </h2>
                        </div>

                        {/* Steps (Cards + Arrows) */}
                        <div className="steps-grid">
                            {steps.map((step, idx) => (
                                <React.Fragment key={idx}>
                                    <div className="step-card">
                                        <div className="step-number">{step.number}</div>
                                        <div className="step-icon-wrapper">
                                            {step.icon}
                                        </div>
                                        <h3 className="step-title">{step.title}</h3>
                                        <p className="step-desc">{step.desc}</p>
                                    </div>

                                    {idx < steps.length - 1 && (
                                        <div className="step-arrow">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="9 18 15 12 9 6" />
                                            </svg>
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Stats Bar */}
                        <div className="stats-bar">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="stat-item">
                                    <div className="stat-icon-wrapper">
                                        {stat.icon}
                                    </div>
                                    <div className="stat-details">
                                        <span className="stat-number">{stat.value}</span>
                                        <span className="stat-label">{stat.label}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom CTA Banner */}
                        <div className="cta-banner">
                            <div className="cta-banner-left">
                                <img src="/cash_stack.png" alt="Stack of hundred dollar bills" className="cta-cash-img" />
                                <div className="cta-text-wrapper">
                                    <h3 className="cta-banner-title">Don't miss your chance!</h3>
                                    <p className="cta-banner-desc">
                                        Join now and start earning entries to win <span>$750 Cash App Cash!</span>
                                    </p>
                                </div>
                            </div>

                            <div className="cta-banner-right">
                                <button onClick={redirect} className="btn btn-primary btn-large">
                                    Sign Up & Enter Now
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: '18px', height: '18px', strokeWidth: 2.5 }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
export default Home;