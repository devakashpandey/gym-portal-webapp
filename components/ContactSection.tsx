"use client";

import { useState } from "react";
import {
    Send,
    MapPin,
    Phone,
    Mail,
    Clock,
    MessageSquare,
    User,
    AtSign,
} from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: "Visit Us",
            lines: ["123 Fitness Avenue", "Downtown, NY 10001"],
            color: "#CCFF00",
        },
        {
            icon: Phone,
            title: "Call Us",
            lines: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
            color: "#4ECDC4",
        },
        {
            icon: Mail,
            title: "Email Us",
            lines: ["info@suspendedgym.com", "support@suspendedgym.com"],
            color: "#F39C12",
        },
        {
            icon: Clock,
            title: "Working Hours",
            lines: ["Mon-Fri: 5AM - 11PM", "Sat-Sun: 7AM - 9PM"],
            color: "#9B59B6",
        },
    ];

    return (
        <section
            id="contact"
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

            <div style={{ maxWidth: 1280, margin: "0 auto" }}>
                <SectionHeader
                    subtitle="Get In Touch"
                    title={<>Contact <span className="gradient-text">Us</span></>}
                    outlineText="CONTACT"
                    description="Have a question? Want to book a free trial? Reach out and our team will get back to you within 24 hours."
                />

                {/* Contact Info Cards */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                        gap: 16,
                        marginBottom: 56,
                    }}
                >
                    {contactInfo.map((info, i) => {
                        const Icon = info.icon;
                        return (
                            <div
                                key={i}
                                className="glass-card"
                                style={{ borderRadius: 16, padding: 28 }}
                            >
                                <div
                                    style={{
                                        width: 44,
                                        height: 44,
                                        borderRadius: 12,
                                        background: `${info.color}15`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        marginBottom: 16,
                                    }}
                                >
                                    <Icon size={20} color={info.color} />
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
                                    {info.title}
                                </h4>
                                {info.lines.map((line, li) => (
                                    <p
                                        key={li}
                                        style={{
                                            fontSize: 13,
                                            color: "rgba(255,255,255,0.5)",
                                            lineHeight: 1.8,
                                        }}
                                    >
                                        {line}
                                    </p>
                                ))}
                            </div>
                        );
                    })}
                </div>

                {/* Form + Map */}
                <div
                    className="contact-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: 32,
                    }}
                >
                    {/* Form */}
                    <div
                        className="glass-card"
                        style={{ borderRadius: 20, padding: 40 }}
                    >
                        <h3
                            style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: 24,
                                fontWeight: 700,
                                color: "#fff",
                                marginBottom: 8,
                            }}
                        >
                            Send Us a Message
                        </h3>
                        <p
                            style={{
                                fontSize: 14,
                                color: "rgba(255,255,255,0.4)",
                                marginBottom: 32,
                            }}
                        >
                            Fill out the form and we'll be in touch shortly.
                        </p>

                        <form onSubmit={handleSubmit}>
                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: 16,
                                    marginBottom: 16,
                                }}
                            >
                                {/* Name */}
                                <div style={{ position: "relative" }}>
                                    <User
                                        size={14}
                                        color="rgba(255,255,255,0.3)"
                                        style={{
                                            position: "absolute",
                                            left: 16,
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                        }}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData({ ...formData, name: e.target.value })
                                        }
                                        required
                                        style={{
                                            width: "100%",
                                            padding: "14px 16px 14px 40px",
                                            borderRadius: 12,
                                            border: "1px solid rgba(255,255,255,0.08)",
                                            background: "rgba(255,255,255,0.03)",
                                            color: "#fff",
                                            fontSize: 14,
                                            outline: "none",
                                        }}
                                    />
                                </div>

                                {/* Email */}
                                <div style={{ position: "relative" }}>
                                    <AtSign
                                        size={14}
                                        color="rgba(255,255,255,0.3)"
                                        style={{
                                            position: "absolute",
                                            left: 16,
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                        }}
                                    />
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData({ ...formData, email: e.target.value })
                                        }
                                        required
                                        style={{
                                            width: "100%",
                                            padding: "14px 16px 14px 40px",
                                            borderRadius: 12,
                                            border: "1px solid rgba(255,255,255,0.08)",
                                            background: "rgba(255,255,255,0.03)",
                                            color: "#fff",
                                            fontSize: 14,
                                            outline: "none",
                                        }}
                                    />
                                </div>
                            </div>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: 16,
                                    marginBottom: 16,
                                }}
                            >
                                {/* Phone */}
                                <div style={{ position: "relative" }}>
                                    <Phone
                                        size={14}
                                        color="rgba(255,255,255,0.3)"
                                        style={{
                                            position: "absolute",
                                            left: 16,
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                        }}
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={(e) =>
                                            setFormData({ ...formData, phone: e.target.value })
                                        }
                                        style={{
                                            width: "100%",
                                            padding: "14px 16px 14px 40px",
                                            borderRadius: 12,
                                            border: "1px solid rgba(255,255,255,0.08)",
                                            background: "rgba(255,255,255,0.03)",
                                            color: "#fff",
                                            fontSize: 14,
                                            outline: "none",
                                        }}
                                    />
                                </div>

                                {/* Subject */}
                                <div style={{ position: "relative" }}>
                                    <MessageSquare
                                        size={14}
                                        color="rgba(255,255,255,0.3)"
                                        style={{
                                            position: "absolute",
                                            left: 16,
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                        }}
                                    />
                                    <select
                                        value={formData.subject}
                                        onChange={(e) =>
                                            setFormData({ ...formData, subject: e.target.value })
                                        }
                                        style={{
                                            width: "100%",
                                            padding: "14px 16px 14px 40px",
                                            borderRadius: 12,
                                            border: "1px solid rgba(255,255,255,0.08)",
                                            background: "rgba(255,255,255,0.03)",
                                            color: formData.subject
                                                ? "#fff"
                                                : "rgba(255,255,255,0.4)",
                                            fontSize: 14,
                                            outline: "none",
                                            appearance: "none",
                                            cursor: "pointer",
                                        }}
                                    >
                                        <option value="" style={{ background: "#111" }}>
                                            Select Subject
                                        </option>
                                        <option value="membership" style={{ background: "#111" }}>
                                            Membership Inquiry
                                        </option>
                                        <option value="training" style={{ background: "#111" }}>
                                            Personal Training
                                        </option>
                                        <option value="classes" style={{ background: "#111" }}>
                                            Class Information
                                        </option>
                                        <option value="other" style={{ background: "#111" }}>
                                            Other
                                        </option>
                                    </select>
                                </div>
                            </div>

                            {/* Message */}
                            <textarea
                                placeholder="Your Message..."
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({ ...formData, message: e.target.value })
                                }
                                rows={4}
                                required
                                style={{
                                    width: "100%",
                                    padding: "14px 16px",
                                    borderRadius: 12,
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    background: "rgba(255,255,255,0.03)",
                                    color: "#fff",
                                    fontSize: 14,
                                    outline: "none",
                                    resize: "vertical",
                                    marginBottom: 24,
                                    fontFamily: "inherit",
                                }}
                            />

                            <button
                                type="submit"
                                className="btn-lime"
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: 8,
                                }}
                            >
                                {submitted ? "✓ Message Sent!" : "Send Message"}
                                {!submitted && <Send size={16} />}
                            </button>
                        </form>
                    </div>

                    {/* Map */}
                    <div
                        style={{
                            borderRadius: 20,
                            overflow: "hidden",
                            border: "1px solid rgba(255,255,255,0.06)",
                            minHeight: 500,
                            position: "relative",
                        }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.182919!2d-73.985428!3d40.758896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1"
                            width="100%"
                            height="100%"
                            style={{
                                border: 0,
                                filter: "invert(90%) hue-rotate(180deg) grayscale(30%)",
                                position: "absolute",
                                inset: 0,
                            }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    .contact-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .glass-card {
                        padding: 32px 20px !important;
                    }
                    div[style*="minHeight: 500"] {
                        min-height: 350px !important;
                    }
                }
                @media (max-width: 480px) {
                    div[style*="display: grid; grid-template-columns: 1fr 1fr"] {
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
