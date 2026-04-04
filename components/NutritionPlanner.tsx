"use client";

import { useState, useRef, useEffect } from "react";
import { 
    Apple, 
    Zap, 
    Flame, 
    Dumbbell, 
    ChevronRight, 
    RotateCcw, 
    Utensils, 
    Target, 
    Scale, 
    ChevronLeft,
    CheckCircle2,
    Calendar,
    ArrowRight,
    Leaf,
    Beef
} from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

interface Meal {
    time: string;
    name: string;
    items: string[];
    macros: { p: number; c: number; f: number; cal: number };
}

interface NutritionPlan {
    goal: string;
    calories: number;
    macros: { protein: number; carbs: number; fats: number };
    meals: Meal[];
    tips: string[];
}

const quizSteps = [
    {
        id: "goal",
        question: "What is your primary nutrition goal?",
        options: [
            { id: "cutting", label: "Fat Loss / Cutting", icon: Flame, description: "Lose fat while maintaining muscle mass" },
            { id: "bulking", label: "Muscle Gain / Bulking", icon: Dumbbell, description: "Build muscle size and strength" },
            { id: "maintenance", label: "Maintain Fitness", icon: Zap, description: "Keep your current weight and improve health" },
        ],
    },
    {
        id: "dietType",
        question: "Your dietary preference?",
        options: [
            { id: "vegetarian", label: "Vegetarian", icon: Leaf, description: "Plant-based with dairy/eggs" },
            { id: "non-vegetarian", label: "Non-Vegetarian", icon: Beef, description: "Includes meat, poultry, and fish" },
        ],
    },
    {
        id: "activity",
        question: "How active are you daily?",
        options: [
            { id: "sedentary", label: "Sedentary", description: "Office job, little exercise" },
            { id: "light", label: "Lightly Active", description: "1-3 days exercise/week" },
            { id: "moderate", label: "Moderately Active", description: "3-5 days exercise/week" },
            { id: "active", label: "Very Active", description: "6-7 days hard exercise" },
        ],
    },
];

