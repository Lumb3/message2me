import React, { useState, useEffect } from "react";
import { TypewriterText } from "../TypewriterText";
import { Button } from "../ui/button";

interface HomePageProps {
  onNavigate: (pageId: string) => void;
  onExplored: (sectionId: string) => void;
}

export function HomePage({ onNavigate, onExplored }: HomePageProps) {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [showCommands, setShowCommands] = useState(false);

  useEffect(() => {
    const sequence = [
      { delay: 500, action: () => setShowWelcome(true) },
      { delay: 2500, action: () => setShowIntro(true) },
      { delay: 4000, action: () => setShowCommands(true) },
    ];

    sequence.forEach(({ delay, action }) => {
      setTimeout(action, delay);
    });

    onExplored("home");
  }, [onExplored]);

  const explorationCommands = [
    {
      command: "explore my vision",
      description: "Discover what success means to me at 40",
      action: () => onNavigate("vision"),
      color: "text-blue-400",
    },
    {
      command: "explore my experiences",
      description: "Learn about the experiences that shaped my path",
      action: () => onNavigate("experiences"),
      color: "text-green-400",
    },
    {
      command: "explore my values",
      description: "Understand the principles that guide my decisions",
      action: () => onNavigate("values"),
      color: "text-purple-400",
    },
    {
      command: "explore my decisions",
      description: "See the critical turning points in my journey",
      action: () => onNavigate("decisions"),
      color: "text-yellow-400",
    },
  ];

  return (
    <div className="space-y-6">
      {showWelcome && (
        <div className="border-l-4 border-cyan-400 pl-4">
          <div className="flex justify-between font-mono text-cyan-400 whitespace-pre">
            <span>WELCOME TO 2046</span>
            <span>Erkhembileg Ariunbold, u1539956</span>
          </div>
          <TypewriterText
            text={`━━━━━━━━━━━━━━━━━
              
At 40, I'm living my dream: traveling the world freely, 
teaching piano through my global network, coding anywhere.

Starting from age 19 with piano keys and code...`}
            className="text-cyan-400 whitespace-pre-line"
            speed={25}
          />
        </div>
      )}

      {showIntro && (
        <div className="bg-gray-900/30 border border-gray-700 rounded-lg p-6">
          <TypewriterText
            text={`Welcome to my world! I've structured my answer
as an explorable terminal interface where you can dive deep into
different aspects of my vision for success at 40.

This isn't just a written response, but it's a journey through my 
thoughts, values, and the path I envision taking to achieve my dream.`}
            className="text-amber-300 leading-relaxed"
            speed={20}
            delay={1000}
          />
        </div>
      )}

      {showCommands && (
        <div className="space-y-4">
          <div className="text-center mb-6">
            <TypewriterText
              text="Choose your exploration path:"
              className="text-green-400 text-lg"
              delay={500}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {explorationCommands.map((cmd, index) => (
              <div
                key={index}
                className="bg-black/40 border border-gray-600 rounded-lg p-4 hover:border-gray-500 transition-all cursor-pointer group"
                onClick={cmd.action}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-green-400">$</span>
                  <span
                    className={`font-mono ${cmd.color} group-hover:scale-105 transition-transform`}
                  >
                    {cmd.command}
                  </span>
                </div>
                <div className="text-gray-400 text-sm ml-6">
                  {cmd.description}
                </div>
                <div className="text-green-400 text-xs mt-2 ml-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to execute →
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-gray-900/20 border border-gray-700 rounded">
            <div className="text-gray-300 text-sm">
              <span className="text-cyan-400">💡 Navigation tip:</span> You can
              also use the command line above to navigate. Try typing commands
              like <span className="text-green-400 font-mono">cd vision</span>{" "}
              or <span className="text-green-400 font-mono">ls</span> to
              explore.
            </div>
          </div>

          <div className="text-center mt-6">
            <Button
              onClick={() => onNavigate("journey")}
              className="bg-amber-400/20 border border-amber-400 text-amber-400 hover:bg-amber-400/30"
            >
              See The Complete Journey →
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
