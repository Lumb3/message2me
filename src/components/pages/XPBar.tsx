import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface XPBarProps {
  label: string;
  maxXP: number;
  currentXP: number;
  color?: string;
  glowColor?: string;
  delay?: number;
  icon?: string;
}

export function XPBar({
  label,
  maxXP = 100,
  currentXP,
  color = "cyan",
  glowColor = "rgba(0, 255, 255, 0.5)",
  delay = 0,
  icon = "▸",
}: XPBarProps) {
  const [animatedXP, setAnimatedXP] = useState(0);
  const percentage = (currentXP / maxXP) * 100;

  useEffect(() => {
    // Animate XP increment smoothly
    const startDelay = setTimeout(() => {
      let xp = 0;
      const increment = currentXP / 50; // Animate over 50 steps
      const xpInterval = setInterval(() => {
        xp += increment;
        if (xp >= currentXP) {
          setAnimatedXP(currentXP);
          clearInterval(xpInterval);
        } else {
          setAnimatedXP(Math.floor(xp));
        }
      }, 20);

      return () => clearInterval(xpInterval);
    }, delay);

    return () => clearTimeout(startDelay);
  }, [currentXP, delay]);

  const colorMap: Record<string, [string, string]> = {
    cyan: ['#06b6d4', '#22d3ee'],
    blue: ['#3b82f6', '#60a5fa'],
    green: ['#10b981', '#34d399'],
    purple: ['#8b5cf6', '#a78bfa'],
    amber: ['#f59e0b', '#fbbf24'],
    pink: ['#ec4899', '#f472b6'],
  };

  const textColorMap: Record<string, string> = {
    cyan: '#22d3ee',
    blue: '#60a5fa',
    green: '#34d399',
    purple: '#a78bfa',
    amber: '#fbbf24',
    pink: '#f472b6',
  };

  // Helper function to check if color is a hex value
  const isHexColor = (col: string) => /^#[0-9A-F]{6}$/i.test(col);

  // Determine the colors to use
  const getColors = () => {
    if (isHexColor(color)) {
      return {
        gradient: [color, color],
        text: color
      };
    }
    return {
      gradient: colorMap[color] || colorMap.cyan,
      text: textColorMap[color] || textColorMap.cyan
    };
  };

  const colors = getColors();

  return (
    <div className="space-y-2">
      {/* Label and Stats */}
      <div className="flex items-center justify-between font-mono text-sm">
        <div className="flex items-center gap-2">
          <span style={{ color: colors.text }}>
            {icon}
          </span>
          <span className="text-gray-200">{label}</span>
        </div>
        <div className="flex items-center gap-3">
          <span style={{ color: colors.text }}>
            {Math.round(percentage)}%
          </span>
          <span className="text-gray-300">
            [{animatedXP}/{maxXP} XP]
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative h-6 bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 10px,
              rgba(255, 255, 255, 0.1) 10px,
              rgba(255, 255, 255, 0.1) 11px
            )`,
          }}
        />

        {/* Animated fill bar */}
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: `${percentage}%` }}
          transition={{ 
            duration: 1.5, 
            ease: "easeOut",
            delay: delay / 1000 
          }}
          className="absolute inset-y-0 left-0 rounded-lg"
          style={{
            height: "100%",
            background: `linear-gradient(90deg, ${colors.gradient[0]}, ${colors.gradient[1]})`,
            boxShadow: `0 0 20px ${glowColor}, inset 0 1px 0 rgba(255,255,255,0.2)`
          }}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
            style={{ width: "50%" }}
          />
        </motion.div>
      </div>
    </div>
  );
}