export default function NutritionPlanner() {
    const [step, setStep] = useState(0);
    const [selections, setSelections] = useState<Record<string, string>>({});
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [plan, setPlan] = useState<NutritionPlan | null>(null);
    const [analysisProgress, setAnalysisProgress] = useState(0);
    const [statusText, setStatusText] = useState("");

    const handleSelect = (stepId: string, optionId: string) => {
        setSelections(prev => ({ ...prev, [stepId]: optionId }));
        if (step < quizSteps.length - 1) {
            setStep(prev => prev + 1);
        } else {
            generatePlan();
        }
    };

    const generatePlan = () => {
        setIsAnalyzing(true);
        setAnalysisProgress(0);
        
        const statuses = [
            "Calculating Basal Metabolic Rate...",
            "Adjusting for TDEE & Activity Levels...",
            "Optimizing Macronutrient Ratios...",
            "Curating Chef-Recommended Meals...",
            "Finalizing Your Nutrition Blueprint..."
        ];

        let currentStatusIndex = 0;
        const interval = setInterval(() => {
            setAnalysisProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    renderResult();
                    return 100;
                }
                const next = prev + 1;
                if (next % 20 === 0 && currentStatusIndex < statuses.length - 1) {
                    currentStatusIndex++;
                    setStatusText(statuses[currentStatusIndex]);
                }
                return next;
            });
        }, 30);

        setStatusText(statuses[0]);
    };

    const renderResult = () => {
        const { goal, dietType } = selections;
        
        let calories = 2000;
        let protein = 150;
        let carbs = 200;
        let fats = 60;
        let meals: Meal[] = [];

        if (goal === "cutting") {
            calories = 1800; protein = 160; carbs = 150; fats = 55;
            meals = dietType === "vegetarian" ? [
                { time: "08:00 AM", name: "High-Protein Breakfast", items: ["Oatmeal with chia seeds", "Greek Yogurt (1 cup)", "Handful of Almonds"], macros: { p: 25, c: 45, f: 12, cal: 380 } },
                { time: "01:00 PM", name: "Lean Lunch", items: ["Grilled Paneer Salad", "Quinoa (1/2 cup)", "Sautéed Broccoli"], macros: { p: 30, c: 35, f: 15, cal: 400 } },
                { time: "05:00 PM", name: "Metabolism Snack", items: ["Protein Shake", "Green Apple"], macros: { p: 25, c: 20, f: 2, cal: 200 } },
                { time: "08:30 PM", name: "Light Dinner", items: ["Lentil Soup (Dal)", "Steam Tofu", "Roasted Asparagus"], macros: { p: 35, c: 30, f: 8, cal: 350 } },
            ] : [
                { time: "08:00 AM", name: "Protein Start", items: ["3 Egg White Omelet", "Whole Wheat Toast", "Black Coffee"], macros: { p: 25, c: 25, f: 8, cal: 270 } },
                { time: "01:00 PM", name: "Lean Gains Lunch", items: ["Grilled Chicken Breast (150g)", "Large Green Salad", "Small Sweet Potato"], macros: { p: 45, c: 30, f: 7, cal: 380 } },
                { time: "05:00 PM", name: "Power Snack", items: ["Tuna Can (in water)", "Few Walnuts"], macros: { p: 28, c: 2, f: 5, cal: 170 } },
                { time: "08:30 PM", name: "Recovery Dinner", items: ["Grilled Fish/Salmon", "Zucchini Noodles", "Lemon Garlic Dressing"], macros: { p: 40, c: 10, f: 15, cal: 340 } },
            ];
        } else if (goal === "bulking") {
            calories = 2800; protein = 180; carbs = 350; fats = 80;
            meals = dietType === "vegetarian" ? [
                { time: "07:30 AM", name: "Mass Gainer Breakfast", items: ["Large Bowl of Oats", "Peanut Butter (2 tsp)", "Banana & Protein milk"], macros: { p: 35, c: 80, f: 20, cal: 650 } },
                { time: "12:30 PM", name: "Anabolic Lunch", items: ["Chickpea Curry (large)", "Brown Rice (2 cups)", "Curd/Dahi"], macros: { p: 40, c: 90, f: 15, cal: 700 } },
                { time: "04:30 PM", name: "Bulking Snack", items: ["WHEY Protein Shake", "Peanut Butter Toast"], macros: { p: 30, c: 40, f: 12, cal: 420 } },
                { time: "08:30 PM", name: "Hearty Dinner", items: ["Paneer Bhurji (200g)", "3 Multi-grain Rotis", "Mixed Veggie Curry"], macros: { p: 45, c: 70, f: 22, cal: 750 } },
            ] : [
                { time: "07:30 AM", name: "Power Breakfast", items: ["4 Whole Eggs", "2 Slices Wheat Bread", "Large Smoothie"], macros: { p: 35, c: 50, f: 22, cal: 600 } },
                { time: "12:30 PM", name: "Mass Lunch", items: ["Chicken & Rice (250g Chicken)", "Avocado Slices", "Boiled Broccoli"], macros: { p: 60, c: 80, f: 18, cal: 720 } },
                { time: "04:30 PM", name: "High-Cal Snack", items: ["Greek Yogurt with Nuts", "Honey & Granola"], macros: { p: 25, c: 45, f: 15, cal: 400 } },
                { time: "08:30 PM", name: "Muscle Dinner", items: ["Lean Beef / Turkey Pasta", "Marinara Sauce", "Olive Oil drizzle"], macros: { p: 55, c: 90, f: 20, cal: 800 } },
            ];
        } else {
            meals = [
                { time: "08:00 AM", name: "Balanced Breakfast", items: ["Scrambled Eggs/Paneer", "Seasonal Fruit", "Green Tea"], macros: { p: 20, c: 30, f: 10, cal: 300 } },
                { time: "01:30 PM", name: "Healthy Lunch", items: ["Whole Wheat Roti/Wrap", "Mixed Lentils", "Curd & Salad"], macros: { p: 25, c: 50, f: 12, cal: 450 } },
                { time: "05:30 PM", name: "Evening Snack", items: ["Mixed Nuts", "A Glass of Milk/Shake"], macros: { p: 15, c: 15, f: 10, cal: 250 } },
                { time: "08:30 PM", name: "Clean Dinner", items: ["Grilled Protein", "Baked Veggies", "Small serving of Rice"], macros: { p: 35, c: 40, f: 10, cal: 400 } },
            ];
        }

        setPlan({
            goal: goal.charAt(0).toUpperCase() + goal.slice(1),
            calories,
            macros: { protein, carbs, fats },
            meals,
            tips: [
                "Drink at least 3.5 liters of water daily.",
                "Stick to whole foods 80% of the time.",
                "Try to eat matches meals at the same time daily.",
                "Prioritize sleep (7-8 hours) for recovery."
            ]
        });
        setIsAnalyzing(false);
    };

    const handleRestart = () => {
        setStep(0);
        setSelections({});
        setPlan(null);
    };

    return (
        <section id="nutrition-planner" style={{ padding: "120px 24px", background: "#080808", overflow: "hidden" }}>
            <div style={{ maxWidth: 1000, margin: "0 auto" }}>
                <SectionHeader 
                    subtitle="Fuel Your Gains"
                    title={<>Nutrition <span className="gradient-text">Planner</span></>}
                    outlineText="DIET"
                    description="Your transformations starts in the kitchen. Get a customized meal plan tailored to your physique goals and dietary preferences."
                />

                {!plan && !isAnalyzing ? (
                    <div className="glass-card" style={{ borderRadius: 24, padding: "48px 32px", position: "relative" }}>
                        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 32 }}>
                            {quizSteps.map((_, i) => (
                                <div 
                                    key={i} 
                                    style={{ 
                                        height: 4, 
                                        width: 40, 
                                        borderRadius: 2, 
                                        background: i <= step ? "#CCFF00" : "rgba(255,255,255,0.1)",
                                        transition: "all 0.3s"
                                    }} 
                                />
                            ))}
                        </div>

                        <div style={{ textAlign: "center", marginBottom: 40 }}>
                            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 12 }}>
                                {quizSteps[step].question}
                            </h3>
                        </div>

                        <div className="options-container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
                            {quizSteps[step].options.map((opt: any) => {
                                const Icon = opt.icon || ChevronRight;
                                return (
                                    <button
                                        key={opt.id}
                                        onClick={() => handleSelect(quizSteps[step].id, opt.id)}
                                        className="quiz-option"
                                        style={{
                                            background: "rgba(255,255,255,0.03)",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                            borderRadius: 16,
                                            padding: "24px",
                                            textAlign: "left",
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 20,
                                            transition: "all 0.3s"
                                        }}
                                    >
                                        <div style={{ 
                                            width: 50, 
                                            height: 50, 
                                            borderRadius: 12, 
                                            background: "rgba(204,255,0,0.1)", 
                                            display: "flex", 
                                            alignItems: "center", 
                                            justifyContent: "center",
                                            flexShrink: 0
                                        }}>
                                            <Icon size={24} color="#CCFF00" />
                                        </div>
                                        <div>
                                            <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{opt.label}</div>
                                            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>{opt.description}</div>
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ) : isAnalyzing ? (
                    <div className="glass-card" style={{ borderRadius: 24, padding: "80px 32px", textAlign: "center", position: "relative" }}>
                        <div style={{ marginBottom: 40, position: "relative", display: "inline-block" }}>
                            <div className="loader-ring" />
                            <Utensils size={40} color="#CCFF00" className="pulse-icon" style={{ position: "relative" }} />
                        </div>
                        <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 28, fontWeight: 700, color: "#fff", marginBottom: 16 }}>
                            Analyzing Nutrition Needs
                        </h3>
                        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", marginBottom: 40, height: 24 }}>
                            {statusText}
                        </p>
                        <div style={{ maxWidth: 400, margin: "0 auto" }}>
                            <div style={{ height: 6, width: "100%", background: "rgba(255,255,255,0.05)", borderRadius: 3, overflow: "hidden" }}>
                                <div style={{ height: "100%", width: `${analysisProgress}%`, background: "#CCFF00", transition: "width 0.1s linear", boxShadow: "0 0 15px rgba(204,255,0,0.5)" }} />
                            </div>
                            <div style={{ marginTop: 12, fontSize: 14, fontWeight: 600, color: "#CCFF00" }}>{analysisProgress}% Complete</div>
                        </div>
                    </div>
                ) : (
                    <div className="plan-results">
                        {/* Summary Header */}
                        <div className="glass-card" style={{ borderRadius: 24, padding: 32, marginBottom: 32, border: "1px solid rgba(204,255,0,0.2)" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 24 }}>
                                <div>
                                    <h3 style={{ fontSize: 32, fontWeight: 800, color: "#fff", marginBottom: 8 }}>{plan?.goal} Plan</h3>
                                    <p style={{ color: "rgba(255,255,255,0.5)", display: "flex", alignItems: "center", gap: 8 }}>
                                        <CheckCircle2 size={16} color="#CCFF00" /> Curated for your metabolic profile
                                    </p>
                                </div>
                                <div style={{ background: "rgba(255,255,255,0.05)", padding: "16px 24px", borderRadius: 16, textAlign: "center" }}>
                                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Daily Target</div>
                                    <div style={{ fontSize: 24, fontWeight: 800, color: "#CCFF00" }}>{plan?.calories} <span style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.5)" }}>kCal</span></div>
                                </div>
                            </div>

                            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: 32 }}>
                                {[
                                    { label: "Protein", val: `${plan?.macros.protein}g`, col: "#CCFF00" },
                                    { label: "Carbs", val: `${plan?.macros.carbs}g`, col: "#4ECDC4" },
                                    { label: "Fats", val: `${plan?.macros.fats}g`, col: "#F39C12" },
                                ].map((m, i) => (
                                    <div key={i} style={{ background: "rgba(255,255,255,0.03)", padding: 16, borderRadius: 12, textAlign: "center" }}>
                                        <div style={{ fontSize: 18, fontWeight: 700, color: m.col }}>{m.val}</div>
                                        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>{m.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Meal Plan */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 32 }} className="meals-grid">
                            {plan?.meals.map((meal, idx) => (
                                <div key={idx} className="glass-card" style={{ borderRadius: 20, padding: 24, position: "relative", overflow: "hidden" }}>
                                    <div style={{ position: "absolute", top: 0, right: 0, padding: "6px 12px", background: "rgba(204,255,0,0.1)", color: "#CCFF00", fontSize: 11, fontWeight: 700, borderBottomLeftRadius: 10 }}>
                                        {meal.time}
                                    </div>
                                    <h4 style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 16 }}>{meal.name}</h4>
                                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
                                        {meal.items.map((item, i) => (
                                            <li key={i} style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.6)", fontSize: 14, marginBottom: 8 }}>
                                                <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#CCFF00" }} /> {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div style={{ display: "flex", gap: 12, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.05)", fontSize: 12, opacity: 0.8 }}>
                                        <span>P: {meal.macros.p}g</span>
                                        <span>C: {meal.macros.c}g</span>
                                        <span>F: {meal.macros.f}g</span>
                                        <span style={{ marginLeft: "auto", color: "#CCFF00" }}>{meal.macros.cal} cal</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="glass-card" style={{ borderRadius: 24, padding: 32, marginBottom: 40 }}>
                            <h4 style={{ fontSize: 18, fontWeight: 700, color: "#fff", display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
                                <Utensils size={20} color="#CCFF00" /> Pro Nutrition Tips
                            </h4>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="tips-grid">
                                {plan?.tips.map((tip, i) => (
                                    <div key={i} style={{ display: "flex", gap: 12, background: "rgba(255,255,255,0.03)", padding: 16, borderRadius: 12 }}>
                                        <CheckCircle2 size={16} color="#CCFF00" style={{ flexShrink: 0, marginTop: 2 }} />
                                        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{tip}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                            <button onClick={handleRestart} style={{ background: "none", border: "1px solid rgba(255,255,255,0.2)", color: "#fff", padding: "14px 28px", borderRadius: 50, cursor: "pointer", display: "flex", alignItems: "center", gap: 8, fontWeight: 600 }}>
                                <RotateCcw size={18} /> Reset Plan
                            </button>
                            <a href="#pricing" className="btn-lime" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
                                Unlock Full Blueprint <ArrowRight size={18} />
                            </a>
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
                .quiz-option:hover {
                    background: rgba(255,255,255,0.06) !important;
                    border-color: rgba(204,255,0,0.3) !important;
                    transform: translateY(-2px);
                }
                .loader-ring {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 90px;
                    height: 90px;
                    border-radius: 50%;
                    border: 3px solid rgba(204, 255, 0, 0.05);
                    border-top-color: #CCFF00;
                    animation: spin 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
                }
                .pulse-icon {
                    animation: pulse 2s infinite;
                }
                @keyframes spin {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }
                @keyframes pulse {
                    0% { transform: scale(1); opacity: 0.8; }
                    50% { transform: scale(1.2); opacity: 1; }
                    100% { transform: scale(1); opacity: 0.8; }
                }
                @media (max-width: 768px) {
                    .meals-grid, .tips-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
}
