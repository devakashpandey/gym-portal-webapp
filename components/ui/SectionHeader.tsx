"use client";

import React from "react";

interface SectionHeaderProps {
    subtitle: string;
    title: React.ReactNode;
    outlineText: string;
    description?: string;
    center?: boolean;
}

export default function SectionHeader({
    subtitle,
    title,
    outlineText,
    description,
    center = true,
}: SectionHeaderProps) {
    return (
        <div
            style={{
                textAlign: center ? "center" : "left",
                marginBottom: 64,
                display: "flex",
                flexDirection: "column",
                alignItems: center ? "center" : "flex-start",
                position: "relative",
            }}
        >
            <span className="section-subtitle">{subtitle}</span>

            <div
                className="section-title-wrapper"
                style={{
                    position: "relative",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: center ? "center" : "flex-start",
                    padding: "20px 0"
                }}
            >
                <div
                    className="section-outline-text"
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: center ? "50%" : "0",
                        transform: center ? "translate(-50%, -50%)" : "translateY(-50%)",
                        zIndex: 0,
                    }}
                >
                    {outlineText}
                </div>
                <h2
                    className="section-title"
                    style={{
                        position: "relative",
                        zIndex: 1,
                        margin: 0
                    }}
                >
                    {title}
                </h2>
            </div>

            {description && (
                <p
                    className="section-description"
                    style={{
                        margin: center ? "0 auto" : "0",
                        marginTop: 16,
                        position: "relative",
                        zIndex: 2
                    }}
                >
                    {description}
                </p>
            )}
        </div>
    );
}
