"use client";

import { useState } from "react";
import {
    Check,
    X,
    Zap,
    Crown,
    Star,
    ArrowRight,
} from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const plans = [
    {
        name: "Starter",
        price: 1999,
        period: "/month",
        description: "Perfect for beginners looking to get started",
        icon: Zap,
        color: "#4ECDC4",
        popular: false,
        features: [
            { name: "Access to gym floor", included: true },
            { name: "Basic cardio equipment", included: true },
            { name: "Locker room access", included: true },
            { name: "Free Wi-Fi", included: true },
            { name: "2 Group classes/week", included: true },
            { name: "Personal training", included: false },
            { name: "Spa & sauna", included: false },
            { name: "Nutrition plan", included: false },
            { name: "24/7 access", included: false },
        ],
    },
    {
        name: "Pro",
        price: 3999,
        period: "/month",
        description: "Most popular plan for serious fitness enthusiasts",
        icon: Star,
        color: "#CCFF00",
        popular: true,
        features: [
            { name: "Full gym access", included: true },
            { name: "All equipment access", included: true },
            { name: "Locker room + towels", included: true },
            { name: "Free Wi-Fi", included: true },
            { name: "Unlimited group classes", included: true },
            { name: "2 PT sessions/month", included: true },
            { name: "Spa & sauna access", included: true },
            { name: "Basic nutrition plan", included: true },
            { name: "24/7 access", included: false },
        ],
    },
    {
        name: "Elite",
        price: 6499,
        period: "/month",
        description: "The ultimate package for peak performance",
        icon: Crown,
        color: "#F39C12",
        popular: false,
        features: [
            { name: "VIP full gym access", included: true },
            { name: "All equipment + priority", included: true },
            { name: "Premium locker + amenities", included: true },
            { name: "Free Wi-Fi & smoothie bar", included: true },
            { name: "Unlimited all classes", included: true },
            { name: "8 PT sessions/month", included: true },
            { name: "Full spa, sauna & pool", included: true },
            { name: "Custom nutrition plan", included: true },
            { name: "24/7 unlimited access", included: true },
        ],
    },
];

