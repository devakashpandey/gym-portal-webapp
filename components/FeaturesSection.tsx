"use client";

import {
    Shield,
    Wifi,
    Droplets,
    Car,
    Coffee,
    Shirt,
    Lock,
    Sparkles,
} from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const features = [
    {
        icon: Shield,
        title: "24/7 Security",
        description: "Round-the-clock security with CCTV monitoring and staff presence.",
    },
    {
        icon: Wifi,
        title: "Free High-Speed WiFi",
        description: "Stay connected with complimentary high-speed internet throughout.",
    },
    {
        icon: Droplets,
        title: "Spa & Sauna",
        description: "Relax and recover in our premium spa, sauna, and steam rooms.",
    },
    {
        icon: Car,
        title: "Free Parking",
        description: "Spacious underground parking with 200+ spots for members.",
    },
    {
        icon: Coffee,
        title: "Protein Bar & Café",
        description: "Fresh smoothies, protein shakes, and healthy snacks on-site.",
    },
    {
        icon: Shirt,
        title: "Towel Service",
        description: "Complimentary fresh towels provided with every workout session.",
    },
    {
        icon: Lock,
        title: "Personal Lockers",
        description: "Secure digital lockers for storing your gear and valuables.",
    },
    {
        icon: Sparkles,
        title: "Premium Equipment",
        description: "Latest Technogym, Rogue, and Eleiko equipment across all zones.",
    },
];

export default function FeaturesSection() {
    return (
        <section
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

            {/* Background glow */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 600,
                    height: 600,
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(204,255,0,0.03) 0%, transparent 70%)",
                    pointerEvents: "none",
                }}
            />

            <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
                <SectionHeader
                    subtitle="Why Choose Us"
                    title={<>World-Class <span className="gradient-text">Amenities</span></>}
                    outlineText="Amenities"
                    description="More than just a gym — we provide a complete fitness lifestyle with premium amenities that make every visit exceptional."
                />

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                        gap: 16,
                    }}
                >
                    {features.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={i}
                                className="glass-card"
                                style={{
                                    borderRadius: 16,
                                    padding: 28,
                                    textAlign: "center",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <div
                                    style={{
                                        width: 56,
                                        height: 56,
                                        borderRadius: 16,
                                        background: "rgba(204, 255, 0, 0.06)",
                                        border: "1px solid rgba(204, 255, 0, 0.12)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: 18,
                                    }}
                                >
                                    <Icon size={24} color="#CCFF00" />
                                </div>
                                <h4
                                    style={{
                                        fontFamily: "'Outfit', sans-serif",
                                        fontSize: 16,
                                        fontWeight: 700,
                                        color: "#fff",
                                        marginBottom: 8,
                                    }}
                                >
                                    {feature.title}
                                </h4>
                                <p
                                    style={{
                                        fontSize: 13,
                                        lineHeight: 1.6,
                                        color: "rgba(255,255,255,0.45)",
                                    }}
                                >
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
