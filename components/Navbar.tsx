"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
    Menu,
    X,
    Dumbbell,
    Phone,
    ChevronDown,
} from "lucide-react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Programs", href: "#programs" },
    { name: "Trainers", href: "#trainers" },
    { name: "Pricing", href: "#pricing" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section
            const sections = navLinks.map((l) => l.href.replace("#", ""));
            for (const section of sections.reverse()) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            id="navbar"
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: isScrolled ? "12px 0" : "20px 0",
                background: isScrolled
                    ? "rgba(10, 10, 10, 0.85)"
                    : "transparent",
                backdropFilter: isScrolled ? "blur(20px)" : "none",
                borderBottom: isScrolled
                    ? "1px solid rgba(255,255,255,0.06)"
                    : "none",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
        >
            <div
                style={{
                    maxWidth: 1280,
                    margin: "0 auto",
                    padding: "0 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* Logo */}
                <Link
                    href="#home"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        textDecoration: "none",
                    }}
                >
                    <div
                        style={{
                            width: 42,
                            height: 42,
                            background: "#CCFF00",
                            borderRadius: 10,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Dumbbell size={22} color="#0a0a0a" strokeWidth={2.5} />
                    </div>
                    <div>
                        <span
                            style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: 22,
                                fontWeight: 800,
                                color: "#fff",
                                letterSpacing: "-0.5px",
                            }}
                        >
                            SUSPENDED
                        </span>
                        <span
                            style={{
                                display: "block",
                                fontSize: 9,
                                fontWeight: 600,
                                letterSpacing: "3px",
                                color: "#CCFF00",
                                textTransform: "uppercase",
                                marginTop: -2,
                            }}
                        >
                            FITNESS CLUB
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 32,
                    }}
                    className="desktop-nav"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            style={{
                                textDecoration: "none",
                                fontSize: 13,
                                fontWeight: 500,
                                letterSpacing: "0.5px",
                                textTransform: "uppercase",
                                color:
                                    activeSection === link.href.replace("#", "")
                                        ? "#CCFF00"
                                        : "rgba(255,255,255,0.7)",
                                transition: "color 0.3s",
                                position: "relative",
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.color = "#CCFF00")
                            }
                            onMouseLeave={(e) =>
                            (e.currentTarget.style.color =
                                activeSection === link.href.replace("#", "")
                                    ? "#CCFF00"
                                    : "rgba(255,255,255,0.7)")
                            }
                        >
                            {link.name}
                            {activeSection === link.href.replace("#", "") && (
                                <span
                                    style={{
                                        position: "absolute",
                                        bottom: -6,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        width: 4,
                                        height: 4,
                                        borderRadius: "50%",
                                        background: "#CCFF00",
                                    }}
                                />
                            )}
                        </Link>
                    ))}
                </div>

                {/* CTA + Mobile Toggle */}
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <Link
                        href="#contact"
                        className="desktop-only"
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 8,
                            textDecoration: "none",
                            fontSize: 13,
                            fontWeight: 700,
                            padding: "10px 24px",
                            background: "#CCFF00",
                            color: "#0a0a0a",
                            borderRadius: 50,
                            textTransform: "uppercase",
                            whiteSpace: "nowrap",
                            transition: "all 0.3s",
                        }}
                    >
                        <Phone size={14} />
                        Join Now
                    </Link>

                    <button
                        className="mobile-toggle"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        style={{
                            display: "none",
                            background: "none",
                            border: "none",
                            color: "#fff",
                            cursor: "pointer",
                            padding: 4,
                        }}
                    >
                        {mobileOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    right: 0,
                    width: "100%",
                    maxWidth: 380,
                    height: "100vh",
                    background: "rgba(10, 10, 10, 0.98)",
                    backdropFilter: "blur(30px)",
                    transform: mobileOpen ? "translateX(0)" : "translateX(100%)",
                    transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    padding: "80px 32px 32px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                    borderLeft: "1px solid rgba(255,255,255,0.06)",
                    zIndex: 999,
                }}
            >
                <button
                    onClick={() => setMobileOpen(false)}
                    style={{
                        position: "absolute",
                        top: 20,
                        right: 20,
                        background: "none",
                        border: "none",
                        color: "#fff",
                        cursor: "pointer",
                    }}
                >
                    <X size={28} />
                </button>

                {navLinks.map((link, i) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        style={{
                            textDecoration: "none",
                            fontSize: 18,
                            fontWeight: 600,
                            fontFamily: "'Outfit', sans-serif",
                            color:
                                activeSection === link.href.replace("#", "")
                                    ? "#CCFF00"
                                    : "rgba(255,255,255,0.8)",
                            padding: "16px 0",
                            borderBottom: "1px solid rgba(255,255,255,0.06)",
                            transition: "all 0.3s",
                            animationDelay: `${i * 0.05}s`,
                        }}
                    >
                        {link.name}
                    </Link>
                ))}

                {/* Join Now CTA in mobile menu */}
                <Link
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        textDecoration: "none",
                        fontSize: 15,
                        fontWeight: 700,
                        padding: "14px 28px",
                        background: "#CCFF00",
                        color: "#0a0a0a",
                        borderRadius: 50,
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        marginTop: 24,
                        transition: "all 0.3s",
                        fontFamily: "'Outfit', sans-serif",
                    }}
                >
                    <Phone size={16} />
                    Join Now
                </Link>
            </div>

            {/* Overlay */}
            {mobileOpen && (
                <div
                    onClick={() => setMobileOpen(false)}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "rgba(0,0,0,0.5)",
                        zIndex: 998,
                    }}
                />
            )}

            <style jsx global>{`
                .desktop-only {
                    display: inline-flex;
                }
                @media (max-width: 1024px) {
                    .desktop-nav {
                        display: none !important;
                    }
                    .desktop-only {
                        display: none !important;
                    }
                    .mobile-toggle {
                        display: block !important;
                    }
                }
            `}</style>
        </nav>
    );
}
