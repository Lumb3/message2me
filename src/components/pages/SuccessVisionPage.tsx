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
  const [showAbout, setShowAbout] = useState(true);
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
      icon: <Bot className="w-10 h-10" />,
      title: "AI Piano Teacher",
      description: "Learns each student's struggles",
      details: `Adjusting tempo, pausing at the right spots, and interpreting music notation are major challenges for beginners without a skilled teacher.
  AriaNova understands exactly why a student is stuck on a measure and provides guidance based on their playing data.

  Using AI, it analyzes performance, spots specific issues, and generates personalized exercises.
  No vague "practice more" advice —– it shows exactly what to fix`,
      color: "border-blue-400 text-blue-400",
      imageAlt: "AI Piano Teacher",
    },
    {
      icon: <Music className="w-10 h-10" />,
      title: "Smart Sheet Music",
      description: "Flips pages, highlights notes",
      details: `Manually turning pages while playing often made me lose my place.
  This smart sheet music flips pages automatically as you play.

  It auto-scrolls at your tempo, highlights upcoming sections,
  and loops difficult parts until you master them.`,
      color: "border-green-400 text-green-400",
      imageAlt: "Smart Sheet Music",
    },
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Learning Revolution",
      description: "A month, not years to mastery",
      details: `Having a structured learning plan is crucial—trust me, I learned this the hard way after five years of pounding keys like a caffeinated squirrel, occasionally staring at the piano wondering if it was mocking me.
        But with this feature, AriaNova cooks up a personalized plan based on your skill and goals, letting you reach mastery in a month—or even a few weeks—without the squirrel-level chaos.`,
      color: "border-purple-400 text-purple-400",
      imageAlt: "Learning Revolution",
    },
  ];

  return (
    <div className="space-y-8">
      {/* **AUDIO INTEGRATION POINT 5**: Vision page audio */}
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)}>
        <source src="/audio/Nocturne_in_C_Sharp_Minor_2.m4a" type="audio/mp4" />
      </audio>
      <div className="flex flex-col space-y-12"></div>
      {showIntro && (
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="border-l-4 border-blue-400 pl-4">
            <h1
              className="text-cyan-400 tracking-widest drop-shadow-[0_0_30px_rgba(0,255,255,0.8)]"
              style={{ fontSize: "3rem" }}
            >
              AriaNova(2046)
            </h1>

            {/* Sub-header */}
            <div
              className="font-semibold mt-2 tracking-wide bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 text-transparent bg-clip-text"
              style={{ fontSize: "1.5rem" }}
            >
              <TypewriterText
                text="
              Where Music Meets Innovation"
              />
            </div>

            {/* Meaning explanation */}
            <div className="flex items-center gap-2 text-amber-300 text-lg border-l-2 border-amber-400 pl-4 mt-3">
              <span className="italic text-white">Aria</span> = melody
              <span className="text-gray-500 mx-1">|</span>
              <span className="italic text-white">Nova</span> = futuristic
            </div>
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
                    Enjoy the music 🎹 <br></br>
                    Cover by Erkhembileg
                  </div>
                </div>
              </div>
            </div>
            <ImageWithFallback
              src="/assets/piano.png"
              alt="Piano-tech innovation"
              className="w-full h-40 object-cover rounded-lg border border-gray-700"
            />
          </div>
        </div>
      )}
      {showAbout && (
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/80 rounded-3xl p-8 shadow-xl border border-cyan-400/30 bg-gradient-to-br from-gray-900/80 to-black/60 backdrop-blur-md">
            <div className="space-y-6 text-gray-200 leading-relaxed">
              <div
                className="font-semibold mt-2 tracking-wide bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 text-transparent bg-clip-text"
                style={{ fontSize: "1.5rem" }}
              >
                <TypewriterText
                  text=" The Story Behind AriaNova"
                  speed={25}
                  className="text-cyan-400"
                />
              </div>

              <p className="text-lg text-gray-200 leading-relaxed">
                It all started with an 11-year-old boy who loved music but
                struggled to make that music himself.
              </p>

              <p className="text-lg text-gray-200 whitespace-pre-line">
                Each practice session felt like decoding a language only the
                gifted could read. Was I playing it right? Why did that chord
                sound off? The sheet music would slip just as I found my rhythm.
                My teacher's guidance was helpful, but limited to once a week.
              </p>

              <p className="text-lg text-gray-200 leading-relaxed whitespace-pre-line">
                Between lessons, I was alone — no{" "}
                <span className="text-blue-400">feedback</span>, no{" "}
                <span className="text-purple-400">structure</span>, no one to{" "}
                <span className="text-green-400">flip</span> the pages when my
                hands were busy. Just me, the piano, and a mountain of
                frustration.
              </p>

              <p className="text-lg text-gray-200 leading-relaxed">
                Years later, I realized:{" "}
                <span className="text-green-300">
                  what if the piano itself could be the mentor?
                </span>
              </p>

              <p className="text-xl text-amber-200 pt-4">
                <span className="text-cyan-400">
                  From these challenges came the vision for AriaNova
                </span>
                —– a whole new way to learn piano. Not cold technology, but a{" "}
                <span className="text-amber-300">warm companion</span> that
                understands your struggles because it was built from them.
              </p>
              <br />
            </div>
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
                  {/* Only render image if it exists */}

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
              <span className="text-amber-300">Age 11:</span> Crying over sheet
              music I couldn't understand, wishing I had someone to guide me.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-amber-300">Age 25:</span> Building the tools
              I wish existed back then
            </p>
            <p className="text-gray-300 leading-relaxed mt-3">
              <span className="text-green-400">Age 40:</span> Every struggling
              piano student now has the AriaNova I never did.
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <Button
              onClick={() => onNavigate("experiences")}
              className="bg-green-400/20 border border-green-400 text-green-400 hover:bg-green-400/30"
            >
              Explore experiences →
            </Button>
            <Button
              onClick={() => onNavigate("decisions")}
              className="bg-amber-400/20 border border-amber-400 text-amber-400 hover:bg-amber-400/30"
            >
              Explore decisions →
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
