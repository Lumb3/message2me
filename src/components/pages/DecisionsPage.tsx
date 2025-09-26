import React, { useState, useEffect } from 'react';
import { TypewriterText } from '../TypewriterText';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Piano, Laptop, Globe, Calendar, Zap } from 'lucide-react';

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
    onExplored('decisions');

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [onExplored]);

  const criticalDecisions = [
    {
      icon: <Piano className="w-6 h-6" />,
      title: "Piano as Primary Business",
      timeframe: "Ages 19-25",
      decisionPoint: "Build teaching business instead of traditional music career",
      reasoning: `Instead of pursuing performance or academia, I'll create a scalable piano teaching business. This gives me business experience, steady income, and the foundation for global expansion.

Teaching is more sustainable and scalable than performing. It also develops the communication and leadership skills I'll need later.`,
      tradeoffs: {
        shortTerm: "Miss traditional music career path, less prestige initially",
        longTerm: "Build business skills, create scalable income, develop global network"
      },
      successMetrics: [
        "Build student base of 50+ students by age 22",
        "Develop unique teaching methodology",
        "Create first digital course by age 24",
        "Open second location by age 25"
      ],
      contingencyPlan: `If local teaching market saturates, I'll pivot to online teaching and international expansion earlier than planned.`,
      valueAlignment: ["Challenge Makes Us Stronger", "Persistence Wins Everything"],
      color: "border-blue-400 text-blue-400"
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Code for Freedom",
      timeframe: "Ages 19-30",
      decisionPoint: "Specialize in remote-friendly programming skills",
      reasoning: `Focus on web development, app creation, and music education software. These skills are location-independent and complement my piano business perfectly.

I'll build the technology that powers my own music education empire while also freelancing for others.`,
      tradeoffs: {
        shortTerm: "Intense learning curve, long hours coding + teaching",
        longTerm: "Complete location freedom, high income potential, unique skill combination"
      },
      successMetrics: [
        "Master 3+ programming languages by age 22",
        "Build first music education app by age 24",
        "Earn $50K+ annually from coding by age 26",
        "Create platform used by 1,000+ musicians"
      ],
      contingencyPlan: `If music tech market becomes too competitive, I'll pivot to general software development while maintaining music teaching.`,
      valueAlignment: ["Challenge Makes Us Stronger", "Persistence Wins Everything"],
      color: "border-green-400 text-green-400"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Over Local",
      timeframe: "Ages 25-35",
      decisionPoint: "Expand internationally instead of deepening locally",
      reasoning: `Once I have proven systems, I'll replicate them globally rather than just growing bigger in one location. This creates the foundation for the nomadic lifestyle I want.

Each new country teaches me new approaches to music education and business.`,
      tradeoffs: {
        shortTerm: "Complex international logistics, cultural learning curves",
        longTerm: "True global freedom, diverse income streams, cultural richness"
      },
      successMetrics: [
        "Open studios in 5 countries by age 30",
        "Spend 3+ months yearly in different countries",
        "Build international team of teachers",
        "Platform serves students from 20+ countries"
      ],
      contingencyPlan: `If international expansion proves too complex, I'll focus on online global reach first, then physical expansion.`,
      valueAlignment: ["Challenge Makes Us Stronger", "Persistence Wins Everything"],
      color: "border-purple-400 text-purple-400"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Systems Over Hours",
      timeframe: "Ages 30-40",
      decisionPoint: "Build systems that work without my constant presence",
      reasoning: `By age 30, I need to transition from doing everything myself to building systems and teams that can operate independently. This enables the freedom I want in my 40s.

Focus shifts from growth to optimization and lifestyle design.`,
      tradeoffs: {
        shortTerm: "Reduced direct control, initial income dip during transition",
        longTerm: "Complete time freedom, passive income streams, lifestyle design"
      },
      successMetrics: [
        "Business runs 3+ months without my presence",
        "80% of income is passive or managed by others",
        "Team of 10+ teachers worldwide",
        "Automated student acquisition systems"
      ],
      contingencyPlan: `If delegation doesn't work, I'll focus on higher-level strategy and reduce the number of locations to maintain quality.`,
      valueAlignment: ["Challenge Makes Us Stronger", "Persistence Wins Everything"],
      color: "border-yellow-400 text-yellow-400"
    }
  ];

  return (
    <div className="space-y-6">
      {showIntro && (
        <div className="border-l-4 border-yellow-400 pl-4">
          <TypewriterText 
            text={`KEY DECISIONS FOR GLOBAL SUCCESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Four strategic choices that turn hobbies into freedom.
Each decision builds on the last.

Success isn't luck—it's intentional decisions.`}
            className="text-yellow-400 whitespace-pre-line"
            speed={25}
          />
        </div>
      )}

      {showDecisions && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            {criticalDecisions.map((decision, index) => (
              <Card 
                key={index}
                className={`bg-gray-900/50 border-gray-700 hover:${decision.color.split(' ')[0]} cursor-pointer transition-all ${
                  selectedDecision === index ? decision.color.split(' ')[0] : ''
                }`}
                onClick={() => setSelectedDecision(selectedDecision === index ? null : index)}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className={`p-3 rounded-full border-2 ${decision.color} bg-black/30`}>
                      <div className={decision.color.split(' ')[1]}>
                        {decision.icon}
                      </div>
                    </div>
                    <div>
                      <CardTitle className={`${decision.color.split(' ')[1]} text-lg`}>
                        {decision.title}
                      </CardTitle>
                      <div className="text-gray-400 text-sm">{decision.timeframe}</div>
                    </div>
                  </div>
                  <div className="text-gray-300 text-sm">
                    {decision.decisionPoint}
                  </div>
                </CardHeader>

                {selectedDecision === index && (
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-black/30 rounded">
                      <h4 className="text-blue-400 mb-2">Why This Choice</h4>
                      <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                        {decision.reasoning}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-3 bg-red-900/20 rounded border border-red-400/30">
                        <h4 className="text-red-400 text-sm mb-2">Trade-offs</h4>
                        <p className="text-gray-300 text-sm">{decision.tradeoffs.shortTerm}</p>
                      </div>
                      <div className="p-3 bg-green-900/20 rounded border border-green-400/30">
                        <h4 className="text-green-400 text-sm mb-2">Long-term Gains</h4>
                        <p className="text-gray-300 text-sm">{decision.tradeoffs.longTerm}</p>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-800/30 rounded">
                      <h4 className="text-amber-300 mb-2">Success Markers</h4>
                      {decision.successMetrics.map((metric, idx) => (
                        <div key={idx} className="flex items-start space-x-2 mb-1">
                          <span className="text-green-400 mt-1">✓</span>
                          <span className="text-gray-300 text-sm">{metric}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Badge className="bg-red-400/20 text-red-400 border border-red-400/50">
                        Challenge → Strength
                      </Badge>
                      <Badge className="bg-blue-400/20 text-blue-400 border border-blue-400/50">
                        Persistence → Victory
                      </Badge>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-400/30 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-yellow-400" />
              <h3 className="text-yellow-400 text-xl">The Decision Chain</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-blue-400">Piano Business</span> → steady income & teaching skills → 
              <span className="text-green-400"> Code Skills</span> → location freedom & tech capability → 
              <span className="text-purple-400"> Global Expansion</span> → cultural diversity & scale → 
              <span className="text-yellow-400"> Systems Building</span> → complete freedom at 40
            </p>
            <p className="text-gray-300 leading-relaxed mt-3">
              Each decision sets up the next. By 2046, this chain delivers exactly what I want: 
              global freedom powered by two passions.
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <Button 
              onClick={() => onNavigate('journey')}
              className="bg-amber-400/20 border border-amber-400 text-amber-400 hover:bg-amber-400/30"
            >
              Complete Timeline →
            </Button>
            <Button 
              onClick={() => onNavigate('vision')}
              className="bg-blue-400/20 border border-blue-400 text-blue-400 hover:bg-blue-400/30"
            >
              Back to Vision →
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}