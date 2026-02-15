"use client";

import Image from "next/image";
import {
    Star,
    MapPin,
    Mail,
    Dumbbell,
    Flame,
    Heart,
    Wind,
    ArrowRight,
    Award,
} from "lucide-react";

const gyms = [
    {
        name: "Pulse Fitness",
        image: "/images/gym-1.png",
        rating: 4.9,
        reviews: 342,
        location: "Manhattan, New York",
        email: "info@pulsefitness.com",
        categories: ["Strength", "HIIT", "Cardio"],
        featured: true,
        distance: "0.8 km",
    },
    {
        name: "Aurun Athletic Club",
        image: "/images/gym-2.png",
        rating: 4.8,
        reviews: 289,
        location: "Brooklyn, New York",
        email: "hello@aurunclub.com",
        categories: ["CrossFit", "Yoga", "Swimming"],
        featured: true,
        distance: "1.2 km",
    },
    {
        name: "Iron Forge CrossFit",
        image: "/images/gym-3.png",
        rating: 4.7,
        reviews: 198,
        location: "Queens, New York",
        email: "train@ironforge.com",
        categories: ["CrossFit", "Boxing", "MMA"],
        featured: false,
        distance: "2.5 km",
    },
    {
        name: "Zenith Wellness",
        image: "/images/gym-4.png",
        rating: 4.9,
        reviews: 156,
        location: "SoHo, New York",
        email: "peace@zenithwell.com",
        categories: ["Yoga", "Pilates", "Meditation"],
        featured: true,
        distance: "3.1 km",
    },
];

const categoryIcons: Record<string, React.ElementType> = {
    Strength: Dumbbell,
    HIIT: Flame,
    Cardio: Wind,
    CrossFit: Flame,
    Yoga: Heart,
    Swimming: Wind,
    Boxing: Flame,
    MMA: Flame,
    Pilates: Heart,
    Meditation: Heart,
};

const categoryColors: Record<string, string> = {
    Strength: "#CCFF00",
    HIIT: "#FF6B35",
    Cardio: "#3498DB",
    CrossFit: "#F39C12",
    Yoga: "#9B59B6",
    Swimming: "#4ECDC4",
    Boxing: "#E74C3C",
    MMA: "#E74C3C",
    Pilates: "#9B59B6",
    Meditation: "#9B59B6",
};

