"use client";

import { Star, Quote } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const testimonials = [
    {
        name: "Michael Roberts",
        role: "Member for 3 years",
        text: "SUSPENDED completely transformed my lifestyle. Lost 30kg in 8 months with the help of their incredible trainers. The community here is unmatched!",
        rating: 5,
        initials: "MR",
        color: "#CCFF00",
    },
    {
        name: "Priya Sharma",
        role: "Member for 1 year",
        text: "The yoga and meditation classes here are phenomenal. Sarah Chen is the best instructor I've ever trained with. My flexibility has improved dramatically.",
        rating: 5,
        initials: "PS",
        color: "#9B59B6",
    },
    {
        name: "David Clark",
        role: "Member for 2 years",
        text: "The CrossFit program pushed me beyond what I thought was possible. Won my first competition after just 6 months of training here. Best investment!",
        rating: 5,
        initials: "DC",
        color: "#F39C12",
    },
    {
        name: "Anna Peterson",
        role: "Member for 4 years",
        text: "I've been to many gyms but nothing compares to SUSPENDED. The equipment is top-notch, the atmosphere is motivating, and the trainers genuinely care.",
        rating: 5,
        initials: "AP",
        color: "#4ECDC4",
    },
    {
        name: "James Wilson",
        role: "Member for 2 years",
        text: "The boxing program with Marcus completely changed my confidence. I'm in the best shape of my life at 45. The late-night access is a game-changer!",
        rating: 5,
        initials: "JW",
        color: "#E74C3C",
    },
    {
        name: "Sophie Martinez",
        role: "Member for 1 year",
        text: "Started as a complete beginner and the staff made me feel so welcome. The personal training sessions are worth every penny. Down 2 dress sizes!",
        rating: 5,
        initials: "SM",
        color: "#3498DB",
    },
];

export default function TestimonialsSection() {
    return (
        <section
            style={{
                padding: "120px 0",
                background: "#0d0d0d",
                position: "relative",
                overflow: "hidden",
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

            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
                <SectionHeader
                    subtitle="Testimonials"
                    title={<>What Our <span className="gradient-text">Members</span> Say</>}
                    outlineText="Reviews"
                    description="Real stories from real people who transformed their lives at SUSPENDED."
                />
            </div>

            {/* Scrolling testimonial row */}
            <div style={{ position: "relative" }}>
                {/* Fade edges */}
                <div
                    style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: 100,
                        background:
                            "linear-gradient(to right, #0d0d0d, transparent)",
                        zIndex: 2,
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        bottom: 0,
                        width: 100,
                        background:
                            "linear-gradient(to left, #0d0d0d, transparent)",
                        zIndex: 2,
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        gap: 20,
                        animation: "scroll 40s linear infinite",
                        width: "max-content",
                    }}
                >
                    {[...testimonials, ...testimonials].map((t, i) => (
                        <div
                            key={i}
                            className="glass-card"
                            style={{
                                minWidth: 380,
                                maxWidth: 380,
                                borderRadius: 20,
                                padding: 32,
                                flexShrink: 0,
                            }}
                        >
                            {/* Quote Icon */}
                            <Quote
                                size={28}
                                color={t.color}
                                style={{ marginBottom: 16, opacity: 0.3 }}
                            />

                            {/* Stars */}
                            <div
                                style={{
                                    display: "flex",
                                    gap: 4,
                                    marginBottom: 16,
                                }}
                            >
                                {Array.from({ length: t.rating }).map((_, si) => (
                                    <Star
                                        key={si}
                                        size={14}
                                        fill="#CCFF00"
                                        color="#CCFF00"
                                    />
                                ))}
                            </div>

                            {/* Text */}
                            <p
                                style={{
                                    fontSize: 15,
                                    lineHeight: 1.7,
                                    color: "rgba(255,255,255,0.7)",
                                    marginBottom: 24,
                                }}
                            >
                                &ldquo;{t.text}&rdquo;
                            </p>

                            {/* Author */}
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                }}
                            >
                                <div
                                    style={{
                                        width: 44,
                                        height: 44,
                                        borderRadius: "50%",
                                        background: `${t.color}20`,
                                        border: `1px solid ${t.color}30`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontFamily: "'Outfit', sans-serif",
                                        fontSize: 14,
                                        fontWeight: 700,
                                        color: t.color,
                                    }}
                                >
                                    {t.initials}
                                </div>
                                <div>
                                    <div
                                        style={{
                                            fontFamily: "'Outfit', sans-serif",
                                            fontSize: 15,
                                            fontWeight: 600,
                                            color: "#fff",
                                        }}
                                    >
                                        {t.name}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: 12,
                                            color: "rgba(255,255,255,0.4)",
                                        }}
                                    >
                                        {t.role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
