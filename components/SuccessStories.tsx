"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, TrendingUp, Clock, Target } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

interface SuccessStory {
    name: string;
    age: number;
    program: string;
    duration: string;
    weightLost: string;
    muscleGain: string;
    beforeStats: string;
    afterStats: string;
    quote: string;
    rating: number;
    beforeGradient: string;
    afterGradient: string;
    accentColor: string;
    initials: string;
}

const stories: SuccessStory[] = [
    {
        name: "Rahul Sharma",
        age: 28,
        program: "Fat Shredder + HIIT",
        duration: "6 Months",
        weightLost: "22 kg",
        muscleGain: "+8% lean mass",
        beforeStats: "98 kg • 32% body fat",
        afterStats: "76 kg • 14% body fat",
        quote: "SUSPENDED didn't just change my body — it changed my life. The trainers pushed me beyond my limits, and the community kept me going on tough days.",
        rating: 5,
        beforeGradient: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
        afterGradient: "linear-gradient(135deg, #0a2a1a, #1a4a2a, #2a6a3a)",
        accentColor: "#CCFF00",
        initials: "RS",
    },
    {
        name: "Priya Patel",
        age: 32,
        program: "Strength + Yoga",
        duration: "8 Months",
        weightLost: "15 kg",
        muscleGain: "+12% strength",
        beforeStats: "78 kg • 35% body fat",
        afterStats: "63 kg • 20% body fat",
        quote: "As a working mom, I thought I'd never find time. The flexible schedules and supportive trainers at SUSPENDED proved me wrong. Best decision ever!",
        rating: 5,
        beforeGradient: "linear-gradient(135deg, #2d1b4e, #1a1333, #0d0a1a)",
        afterGradient: "linear-gradient(135deg, #1a2a4a, #0d1a3a, #0a1530)",
        accentColor: "#9B59B6",
        initials: "PP",
    },
    {
        name: "Arjun Mehta",
        age: 24,
        program: "Bodybuilding + Nutrition",
        duration: "12 Months",
        weightLost: "Gained 12 kg",
        muscleGain: "+18 kg muscle",
        beforeStats: "58 kg • Skinny build",
        afterStats: "70 kg • Athletic build",
        quote: "From skinny to strong. The customized nutrition plan and progressive training system at SUSPENDED delivered results I never imagined possible.",
        rating: 5,
        beforeGradient: "linear-gradient(135deg, #1a1a1a, #2a2a2a, #1a1a1a)",
        afterGradient: "linear-gradient(135deg, #2a1a0a, #3a2a1a, #4a3a2a)",
        accentColor: "#F39C12",
        initials: "AM",
    },
    {
        name: "Sneha Reddy",
        age: 26,
        program: "CrossFit + Endurance",
        duration: "5 Months",
        weightLost: "18 kg",
        muscleGain: "+15% stamina",
        beforeStats: "85 kg • Sedentary",
        afterStats: "67 kg • Active lifestyle",
        quote: "CrossFit was intimidating at first. But the coaches scaled every workout for me. Now I do things I never dreamed of — pull-ups, rope climbs, everything!",
        rating: 5,
        beforeGradient: "linear-gradient(135deg, #1a0a0a, #2a1a1a, #3a0a0a)",
        afterGradient: "linear-gradient(135deg, #0a1a2a, #1a2a3a, #0a2a4a)",
        accentColor: "#E74C3C",
        initials: "SR",
    },
    {
        name: "Vikram Singh",
        age: 35,
        program: "Functional + Boxing",
        duration: "10 Months",
        weightLost: "25 kg",
        muscleGain: "+20% power",
        beforeStats: "105 kg • Low energy",
        afterStats: "80 kg • High energy",
        quote: "At 35, I thought my best days were behind me. SUSPENDED showed me they were just beginning. Boxing gave me confidence I never had before.",
        rating: 5,
        beforeGradient: "linear-gradient(135deg, #0a1520, #152030, #0a1020)",
        afterGradient: "linear-gradient(135deg, #1a2a0a, #2a3a1a, #3a4a2a)",
        accentColor: "#4ECDC4",
        initials: "VS",
    },
];

