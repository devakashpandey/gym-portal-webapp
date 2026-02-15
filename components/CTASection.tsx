"use client";

import { ArrowRight, Zap } from "lucide-react";

export default function CTASection() {
    return (
        <section
            style={{
                padding: "120px 24px",
                background: "#0a0a0a",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Background pattern */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "radial-gradient(circle at 30% 50%, rgba(204,255,0,0.06) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(204,255,0,0.04) 0%, transparent 50%)",
                }}
            />

            <div
                style={{
                    maxWidth: 900,
                    margin: "0 auto",
                    position: "relative",
                    textAlign: "center",
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
                    <Zap size={14} fill="#CCFF00" color="#CCFF00" />
                    <span
                        style={{
                            fontSize: 12,
                            fontWeight: 700,
                            letterSpacing: "2px",
                            textTransform: "uppercase",
                            color: "#CCFF00",
                        }}
                    >
                        Limited Time Offer
                    </span>
                </div>

                <h2
                    style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: "clamp(2.5rem, 5vw, 4rem)",
                        fontWeight: 900,
                        lineHeight: 1.1,
                        letterSpacing: "-1px",
                        marginBottom: 24,
                        color: "#fff",
                    }}
                >
                    Ready to{" "}
                    <span className="gradient-text">Transform</span>
                    <br />
                    Your Life?
                </h2>

                <p
                    style={{
                        fontSize: 18,
                        lineHeight: 1.7,
                        color: "rgba(255,255,255,0.5)",
                        maxWidth: 600,
                        margin: "0 auto 40px",
                    }}
                >
                    Join now and get your first month FREE plus a complimentary personal
                    training session. No commitments, no contracts.
                </p>

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 16,
                        flexWrap: "wrap",
                        marginBottom: 48,
                    }}
                >
                    <a
                        href="#pricing"
                        className="btn-lime"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 10,
                            textDecoration: "none",
                            fontSize: 16,
                            padding: "16px 36px",
                        }}
                    >
                        Claim Free Trial
                        <ArrowRight size={18} />
                    </a>
                    <a
                        href="#contact"
                        className="btn-outline"
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 10,
                            textDecoration: "none",
                            fontSize: 16,
                            padding: "16px 36px",
                        }}
                    >
                        Contact Us
                    </a>
                </div>

                {/* Trust badges */}
                <div
                    style={{
                        display: "flex",
                        gap: 32,
                        justifyContent: "center",
                        flexWrap: "wrap",
                    }}
                >
                    {[
                        "No Contract Required",
                        "7-Day Free Trial",
                        "Cancel Anytime",
                        "Money-Back Guarantee",
                    ].map((badge, i) => (
                        <div
                            key={i}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                fontSize: 13,
                                color: "rgba(255,255,255,0.4)",
                            }}
                        >
                            <div
                                style={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    background: "#CCFF00",
                                }}
                            />
                            {badge}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
