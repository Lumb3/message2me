import React, { useState, useEffect } from "react";
import { TypewriterText } from "./TypeWriterText";
// import { XPBar } from "../XPBar";
import { XPBar } from "./XPBar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Piano,
  Laptop,
  Globe,
  Calendar,
  Zap,
  Target,
  TrendingUp,
  Users,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";

// Helper function to get color classes
const getColorClasses = (color: string) => {
  const colorMap: Record<
    string,
    {
      border: string;
      text: string;
      bg: string;
      shadow: string;
      badgeBg: string;
      badgeBorder: string;
      nextStepBg: string;
      nextStepBorder: string;
    }
  > = {
    blue: {
      border: "border-blue-400",
      text: "text-blue-400",
      bg: "bg-blue-900/20",
      shadow: "shadow-blue-400/20",
      badgeBg: "bg-blue-400/20",
      badgeBorder: "border-blue-400/50",
      nextStepBg: "bg-blue-900/10",
      nextStepBorder: "border-blue-400/30",
    },
    green: {
      border: "border-green-400",
      text: "text-green-400",
      bg: "bg-green-900/20",
      shadow: "shadow-green-400/20",
      badgeBg: "bg-green-400/20",
      badgeBorder: "border-green-400/50",
      nextStepBg: "bg-green-900/10",
      nextStepBorder: "border-green-400/30",
    },
    purple: {
      border: "border-purple-400",
      text: "text-purple-400",
      bg: "bg-purple-900/20",
      shadow: "shadow-purple-400/20",
      badgeBg: "bg-purple-400/20",
      badgeBorder: "border-purple-400/50",
      nextStepBg: "bg-purple-900/10",
      nextStepBorder: "border-purple-400/30",
    },
    amber: {
      border: "border-amber-400",
      text: "text-amber-400",
      bg: "bg-amber-900/20",
      shadow: "shadow-amber-400/20",
      badgeBg: "bg-amber-400/20",
      badgeBorder: "border-amber-400/50",
      nextStepBg: "bg-amber-900/10",
      nextStepBorder: "border-amber-400/30",
    },
  };
  return colorMap[color] || colorMap.blue;
};

interface DecisionsPageProps {
  onNavigate: (pageId: string) => void;
  onExplored: (sectionId: string) => void;
}

