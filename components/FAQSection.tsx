"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const faqs = [
    {
        question: "What are your operating hours?",
        answer:
            "We are open 24/7 for Pro and Elite members! Starter members can access the gym from 5 AM to 11 PM on weekdays and 7 AM to 9 PM on weekends. Our reception desk is staffed from 6 AM to 10 PM daily.",
    },
    {
        question: "Do you offer a free trial?",
        answer:
            "Yes! We offer a complimentary 7-day free trial for all new members. This includes full access to the gym floor, one group class, and a fitness assessment with one of our certified trainers.",
    },
    {
        question: "Can I freeze my membership?",
        answer:
            "Absolutely. You can freeze your membership for up to 3 months per year at no extra cost. Perfect for vacations, injuries, or any time you need a break. Just notify us 48 hours in advance.",
    },
    {
        question: "Do you provide personal training?",
        answer:
            "Yes, we have a team of certified personal trainers available for one-on-one sessions. PT sessions can be booked individually or come included with Pro (2/month) and Elite (8/month) memberships.",
    },
    {
        question: "Is there parking available?",
        answer:
            "We offer free underground parking with over 200 spots for members. There's also bike storage and we're conveniently located near public transit stops.",
    },
    {
        question: "What should I bring for my first visit?",
        answer:
            "Just bring a valid photo ID, comfortable workout clothes, and athletic shoes. We provide fresh towels, water stations, and lockers. Showers with premium toiletries are also available.",
    },
    {
        question: "Do you offer group classes?",
        answer:
            "We offer 50+ group classes per week including HIIT, Yoga, CrossFit, Boxing, Spin, Pilates, Dance Fitness, and more. Pro members get unlimited classes, while Starter members get 2 per week.",
    },
    {
        question: "What is your cancellation policy?",
        answer:
            "All memberships are month-to-month with no long-term contracts. You can cancel anytime with 30 days notice. We also offer a 30-day money-back guarantee for new members.",
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

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

            <div style={{ maxWidth: 800, margin: "0 auto" }}>
                <SectionHeader
                    subtitle="FAQ"
                    title={<>Frequently Asked <span className="gradient-text">Questions</span></>}
                    outlineText="Questions"
                    description="Everything you need to know about our gym, memberships, and services."
                />

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="glass-card"
                            style={{
                                borderRadius: 14,
                                overflow: "hidden",
                                cursor: "pointer",
                            }}
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        >
                            <div
                                style={{
                                    padding: "20px 24px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    gap: 16,
                                }}
                            >
                                <h4
                                    style={{
                                        fontFamily: "'Outfit', sans-serif",
                                        fontSize: 16,
                                        fontWeight: 600,
                                        color:
                                            openIndex === i ? "#CCFF00" : "#fff",
                                        transition: "color 0.3s",
                                    }}
                                >
                                    {faq.question}
                                </h4>
                                <div
                                    style={{
                                        width: 32,
                                        height: 32,
                                        borderRadius: 8,
                                        background:
                                            openIndex === i
                                                ? "rgba(204, 255, 0, 0.15)"
                                                : "rgba(255,255,255,0.04)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexShrink: 0,
                                        transition: "all 0.3s",
                                    }}
                                >
                                    {openIndex === i ? (
                                        <ChevronUp size={16} color="#CCFF00" />
                                    ) : (
                                        <ChevronDown
                                            size={16}
                                            color="rgba(255,255,255,0.4)"
                                        />
                                    )}
                                </div>
                            </div>

                            <div
                                style={{
                                    maxHeight: openIndex === i ? 200 : 0,
                                    overflow: "hidden",
                                    transition:
                                        "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                }}
                            >
                                <p
                                    style={{
                                        padding: "0 24px 20px",
                                        fontSize: 14,
                                        lineHeight: 1.7,
                                        color: "rgba(255,255,255,0.5)",
                                    }}
                                >
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