export default function SuccessStories() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef<HTMLDivElement>(null);

    const story = stories[activeIndex];

    const handleSliderMove = (clientX: number) => {
        if (!sliderRef.current) return;
        const rect = sliderRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
        setSliderPosition(percentage);
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging) handleSliderMove(e.clientX);
    };
    const handleTouchMove = (e: React.TouchEvent) => {
        handleSliderMove(e.touches[0].clientX);
    };

    useEffect(() => {
        const handleGlobalMouseUp = () => setIsDragging(false);
        window.addEventListener("mouseup", handleGlobalMouseUp);
        return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
    }, []);

    const nextStory = () => {
        setActiveIndex((prev) => (prev + 1) % stories.length);
        setSliderPosition(50);
    };
    const prevStory = () => {
        setActiveIndex((prev) => (prev - 1 + stories.length) % stories.length);
        setSliderPosition(50);
    };

    return (
        <section
            id="success-stories"
            style={{
                padding: "120px 24px",
                background: "#0d0d0d",
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

            <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                <SectionHeader
                    subtitle="Real Results"
                    title={
                        <>
                            Success{" "}
                            <span className="gradient-text">Stories</span>
                        </>
                    }
                    outlineText="RESULTS"
                    description="Real people, real transformations. Drag the slider to see the incredible before & after results of our dedicated members."
                />

                <div
                    className="stories-layout"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 32,
                        alignItems: "stretch",
                    }}
                >
                    {/* Before/After Slider */}
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div
                            ref={sliderRef}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onTouchMove={handleTouchMove}
                            onTouchStart={handleMouseDown}
                            onTouchEnd={handleMouseUp}
                            style={{
                                position: "relative",
                                borderRadius: 24,
                                overflow: "hidden",
                                flex: 1,
                                minHeight: 400,
                                cursor: "ew-resize",
                                border: "1px solid rgba(255,255,255,0.08)",
                                userSelect: "none",
                            }}
                        >
                            {/* After Side (full background) */}
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: story.afterGradient,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: 40,
                                }}
                            >
                                <div
                                    style={{
                                        width: 120,
                                        height: 120,
                                        borderRadius: "50%",
                                        background: `${story.accentColor}20`,
                                        border: `3px solid ${story.accentColor}`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: 24,
                                        boxShadow: `0 0 40px ${story.accentColor}30`,
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: "'Outfit', sans-serif",
                                            fontSize: 36,
                                            fontWeight: 800,
                                            color: story.accentColor,
                                        }}
                                    >
                                        {story.initials}
                                    </span>
                                </div>
                                <span
                                    style={{
                                        fontSize: 13,
                                        fontWeight: 700,
                                        letterSpacing: "2px",
                                        textTransform: "uppercase",
                                        color: story.accentColor,
                                        marginBottom: 8,
                                    }}
                                >
                                    AFTER
                                </span>
                                <span
                                    style={{
                                        fontFamily: "'Outfit', sans-serif",
                                        fontSize: 20,
                                        fontWeight: 700,
                                        color: "#fff",
                                        textAlign: "center",
                                    }}
                                >
                                    {story.afterStats}
                                </span>
                                <div
                                    style={{
                                        marginTop: 12,
                                        display: "flex",
                                        gap: 3,
                                    }}
                                >
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={14}
                                            fill={story.accentColor}
                                            color={story.accentColor}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Before Side (clipped) */}
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: story.beforeGradient,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: 40,
                                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                                    transition: isDragging ? "none" : "clip-path 0.1s ease",
                                }}
                            >
                                <div
                                    style={{
                                        width: 120,
                                        height: 120,
                                        borderRadius: "50%",
                                        background: "rgba(255,255,255,0.05)",
                                        border: "3px solid rgba(255,255,255,0.15)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: 24,
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: "'Outfit', sans-serif",
                                            fontSize: 36,
                                            fontWeight: 800,
                                            color: "rgba(255,255,255,0.3)",
                                        }}
                                    >
                                        {story.initials}
                                    </span>
                                </div>
                                <span
                                    style={{
                                        fontSize: 13,
                                        fontWeight: 700,
                                        letterSpacing: "2px",
                                        textTransform: "uppercase",
                                        color: "rgba(255,255,255,0.5)",
                                        marginBottom: 8,
                                    }}
                                >
                                    BEFORE
                                </span>
                                <span
                                    style={{
                                        fontFamily: "'Outfit', sans-serif",
                                        fontSize: 20,
                                        fontWeight: 700,
                                        color: "rgba(255,255,255,0.6)",
                                        textAlign: "center",
                                    }}
                                >
                                    {story.beforeStats}
                                </span>
                            </div>

                            {/* Slider Line */}
                            <div
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    bottom: 0,
                                    left: `${sliderPosition}%`,
                                    width: 3,
                                    background: "#fff",
                                    transform: "translateX(-50%)",
                                    zIndex: 10,
                                    transition: isDragging ? "none" : "left 0.1s ease",
                                    boxShadow: "0 0 20px rgba(255,255,255,0.3)",
                                }}
                            >
                                {/* Handle */}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        width: 48,
                                        height: 48,
                                        borderRadius: "50%",
                                        background: "#fff",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                                        cursor: "ew-resize",
                                    }}
                                >
                                    <div style={{ display: "flex", gap: 3 }}>
                                        <ChevronLeft size={14} color="#0a0a0a" strokeWidth={3} />
                                        <ChevronRight size={14} color="#0a0a0a" strokeWidth={3} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Dots */}
                        <div
                            style={{
                                display: "flex",
                                gap: 12,
                                justifyContent: "center",
                                marginTop: 24,
                                alignItems: "center",
                            }}
                        >
                            <button
                                onClick={prevStory}
                                style={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: "50%",
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    color: "#fff",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    transition: "all 0.3s",
                                }}
                            >
                                <ChevronLeft size={16} />
                            </button>
                            {stories.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setActiveIndex(i);
                                        setSliderPosition(50);
                                    }}
                                    style={{
                                        width: i === activeIndex ? 32 : 8,
                                        height: 8,
                                        borderRadius: 4,
                                        background: i === activeIndex ? "#CCFF00" : "rgba(255,255,255,0.2)",
                                        border: "none",
                                        cursor: "pointer",
                                        transition: "all 0.3s",
                                        padding: 0,
                                    }}
                                />
                            ))}
                            <button
                                onClick={nextStory}
                                style={{
                                    width: 36,
                                    height: 36,
                                    borderRadius: "50%",
                                    background: "rgba(255,255,255,0.05)",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    color: "#fff",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    transition: "all 0.3s",
                                }}
                            >
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Story Details */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                        {/* Name & Program */}
                        <div
                            className="glass-card"
                            style={{ borderRadius: 20, padding: 32 }}
                        >
                            <h3
                                style={{
                                    fontFamily: "'Outfit', sans-serif",
                                    fontSize: 26,
                                    fontWeight: 800,
                                    color: "#fff",
                                    marginBottom: 4,
                                }}
                            >
                                {story.name}
                            </h3>
                            <p
                                style={{
                                    fontSize: 14,
                                    color: "rgba(255,255,255,0.4)",
                                    marginBottom: 20,
                                }}
                            >
                                Age {story.age} • {story.program}
                            </p>

                            {/* Stats */}
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr 1fr",
                                    gap: 12,
                                }}
                            >
                                {[
                                    {
                                        icon: TrendingUp,
                                        label: "Lost / Gained",
                                        value: story.weightLost,
                                        color: story.accentColor,
                                    },
                                    {
                                        icon: Target,
                                        label: "Muscle",
                                        value: story.muscleGain,
                                        color: "#4ECDC4",
                                    },
                                    {
                                        icon: Clock,
                                        label: "Duration",
                                        value: story.duration,
                                        color: "#F39C12",
                                    },
                                ].map((stat, i) => {
                                    const Icon = stat.icon;
                                    return (
                                        <div
                                            key={i}
                                            style={{
                                                background: "rgba(255,255,255,0.03)",
                                                borderRadius: 14,
                                                padding: "16px 12px",
                                                textAlign: "center",
                                            }}
                                        >
                                            <Icon
                                                size={16}
                                                color={stat.color}
                                                style={{ marginBottom: 6 }}
                                            />
                                            <div
                                                style={{
                                                    fontFamily: "'Outfit', sans-serif",
                                                    fontSize: 16,
                                                    fontWeight: 700,
                                                    color: "#fff",
                                                    marginBottom: 2,
                                                }}
                                            >
                                                {stat.value}
                                            </div>
                                            <div
                                                style={{
                                                    fontSize: 10,
                                                    color: "rgba(255,255,255,0.4)",
                                                    textTransform: "uppercase",
                                                    letterSpacing: "0.5px",
                                                }}
                                            >
                                                {stat.label}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Quote */}
                        <div
                            className="glass-card"
                            style={{
                                borderRadius: 20,
                                padding: 32,
                                position: "relative",
                            }}
                        >
                            <Quote
                                size={32}
                                color={story.accentColor}
                                style={{ marginBottom: 16, opacity: 0.5 }}
                            />
                            <p
                                style={{
                                    fontSize: 15,
                                    lineHeight: 1.8,
                                    color: "rgba(255,255,255,0.7)",
                                    fontStyle: "italic",
                                    marginBottom: 16,
                                }}
                            >
                                &ldquo;{story.quote}&rdquo;
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                }}
                            >
                                <div
                                    style={{
                                        width: 36,
                                        height: 36,
                                        borderRadius: "50%",
                                        background: `${story.accentColor}20`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontWeight: 700,
                                            fontSize: 13,
                                            color: story.accentColor,
                                        }}
                                    >
                                        {story.initials}
                                    </span>
                                </div>
                                <div>
                                    <div
                                        style={{
                                            fontSize: 14,
                                            fontWeight: 700,
                                            color: "#fff",
                                        }}
                                    >
                                        {story.name}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: 11,
                                            color: "rgba(255,255,255,0.4)",
                                        }}
                                    >
                                        Verified Member
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <a
                            href="#pricing"
                            className="btn-lime"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 8,
                                textDecoration: "none",
                                fontSize: 15,
                                borderRadius: 16,
                                textAlign: "center",
                            }}
                        >
                            Start Your Transformation
                            <TrendingUp size={18} />
                        </a>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    .stories-layout {
                        grid-template-columns: 1fr !important;
                    }
                    .transformation-stats {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
            `}</style>
        </section>
    );
}
