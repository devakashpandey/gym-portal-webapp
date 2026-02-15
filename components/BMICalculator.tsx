"use client";

import { useState } from "react";
import { Calculator, Activity, Scale, TrendingUp } from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

export default function BMICalculator() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState<"male" | "female">("male");
    const [result, setResult] = useState<{
        bmi: number;
        category: string;
        color: string;
        message: string;
    } | null>(null);

    const calculateBMI = () => {
        const w = parseFloat(weight);
        const h = parseFloat(height) / 100; // cm to m
        if (!w || !h) return;

        const bmi = w / (h * h);
        let category = "";
        let color = "";
        let message = "";

        if (bmi < 18.5) {
            category = "Underweight";
            color = "#3498DB";
            message =
                "You may need to gain some weight. Consider our Strength Training & Nutrition programs.";
        } else if (bmi < 25) {
            category = "Normal Weight";
            color = "#CCFF00";
            message =
                "Great job! You're at a healthy weight. Maintain it with our balanced programs.";
        } else if (bmi < 30) {
            category = "Overweight";
            color = "#F39C12";
            message =
                "Consider our HIIT & Cardio programs to shed some extra weight.";
        } else {
            category = "Obese";
            color = "#E74C3C";
            message =
                "We recommend starting with our guided personal training sessions for safe, effective results.";
        }

        setResult({ bmi: Math.round(bmi * 10) / 10, category, color, message });
    };

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

            <div style={{ maxWidth: 900, margin: "0 auto" }}>
                <SectionHeader
                    subtitle="Fitness Tool"
                    title={<>BMI <span className="gradient-text">Calculator</span></>}
                    outlineText="Health"
                    description="Calculate your Body Mass Index to understand your current fitness level and get personalized recommendations."
                />

                <div
                    className="glass-card"
                    style={{
                        borderRadius: 24,
                        padding: 48,
                        display: "grid",
                        gridTemplateColumns: result ? "1fr 1fr" : "1fr",
                        gap: 48,
                    }}
                >
                    {/* Form */}
                    <div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                                marginBottom: 32,
                            }}
                        >
                            <div
                                style={{
                                    width: 48,
                                    height: 48,
                                    borderRadius: 14,
                                    background: "rgba(204, 255, 0, 0.1)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Calculator size={22} color="#CCFF00" />
                            </div>
                            <div>
                                <h3
                                    style={{
                                        fontFamily: "'Outfit', sans-serif",
                                        fontSize: 20,
                                        fontWeight: 700,
                                        color: "#fff",
                                    }}
                                >
                                    Enter Your Details
                                </h3>
                                <p
                                    style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}
                                >
                                    All fields are required
                                </p>
                            </div>
                        </div>

                        {/* Gender */}
                        <div style={{ marginBottom: 20 }}>
                            <label
                                style={{
                                    fontSize: 12,
                                    fontWeight: 600,
                                    textTransform: "uppercase",
                                    letterSpacing: "1px",
                                    color: "rgba(255,255,255,0.5)",
                                    marginBottom: 8,
                                    display: "block",
                                }}
                            >
                                Gender
                            </label>
                            <div style={{ display: "flex", gap: 8 }}>
                                {(["male", "female"] as const).map((g) => (
                                    <button
                                        key={g}
                                        onClick={() => setGender(g)}
                                        style={{
                                            flex: 1,
                                            padding: "12px",
                                            borderRadius: 12,
                                            border:
                                                gender === g
                                                    ? "1px solid rgba(204, 255, 0, 0.4)"
                                                    : "1px solid rgba(255,255,255,0.06)",
                                            background:
                                                gender === g
                                                    ? "rgba(204, 255, 0, 0.08)"
                                                    : "rgba(255,255,255,0.02)",
                                            color:
                                                gender === g ? "#CCFF00" : "rgba(255,255,255,0.5)",
                                            cursor: "pointer",
                                            fontSize: 13,
                                            fontWeight: 600,
                                            textTransform: "capitalize",
                                            transition: "all 0.3s",
                                        }}
                                    >
                                        {g}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Inputs */}
                        {[
                            {
                                label: "Age",
                                value: age,
                                setter: setAge,
                                unit: "Years",
                                placeholder: "25",
                            },
                            {
                                label: "Weight",
                                value: weight,
                                setter: setWeight,
                                unit: "KG",
                                placeholder: "70",
                            },
                            {
                                label: "Height",
                                value: height,
                                setter: setHeight,
                                unit: "CM",
                                placeholder: "175",
                            },
                        ].map((field) => (
                            <div key={field.label} style={{ marginBottom: 16 }}>
                                <label
                                    style={{
                                        fontSize: 12,
                                        fontWeight: 600,
                                        textTransform: "uppercase",
                                        letterSpacing: "1px",
                                        color: "rgba(255,255,255,0.5)",
                                        marginBottom: 8,
                                        display: "block",
                                    }}
                                >
                                    {field.label}
                                </label>
                                <div style={{ position: "relative" }}>
                                    <input
                                        type="number"
                                        value={field.value}
                                        onChange={(e) => field.setter(e.target.value)}
                                        placeholder={field.placeholder}
                                        style={{
                                            width: "100%",
                                            padding: "14px 60px 14px 16px",
                                            borderRadius: 12,
                                            border: "1px solid rgba(255,255,255,0.08)",
                                            background: "rgba(255,255,255,0.03)",
                                            color: "#fff",
                                            fontSize: 15,
                                            outline: "none",
                                            transition: "border 0.3s",
                                        }}
                                        onFocus={(e) =>
                                        (e.currentTarget.style.borderColor =
                                            "rgba(204, 255, 0, 0.3)")
                                        }
                                        onBlur={(e) =>
                                        (e.currentTarget.style.borderColor =
                                            "rgba(255,255,255,0.08)")
                                        }
                                    />
                                    <span
                                        style={{
                                            position: "absolute",
                                            right: 16,
                                            top: "50%",
                                            transform: "translateY(-50%)",
                                            fontSize: 12,
                                            fontWeight: 600,
                                            color: "rgba(255,255,255,0.3)",
                                        }}
                                    >
                                        {field.unit}
                                    </span>
                                </div>
                            </div>
                        ))}

                        <button
                            onClick={calculateBMI}
                            className="btn-lime"
                            style={{
                                width: "100%",
                                marginTop: 8,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 8,
                            }}
                        >
                            <Activity size={18} />
                            Calculate BMI
                        </button>
                    </div>

                    {/* Result */}
                    {result && (
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                            }}
                        >
                            {/* Circular Progress */}
                            <div
                                style={{
                                    width: 180,
                                    height: 180,
                                    borderRadius: "50%",
                                    border: `4px solid ${result.color}30`,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: 24,
                                    position: "relative",
                                }}
                            >
                                <div
                                    style={{
                                        position: "absolute",
                                        inset: -4,
                                        borderRadius: "50%",
                                        border: `4px solid transparent`,
                                        borderTopColor: result.color,
                                        borderRightColor: result.color,
                                        animation: "spin 1s ease-out",
                                    }}
                                />
                                <span
                                    style={{
                                        fontFamily: "'Outfit', sans-serif",
                                        fontSize: 48,
                                        fontWeight: 900,
                                        color: result.color,
                                    }}
                                >
                                    {result.bmi}
                                </span>
                                <span
                                    style={{
                                        fontSize: 12,
                                        fontWeight: 600,
                                        textTransform: "uppercase",
                                        letterSpacing: "1px",
                                        color: "rgba(255,255,255,0.4)",
                                    }}
                                >
                                    BMI Score
                                </span>
                            </div>

                            <div
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 8,
                                    padding: "8px 20px",
                                    borderRadius: 50,
                                    background: `${result.color}15`,
                                    border: `1px solid ${result.color}30`,
                                    marginBottom: 16,
                                }}
                            >
                                <Scale size={14} color={result.color} />
                                <span
                                    style={{
                                        fontSize: 14,
                                        fontWeight: 700,
                                        color: result.color,
                                    }}
                                >
                                    {result.category}
                                </span>
                            </div>

                            <p
                                style={{
                                    fontSize: 14,
                                    lineHeight: 1.6,
                                    color: "rgba(255,255,255,0.5)",
                                    maxWidth: 300,
                                    marginBottom: 24,
                                }}
                            >
                                {result.message}
                            </p>

                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: 4,
                                    width: "100%",
                                    maxWidth: 280,
                                }}
                            >
                                {[
                                    { label: "Under", color: "#3498DB", range: "<18.5" },
                                    { label: "Normal", color: "#CCFF00", range: "18.5-25" },
                                    { label: "Over", color: "#F39C12", range: "25-30" },
                                    { label: "Obese", color: "#E74C3C", range: "30+" },
                                ].map((cat, ci) => (
                                    <div
                                        key={ci}
                                        style={{ flex: 1, textAlign: "center" }}
                                    >
                                        <div
                                            style={{
                                                height: 4,
                                                borderRadius: 2,
                                                background:
                                                    result.category.toLowerCase().includes(cat.label.toLowerCase())
                                                        ? cat.color
                                                        : `${cat.color}30`,
                                                marginBottom: 6,
                                            }}
                                        />
                                        <span
                                            style={{
                                                fontSize: 9,
                                                fontWeight: 600,
                                                color: "rgba(255,255,255,0.3)",
                                                textTransform: "uppercase",
                                                letterSpacing: "0.5px",
                                            }}
                                        >
                                            {cat.range}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @media (max-width: 768px) {
          .glass-card {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}
