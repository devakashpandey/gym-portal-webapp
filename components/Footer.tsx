"use client";

import Link from "next/link";
import {
    Dumbbell,
    Instagram,
    Twitter,
    Youtube,
    Facebook,
    ArrowUp,
    Heart,
    MapPin,
    Phone,
    Mail,
} from "lucide-react";

const footerLinks = {
    Company: [
        { name: "About Us", href: "#" },
        { name: "Our Team", href: "#trainers" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Press", href: "#" },
    ],
    Programs: [
        { name: "Strength Training", href: "#programs" },
        { name: "CrossFit", href: "#programs" },
        { name: "Yoga", href: "#programs" },
        { name: "Boxing", href: "#programs" },
        { name: "Personal Training", href: "#programs" },
    ],
    Support: [
        { name: "FAQ", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Refund Policy", href: "#" },
    ],
    Membership: [
        { name: "Plans & Pricing", href: "#pricing" },
        { name: "Free Trial", href: "#pricing" },
        { name: "Corporate Plans", href: "#" },
        { name: "Student Discount", href: "#" },
        { name: "Gift Cards", href: "#" },
    ],
};

const socials = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Facebook, href: "#", label: "Facebook" },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer
            style={{
                background: "#080808",
                position: "relative",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 1,
                    background:
                        "linear-gradient(90deg, transparent, rgba(204,255,0,0.3), transparent)",
                }}
            />

            <div
                style={{
                    maxWidth: 1280,
                    margin: "0 auto",
                    padding: "80px 24px 32px",
                }}
            >
                {/* Top Section */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1.5fr repeat(4, 1fr)",
                        gap: 48,
                        marginBottom: 64,
                    }}
                >
                    {/* Brand */}
                    <div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 10,
                                marginBottom: 20,
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
                        </div>

                        <p
                            style={{
                                fontSize: 14,
                                lineHeight: 1.7,
                                color: "rgba(255,255,255,0.4)",
                                marginBottom: 24,
                                maxWidth: 300,
                            }}
                        >
                            Transform your body and mind with our world-class fitness
                            facility. Join thousands of members achieving their goals every
                            day.
                        </p>

                        {/* Contact info */}
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: 10,
                                marginBottom: 24,
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    fontSize: 13,
                                    color: "rgba(255,255,255,0.4)",
                                }}
                            >
                                <MapPin size={14} color="#CCFF00" />
                                123 Fitness Avenue, NY 10001
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    fontSize: 13,
                                    color: "rgba(255,255,255,0.4)",
                                }}
                            >
                                <Phone size={14} color="#CCFF00" />
                                +1 (555) 123-4567
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    fontSize: 13,
                                    color: "rgba(255,255,255,0.4)",
                                }}
                            >
                                <Mail size={14} color="#CCFF00" />
                                info@suspendedgym.com
                            </div>
                        </div>

                        {/* Social */}
                        <div style={{ display: "flex", gap: 10 }}>
                            {socials.map((social, i) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={i}
                                        href={social.href}
                                        aria-label={social.label}
                                        style={{
                                            width: 40,
                                            height: 40,
                                            borderRadius: 10,
                                            background: "rgba(255,255,255,0.04)",
                                            border: "1px solid rgba(255,255,255,0.06)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "rgba(255,255,255,0.5)",
                                            transition: "all 0.3s",
                                            textDecoration: "none",
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background =
                                                "rgba(204, 255, 0, 0.1)";
                                            e.currentTarget.style.borderColor =
                                                "rgba(204, 255, 0, 0.3)";
                                            e.currentTarget.style.color = "#CCFF00";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background =
                                                "rgba(255,255,255,0.04)";
                                            e.currentTarget.style.borderColor =
                                                "rgba(255,255,255,0.06)";
                                            e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                                        }}
                                    >
                                        <Icon size={16} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4
                                style={{
                                    fontFamily: "'Outfit', sans-serif",
                                    fontSize: 14,
                                    fontWeight: 700,
                                    color: "#fff",
                                    textTransform: "uppercase",
                                    letterSpacing: "1px",
                                    marginBottom: 20,
                                }}
                            >
                                {title}
                            </h4>
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: 12,
                                }}
                            >
                                {links.map((link, li) => (
                                    <Link
                                        key={li}
                                        href={link.href}
                                        style={{
                                            fontSize: 13,
                                            color: "rgba(255,255,255,0.4)",
                                            textDecoration: "none",
                                            transition: "color 0.3s",
                                        }}
                                        onMouseEnter={(e) =>
                                            (e.currentTarget.style.color = "#CCFF00")
                                        }
                                        onMouseLeave={(e) =>
                                        (e.currentTarget.style.color =
                                            "rgba(255,255,255,0.4)")
                                        }
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Newsletter */}
                <div
                    className="glass-card"
                    style={{
                        borderRadius: 16,
                        padding: "32px 40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 24,
                        marginBottom: 40,
                        flexWrap: "wrap",
                    }}
                >
                    <div>
                        <h4
                            style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: 20,
                                fontWeight: 700,
                                color: "#fff",
                                marginBottom: 4,
                            }}
                        >
                            Subscribe to our Newsletter
                        </h4>
                        <p
                            style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}
                        >
                            Get fitness tips, exclusive offers, and workout inspiration
                            delivered to your inbox.
                        </p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            gap: 8,
                            width: "100%",
                            maxWidth: 400,
                        }}
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            style={{
                                flex: 1,
                                padding: "12px 20px",
                                borderRadius: 50,
                                border: "1px solid rgba(255,255,255,0.08)",
                                background: "rgba(255,255,255,0.03)",
                                color: "#fff",
                                fontSize: 14,
                                outline: "none",
                            }}
                        />
                        <button
                            className="btn-lime"
                            style={{
                                padding: "12px 28px",
                                fontSize: 13,
                                whiteSpace: "nowrap",
                            }}
                        >
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Bottom */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: 24,
                        borderTop: "1px solid rgba(255,255,255,0.06)",
                        flexWrap: "wrap",
                        gap: 16,
                    }}
                >
                    <p
                        style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}
                    >
                        © 2026 SUSPENDED Fitness Club. All rights reserved.
                    </p>

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                            fontSize: 13,
                            color: "rgba(255,255,255,0.3)",
                        }}
                    >
                        Made with <Heart size={12} fill="#E74C3C" color="#E74C3C" /> for fitness lovers
                    </div>

                    <button
                        onClick={scrollToTop}
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 10,
                            background: "rgba(204, 255, 0, 0.1)",
                            border: "1px solid rgba(204, 255, 0, 0.2)",
                            color: "#CCFF00",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.3s",
                        }}
                    >
                        <ArrowUp size={18} />
                    </button>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 480px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </footer>
    );
}
