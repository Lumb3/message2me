import React, { useState, useEffect } from 'react';
import { TypewriterText } from '../TypewriterText';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Piano, Laptop, Globe, Calendar, Target, Plane } from 'lucide-react';

interface JourneyPageProps {
  onNavigate: (pageId: string) => void;
  onExplored: (sectionId: string) => void;
}

export function JourneyPage({ onNavigate, onExplored }: JourneyPageProps) {
  const [showIntro, setShowIntro] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);
  const [showVision, setShowVision] = useState(false);
  const [activePhase, setActivePhase] = useState<number | null>(null);

  useEffect(() => {
    const timeout1 = setTimeout(() => setShowIntro(true), 500);
    const timeout2 = setTimeout(() => setShowTimeline(true), 2000);
    const timeout3 = setTimeout(() => setShowVision(true), 4000);
    onExplored('journey');

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, [onExplored]);

  const journeyPhases = [
    {
      title: "Foundation Era",
      timeframe: "2025-2029 (Age 19-23)",
      focus: "Building Core Skills",
      keyActions: [
        "Master piano fundamentals & advanced techniques",
        "Learn 3+ programming languages proficiently",
        "Study abroad in 2+ countries",
        "Build first income streams from both skills"
      ],
      experiences: ["Challenge builds strength through difficult pieces", "Persistence through complex coding projects"],
      values: ["Challenge Makes Us Stronger", "Persistence Wins Everything"],
      decisions: ["Choose growth over comfort", "Invest in dual passions"],
      milestones: [
        "Complete music performance degree",
        "Build first commercial app",
        "Teach first piano students",
        "Achieve fluency in 2nd language"
      ],
      color: "border-blue-400 text-blue-400",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Building Era", 
      timeframe: "2029-2034 (Age 23-28)",
      focus: "Creating Systems & Networks",
      keyActions: [
        "Launch first piano teaching studio",
        "Develop music education software platform",
        "Establish remote work systems",
        "Build international network"
      ],
      experiences: ["Running challenges build mental resilience", "First teaching successes validate approach"],
      values: ["Challenge Makes Us Stronger", "Persistence Wins Everything"],
      decisions: ["Location independence over traditional career", "Technology + Music fusion"],
      milestones: [
        "Open 3 piano studio locations",
        "Generate $100K+ from software",
        "Live in 5+ countries",
        "Student performance competition wins"
      ],
      color: "border-green-400 text-green-400",
      icon: <Piano className="w-6 h-6" />
    },
    {
      title: "Scaling Era",
      timeframe: "2034-2039 (Age 28-33)", 
      focus: "Global Expansion",
      keyActions: [
        "Franchise piano teaching methodology",
        "Scale software to global markets",
        "Establish studios on 3+ continents",
        "Create teacher training programs"
      ],
      experiences: ["International cultural immersion", "Leadership through building teams"],
      values: ["Challenge Makes Us Stronger", "Persistence Wins Everything"],
      decisions: ["Scale systematically", "Culture-adaptive teaching methods"],
      milestones: [
        "15+ studio locations worldwide",
        "Platform serves 10,000+ students",
        "Visited 30+ countries",
        "Train 100+ piano teachers"
      ],
      color: "border-purple-400 text-purple-400",
      icon: <Laptop className="w-6 h-6" />
    },
    {
      title: "Freedom Era",
      timeframe: "2039-2046 (Age 33-40)",
      focus: "Living the Vision",
      keyActions: [
        "Optimize for maximum freedom",
        "Perfect nomadic lifestyle systems", 
        "Focus on cultural exploration",
        "Mentor next generation"
      ],
      experiences: ["Complete integration of all learnings", "Peak performance systems"],
      values: ["Challenge Makes Us Stronger", "Persistence Wins Everything"],
      decisions: ["Freedom over further growth", "Cultural immersion priority"],
      milestones: [
        "20+ global studio network",
        "Complete location independence",
        "Lived on every continent", 
        "Global impact through music education"
      ],
      color: "border-yellow-400 text-yellow-400",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <div className="space-y-6">
      {showIntro && (
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="border-l-4 border-amber-400 pl-4">
            <TypewriterText 
              text={`COMPLETE TIMELINE: 2025 → 2046
━━━━━━━━━━━━━━━━━━━━━━━━━━

From 19-year-old student to 40-year-old 
global entrepreneur. Two hobbies become 
worldwide freedom.

The 21-year journey in four eras.`}
              className="text-amber-400 whitespace-pre-line"
              speed={25}
            />
          </div>
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1597395247099-ec7f5c18087a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMHRyYXZlbCUyMGRpZ2l0YWwlMjBub21hZHxlbnwxfHx8fDE3NTg4NzM2NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="World map journey"
            className="w-full h-48 object-cover rounded-lg border border-gray-700"
          />
        </div>
      )}

      {showTimeline && (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <TypewriterText 
              text="Four Eras of Success:"
              className="text-green-400 text-lg"
              delay={500}
            />
          </div>

          <div className="space-y-4">
            {journeyPhases.map((phase, index) => (
              <Card 
                key={index}
                className={`bg-gray-900/50 border-gray-700 hover:${phase.color.split(' ')[0]} cursor-pointer transition-all ${
                  activePhase === index ? phase.color.split(' ')[0] : ''
                }`}
                onClick={() => setActivePhase(activePhase === index ? null : index)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-full border-2 ${phase.color} flex items-center justify-center bg-black/30`}>
                        <div className={phase.color.split(' ')[1]}>
                          {phase.icon}
                        </div>
                      </div>
                      <div>
                        <CardTitle className={`${phase.color.split(' ')[1]} text-xl`}>
                          {phase.title}
                        </CardTitle>
                        <div className="text-gray-400">{phase.timeframe}</div>
                        <div className="text-gray-300 mt-1">{phase.focus}</div>
                      </div>
                    </div>
                    <Plane className={`w-6 h-6 ${phase.color.split(' ')[1]} ${activePhase === index ? 'rotate-90' : ''} transition-transform`} />
                  </div>
                </CardHeader>

                {activePhase === index && (
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-blue-400 mb-2 flex items-center">
                            <Target className="w-4 h-4 mr-2" />
                            Key Actions
                          </h4>
                          {phase.keyActions.map((action, idx) => (
                            <div key={idx} className="flex items-start space-x-2 mb-1">
                              <span className="text-green-400 mt-1">•</span>
                              <span className="text-gray-300 text-sm">{action}</span>
                            </div>
                          ))}
                        </div>

                        <div>
                          <h4 className="text-purple-400 mb-2 flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            Milestones
                          </h4>
                          {phase.milestones.map((milestone, idx) => (
                            <div key={idx} className="flex items-start space-x-2 mb-1">
                              <span className="text-yellow-400 mt-1">✓</span>
                              <span className="text-gray-300 text-sm">{milestone}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-green-400 mb-2">Values Applied</h4>
                          {phase.values.map((value, idx) => (
                            <div key={idx} className="text-gray-300 text-sm mb-1">• {value}</div>
                          ))}
                        </div>

                        <div>
                          <h4 className="text-red-400 mb-2">Key Decisions</h4>
                          {phase.decisions.map((decision, idx) => (
                            <div key={idx} className="text-gray-300 text-sm mb-1">• {decision}</div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-600">
                      <Progress value={(index + 1) * 25} className="h-3" />
                      <div className="text-xs text-gray-500 mt-2 text-center">
                        Journey Progress: {(index + 1) * 25}% to 2046
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      )}

      {showVision && (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <TypewriterText 
              text="2046: Vision Achieved"
              className="text-amber-300 text-2xl"
              delay={1000}
            />
          </div>

          <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-400/30 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-green-400 mb-4 text-xl">Welcome to My 40s!</h3>
                <p className="text-gray-300 leading-relaxed">
                  🎹 <span className="text-blue-400">20+ piano studios</span> across 6 continents
                </p>
                <p className="text-gray-300 leading-relaxed">
                  💻 <span className="text-green-400">Global music platform</span> serving 50,000+ students
                </p>
                <p className="text-gray-300 leading-relaxed">
                  🌍 <span className="text-purple-400">Complete location freedom</span> - working from anywhere
                </p>
                <p className="text-gray-300 leading-relaxed">
                  ✈️ <span className="text-yellow-400">Cultural immersion</span> in 50+ countries
                </p>
                <p className="text-gray-300 leading-relaxed mt-3">
                  <span className="text-amber-300">Two hobbies at 19 became global freedom at 40.</span>
                </p>
              </div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1585816876841-7f1a1a206cae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBuZXR3b3JrJTIwY29ubmVjdGlvbiUyMHdvcmxkd2lkZXxlbnwxfHx8fDE3NTg4NzM2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Global success network"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Card className="bg-blue-900/20 border border-blue-400/30">
              <CardHeader>
                <CardTitle className="text-blue-400 flex items-center">
                  <Piano className="w-5 h-5 mr-2" />
                  The Formula
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  <span className="text-amber-300">Challenge + Persistence</span> × 21 years = Global Success
                </p>
                <p className="text-gray-300 text-sm mt-2">
                  Simple values. Consistent action. Extraordinary results.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-green-900/20 border border-green-400/30">
              <CardHeader>
                <CardTitle className="text-green-400 flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  Beyond 2046
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm">
                  This isn't the end—it's the foundation for decades of global impact through music and technology.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button 
              onClick={() => onNavigate('vision')}
              className="bg-blue-400/20 border border-blue-400 text-blue-400 hover:bg-blue-400/30"
            >
              Vision
            </Button>
            <Button 
              onClick={() => onNavigate('experiences')}
              className="bg-green-400/20 border border-green-400 text-green-400 hover:bg-green-400/30"
            >
              Experiences
            </Button>
            <Button 
              onClick={() => onNavigate('values')}
              className="bg-purple-400/20 border border-purple-400 text-purple-400 hover:bg-purple-400/30"
            >
              Values
            </Button>
            <Button 
              onClick={() => onNavigate('decisions')}
              className="bg-yellow-400/20 border border-yellow-400 text-yellow-400 hover:bg-yellow-400/30"
            >
              Decisions
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}