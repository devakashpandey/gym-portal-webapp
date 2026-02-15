"use client";

import Image from "next/image";
import { useState } from "react";
import { Expand, X } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

const images = [
    {
        src: "/images/hero-bg.png",
        title: "Main Training Floor",
        category: "Equipment",
    },
    {
        src: "/images/gallery-1.png",
        title: "Cardio Zone",
        category: "Cardio",
    },
    {
        src: "/images/gallery-2.png",
        title: "Free Weights Area",
        category: "Weights",
    },
    {
        src: "/images/gallery-3.png",
        title: "Yoga & Wellness Studio",
        category: "Yoga",
    },
    {
        src: "/images/gallery-4.png",
        title: "Boxing Ring & MMA Area",
        category: "Boxing",
    },
    {
        src: "/images/gallery-1.png",
        title: "Spin Studio",
        category: "Cardio",
    },
];

const categories = ["All", "Equipment", "Cardio", "Weights", "Yoga", "Boxing"];

export default function GallerySection() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [lightbox, setLightbox] = useState<number | null>(null);

    const filtered =
        selectedCategory === "All"
            ? images
            : images.filter((img) => img.category === selectedCategory);

    return (
        <section
            id="gallery"
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
                    subtitle="Our Facility"
                    title={<>Explore Our <span className="gradient-text">Gym</span></>}
                    outlineText="Gallery"
                    description="Take a virtual tour of our world-class facility featuring state-of-the-art equipment and premium training spaces."
                />

                {/* Category Filters */}
                <div
                    style={{
                        display: "flex",
                        gap: 8,
                        marginBottom: 40,
                        justifyContent: "center",
                        flexWrap: "wrap",
                    }}
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            style={{
                                padding: "8px 20px",
                                borderRadius: 50,
                                border: "none",
                                cursor: "pointer",
                                fontSize: 12,
                                fontWeight: 600,
                                letterSpacing: "0.5px",
                                textTransform: "uppercase",
                                background:
                                    selectedCategory === cat
                                        ? "#CCFF00"
                                        : "rgba(255,255,255,0.04)",
                                color:
                                    selectedCategory === cat
                                        ? "#0a0a0a"
                                        : "rgba(255,255,255,0.5)",
                                transition: "all 0.3s",
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div
                    className="gallery-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gap: 16,
                    }}
                >
                    {filtered.map((img, i) => (
                        <div
                            key={i}
                            className="gallery-item"
                            onClick={() => setLightbox(i)}
                            style={{
                                position: "relative",
                                aspectRatio: i === 0 || i === 3 ? "16/10" : "4/3",
                                borderRadius: 16,
                                overflow: "hidden",
                                cursor: "pointer",
                                gridColumn:
                                    i === 0 ? "1 / 3" : i === 3 ? "2 / 4" : "auto",
                            }}
                        >
                            <Image
                                src={img.src}
                                alt={img.title}
                                fill
                                style={{
                                    objectFit: "cover",
                                    transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                                }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background:
                                        "linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 50%)",
                                    opacity: 0,
                                    transition: "opacity 0.3s",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.opacity = "1";
                                    const img = e.currentTarget
                                        .previousElementSibling as HTMLElement;
                                    if (img) img.style.transform = "scale(1.05)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.opacity = "0";
                                    const img = e.currentTarget
                                        .previousElementSibling as HTMLElement;
                                    if (img) img.style.transform = "scale(1)";
                                }}
                            >
                                <div
                                    style={{
                                        position: "absolute",
                                        bottom: 20,
                                        left: 20,
                                        right: 20,
                                        display: "flex",
                                        alignItems: "flex-end",
                                        justifyContent: "space-between",
                                    }}
                                >
                                    <div>
                                        <span
                                            style={{
                                                fontSize: 10,
                                                fontWeight: 600,
                                                letterSpacing: "1.5px",
                                                textTransform: "uppercase",
                                                color: "#CCFF00",
                                            }}
                                        >
                                            {img.category}
                                        </span>
                                        <h4
                                            style={{
                                                fontFamily: "'Outfit', sans-serif",
                                                fontSize: 18,
                                                fontWeight: 700,
                                                color: "#fff",
                                                marginTop: 4,
                                            }}
                                        >
                                            {img.title}
                                        </h4>
                                    </div>
                                    <div
                                        style={{
                                            width: 36,
                                            height: 36,
                                            borderRadius: "50%",
                                            background: "rgba(204, 255, 0, 0.2)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Expand size={14} color="#CCFF00" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightbox !== null && (
                <div
                    onClick={() => setLightbox(null)}
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 9999,
                        background: "rgba(0,0,0,0.95)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: 40,
                    }}
                >
                    <button
                        onClick={() => setLightbox(null)}
                        style={{
                            position: "absolute",
                            top: 24,
                            right: 24,
                            background: "none",
                            border: "none",
                            color: "#fff",
                            cursor: "pointer",
                        }}
                    >
                        <X size={32} />
                    </button>
                    <div
                        style={{
                            position: "relative",
                            width: "100%",
                            maxWidth: 900,
                            aspectRatio: "16/10",
                            borderRadius: 16,
                            overflow: "hidden",
                        }}
                    >
                        <Image
                            src={filtered[lightbox]?.src || ""}
                            alt={filtered[lightbox]?.title || ""}
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>
            )}

            <style jsx>{`
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
          }
          .gallery-item {
            grid-column: auto !important;
          }
        }
      `}</style>
        </section>
    );
}