export default function TopRatedGyms() {
    return (
        <section
            id="top-gyms"
            style={{
                padding: "120px 24px",
                background: "#0d0d0d",
                position: "relative",
            }}
        >
            {/* Top divider */}
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
                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <span className="section-subtitle">Nearby Gyms</span>
                    <h2 className="section-title">
                        Top Rated <span className="gradient-text">Gyms</span> Near You
                    </h2>
                    <p className="section-description" style={{ margin: "0 auto" }}>
                        Discover premium fitness centers with world-class facilities and
                        expert trainers in your area.
                    </p>
                </div>

                {/* Gym Cards Grid */}
                <div
                    className="gym-cards-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                        gap: 24,
                    }}
                >
                    {gyms.map((gym, i) => (
                        <div
                            key={i}
                            className="glass-card"
                            style={{
                                borderRadius: 20,
                                overflow: "hidden",
                                cursor: "pointer",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            {/* Image with rating overlay */}
                            <div
                                style={{
                                    position: "relative",
                                    width: "100%",
                                    aspectRatio: "16/11",
                                    overflow: "hidden",
                                }}
                            >
                                <Image
                                    src={gym.image}
                                    alt={gym.name}
                                    fill
                                    style={{
                                        objectFit: "cover",
                                        transition:
                                            "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.transform = "scale(1.05)")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.transform = "scale(1)")
                                    }
                                />

                                {/* Gradient overlay at bottom */}
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        background:
                                            "linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.1) 40%, transparent 60%)",
                                    }}
                                />

                                {/* Featured badge */}
                                {gym.featured && (
                                    <div
                                        style={{
                                            position: "absolute",
                                            top: 14,
                                            right: 14,
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 5,
                                            background: "rgba(204, 255, 0, 0.15)",
                                            backdropFilter: "blur(12px)",
                                            border: "1px solid rgba(204, 255, 0, 0.3)",
                                            borderRadius: 50,
                                            padding: "5px 12px",
                                        }}
                                    >
                                        <Award size={11} color="#CCFF00" />
                                        <span
                                            style={{
                                                fontSize: 10,
                                                fontWeight: 700,
                                                color: "#CCFF00",
                                                textTransform: "uppercase",
                                                letterSpacing: "1px",
                                            }}
                                        >
                                            Featured
                                        </span>
                                    </div>
                                )}

                                {/* Rating bar at bottom of image */}
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: 14,
                                        left: 14,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 6,
                                        background: "rgba(0,0,0,0.6)",
                                        backdropFilter: "blur(12px)",
                                        borderRadius: 50,
                                        padding: "6px 14px",
                                    }}
                                >
                                    <div style={{ display: "flex", gap: 2 }}>
                                        {Array.from({ length: 5 }).map((_, si) => (
                                            <Star
                                                key={si}
                                                size={11}
                                                fill={
                                                    si < Math.floor(gym.rating) ? "#CCFF00" : "transparent"
                                                }
                                                color="#CCFF00"
                                            />
                                        ))}
                                    </div>
                                    <span
                                        style={{
                                            fontSize: 12,
                                            fontWeight: 700,
                                            color: "#fff",
                                        }}
                                    >
                                        {gym.rating}
                                    </span>
                                    <span
                                        style={{
                                            fontSize: 10,
                                            color: "rgba(255,255,255,0.5)",
                                        }}
                                    >
                                        ({gym.reviews})
                                    </span>
                                </div>

                                {/* Distance badge */}
                                <div
                                    style={{
                                        position: "absolute",
                                        top: 14,
                                        left: 14,
                                        background: "rgba(0,0,0,0.6)",
                                        backdropFilter: "blur(12px)",
                                        borderRadius: 50,
                                        padding: "5px 12px",
                                        fontSize: 10,
                                        fontWeight: 600,
                                        color: "rgba(255,255,255,0.8)",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 4,
                                    }}
                                >
                                    <MapPin size={10} />
                                    {gym.distance}
                                </div>
                            </div>

                            {/* Content */}
                            <div
                                style={{
                                    padding: "20px 24px 24px",
                                    flex: 1,
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                {/* Name */}
                                <h3
                                    style={{
                                        fontFamily: "'Outfit', sans-serif",
                                        fontSize: 20,
                                        fontWeight: 700,
                                        color: "#fff",
                                        marginBottom: 10,
                                    }}
                                >
                                    {gym.name}
                                </h3>

                                {/* Location */}
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 6,
                                        fontSize: 13,
                                        color: "rgba(255,255,255,0.45)",
                                        marginBottom: 6,
                                    }}
                                >
                                    <MapPin size={13} color="#CCFF00" />
                                    {gym.location}
                                </div>

                                {/* Email */}
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 6,
                                        fontSize: 12,
                                        color: "rgba(255,255,255,0.35)",
                                        marginBottom: 18,
                                    }}
                                >
                                    <Mail size={12} />
                                    {gym.email}
                                </div>

                                {/* Categories */}
                                <div
                                    style={{
                                        display: "flex",
                                        gap: 8,
                                        flexWrap: "wrap",
                                        marginBottom: 20,
                                    }}
                                >
                                    {gym.categories.map((cat, ci) => {
                                        const CatIcon = categoryIcons[cat] || Dumbbell;
                                        const color = categoryColors[cat] || "#CCFF00";
                                        return (
                                            <div
                                                key={ci}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 5,
                                                    fontSize: 11,
                                                    fontWeight: 600,
                                                    padding: "4px 10px",
                                                    borderRadius: 20,
                                                    background: `${color}12`,
                                                    color: color,
                                                    border: `1px solid ${color}20`,
                                                }}
                                            >
                                                <CatIcon size={10} />
                                                {cat}
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* View Details button */}
                                <button
                                    style={{
                                        marginTop: "auto",
                                        width: "100%",
                                        padding: "12px 20px",
                                        borderRadius: 12,
                                        border: "none",
                                        cursor: "pointer",
                                        fontSize: 13,
                                        fontWeight: 700,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.5px",
                                        background: "#CCFF00",
                                        color: "#0a0a0a",
                                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: 8,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = "#d4ff33";
                                        e.currentTarget.style.boxShadow =
                                            "0 8px 30px rgba(204, 255, 0, 0.25)";
                                        e.currentTarget.style.transform = "translateY(-1px)";
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = "#CCFF00";
                                        e.currentTarget.style.boxShadow = "none";
                                        e.currentTarget.style.transform = "translateY(0)";
                                    }}
                                >
                                    View Details
                                    <ArrowRight size={14} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                @media (max-width: 768px) {
                    .gym-cards-grid {
                        grid-template-columns: 1fr !important;
                    }
                    section {
                        padding: 80px 16px !important;
                    }
                }
            `}</style>
        </section>
    );
}
