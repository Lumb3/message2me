import React, { useState, useEffect, useRef } from "react";
import { TypewriterText } from "../TypewriterText";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Zap, Target, Piano, Pause, Play } from "lucide-react";
interface ValuesPageProps {
  onNavigate: (pageId: string) => void;
  onExplored: (sectionId: string) => void;
}

export function ValuesPage({ onNavigate, onExplored }: ValuesPageProps) {
  const [showIntro, setShowIntro] = useState(false);
  const [showValues, setShowValues] = useState(false);
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  useEffect(() => {
    const timeout1 = setTimeout(() => setShowIntro(true), 500);
    const timeout2 = setTimeout(() => setShowValues(true), 2000);
    onExplored("values");

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [onExplored]);

  const coreValues = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Challenge Makes Us Stronger",
      subtitle: "Embracing difficulty as fuel for growth",
      description: "Every challenge is training for the next level",
      principles: [
        "Running nonstop builds mental resilience",
        "Difficult coding problems develop problem-solving skills",
        "Learning complex piano pieces trains persistence",
        "Setbacks are setups for comebacks",
      ],
      realWorldApplication: `At 19, I already seek challenges that others avoid. Marathon running teaches me that discomfort is temporary but quitting lasts forever. Complex programming problems show me that breakthrough comes after frustration. Difficult piano compositions prove that mastery requires thousands of failed attempts.

By 40, this value will have built unshakeable mental toughness.`,
      decisionFramework:
        "When choosing paths, I ask: 'Which option will make me stronger?'",
      color: "border-red-400 text-red-400",
      image:
      "assets/running.jpeg",
    },
    {
      icon: <Piano className="w-8 h-8" />,
      title: "Persistence Wins Everything",
      subtitle: "Sticking to goals no matter what obstacles appear",
      description: "I don't accept 'giving up' as an option",
      principles: [
        "Goals are non-negotiable destinations",
        "Methods can change, destination stays fixed",
        "I have played piano for the past 8 years and will continue in the future",
        "Daily practice beats weekend marathons",
        "Small steps compound into massive results",
      ],
      realWorldApplication: `This value drives my daily piano practice, coding study, and running routine. When motivation fades, persistence carries me forward. When others give up, I keep going.

My global piano empire and location-independent career will be built on 20+ years of persistent daily action.`,
      decisionFramework: "Before quitting anything, I ask: 'Is that it?'",
      color: "border-blue-400 text-blue-400",
      image:
        "assets/circuit.jpeg",
    },
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

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

  return (
    <div className="space-y-6">
      {showIntro && (
        <div className="border-l-4 border-purple-400 pl-4 flex items-start justify-between">
          <TypewriterText
            text={`VALUES THAT FUEL SUCCESS
━━━━━━━━━━━━━━━━━━━━━━━━━

Two core principles drive everything I do.
Simple. Powerful. Proven through action.

From age 19 to 40—these values never change.`}
            className="text-purple-400 whitespace-pre-line flex-1"
            speed={25}
          />

          {/* Purple Music Box with Button inside */}
          <div className="ml-4 flex flex-col items-center">
            <div className="flex items-center border border-purple-400 rounded-lg px-4 py-2 bg-black/20 space-x-3">
              {/* Play/Pause Button */}
              <button
                onClick={toggleAudio}
                className="p-2 rounded-full bg-purple-400/20 hover:bg-purple-400/30 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-purple-400" />
                ) : (
                  <Play className="w-5 h-5 text-purple-400" />
                )}
              </button>

              {/* Track Name */}
              <div>
                <div className="text-purple-400">♪ Аяз (Ayaz)</div>
                <div className="text-gray-400 text-sm">
                  Enjoy the music 🎹 <br></br>
                  Cover & Improvisation by Erkhembileg
                </div>
              </div>
            </div>

            {/* Hidden Audio */}
            <audio
              ref={audioRef}
              src="/audio/Ayaz.m4a"
              onEnded={() => setIsPlaying(false)}
              style={{ display: "none" }}
            />
          </div>
        </div>
      )}

      {showValues && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className={`bg-gray-900/50 border-gray-700 cursor-pointer transition-all ${
                  selectedValue === index ? value.color.split(" ")[0] : ""
                }`}
                onClick={() =>
                  setSelectedValue(selectedValue === index ? null : index)
                }
              >
                <div className="relative">
                  <ImageWithFallback
                    src={value.image}
                    alt={value.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-t-lg"></div>
                  <div
                    className={`absolute top-4 right-4 p-3 rounded-full bg-black/70 ${
                      value.color.split(" ")[1]
                    }`}
                  >
                    {value.icon}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className={`${value.color.split(" ")[1]} text-xl`}>
                    {value.title}
                  </CardTitle>
                  <p className="text-gray-400">{value.subtitle}</p>
                  <p className="text-gray-300">{value.description}</p>
                </CardHeader>

                {selectedValue === index && (
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-amber-300 mb-2">In Action</h4>
                      <div className="space-y-1">
                        {value.principles.map((principle, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <span className="text-green-400 mt-1">•</span>
                            <span className="text-gray-300 text-sm">
                              {principle}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-black/30 rounded">
                      <h4 className="text-blue-400 mb-2">From 19 to 40</h4>
                      <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                        {value.realWorldApplication}
                      </p>
                    </div>

                    <div className="p-4 bg-gray-800/30 rounded">
                      <h4 className="text-green-400 mb-2">Decision Filter</h4>
                      <p className="text-gray-300 text-sm italic">
                        {value.decisionFramework}
                      </p>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-900/20 to-red-900/20 border border-purple-400/30 rounded-lg p-6">
            <h3 className="text-purple-400 mb-4 text-xl">
              In simple terms...
            </h3>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-amber-300">Why just two values?</span>{" "}
              Because clarity creates power. These two principles have guided
              every major decision since age 19. They're simple enough to
              remember in pressure moments, deep enough to build a life on.
            </p>
            <p className="text-gray-300 leading-relaxed mt-3">
              <span className="text-amber-300">By 2046:</span> 21 years of
              living these values will have created unshakeable character,
              unstoppable momentum, and global success.
            </p>

            <div className="mt-4 flex gap-4">
              <Badge className="bg-red-400/20 border border-red-400 text-red-400">
                Challenge → Strength
              </Badge>
              <Badge className="bg-blue-400/20 border border-blue-400 text-blue-400">
                Persistence → Victory
              </Badge>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <Button
              onClick={() => onNavigate("decisions")}
              className="bg-yellow-400/20 border border-yellow-400 text-yellow-400 hover:bg-yellow-400/30"
            >
              Key Decisions →
            </Button>
            <Button
              onClick={() => onNavigate("journey")}
              className="bg-amber-400/20 border border-amber-400 text-amber-400 hover:bg-amber-400/30"
            >
              Complete Journey →
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