export function DecisionsPage({ onNavigate, onExplored }: DecisionsPageProps) {
  const [showIntro, setShowIntro] = useState(false);
  const [showDecisions, setShowDecisions] = useState(false);
  const [selectedDecision, setSelectedDecision] = useState<number | null>(null);

  useEffect(() => {
    const timeout1 = setTimeout(() => setShowIntro(true), 500);
    const timeout2 = setTimeout(() => setShowDecisions(true), 2000);
    onExplored("decisions");

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [onExplored]);

  const criticalDecisions = [
    {
      icon: (
        <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
          <Piano className="w-5 h-5" />
        </div>
      ),

      title: "Piano Business",
      timeframe: "Ages 22-26",
      progress: 40,
      color: "blue",
      glowColor: "rgba(59, 130, 246, 0.5)",
      tagline: "Build foundation through teaching",
      keyMilestones: [
        {
          icon: <Users className="w-4 h-4" />,
          label: "50+ Students",
          achieved: true,
        },
        {
          icon: <Target className="w-4 h-4" />,
          label: "Teaching Method",
          achieved: true,
        },
        {
          icon: <Laptop className="w-4 h-4" />,
          label: "Digital Course",
          achieved: false,
        },
        {
          icon: <Globe className="w-4 h-4" />,
          label: "2nd Location",
          achieved: false,
        },
      ],
      stats: [
        { label: "Business Skills", value: "85%" },
        { label: "Student Base", value: "40/50" },
        { label: "Income Stability", value: "Medium" },
      ],
      nextStep: "Launch first digital course to scale beyond local market",
      valueAlignment: ["Challenge Makes Us Stronger", "Persistence Wins"],
    },
    {
      icon: (
        <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
          <Laptop className="w-6 h-6" />
        </div>
      ),
      title: "Try, Fail, Repeat",
      timeframe: "Ages 18-30",
      progress: 50,
      color: "green",
      glowColor: "rgba(34, 197, 94, 0.5)",
      tagline: "Continuous learning and building stage",
      keyMilestones: [
        {
          icon: <Zap className="w-4 h-4" />,
          label: "Debug Programs",
          achieved: true,
        },
        {
          icon: <Target className="w-4 h-4" />,
          label: "Circuit Prototypes",
          achieved: true,
        },
        {
          icon: <TrendingUp className="w-4 h-4" />,
          label: "Music App Launch",
          achieved: false,
        },
        {
          icon: <Globe className="w-4 h-4" />,
          label: "Market Presence",
          achieved: false,
        },
      ],
      stats: [
        { label: "Technical Skills", value: "75%" },
        { label: "Projects Completed", value: "12/20" },
        { label: "Learning Velocity", value: "High" },
      ],
      nextStep: "Ship functional music education app that solves page-turning",
      valueAlignment: ["Challenge Makes Us Stronger", "Persistence Wins"],
    },
    {
      icon: (
        <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
          <Globe className="w-6 h-6" />
        </div>
      ),
      title: "The Establishment of AriaNova",
      timeframe: "Ages 26-36",
      progress: 5,
      color: "purple",
      glowColor: "rgba(168, 85, 247, 0.5)",
      tagline: "Scale globally, live nomadically",
      keyMilestones: [
        {
          icon: <Globe className="w-4 h-4" />,
          label: "5 Countries",
          achieved: false,
        },
        {
          icon: <Clock className="w-4 h-4" />,
          label: "3+ Months Abroad",
          achieved: false,
        },
        {
          icon: <Users className="w-4 h-4" />,
          label: "International Team",
          achieved: false,
        },
        {
          icon: <Target className="w-4 h-4" />,
          label: "20+ Countries Served",
          achieved: false,
        },
      ],
      stats: [
        { label: "Global Reach", value: "8%" },
        { label: "Studios Opened", value: "0/5" },
        { label: "Freedom Level", value: "Low" },
      ],
      nextStep: "Validate systems locally before international replication",
      valueAlignment: ["Challenge Makes Us Stronger", "Persistence Wins"],
    },
    {
      icon: (
        <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
          <Calendar className="w-6 h-6" />
        </div>
      ),
      title: "Systems Over Hours",
      timeframe: "Ages 30-40",
      progress: 0,
      color: "amber",
      glowColor: "rgba(245, 158, 11, 0.5)",
      tagline: "Automate for lifestyle freedom",
      keyMilestones: [
        {
          icon: <Clock className="w-4 h-4" />,
          label: "3-Month Freedom",
          achieved: false,
        },
        {
          icon: <TrendingUp className="w-4 h-4" />,
          label: "80% Passive Income",
          achieved: false,
        },
        {
          icon: <Users className="w-4 h-4" />,
          label: "100+ Teachers",
          achieved: false,
        },
        {
          icon: <Zap className="w-4 h-4" />,
          label: "Auto-Acquisition",
          achieved: false,
        },
      ],
      stats: [
        { label: "Automation", value: "0%" },
        { label: "Passive Income", value: "0/80%" },
        { label: "Time Freedom", value: "None" },
      ],
      nextStep: "Focus on building foundations before automation",
      valueAlignment: ["Challenge Makes Us Stronger", "Persistence Wins"],
    },
  ];

  return (
    <div className="space-y-6">
      {showIntro && (
        <div className="border-l-4 border-yellow-400 pl-4">
          <TypewriterText
            text={`THE DECISIONS THAT BUILT ARIANOVA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
The turning point of my life came when a dream became a purpose.
Four pivotal choices. One unified vision.
Success = Vision + Persistence
`}
            className="text-yellow-400 whitespace-pre-line font-mono"
            speed={25}
          />
        </div>
      )}

      {showDecisions && (
        <div className="space-y-6">
          {/* Overall Progress Dashboard */}
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-yellow-400" />
              <h3 className="text-yellow-400">DECISION PROGRESS DASHBOARD</h3>
            </div>
            <div className="space-y-4">
              {criticalDecisions.map((decision, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <XPBar
                    label={decision.title}
                    currentXP={decision.progress}
                    maxXP={100}
                    color={
                      decision.color === "blue"
                        ? "#60a5fa"
                        : decision.color === "green"
                        ? "#4ade80"
                        : decision.color === "purple"
                        ? "#a78bfa"
                        : "#fbbf24"
                    }
                    glowColor={decision.glowColor}
                    delay={index * 300}
                    icon={
                      index === 0
                        ? "🎹"
                        : index === 1
                        ? "💻"
                        : index === 2
                        ? "🌍"
                        : "⚙️"
                    }
                  />
                </motion.div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-700 flex items-center justify-between">
              <span className="text-gray-400">Overall Journey Progress</span>
              <span className="text-cyan-400 font-mono">
                {Math.round(
                  criticalDecisions.reduce((acc, d) => acc + d.progress, 0) / 4
                )}
                % Complete
              </span>
            </div>
          </div>

          {/* Decision Cards Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {criticalDecisions.map((decision, index) => {
              const colors = getColorClasses(decision.color);
              return (
                <Card
                  key={index}
                  className={`bg-gray-900/50 border-gray-700 hover:${
                    colors.border
                  } cursor-pointer transition-all ${
                    selectedDecision === index
                      ? `${colors.border} shadow-lg ${colors.shadow}`
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedDecision(
                      selectedDecision === index ? null : index
                    )
                  }
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-3 rounded-full border-2 ${colors.border} bg-black/30`}
                        >
                          <div className={colors.text}>{decision.icon}</div>
                        </div>
                        <div>
                          <CardTitle className={colors.text}>
                            {decision.title}
                          </CardTitle>
                          <div className="text-gray-400">
                            {decision.timeframe}
                          </div>
                        </div>
                      </div>
                      <div className={`${colors.text} font-mono`}>
                        {decision.progress}%
                      </div>
                    </div>
                    <p className="text-gray-300 italic">"{decision.tagline}"</p>
                  </CardHeader>

                  {selectedDecision === index && (
                    <CardContent className="space-y-4">
                      {/* Key Milestones */}
                      <div className="p-4 bg-black/30 rounded-lg">
                        <h4
                          className={`${colors.text} mb-3 flex items-center gap-2`}
                        >
                          <Target className="w-4 h-4" />
                          Key Milestones
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {decision.keyMilestones.map((milestone, idx) => (
                            <div
                              key={idx}
                              className={`flex items-center gap-2 p-2 rounded ${
                                milestone.achieved
                                  ? "bg-green-900/20 border border-green-400/30"
                                  : "bg-gray-800/50 border border-gray-600/30"
                              }`}
                            >
                              {/* Icon keeps original color */}
                              <div
                                className={
                                  milestone.achieved
                                    ? "text-green-400"
                                    : "text-gray-400"
                                }
                              >
                                {milestone.icon}
                              </div>
                              {/* Text forced to grey */}
                              <span className="text-gray-400">
                                {milestone.label}
                              </span>
                              {milestone.achieved && (
                                <span className="ml-auto text-green-400">
                                  ✓
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Stats Grid */}
                      <div className="grid grid-cols-3 gap-2">
                        {decision.stats.map((stat, idx) => {
                          const isFull =
                            stat.value === "100%" || stat.value === "High";
                          return (
                            <div
                              key={idx}
                              className="p-3 bg-gray-800/50 rounded text-center border border-gray-700"
                            >
                              <div
                                className={`${
                                  isFull ? colors.text : "text-gray-400"
                                } font-mono mb-1`}
                              >
                                {stat.value}
                              </div>
                              <div className="text-gray-400">{stat.label}</div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Next Step */}
                      <div
                        className={`p-3 ${colors.nextStepBg} rounded border ${colors.nextStepBorder}`}
                      >
                        <h4
                          className={`${colors.text} mb-1 flex items-center gap-2`}
                        >
                          <TrendingUp className="w-4 h-4" />
                          Next Step
                        </h4>
                        <p className="text-gray-300">{decision.nextStep}</p>
                      </div>

                      {/* Value Badges */}
                      <div className="flex gap-2 flex-wrap">
                        {decision.valueAlignment.map((value, idx) => (
                          <Badge
                            key={idx}
                            className={`${colors.badgeBg} ${colors.text} border ${colors.badgeBorder}`}
                          >
                            {value}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>

          {/* Decision Chain Visual */}
          <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-400/30 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-yellow-400" />
              <h3 className="text-yellow-400">THE DECISION CHAIN</h3>
            </div>

            {/* Visual Flow */}
            <div className="flex items-center justify-center gap-6 flex-wrap mb-4">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center bg-blue-900/20 rounded border border-blue-400/30">
                <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <Piano className="w-6 h-6 text-blue-400 mb-1" />
                </div>
                <div className="text-blue-400 font-mono">Piano</div>
                <div className="text-gray-400">Foundation</div>
              </div>

              {/* Arrow */}
              <div className="text-yellow-400 text-xl">→</div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center bg-green-900/20 rounded border border-green-400/30">
                <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <Laptop className="w-6 h-6 text-green-400 mb-1" />
                </div>

                <div className="text-green-400 font-mono">Code</div>
                <div className="text-gray-400">Innovation</div>
              </div>

              {/* Arrow */}
              <div className="text-yellow-400 text-xl">→</div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center bg-purple-900/20 rounded border border-purple-400/30">
                <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <Globe className="w-6 h-6 text-purple-400 mb-1" />
                </div>
                <div className="text-purple-400 font-mono">Global</div>
                <div className="text-gray-400">Expansion</div>
              </div>

              {/* Arrow */}
              <div className="text-yellow-400 text-xl">→</div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center bg-amber-900/20 rounded border border-amber-400/30">
                <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <Calendar className="w-6 h-6 text-amber-400 mb-1" />
                </div>
                <div className="text-amber-400 font-mono">Systems</div>
                <div className="text-gray-400">Freedom</div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-center">
              Each decision builds the foundation for the next. By 2046, this
              chain creates
              <span className="text-yellow-300"> AriaNova</span> — a global
              force powered by personal passion.
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <Button
              onClick={() => onNavigate("values")}
              className="bg-purple-400/20 border border-purple-400 text-purple-400 hover:bg-purple-400/30"
            >
              ← Back to Values
            </Button>
            <Button
              onClick={() => onNavigate("home")}
              className="bg-cyan-400/20 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/30"
            >
              Back to Home
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