export default function PricingSection() {
    const [annual, setAnnual] = useState(false);

    return (
        <section
            id="pricing"
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
                    subtitle="Membership Plans"
                    title={<>Choose Your <span className="gradient-text">Plan</span></>}
                    outlineText="Pricing"
                    description="Flexible pricing to fit your lifestyle. No contracts, cancel anytime. Start with a free 7-day trial."
                />

                {/* Toggle */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 16,
                        marginBottom: 56,
                    }}
                >
                    <span
                        style={{
                            fontSize: 14,
                            fontWeight: 500,
                            color: !annual ? "#fff" : "rgba(255,255,255,0.4)",
                        }}
                    >
                        Monthly
                    </span>
                    <button
                        onClick={() => setAnnual(!annual)}
                        style={{
                            width: 56,
                            height: 28,
                            borderRadius: 14,
                            border: "none",
                            background: annual
                                ? "#CCFF00"
                                : "rgba(255,255,255,0.1)",
                            cursor: "pointer",
                            position: "relative",
                            transition: "background 0.3s",
                        }}
                    >
                        <div
                            style={{
                                width: 22,
                                height: 22,
                                borderRadius: "50%",
                                background: annual ? "#0a0a0a" : "#fff",
                                position: "absolute",
                                top: 3,
                                left: annual ? 31 : 3,
                                transition: "left 0.3s",
                            }}
                        />
                    </button>
                    <span
                        style={{
                            fontSize: 14,
                            fontWeight: 500,
                            color: annual ? "#fff" : "rgba(255,255,255,0.4)",
                        }}
                    >
                        Annual
                    </span>
                    {annual && (
                        <span
                            style={{
                                fontSize: 11,
                                fontWeight: 700,
                                padding: "4px 10px",
                                borderRadius: 20,
                                background: "rgba(204, 255, 0, 0.15)",
                                color: "#CCFF00",
                            }}
                        >
                            Save 20%
                        </span>
                    )}
                </div>

                {/* Plans Grid */}
                <div
                    className="pricing-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                        gap: 24,
                        alignItems: "start",
                    }}
                >
                    {plans.map((plan, i) => {
                        const Icon = plan.icon;
                        const displayPrice = annual
                            ? Math.round(plan.price * 0.8)
                            : plan.price;

                        return (
                            <div
                                key={i}
                                style={{
                                    borderRadius: 20,
                                    overflow: "hidden",
                                    background: plan.popular
                                        ? "rgba(204, 255, 0, 0.03)"
                                        : "rgba(255,255,255,0.02)",
                                    border: plan.popular
                                        ? "1px solid rgba(204, 255, 0, 0.2)"
                                        : "1px solid rgba(255,255,255,0.06)",
                                    position: "relative",
                                    transition: "all 0.4s",
                                    transform: plan.popular ? "scale(1.02)" : "scale(1)",
                                }}
                            >
                                {/* Popular badge */}
                                {plan.popular && (
                                    <div
                                        style={{
                                            background: "#CCFF00",
                                            color: "#0a0a0a",
                                            textAlign: "center",
                                            padding: "8px",
                                            fontSize: 12,
                                            fontWeight: 700,
                                            letterSpacing: "1px",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        ⚡ Most Popular
                                    </div>
                                )}

                                <div style={{ padding: "36px 32px" }}>
                                    {/* Plan header */}
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 12,
                                            marginBottom: 12,
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 44,
                                                height: 44,
                                                borderRadius: 12,
                                                background: `${plan.color}15`,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Icon size={20} color={plan.color} />
                                        </div>
                                        <h3
                                            style={{
                                                fontFamily: "'Outfit', sans-serif",
                                                fontSize: 22,
                                                fontWeight: 700,
                                                color: "#fff",
                                            }}
                                        >
                                            {plan.name}
                                        </h3>
                                    </div>

                                    <p
                                        style={{
                                            fontSize: 13,
                                            color: "rgba(255,255,255,0.45)",
                                            marginBottom: 24,
                                        }}
                                    >
                                        {plan.description}
                                    </p>

                                    {/* Price */}
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "baseline",
                                            gap: 4,
                                            marginBottom: 32,
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: "'Outfit', sans-serif",
                                                fontSize: 48,
                                                fontWeight: 900,
                                                color: plan.color,
                                            }}
                                        >
                                            ₹{displayPrice}
                                        </span>
                                        <span
                                            style={{
                                                fontSize: 14,
                                                color: "rgba(255,255,255,0.4)",
                                            }}
                                        >
                                            {plan.period}
                                        </span>
                                    </div>

                                    {/* Features */}
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 14,
                                            marginBottom: 32,
                                        }}
                                    >
                                        {plan.features.map((f, j) => (
                                            <div
                                                key={j}
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 12,
                                                }}
                                            >
                                                {f.included ? (
                                                    <div
                                                        style={{
                                                            width: 20,
                                                            height: 20,
                                                            borderRadius: "50%",
                                                            background: `${plan.color}20`,
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            flexShrink: 0,
                                                        }}
                                                    >
                                                        <Check size={12} color={plan.color} />
                                                    </div>
                                                ) : (
                                                    <div
                                                        style={{
                                                            width: 20,
                                                            height: 20,
                                                            borderRadius: "50%",
                                                            background: "rgba(255,255,255,0.04)",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            flexShrink: 0,
                                                        }}
                                                    >
                                                        <X
                                                            size={10}
                                                            color="rgba(255,255,255,0.2)"
                                                        />
                                                    </div>
                                                )}
                                                <span
                                                    style={{
                                                        fontSize: 14,
                                                        color: f.included
                                                            ? "rgba(255,255,255,0.7)"
                                                            : "rgba(255,255,255,0.25)",
                                                    }}
                                                >
                                                    {f.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <button
                                        style={{
                                            width: "100%",
                                            padding: "14px",
                                            borderRadius: 50,
                                            border: "none",
                                            cursor: "pointer",
                                            fontSize: 14,
                                            fontWeight: 700,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.5px",
                                            background: plan.popular
                                                ? "#CCFF00"
                                                : "rgba(255,255,255,0.06)",
                                            color: plan.popular ? "#0a0a0a" : "#fff",
                                            transition: "all 0.3s",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: 8,
                                        }}
                                    >
                                        Get Started <ArrowRight size={16} />
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <style jsx>{`
                @media (max-width: 768px) {
                    .pricing-grid {
                        grid-template-columns: 1fr !important;
                    }
                    div[style*="transform: scale(1.02)"] {
                        transform: scale(1) !important;
                    }
                }
                @media (max-width: 480px) {
                    section {
                        padding: 80px 16px !important;
                    }
                    div[style*="padding: 36px 32px"] {
                        padding: 32px 20px !important;
                    }
                }
            `}</style>
        </section>
    );
}
