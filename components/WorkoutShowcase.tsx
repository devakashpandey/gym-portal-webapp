"use client";

import Image from "next/image";

export default function WorkoutShowcase() {
    return (
        <section
            style={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
            }}
        >
            {/* Full-width image */}
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: "85vh",
                    minHeight: 500,
                    maxHeight: 800,
                }}
            >
                <Image
                    src="/images/workout-hero.png"
                    alt="Athlete performing kettlebell workout in a dark gym with green lighting"
                    fill
                    style={{ objectFit: "cover", objectPosition: "center 30%" }}
                    priority
                />

                {/* Top gradient fade */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 150,
                        background:
                            "linear-gradient(to bottom, #0a0a0a, transparent)",
                    }}
                />

                {/* Bottom gradient fade */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 300,
                        background:
                            "linear-gradient(to top, #0d0d0d, transparent)",
                    }}
                />

                {/* Side vignette */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "radial-gradient(ellipse at center, transparent 40%, rgba(10,10,10,0.6) 100%)",
                    }}
                />

                {/* Content overlay at bottom */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: "0 24px 60px",
                    }}
                >
                    <div
                        style={{
                            maxWidth: 1280,
                            margin: "0 auto",
                            textAlign: "center",
                        }}
                    >
                        {/* Subtitle */}
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                background: "rgba(204, 255, 0, 0.1)",
                                border: "1px solid rgba(204, 255, 0, 0.2)",
                                borderRadius: 50,
                                padding: "6px 18px",
                                marginBottom: 20,
                                backdropFilter: "blur(12px)",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: 11,
                                    fontWeight: 700,
                                    letterSpacing: "2px",
                                    textTransform: "uppercase",
                                    color: "#CCFF00",
                                }}
                            >
                                Push Your Limits
                            </span>
                        </div>

                        <h2
                            style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                                fontWeight: 900,
                                lineHeight: 1.05,
                                letterSpacing: "-2px",
                                color: "#fff",
                                marginBottom: 16,
                                textShadow: "0 4px 30px rgba(0,0,0,0.5)",
                            }}
                        >
                            A PLACE WHERE{" "}
                            <span className="gradient-text">EVERYONE</span>
                            <br />
                            FEELS AT HOME
                        </h2>

                        <p
                            style={{
                                fontSize: 17,
                                lineHeight: 1.6,
                                color: "rgba(255,255,255,0.6)",
                                maxWidth: 600,
                                margin: "0 auto",
                                textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                            }}
                        >
                            Whether you&apos;re a beginner or a seasoned athlete, our
                            inclusive environment and expert coaches will help you achieve
                            your goals.
                        </p>
                    </div>
                </div>

                {/* Left side accent line */}
                <div
                    style={{
                        position: "absolute",
                        left: 40,
                        top: "20%",
                        bottom: "20%",
                        width: 3,
                        background:
                            "linear-gradient(to bottom, transparent, #CCFF00, transparent)",
                        opacity: 0.3,
                    }}
                />

                {/* Right side accent line */}
                <div
                    style={{
                        position: "absolute",
                        right: 40,
                        top: "20%",
                        bottom: "20%",
                        width: 3,
                        background:
                            "linear-gradient(to bottom, transparent, #CCFF00, transparent)",
                        opacity: 0.3,
                    }}
                />
            </div>
        </section>
    );
}
