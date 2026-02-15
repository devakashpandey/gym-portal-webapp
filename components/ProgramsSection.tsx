"use client";

import {
    Dumbbell,
    Flame,
    Zap,
    Heart,
    Swords,
    Wind,
    Target,
    ArrowRight,
} from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const programs = [
    {
        icon: Dumbbell,
        title: "Strength Training",
        description:
            "Build raw power with progressive overload techniques. Free weights, machines, and compound lifts to sculpt your physique.",
        duration: "60 min",
        level: "All Levels",
        color: "#CCFF00",
    },
    {
        icon: Flame,
        title: "HIIT & CrossFit",
        description:
            "High-intensity interval training that torches calories and builds explosive strength. Push your limits every session.",
        duration: "45 min",
        level: "Intermediate",
        color: "#FF6B35",
    },
    {
        icon: Zap,
        title: "Functional Training",
        description:
            "Real-world movement patterns that improve daily life performance. Core stability, mobility, and balance-focused.",
        duration: "50 min",
        level: "All Levels",
        color: "#4ECDC4",
    },
    {
        icon: Heart,
        title: "Yoga & Meditation",
        description:
            "Find your inner balance with guided yoga flows and meditation sessions. Flexibility, mindfulness, and recovery.",
        duration: "75 min",
        level: "All Levels",
        color: "#9B59B6",
    },
    {
        icon: Swords,
        title: "Boxing & MMA",
        description:
            "Learn striking, defense, and combat conditioning from professional fighters. Build confidence and warrior mentality.",
        duration: "60 min",
        level: "All Levels",
        color: "#E74C3C",
    },
    {
        icon: Wind,
        title: "Cardio & Endurance",
        description:
            "From cycling to rowing, treadmill sprints to stair climbs — build cardiovascular capacity and burn fat efficiently.",
        duration: "45 min",
        level: "Beginner",
        color: "#3498DB",
    },
    {
        icon: Target,
        title: "Personal Training",
        description:
            "One-on-one sessions with certified trainers. Customized workout plans, nutrition guidance, and accountability coaching.",
        duration: "60 min",
        level: "Custom",
        color: "#F39C12",
    },
    {
        icon: Dumbbell,
        title: "Body Building",
        description:
            "Hypertrophy-focused training for maximum muscle growth. Split routines, periodization, and advanced techniques.",
        duration: "75 min",
        level: "Advanced",
        color: "#1ABC9C",
    },
];

export default function ProgramsSection() {
    return (
        <section
            id="programs"
            style={{
                padding: "120px 24px",
                background: "#0a0a0a",
                position: "relative",
            }}
        >
            {/* Decorative gradient */}
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
                    subtitle="What We Offer"
                    title={<>Our <span className="gradient-text">Training</span> Programs</>}
                    outlineText="Programs"
                    description="From strength to serenity, we offer comprehensive programs designed to help you achieve any fitness goal you set your mind to."
                />

                {/* Programs Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                        gap: 20,
                    }}
                >
                    {programs.map((program, i) => {
                        const Icon = program.icon;
                        return (
                            <div
                                key={i}
                                className="glass-card"
                                style={{
                                    borderRadius: 16,
                                    padding: 32,
                                    cursor: "pointer",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                {/* Colored top line */}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: 2,
                                        background: `linear-gradient(90deg, ${program.color}, transparent)`,
                                        opacity: 0.6,
                                    }}
                                />

                                {/* Icon */}
                                <div
                                    style={{
                                        width: 56,
                                        height: 56,
                                        borderRadius: 14,
                                        background: `${program.color}15`,
                                        border: `1px solid ${program.color}25`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: 20,
                                    }}
                                >
                                    <Icon size={24} color={program.color} />
                                </div>

                                <h3
                                    style={{
                                        fontFamily: "'Outfit', sans-serif",
                                        fontSize: 20,
                                        fontWeight: 700,
                                        marginBottom: 12,
                                        color: "#fff",
                                    }}
                                >
                                    {program.title}
                                </h3>

                                <p
                                    style={{
                                        fontSize: 14,
                                        lineHeight: 1.7,
                                        color: "rgba(255,255,255,0.5)",
                                        marginBottom: 24,
                                    }}
                                >
                                    {program.description}
                                </p>

                                {/* Tags */}
                                <div
                                    style={{
                                        display: "flex",
                                        gap: 8,
                                        marginBottom: 20,
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontSize: 11,
                                            fontWeight: 600,
                                            letterSpacing: "0.5px",
                                            padding: "5px 12px",
                                            borderRadius: 20,
                                            background: "rgba(255,255,255,0.05)",
                                            color: "rgba(255,255,255,0.6)",
                                        }}
                                    >
                                        {program.duration}
                                    </span>
                                    <span
                                        style={{
                                            fontSize: 11,
                                            fontWeight: 600,
                                            letterSpacing: "0.5px",
                                            padding: "5px 12px",
                                            borderRadius: 20,
                                            background: `${program.color}15`,
                                            color: program.color,
                                        }}
                                    >
                                        {program.level}
                                    </span>
                                </div>

                                {/* Link */}
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 6,
                                        fontSize: 13,
                                        fontWeight: 600,
                                        color: program.color,
                                        cursor: "pointer",
                                    }}
                                >
                                    Learn More <ArrowRight size={14} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
