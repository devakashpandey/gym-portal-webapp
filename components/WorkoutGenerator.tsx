"use client";

import { useState } from "react";
import {
    Target,
    Flame,
    Dumbbell,
    Heart,
    Zap,
    ChevronRight,
    ChevronLeft,
    RotateCcw,
    Trophy,
    Clock,
    Calendar,
    Sparkles,
    ArrowRight,
} from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

interface QuizOption {
    id: string;
    label: string;
    icon: React.ElementType;
    color: string;
    description: string;
}

interface QuizStep {
    question: string;
    subtitle: string;
    options: QuizOption[];
}

const quizSteps: QuizStep[] = [
    {
        question: "What's your primary fitness goal?",
        subtitle: "Choose what matters most to you",
        options: [
            {
                id: "weight-loss",
                label: "Lose Weight",
                icon: Flame,
                color: "#FF6B35",
                description: "Burn fat & get lean",
            },
            {
                id: "muscle-gain",
                label: "Build Muscle",
                icon: Dumbbell,
                color: "#CCFF00",
                description: "Gain size & strength",
            },
            {
                id: "endurance",
                label: "Boost Endurance",
                icon: Heart,
                color: "#E74C3C",
                description: "Improve stamina & cardio",
            },
            {
                id: "flexibility",
                label: "Stay Flexible",
                icon: Zap,
                color: "#9B59B6",
                description: "Mobility & recovery",
            },
        ],
    },
    {
        question: "What's your fitness experience?",
        subtitle: "Be honest — we'll tailor the plan for you",
        options: [
            {
                id: "beginner",
                label: "Beginner",
                icon: Sparkles,
                color: "#4ECDC4",
                description: "New to the gym",
            },
            {
                id: "intermediate",
                label: "Intermediate",
                icon: Target,
                color: "#F39C12",
                description: "1-2 years experience",
            },
            {
                id: "advanced",
                label: "Advanced",
                icon: Trophy,
                color: "#CCFF00",
                description: "3+ years training",
            },
            {
                id: "athlete",
                label: "Athlete",
                icon: Flame,
                color: "#E74C3C",
                description: "Competitive level",
            },
        ],
    },
    {
        question: "How many days can you train per week?",
        subtitle: "We'll build a schedule that fits your life",
        options: [
            {
                id: "2-3",
                label: "2-3 Days",
                icon: Calendar,
                color: "#3498DB",
                description: "Compact schedule",
            },
            {
                id: "3-4",
                label: "3-4 Days",
                icon: Calendar,
                color: "#4ECDC4",
                description: "Balanced routine",
            },
            {
                id: "4-5",
                label: "4-5 Days",
                icon: Calendar,
                color: "#F39C12",
                description: "Serious commitment",
            },
            {
                id: "6-7",
                label: "6-7 Days",
                icon: Calendar,
                color: "#CCFF00",
                description: "Beast mode",
            },
        ],
    },
    {
        question: "How long can each session be?",
        subtitle: "Every minute counts — we'll maximize it",
        options: [
            {
                id: "30",
                label: "30 Minutes",
                icon: Clock,
                color: "#3498DB",
                description: "Quick & efficient",
            },
            {
                id: "45",
                label: "45 Minutes",
                icon: Clock,
                color: "#4ECDC4",
                description: "Sweet spot",
            },
            {
                id: "60",
                label: "60 Minutes",
                icon: Clock,
                color: "#F39C12",
                description: "Standard session",
            },
            {
                id: "90",
                label: "90+ Minutes",
                icon: Clock,
                color: "#CCFF00",
                description: "Full commitment",
            },
        ],
    },
];

interface WorkoutPlan {
    title: string;
    tagline: string;
    program: string;
    schedule: string[];
    tips: string[];
    intensity: string;
    duration: string;
    color: string;
}

