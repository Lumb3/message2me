import React, { useState, useEffect, useRef } from "react";
import { TypewriterText } from "../TypewriterText";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Piano, Code, Play, Pause } from "lucide-react";

interface HomePageProps {
  onNavigate: (pageId: string) => void;
  onExplored: (sectionId: string) => void;
}

export function HomePage({ onNavigate, onExplored }: HomePageProps) {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [showCommands, setShowCommands] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const sequence = [
      { delay: 500, action: () => setShowWelcome(true) },
      { delay: 2500, action: () => setShowIntro(true) },
      { delay: 4000, action: () => setShowCommands(true) },
    ];

    const timeouts = sequence.map(({ delay, action }) =>
      setTimeout(action, delay)
    );

    onExplored("home");

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [onExplored]);

  // **AUDIO INTEGRATION POINT 1**: Add your piano audio file here
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // stop any other audio before playing this one
        document.querySelectorAll("audio").forEach((el) => {
          if (el !== audioRef.current) {
            el.pause();
            el.currentTime = 0; // optional: reset position
          }
        });

        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const explorationCommands = [
    {
      command: "explore my vision",
      description: "AI piano forged from 8 years of learning struggles",
      action: () => onNavigate("vision"),
      color: "text-blue-400",
    },
    {
      command: "explore my experiences",
      description: "From early struggles to breakthrough solutions",
      action: () => onNavigate("experiences"),
      color: "text-green-400",
    },
    {
      command: "explore my values",
      description: "Strength built through challenges",
      action: () => onNavigate("values"),
      color: "text-purple-400",
    },
    {
      command: "explore my decisions",
      description: "Choices that shaped my path",
      action: () => onNavigate("decisions"),
      color: "text-yellow-400",
    },
  ];

  return (
    <div className="space-y-6">
      {/* **AUDIO INTEGRATION POINT 2**: Hidden audio element - replace src with your piano file */}
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)}>
        <source src="/audio/Waltz_in_A_minor.m4a" type="audio/mp4" />
        {/* Add your piano audio files to /public/audio/ folder */}
      </audio>

      {showWelcome && (
        <div className="border-l-4 border-cyan-400 pl-4">
          <TypewriterText
            text={`WELCOME TO THE SOURCE CODE & MUSIC SHEET OF MY LIFE (2046)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Every key pressed and every line of code written
brought me closer to my dream: building a piano-tech future.

By 40, I'll launch a piano-tech company with an AI-powered piano that 
teaches anyone in weeks, flips notes automatically, and guides players 
through complex pieces with expert suggestions.`}
            className="text-cyan-400 whitespace-pre-line"
            speed={25}
          />
        </div>
      )}

      {showIntro && (
        <div className="grid md:grid-cols-2 gap-6 items-start">
          {" "}
          {/* changed items-center → items-start for top alignment */}
          <div className="bg-gray-900/30 border border-gray-700 rounded-lg p-4 md:p-6 max-w-lg mx-auto">
            {" "}
            {/* reduced padding and added max width */}
            <div className="flex items-center gap-3 mb-4 mt-2">
              {" "}
              {/* added mt-2 for spacing above headline */}
              <Piano className="w-6 h-6 text-blue-400 mr-2" />
              <Code className="w-6 h-6 text-green-400" />
              <span className="text-amber-300 font-semibold ml-2">
                Piano-Tech Future
              </span>{" "}
              {/* optional ml-2 for extra spacing */}
            </div>
            {/* **AUDIO INTEGRATION POINT 3**: Audio player interface */}
            <div className="mb-4 p-4 bg-black/30 rounded-lg border border-gray-600">
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleAudio}
                  className="p-3 rounded-full bg-blue-400/20 hover:bg-blue-400/30 transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-blue-400" />
                  ) : (
                    <Play className="w-5 h-5 text-blue-400" />
                  )}
                </button>
                <div>
                  <div className="text-blue-400">♪ Waltz in A Minor</div>
                  <div className="text-gray-400 text-sm">
                    Enjoy the music 🎹 <br></br>
                    Cover by Erkhembileg
                  </div>
                </div>
              </div>
            </div>
            <TypewriterText
              text={`From a 11-year-old dreamer, struggling to learn piano,
to a 40-year-old creator of the solutions I once wished for.

The future of piano learning starts now.
`}
              className="text-amber-300 leading-relaxed"
              speed={20}
              delay={1000}
            />
          </div>
          <div className="relative">
            <ImageWithFallback
              src="assets/myFuture.png"
              alt="Future digital world 2046"
              className="w-full h-48 object-cover rounded-lg border border-gray-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
          </div>
        </div>
      )}

      {showCommands && (
        <div className="space-y-4">
          <div className="text-center mb-6">
            <TypewriterText
              text="Terminal Navigation:"
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
                  Execute →
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Button
              onClick={() => onNavigate("journey")}
              className="bg-amber-400/20 border border-amber-400 text-amber-400 hover:bg-amber-400/30"
            >
              Complete Timeline 2025 → 2046
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
