import React, { useState, useEffect, useRef } from "react";
import { TypewriterText } from "../TypewriterText";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Piano, Bot, Music, Sparkles, Play, Pause } from "lucide-react";

interface SuccessVisionPageProps {
  onNavigate: (pageId: string) => void;
  onExplored: (sectionId: string) => void;
}

export function SuccessVisionPage({
  onNavigate,
  onExplored,
}: SuccessVisionPageProps) {
  const [showIntro, setShowIntro] = useState(false);
  const [showVisions, setShowVisions] = useState(false);
  const [activeVision, setActiveVision] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const timeout1 = setTimeout(() => setShowIntro(true), 500);
    const timeout2 = setTimeout(() => setShowVisions(true), 2000);
    onExplored("vision");

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [onExplored]);

  // **AUDIO INTEGRATION POINT 4**: Vision page audio player
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

  const visionPillars = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI Piano Teacher",
      description: "Learns each student's struggles",
      details: `The piano that understands why you're stuck on that one measure.
    
AI analyzes your playing, identifies exact problems, and creates custom exercises.
No more "practice more" - it shows you exactly what to fix and how.`,
      color: "border-blue-400 text-blue-400",
      imageSrc:
        "https://images.unsplash.com/photo-1636916368580-8f99867e6e14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWFubyUyMG11c2ljJTIwdGVhY2hpbmclMjBnbG9iYWwlMjB3b3JsZHxlbnwxfHx8fDE3NTg4NzM2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageAlt: "AI Piano Teacher",
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Smart Sheet Music",
      description: "Flips pages, highlights notes",
      details: `Never lose your place again. Sheet music that follows along.
    
Auto-scrolls at your tempo. Highlights the next section. 
Loops difficult parts until you nail them.`,
      color: "border-green-400 text-green-400",
      imageSrc:
        "https://images.unsplash.com/photo-1652696290920-ee4c836c711e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHByb2dyYW1taW5nJTIwbGFwdG9wJTIwY29kaW5nfGVufDF8fHx8MTc1ODg3MzY2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageAlt: "Smart Sheet Music",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Learning Revolution",
      description: "Weeks, not years to mastery",
      details: `What took me years to learn, others will master in weeks.
    
The company that solves every problem I faced as a struggling 12-year-old.
Built from frustration. Powered by empathy.`,
      color: "border-purple-400 text-purple-400",
      imageSrc:
        "https://images.unsplash.com/photo-1597395247099-ec7f5c18087a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMHRyYXZlbCUyMGRpZ2l0YWwlMjBub21hZHxlbnwxfHx8fDE3NTg4NzM2NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      imageAlt: "Learning Revolution",
    },
  ];

  return (
    <div className="space-y-6">
      {/* **AUDIO INTEGRATION POINT 5**: Vision page audio */}
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)}>
        <source src="/audio/Nocturne_in_C_Sharp_Minor_2.m4a" type="audio/mp4" />
      </audio>

      {showIntro && (
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="border-l-4 border-blue-400 pl-4">
            <TypewriterText
              text={`MY PIANO-TECH COMPANY (2046)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🤖 AI piano that teaches anyone in weeks
📝 Smart sheet music that never loses your place  
✨ Built from every struggle I faced learning piano

Turning childhood frustration into global solution.`}
              className="text-blue-400 whitespace-pre-line"
              speed={25}
            />
          </div>
          <div className="space-y-4">
            {/* **AUDIO INTEGRATION POINT 6**: Vision demo audio */}
            <div className="p-4 bg-black/30 rounded-lg border border-gray-600">
              <div className="flex items-center gap-3">
                <button
                  onClick={toggleAudio}
                  className="p-3 rounded-full bg-purple-400/20 hover:bg-purple-400/30 transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5 text-purple-400" />
                  ) : (
                    <Play className="w-5 h-5 text-purple-400" />
                  )}
                </button>
                <div>
                  <div className="text-purple-400">
                    ♪ Nocturne In C Sharp Minor
                  </div>
                  <div className="text-gray-400 text-sm">
                    Cover by Erkhembileg
                  </div>
                </div>
              </div>
            </div>
            <ImageWithFallback
              src="assets/piano.png"
              alt="Piano-tech innovation"
              className="w-full h-40 object-cover rounded-lg border border-gray-700"
            />
          </div>
        </div>
      )}

      {showVisions && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            {visionPillars.map((pillar, index) => (
              <Card
                key={index}
                className={`bg-gray-900/50 border-gray-700 hover:${
                  pillar.color.split(" ")[0]
                } cursor-pointer transition-all ${
                  activeVision === index ? pillar.color.split(" ")[0] : ""
                }`}
                onClick={() =>
                  setActiveVision(activeVision === index ? null : index)
                }
              >
                <div className="relative">
                  <ImageWithFallback
                    src={pillar.imageSrc}
                    alt={pillar.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-t-lg"></div>
                  <div
                    className={`absolute top-2 right-2 p-2 rounded-full bg-black/50 ${
                      pillar.color.split(" ")[1]
                    }`}
                  >
                    {pillar.icon}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle
                    className={`${pillar.color.split(" ")[1]} text-lg`}
                  >
                    {pillar.title}
                  </CardTitle>
                  <p className="text-gray-400 text-sm">{pillar.description}</p>
                </CardHeader>
                {activeVision === index && (
                  <CardContent>
                    <p className="text-gray-300 whitespace-pre-line">
                      {pillar.details}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-400/30 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Piano className="w-6 h-6 text-blue-400" />
              <h3 className="text-blue-400 text-xl">
                From Frustration to Solution
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-amber-300">Age 12:</span> Crying over sheet
              music I couldn't understand
            </p>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-amber-300">Age 19:</span> Building the tools
              I wish existed back then
            </p>
            <p className="text-gray-300 leading-relaxed mt-3">
              <span className="text-green-400">Age 40:</span> Every struggling
              piano student has the AI teacher I never had.
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <Button
              onClick={() => onNavigate("experiences")}
              className="bg-green-400/20 border border-green-400 text-green-400 hover:bg-green-400/30"
            >
              My Current Work →
            </Button>
            <Button
              onClick={() => onNavigate("journey")}
              className="bg-amber-400/20 border border-amber-400 text-amber-400 hover:bg-amber-400/30"
            >
              Complete Timeline →
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