function generateWorkoutPlan(answers: string[]): WorkoutPlan {
    const [goal, level, days, duration] = answers;

    const plans: Record<string, WorkoutPlan> = {
        "weight-loss": {
            title: "Fat Shredder Protocol",
            tagline: "Torch calories and reveal your shredded physique",
            program: "HIIT & CrossFit",
            schedule:
                days === "2-3"
                    ? ["Mon: Full Body HIIT", "Wed: Cardio Circuit", "Fri: Core & Conditioning"]
                    : days === "3-4"
                        ? ["Mon: Upper HIIT", "Tue: Lower Circuit", "Thu: Full Body Burn", "Sat: Cardio Power"]
                        : days === "4-5"
                            ? ["Mon: HIIT Upper", "Tue: Cardio Circuit", "Wed: Rest", "Thu: Lower Burn", "Fri: Full Body HIIT"]
                            : ["Mon: HIIT", "Tue: Cardio", "Wed: Circuit", "Thu: Active Recovery", "Fri: Tabata", "Sat: Long Run"],
            tips: [
                "Maintain a calorie deficit of 300-500 cal/day",
                "Focus on compound movements for max calorie burn",
                "Include 2-3 cardio sessions per week",
                "Stay hydrated — aim for 3-4L water daily",
            ],
            intensity: level === "beginner" ? "Moderate" : level === "intermediate" ? "High" : "Extreme",
            duration: `${duration} min sessions`,
            color: "#FF6B35",
        },
        "muscle-gain": {
            title: "Hypertrophy Beast Mode",
            tagline: "Pack on serious size with strategic training splits",
            program: "Strength Training & Bodybuilding",
            schedule:
                days === "2-3"
                    ? ["Mon: Push (Chest/Shoulders/Tri)", "Wed: Pull (Back/Bi)", "Fri: Legs & Core"]
                    : days === "3-4"
                        ? ["Mon: Chest & Triceps", "Tue: Back & Biceps", "Thu: Legs", "Sat: Shoulders & Arms"]
                        : days === "4-5"
                            ? ["Mon: Chest", "Tue: Back", "Wed: Rest", "Thu: Shoulders & Arms", "Fri: Legs"]
                            : ["Mon: Chest", "Tue: Back", "Wed: Legs", "Thu: Shoulders", "Fri: Arms", "Sat: Weak Points"],
            tips: [
                "Eat in a calorie surplus of 300-500 cal/day",
                "Get 1.6-2.2g protein per kg body weight",
                "Progressive overload every session",
                "Sleep 7-9 hours for optimal recovery",
            ],
            intensity: level === "beginner" ? "Moderate" : level === "intermediate" ? "High" : "Extreme",
            duration: `${duration} min sessions`,
            color: "#CCFF00",
        },
        endurance: {
            title: "Cardio Warrior Program",
            tagline: "Build unstoppable stamina and cardiovascular power",
            program: "Cardio & Endurance",
            schedule:
                days === "2-3"
                    ? ["Mon: Interval Running", "Wed: Cycling + Core", "Fri: Swimming / Rowing"]
                    : days === "3-4"
                        ? ["Mon: Intervals", "Tue: Steady State", "Thu: Cross-Training", "Sat: Long Endurance"]
                        : days === "4-5"
                            ? ["Mon: Speed Work", "Tue: Endurance Run", "Wed: Rest", "Thu: Cross-Train", "Fri: Tempo Session"]
                            : ["Mon: Intervals", "Tue: Recovery Run", "Wed: Cross-Train", "Thu: Tempo", "Fri: Hill Training", "Sat: Long Run"],
            tips: [
                "Gradually increase distance by 10% weekly",
                "Incorporate zone 2 training for base building",
                "Fuel with complex carbs before sessions",
                "Don't skip recovery days — they build you up",
            ],
            intensity: level === "beginner" ? "Low-Moderate" : level === "intermediate" ? "Moderate-High" : "High",
            duration: `${duration} min sessions`,
            color: "#E74C3C",
        },
        flexibility: {
            title: "Flow & Mobility Protocol",
            tagline: "Unlock your body's full range and prevent injuries",
            program: "Yoga & Functional Training",
            schedule:
                days === "2-3"
                    ? ["Mon: Dynamic Yoga Flow", "Wed: Mobility Work", "Fri: Pilates + Stretch"]
                    : days === "3-4"
                        ? ["Mon: Vinyasa Flow", "Tue: Foam Rolling + Stretch", "Thu: Mobility Drills", "Sat: Restorative Yoga"]
                        : days === "4-5"
                            ? ["Mon: Power Yoga", "Tue: Mobility", "Wed: Rest", "Thu: Pilates", "Fri: Deep Stretch"]
                            : ["Mon: Vinyasa", "Tue: Mobility", "Wed: Pilates", "Thu: Yin Yoga", "Fri: Functional", "Sat: Restorative"],
            tips: [
                "Hold static stretches for 30-60 seconds",
                "Focus on breathing deeply during every movement",
                "Warm up dynamically before stretching",
                "Consistency matters more than intensity here",
            ],
            intensity: level === "beginner" ? "Light" : level === "intermediate" ? "Moderate" : "Moderate-High",
            duration: `${duration} min sessions`,
            color: "#9B59B6",
        },
    };

    return plans[goal] || plans["muscle-gain"];
}

