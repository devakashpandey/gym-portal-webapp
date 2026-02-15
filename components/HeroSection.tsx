"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Play, Users, Trophy, Clock, Flame } from "lucide-react";

const stats = [
    { icon: Users, value: "5000+", label: "Active Members" },
    { icon: Trophy, value: "15+", label: "Years Experience" },
    { icon: Clock, value: "24/7", label: "Open Access" },
    { icon: Flame, value: "50+", label: "Programs" },
];

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section
            id="home"
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
            }}
        >
            {/* Background Video/Image */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                    overflow: "hidden"
                }}
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/images/hero-bg.png"
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transform: "translate(-50%, -50%)",
                        opacity: 0.6,
                    }}
                >
                    <source src="/videos/4367578-hd_1920_1080_30fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlays */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(135deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.4) 50%, rgba(10,10,10,0.85) 100%)",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "radial-gradient(ellipse at 20% 50%, rgba(204,255,0,0.06) 0%, transparent 60%)",
                    }}
                />
            </div>

            {/* Content */}
            <div
                style={{
                    position: "relative",
                    zIndex: 10,
                    maxWidth: 1280,
                    margin: "0 auto",
                    padding: "clamp(100px, 15vh, 140px) 16px 60px",
                    width: "100%",
                }}
            >
                <div
                    style={{
                        maxWidth: 720,
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateY(0)" : "translateY(40px)",
                        transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                >
                    {/* Badge */}
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            background: "rgba(204, 255, 0, 0.1)",
                            border: "1px solid rgba(204, 255, 0, 0.2)",
                            borderRadius: 50,
                            padding: "8px 20px",
                            marginBottom: 32,
                        }}
                    >
                        <div
                            style={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                background: "#CCFF00",
                                animation: "pulse-glow 2s infinite",
                            }}
                        />
                        <span
                            style={{
                                fontSize: 12,
                                fontWeight: 600,
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                                color: "#CCFF00",
                            }}
                        >
                            #1 Premium Fitness Center
                        </span>
                    </div>

                    {/* Heading */}
                    <h1
                        style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: "clamp(2.25rem, 8vw, 5.5rem)",
                            fontWeight: 900,
                            lineHeight: 1.05,
                            letterSpacing: "-1px",
                            marginBottom: 20,
                        }}
                    >
                        BUILD YOUR
                        <br />
                        <span className="gradient-text">DREAM</span>{" "}
                        BODY
                    </h1>

                    <p
                        style={{
                            fontSize: "clamp(15px, 4vw, 18px)",
                            lineHeight: 1.6,
                            color: "rgba(255,255,255,0.6)",
                            maxWidth: 520,
                            marginBottom: 32,
                        }}
                    >
                        Transform your physique with world-class equipment, expert coaches,
                        and a community that pushes you beyond limits. Your journey to
                        greatness starts here.
                    </p>

                    {/* CTAs */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                            flexWrap: "wrap",
                        }}
                    >
                        <a
                            href="#pricing"
                            className="btn-lime"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                textDecoration: "none",
                                fontSize: 14,
                                padding: "12px 24px",
                            }}
                        >
                            Start Free Trial
                            <ArrowRight size={16} />
                        </a>
                        <a
                            href="#programs"
                            className="btn-outline"
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                textDecoration: "none",
                                fontSize: 14,
                                padding: "12px 24px",
                            }}
                        >
                            <div
                                style={{
                                    width: 30,
                                    height: 30,
                                    borderRadius: "50%",
                                    background: "rgba(204, 255, 0, 0.15)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Play size={12} fill="#CCFF00" color="#CCFF00" />
                            </div>
                            Explore
                        </a>
                    </div>
                </div>

                {/* Stats Bar */}
                <div
                    className="hero-stats-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                        gap: 1,
                        marginTop: "clamp(40px, 8vw, 80px)",
                        background: "rgba(255,255,255,0.04)",
                        borderRadius: 16,
                        overflow: "hidden",
                        border: "1px solid rgba(255,255,255,0.06)",
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "translateY(0)" : "translateY(30px)",
                        transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s",
                    }}
                >
                    {stats.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={i}
                                style={{
                                    padding: "clamp(16px, 4vw, 28px)",
                                    textAlign: "center",
                                    background: "rgba(255,255,255,0.02)",
                                }}
                            >
                                <Icon
                                    size={18}
                                    color="#CCFF00"
                                    style={{ marginBottom: 8, margin: "0 auto 8px" }}
                                />
                                <div
                                    style={{
                                        fontFamily: "'Outfit', sans-serif",
                                        fontSize: "clamp(20px, 5vw, 28px)",
                                        fontWeight: 800,
                                        color: "#fff",
                                        marginBottom: 2,
                                    }}
                                >
                                    {stat.value}
                                </div>
                                <div
                                    style={{
                                        fontSize: 10,
                                        fontWeight: 500,
                                        color: "rgba(255,255,255,0.5)",
                                        textTransform: "uppercase",
                                        letterSpacing: "1px",
                                    }}
                                >
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 640px) {
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
        </section>
    );
}
