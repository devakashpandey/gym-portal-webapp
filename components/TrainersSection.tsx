"use client";

import Image from "next/image";
import { Instagram, Twitter, Award, Star } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const trainers = [
    {
        name: "Marcus Steel",
        role: "Head Trainer & Boxing Coach",
        image: "/images/trainer-1.png",
        specialties: ["Boxing", "MMA", "HIIT"],
        experience: "12 Years",
        certifications: "NASM, ISSA",
        instagram: "#",
        twitter: "#",
    },
    {
        name: "Sarah Chen",
        role: "Yoga & Wellness Specialist",
        image: "/images/trainer-2.png",
        specialties: ["Yoga", "Pilates", "Meditation"],
        experience: "8 Years",
        certifications: "RYT-500, ACE",
        instagram: "#",
        twitter: "#",
    },
    {
        name: "Jake Torres",
        role: "Strength & CrossFit Coach",
        image: "/images/trainer-3.png",
        specialties: ["Strength", "CrossFit", "Olympic Lifting"],
        experience: "10 Years",
        certifications: "CSCS, CF-L3",
        instagram: "#",
        twitter: "#",
    },
    {
        name: "Lisa Ray",
        role: "Cardio & Dance Fitness",
        image: "/images/trainer-4.png",
        specialties: ["Cardio", "Dance", "Spin"],
        experience: "6 Years",
        certifications: "ACE, AFAA",
        instagram: "#",
        twitter: "#",
    },
];

export default function TrainersSection() {
    return (
        <section
            id="trainers"
            style={{
                padding: "120px 24px",
                background: "#0a0a0a",
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

            <div style={{ maxWidth: 1280, margin: "0 auto" }}>
                <SectionHeader
                    subtitle="Expert Coaches"
                    title={<>Meet Our <span className="gradient-text">Trainers</span></>}
                    outlineText="Trainers"
                    description="Our certified professionals are dedicated to helping you achieve your fitness goals with personalized attention."
                />

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                        gap: 24,
                    }}
                >
                    {trainers.map((trainer, i) => (
                        <div
                            key={i}
                            className="glass-card"
                            style={{
                                borderRadius: 20,
                                overflow: "hidden",
                                cursor: "pointer",
                            }}
                        >
                            {/* Image */}
                            <div
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    aspectRatio: "1/1",
                                    overflow: "hidden",
                                }}
                            >
                                <Image
                                    src={trainer.image}
                                    alt={trainer.name}
                                    fill
                                    style={{
                                        objectFit: "cover",
                                        transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.transform = "scale(1.05)")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.transform = "scale(1)")
                                    }
                                />
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background:
                                            "linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 50%)",
                                    }}
                                />

                                {/* Social icons */}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: 16,
                                        right: 16,
                                        display: "flex",
                                        gap: 8,
                                    }}
                                >
                                    <a
                                        href={trainer.instagram}
                                        style={{
                                            width: 36,
                                            height: 36,
                                            borderRadius: "50%",
                                            background: "rgba(0,0,0,0.5)",
                                            backdropFilter: "blur(10px)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "#fff",
                                            transition: "all 0.3s",
                                        }}
                                    >
                                        <Instagram size={14} />
                                    </a>
                                    <a
                                        href={trainer.twitter}
                                        style={{
                                            width: 36,
                                            height: 36,
                                            borderRadius: "50%",
                                            background: "rgba(0,0,0,0.5)",
                                            backdropFilter: "blur(10px)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "#fff",
                                            transition: "all 0.3s",
                                        }}
                                    >
                                        <Twitter size={14} />
                                    </a>
                                </div>

                                {/* Experience badge */}
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: 16,
                                        left: 16,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 6,
                                        background: "rgba(204, 255, 0, 0.15)",
                                        backdropFilter: "blur(10px)",
                                        border: "1px solid rgba(204, 255, 0, 0.3)",
                                        borderRadius: 50,
                                        padding: "6px 14px",
                                    }}
                                >
                                    <Award size={12} color="#CCFF00" />
                                    <span
                                        style={{
                                            fontSize: 11,
                                            fontWeight: 600,
                                            color: "#CCFF00",
                                        }}
                                    >
                                        {trainer.experience}
                                    </span>
                                </div>
                            </div>

                            {/* Info */}
                            <div style={{ padding: "24px" }}>
                                <h3
                                    style={{
                                        fontFamily: "'Outfit', sans-serif",
                                        fontSize: 20,
                                        fontWeight: 700,
                                        color: "#fff",
                                        marginBottom: 4,
                                    }}
                                >
                                    {trainer.name}
                                </h3>
                                <p
                                    style={{
                                        fontSize: 13,
                                        color: "#CCFF00",
                                        fontWeight: 500,
                                        marginBottom: 16,
                                    }}
                                >
                                    {trainer.role}
                                </p>

                                {/* Specialties */}
                                <div
                                    style={{
                                        display: "flex",
                                        gap: 6,
                                        flexWrap: "wrap",
                                        marginBottom: 16,
                                    }}
                                >
                                    {trainer.specialties.map((s, j) => (
                                        <span
                                            key={j}
                                            style={{
                                                fontSize: 11,
                                                fontWeight: 500,
                                                padding: "4px 10px",
                                                borderRadius: 20,
                                                background: "rgba(255,255,255,0.05)",
                                                color: "rgba(255,255,255,0.6)",
                                            }}
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>

                                <div
                                    style={{
                                        fontSize: 11,
                                        color: "rgba(255,255,255,0.4)",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 6,
                                    }}
                                >
                                    <Star size={11} />
                                    {trainer.certifications}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
