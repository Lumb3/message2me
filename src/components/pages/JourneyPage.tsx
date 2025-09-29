import React, { useState, useEffect } from "react";
import { TypewriterText } from "../TypewriterText";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  Calendar,
  Piano,
  Code,
  Rocket,
  Trophy,
  Star,
  Heart,
  Brain,
} from "lucide-react";

interface JourneyPageProps {
  onNavigate: (pageId: string) => void;
  onExplored: (sectionId: string) => void;
}

export function JourneyPage({ onNavigate, onExplored }: JourneyPageProps) {
  const [showIntro, setShowIntro] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);
  const [activePhase, setActivePhase] = useState<number | null>(null);

  useEffect(() => {
    const timeout1 = setTimeout(() => setShowIntro(true), 500);
    const timeout2 = setTimeout(() => setShowTimeline(true), 2500);
    onExplored("journey");

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [onExplored]);

  const myJourney = [
    {
      icon: <Heart className="w-5 h-5" />,
      period: "2018-2024",
      ages: "Age 11-18",
      phase: "The Discovery Years",
      status: "Complete",
      tagline: "Where pain becomes purpose",
      keyMoments: [
        "Age 11: First piano lesson disaster - couldn't read sheet music, tears everywhere",
        "Age 12-15: Kept struggling but refused to quit, slowly building resilience",
        "Age 16: Discovered programming, built first metronome app from frustration",
        "Age 17: The breakthrough - realized my struggles were actually market research",
        "Age 18: Had my 'aha moment' - I'm going to solve this for everyone",
      ],
      story: `The piano bench felt too big, the sheet music too small. Notes blurred when tears came, the metronome ticking like a clock that wouldn’t wait. Other kids raced ahead; I was stuck at bar seven.

Every rough practice was data. Eight years of logging frustration, shivering on my first stage, scared of what might happen when the page turned (as you see in the picture above)—I didn’t know it then, but I was doing user research the hard way: living the problem. By eighteen, the question finally formed: if AI can solve everything from search to speech, why not the lonely struggle of learning music?`,
      impact:
        "Built deep empathy for struggling piano students + discovered my superpower (coding)",
      color: "border-red-400 text-red-400",
      image: "assets/performance.jpeg",
    },
    {
      icon: <Code className="w-5 h-5" />,
      period: "2025-2032",
      ages: "Age 19-25",
      phase: "The Learning Years",
      status: "Active",
      tagline: "Turning problems into products",
      keyMoments: [
        "Age 19: Chrome extension launches (500+ users!), sheet music editor beta",
        "Age 20: Practice tracker app gains traction, first real revenue",
        "Age 21: Add AI features, start getting serious user feedback",
        "Age 22: Graduate with working product suite and real customers",
        "Age 23-25: Officially launch Piano-Tech startup, secure funding",
      ],
      story: `At this stage of my life, I am building on every piece of knowledge and experience that will help me create my AI piano teacher.
For one of my projects, I developed a Chrome extension that saves timestamps of every YouTube video, making it easy to revisit important sections (as shown in the preview above).
Little did I know, my friend needed this extension. When he said, “This is exactly what I’ve been looking for,” I realized something important: I wasn’t just building hobby projects anymore. I was laying the foundation for my future company.`,
      impact:
        "Proof of concept achieved + real users + sustainable revenue streams",
      color: "border-blue-400 text-blue-400",
      image: "assets/extension.png",
    },
    {
      icon: <Brain className="w-5 h-5" />,
      period: "2025-2032",
      ages: "Age 25-32",
      phase: "The Building Years",
      status: "Vision",
      tagline: "Building the teacher I needed when I was 11",
      keyMoments: [
        "Age 25: AI piano teacher MVP launches - first breakthrough in music AI",
        "Age 27: Partner with music schools, proven 80% reduction in student dropouts",
        "Age 29: Smart sheet music becomes industry standard",
        "Age 30: International expansion, multiple languages supported",
        "Age 32: AI understands musical emotion, not just technique",
      ],
      story: `At this stage, my childhood dream becomes reality. I begin building the AI piano teacher that provides recommendations
on playing tempo, musical expression, and automatically flips pages, using all the knowledge I gained from university and my projects.
This is the moment when everything I wished for at 11 finally exists—and it will help thousands of kids just like me: the ones who struggle, fall behind, or almost give up.

Parents start emailing me: 'My daughter actually looks forward to piano practice now.' Teachers say: 'I've never seen kids progress this fast.'

That 11-year-old who cried over sheet music finally gets his revenge.`,
      impact: "Revolutionary AI that transforms music education globally",
      color: "border-green-400 text-green-400",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmUlMjB0ZWNobm9sb2d5JTIwcGlhbm8lMjBBSXxlbnwxfHx8fDE3NTg4NzM2Njl8MA&ixlib=rb-4.1.0&q=80&w=400",
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      period: "2032-2046",
      ages: "Age 32-40",
      phase: "The Impact & Freedom Years",
      status: "Dream",
      tagline: "Mission accomplished, new adventures begin",
      keyMoments: [
        "Age 32: Company IPO, still personally involved in product development",
        "Age 35: Piano dropout rate reduced by 85% worldwide",
        "Age 37: Expand to all instruments, full music learning ecosystem",
        "Age 39: Documentary about my journey inspires new generation of builders",
        "Age 40: Achievement unlocked - the freedom I've always dreamed of",
      ],
      story: `The years when the mission is complete and new adventures begin. No kid has to cry over piano lessons anymore. Music learning is joyful, intuitive, and accessible to everyone.

I wake up wherever I want in the world (Vienna today, maybe Tokyo next month) and check the dashboard: another 10,000 students learned their first song this week using my AI teacher. Zero dropouts. Pure joy.

But this isn't retirement - it's graduation to the next level. Now I'm helping other young builders turn their childhood frustrations into world-changing companies.

Full circle: from struggling kid to the person who makes sure no kid has to struggle the same way.`,
      impact:
        "Global transformation of music education + complete personal freedom",
      color: "border-purple-400 text-purple-400",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFybmluZyUyMG11c2ljJTIwaW5ub3ZhdGlvbiUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NTg4NzM2NzF8MA&ixlib=rb-4.1.0&q=80&w=400",
    },
  ];

  return (
    <div className="space-y-6">
      {showIntro && (
        <div className="border-l-4 border-amber-400 pl-4">
          <TypewriterText
            text={`THE COMPLETE JOURNEY: 2018 → 2046
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

From an 11-year-old struggling at the piano to a builder of piano-tech solutions.
This is the full story of how I plan to turn childhood struggles into a mission-driven company that transforms music education for everyone.
`}
            className="text-amber-400 whitespace-pre-line"
            speed={25}
          />
        </div>
      )}

      {showTimeline && (
        <div className="space-y-6">
          <div className="grid gap-6">
            {myJourney.map((phase, index) => (
              <Card
                key={index}
                className={`relative bg-gray-900/50 border-gray-700 hover:${
                  phase.color.split(" ")[0]
                } cursor-pointer transition-all ${
                  activePhase === index ? phase.color.split(" ")[0] : ""
                }`}
                onClick={() =>
                  setActivePhase(activePhase === index ? null : index)
                }
              >
                {/* Top-left badge */}
                <Badge className="absolute top-3 left-3 z-10 bg-amber-400/20 text-amber-400 border border-amber-400/50">
                  {phase.status}
                </Badge>

                {/* Top-right icon */}
                <div
                  className={`absolute top-3 right-3 z-10 p-2 rounded-full bg-black/50 ${
                    phase.color.split(" ")[1]
                  }`}
                >
                  {phase.icon}
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="relative">
                    <ImageWithFallback
                      src={phase.image}
                      alt={phase.phase}
                      className="w-full h-40 md:h-full object-cover rounded-lg"
                    />

                    {/* Tag inside top-left corner of image */}
                    <div className="absolute top-2 left-2 bg-black/60 px-2 py-1 rounded-md">
                      <div className="text-xs md:text-sm font-semibold text-amber-400">
                        {phase.period} | {phase.ages}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2 p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle
                        className={`${
                          phase.color.split(" ")[1]
                        } text-xl flex items-center gap-3`}
                      >
                        <Calendar className="w-5 h-5" />
                        {phase.phase}
                      </CardTitle>
                      <p className="text-gray-400 italic">"{phase.tagline}"</p>
                      <p className="text-gray-300">{phase.story}</p>
                    </CardHeader>

                    {activePhase === index && (
                      <CardContent className="p-0 space-y-4">
                        <div className="border-t border-gray-600 pt-4">
                          <h4 className="text-amber-300 mb-3 flex items-center gap-2">
                            <Star className="w-4 h-4" />
                            Key Milestones
                          </h4>
                          <div className="space-y-2">
                            {phase.keyMoments.map((moment, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-gray-300 text-sm">
                                  {moment}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="p-3 bg-gray-800/30 rounded">
                          <h4 className="text-green-400 text-sm mb-1">
                            The Impact
                          </h4>
                          <p className="text-gray-300 text-sm">
                            {phase.impact}
                          </p>
                        </div>
                      </CardContent>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 border border-amber-400/30 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="w-6 h-6 text-amber-400" />
              <h3 className="text-amber-400">
                The Thread That Connects It All
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-red-400 mb-2">
                  🎹 The Pain That Started It
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  A 11-year-old kid crying over sheet music, feeling stupid
                  because everyone else seemed to 'get it' faster. That pain
                  became my North Star.
                </p>

                <h4 className="text-blue-400 mb-2">
                  💻 The Skills That Build It
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  Learning to code wasn't just education - it was my superpower
                  for turning every frustration into a solution. Every bug
                  taught me persistence. Every shipped feature taught me what
                  people actually need.
                </p>
              </div>

              <div>
                <h4 className="text-green-400 mb-2">
                  🤖 The AI That Changes It
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  An AI piano teacher built on 7 years of personal struggle. It
                  understands frustration because I lived it. It knows exactly
                  how to help because I needed that help.
                </p>

                <h4 className="text-purple-400 mb-2">
                  🌟 The Legacy That Matters
                </h4>
                <p className="text-gray-300 text-sm">
                  By 40, no kid has to cry over piano lessons anymore. Music
                  learning becomes joyful for everyone - not just the naturally
                  gifted. That's what this journey is really about.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <Card className="bg-red-900/20 border border-red-400/30">
              <CardHeader>
                <CardTitle className="text-red-400 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  The Heart
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  Every feature I build, every decision I make - I ask: "Would
                  this have helped 11-year-old me?" That crying kid is still my
                  product manager.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-blue-900/20 border border-blue-400/30">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  The Tool
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  Programming isn't just my career - it's my weapon against
                  every problem I've ever faced. Code turns empathy into
                  products that actually help people.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-green-900/20 border border-green-400/30">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center gap-2">
                  <Piano className="w-5 h-5" />
                  The Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  Transform music education from something that makes kids cry
                  to something that makes them light up. Build the patient AI
                  teacher everyone deserves.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-amber-400/10 to-orange-400/10 border border-amber-400/30 rounded-lg p-6 mb-6">
              <h3 className="text-amber-400 mb-3">2046: The Dream I will be achieved</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I wake up in Vienna (or maybe Kyoto - I choose freely now) and
                check my dashboard:
                <span className="text-green-400">
                  {" "}
                  another 15,000 students learned their first song this week
                </span>{" "}
                using my AI piano teacher.
                <span className="text-blue-400"> Zero dropouts.</span>{" "}
                <span className="text-amber-300"> Pure musical joy.</span>
              </p>
              <p className="text-green-400">
                That 11-year-old kid finally got the teacher he needed. And now,
                every kid like him does too. ✨
              </p>
            </div>

            <div className="flex justify-center space-x-4">
              <Button
                onClick={() => onNavigate("home")}
                className="bg-amber-400/20 border border-amber-400 text-amber-400 hover:bg-amber-400/30"
              >
                ← Back to Start
              </Button>
              <Button
                onClick={() => onNavigate("vision")}
                className="bg-blue-400/20 border border-blue-400 text-blue-400 hover:bg-blue-400/30"
              >
                Explore My Vision →
              </Button>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm mt-8 p-4 border-t border-gray-700">
            🎹 Every struggle was just preparation for the solution. Every tear
            built the empathy that makes my AI actually understand. 🎵
          </div>
        </div>
      )}
    </div>
  );
}