export default function WorkoutGenerator() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [animating, setAnimating] = useState(false);

    const handleSelect = (optionId: string) => {
        setSelectedOption(optionId);
    };

    const handleNext = () => {
        if (!selectedOption) return;
        setAnimating(true);
        const newAnswers = [...answers, selectedOption];

        setTimeout(() => {
            setAnswers(newAnswers);
            if (currentStep < quizSteps.length - 1) {
                setCurrentStep(currentStep + 1);
                setSelectedOption(null);
            } else {
                setShowResult(true);
            }
            setAnimating(false);
        }, 300);
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setAnimating(true);
            setTimeout(() => {
                setCurrentStep(currentStep - 1);
                setAnswers(answers.slice(0, -1));
                setSelectedOption(answers[currentStep - 1] || null);
                setAnimating(false);
            }, 300);
        }
    };

    const handleRestart = () => {
        setAnimating(true);
        setTimeout(() => {
            setCurrentStep(0);
            setAnswers([]);
            setSelectedOption(null);
            setShowResult(false);
            setAnimating(false);
        }, 300);
    };

    const plan = showResult ? generateWorkoutPlan(answers) : null;

    return (
        <section
            id="workout-generator"
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
                    subtitle="Find Your Program"
                    title={
                        <>
                            Workout{" "}
                            <span className="gradient-text">Generator</span>
                        </>
                    }
                    outlineText="GENERATOR"
                    description="Answer 4 quick questions and get a personalized workout plan designed specifically for your goals, experience, and schedule."
                />

                {/* Progress Bar */}
                {!showResult && (
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            marginBottom: 48,
                            justifyContent: "center",
                        }}
                    >
                        {quizSteps.map((_, i) => (
                            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                <div
                                    style={{
                                        width: i <= currentStep ? 40 : 32,
                                        height: 4,
                                        borderRadius: 2,
                                        background:
                                            i < currentStep
                                                ? "#CCFF00"
                                                : i === currentStep
                                                    ? "linear-gradient(90deg, #CCFF00, #CCFF0066)"
                                                    : "rgba(255,255,255,0.1)",
                                        transition: "all 0.4s ease",
                                    }}
                                />
                            </div>
                        ))}
                        <span
                            style={{
                                fontSize: 12,
                                color: "rgba(255,255,255,0.4)",
                                marginLeft: 8,
                                fontWeight: 600,
                            }}
                        >
                            {currentStep + 1}/{quizSteps.length}
                        </span>
                    </div>
                )}

                {/* Quiz Card */}
                {!showResult ? (
                    <div
                        className="glass-card"
                        style={{
                            borderRadius: 24,
                            padding: "48px 40px",
                            opacity: animating ? 0 : 1,
                            transform: animating ? "translateX(-20px)" : "translateX(0)",
                            transition: "all 0.3s ease",
                        }}
                    >
                        <h3
                            style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: "clamp(22px, 4vw, 28px)",
                                fontWeight: 800,
                                color: "#fff",
                                marginBottom: 6,
                                textAlign: "center",
                            }}
                        >
                            {quizSteps[currentStep].question}
                        </h3>
                        <p
                            style={{
                                fontSize: 14,
                                color: "rgba(255,255,255,0.4)",
                                textAlign: "center",
                                marginBottom: 36,
                            }}
                        >
                            {quizSteps[currentStep].subtitle}
                        </p>

                        {/* Options */}
                        <div
                            className="quiz-options-grid"
                        >
                            {quizSteps[currentStep].options.map((option) => {
                                const Icon = option.icon;
                                const isSelected = selectedOption === option.id;
                                return (
                                    <button
                                        key={option.id}
                                        onClick={() => handleSelect(option.id)}
                                        style={{
                                            background: isSelected
                                                ? `${option.color}18`
                                                : "rgba(255,255,255,0.03)",
                                            border: `1.5px solid ${isSelected ? option.color : "rgba(255,255,255,0.08)"
                                                }`,
                                            borderRadius: 16,
                                            padding: "24px 16px",
                                            cursor: "pointer",
                                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            gap: 10,
                                            transform: isSelected ? "scale(1.03)" : "scale(1)",
                                            boxShadow: isSelected
                                                ? `0 8px 30px ${option.color}20`
                                                : "none",
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 48,
                                                height: 48,
                                                borderRadius: 14,
                                                background: `${option.color}15`,
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Icon
                                                size={22}
                                                color={isSelected ? option.color : "rgba(255,255,255,0.5)"}
                                            />
                                        </div>
                                        <span
                                            style={{
                                                fontFamily: "'Outfit', sans-serif",
                                                fontSize: 15,
                                                fontWeight: 700,
                                                color: isSelected ? "#fff" : "rgba(255,255,255,0.7)",
                                            }}
                                        >
                                            {option.label}
                                        </span>
                                        <span
                                            style={{
                                                fontSize: 11,
                                                color: isSelected
                                                    ? option.color
                                                    : "rgba(255,255,255,0.35)",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {option.description}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Navigation */}
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <button
                                onClick={handleBack}
                                disabled={currentStep === 0}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6,
                                    background: "none",
                                    border: "1px solid rgba(255,255,255,0.1)",
                                    color:
                                        currentStep === 0
                                            ? "rgba(255,255,255,0.2)"
                                            : "rgba(255,255,255,0.7)",
                                    cursor: currentStep === 0 ? "not-allowed" : "pointer",
                                    padding: "12px 24px",
                                    borderRadius: 12,
                                    fontSize: 14,
                                    fontWeight: 600,
                                    transition: "all 0.3s",
                                }}
                            >
                                <ChevronLeft size={16} /> Back
                            </button>

                            <button
                                onClick={handleNext}
                                disabled={!selectedOption}
                                className={selectedOption ? "btn-lime" : ""}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6,
                                    padding: "12px 28px",
                                    borderRadius: 12,
                                    fontSize: 14,
                                    fontWeight: 700,
                                    cursor: selectedOption ? "pointer" : "not-allowed",
                                    opacity: selectedOption ? 1 : 0.4,
                                    background: selectedOption ? "#CCFF00" : "rgba(255,255,255,0.05)",
                                    color: selectedOption ? "#0a0a0a" : "rgba(255,255,255,0.3)",
                                    border: "none",
                                    transition: "all 0.3s",
                                }}
                            >
                                {currentStep === quizSteps.length - 1 ? "Get My Plan" : "Next"}
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>
                ) : (
                    /* Results */
                    plan && (
                        <div
                            style={{
                                opacity: animating ? 0 : 1,
                                transform: animating ? "translateY(20px)" : "translateY(0)",
                                transition: "all 0.5s ease",
                            }}
                        >
                            {/* Result Header */}
                            <div
                                className="glass-card"
                                style={{
                                    borderRadius: 24,
                                    padding: "48px 40px",
                                    textAlign: "center",
                                    marginBottom: 20,
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                <div
                                    style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: 3,
                                        background: `linear-gradient(90deg, transparent, ${plan.color}, transparent)`,
                                    }}
                                />
                                <div
                                    style={{
                                        width: 72,
                                        height: 72,
                                        borderRadius: 20,
                                        background: `${plan.color}15`,
                                        border: `1px solid ${plan.color}30`,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        margin: "0 auto 20px",
                                    }}
                                >
                                    <Trophy size={32} color={plan.color} />
                                </div>
                                <h3
                                    style={{
                                        fontFamily: "'Outfit', sans-serif",
                                        fontSize: "clamp(24px, 5vw, 32px)",
                                        fontWeight: 800,
                                        color: "#fff",
                                        marginBottom: 8,
                                    }}
                                >
                                    {plan.title}
                                </h3>
                                <p
                                    style={{
                                        fontSize: 15,
                                        color: "rgba(255,255,255,0.5)",
                                        marginBottom: 24,
                                    }}
                                >
                                    {plan.tagline}
                                </p>

                                {/* Tags */}
                                <div
                                    style={{
                                        display: "flex",
                                        gap: 10,
                                        justifyContent: "center",
                                        flexWrap: "wrap",
                                    }}
                                >
                                    {[
                                        { label: plan.program, color: plan.color },
                                        { label: plan.intensity, color: "#F39C12" },
                                        { label: plan.duration, color: "#4ECDC4" },
                                    ].map((tag, i) => (
                                        <span
                                            key={i}
                                            style={{
                                                fontSize: 12,
                                                fontWeight: 600,
                                                padding: "6px 16px",
                                                borderRadius: 20,
                                                background: `${tag.color}15`,
                                                color: tag.color,
                                                border: `1px solid ${tag.color}25`,
                                            }}
                                        >
                                            {tag.label}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Schedule + Tips Grid */}
                            <div
                                className="result-grid-inner"
                            >
                                {/* Weekly Schedule */}
                                <div
                                    className="glass-card"
                                    style={{ borderRadius: 20, padding: 32 }}
                                >
                                    <h4
                                        style={{
                                            fontFamily: "'Outfit', sans-serif",
                                            fontSize: 18,
                                            fontWeight: 700,
                                            color: "#fff",
                                            marginBottom: 20,
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 8,
                                        }}
                                    >
                                        <Calendar size={18} color="#CCFF00" /> Weekly Schedule
                                    </h4>
                                    {plan.schedule.map((day, i) => (
                                        <div
                                            key={i}
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 12,
                                                padding: "12px 0",
                                                borderBottom:
                                                    i < plan.schedule.length - 1
                                                        ? "1px solid rgba(255,255,255,0.06)"
                                                        : "none",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: 6,
                                                    height: 6,
                                                    borderRadius: "50%",
                                                    background: plan.color,
                                                    flexShrink: 0,
                                                }}
                                            />
                                            <span
                                                style={{
                                                    fontSize: 14,
                                                    color: "rgba(255,255,255,0.7)",
                                                }}
                                            >
                                                {day}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Pro Tips */}
                                <div
                                    className="glass-card"
                                    style={{ borderRadius: 20, padding: 32 }}
                                >
                                    <h4
                                        style={{
                                            fontFamily: "'Outfit', sans-serif",
                                            fontSize: 18,
                                            fontWeight: 700,
                                            color: "#fff",
                                            marginBottom: 20,
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 8,
                                        }}
                                    >
                                        <Sparkles size={18} color="#F39C12" /> Pro Tips
                                    </h4>
                                    {plan.tips.map((tip, i) => (
                                        <div
                                            key={i}
                                            style={{
                                                display: "flex",
                                                gap: 12,
                                                padding: "12px 0",
                                                borderBottom:
                                                    i < plan.tips.length - 1
                                                        ? "1px solid rgba(255,255,255,0.06)"
                                                        : "none",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    fontSize: 12,
                                                    fontWeight: 800,
                                                    color: "#F39C12",
                                                    background: "rgba(243,156,18,0.1)",
                                                    borderRadius: 6,
                                                    width: 24,
                                                    height: 24,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    flexShrink: 0,
                                                }}
                                            >
                                                {i + 1}
                                            </span>
                                            <span
                                                style={{
                                                    fontSize: 14,
                                                    color: "rgba(255,255,255,0.6)",
                                                    lineHeight: 1.5,
                                                }}
                                            >
                                                {tip}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div
                                style={{
                                    display: "flex",
                                    gap: 12,
                                    justifyContent: "center",
                                    flexWrap: "wrap",
                                }}
                            >
                                <button
                                    onClick={handleRestart}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 8,
                                        background: "none",
                                        border: "1px solid rgba(255,255,255,0.15)",
                                        color: "rgba(255,255,255,0.7)",
                                        cursor: "pointer",
                                        padding: "14px 28px",
                                        borderRadius: 50,
                                        fontSize: 14,
                                        fontWeight: 600,
                                        transition: "all 0.3s",
                                    }}
                                >
                                    <RotateCcw size={16} /> Retake Quiz
                                </button>
                                <a
                                    href="#pricing"
                                    className="btn-lime"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: 8,
                                        textDecoration: "none",
                                        fontSize: 14,
                                    }}
                                >
                                    Start This Plan <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    )
                )}
            </div>

            <style jsx>{`
                .quiz-options-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                    gap: 14px;
                    margin-bottom: 40px;
                }
                .result-grid-inner {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    margin-bottom: 24px;
                }
                @media (max-width: 640px) {
                    .quiz-options-grid {
                        grid-template-columns: 1fr !important;
                    }
                    .result-grid-inner {
                        grid-template-columns: 1fr !important;
                    }
                    .glass-card {
                        padding: 32px 16px !important;
                    }
                }
            `}</style>
        </section>
    );
}
