import React, { useState, useEffect } from 'react';
import { TypewriterText } from '../TypewriterText';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Compass, Heart, Lightbulb, Shield, Users, TrendingUp } from 'lucide-react';

interface ValuesPageProps {
  onNavigate: (pageId: string) => void;
  onExplored: (sectionId: string) => void;
}

export function ValuesPage({ onNavigate, onExplored }: ValuesPageProps) {
  const [showIntro, setShowIntro] = useState(false);
  const [showValues, setShowValues] = useState(false);
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  useEffect(() => {
    setTimeout(() => setShowIntro(true), 500);
    setTimeout(() => setShowValues(true), 2000);
    onExplored('values');
  }, [onExplored]);

  const coreValues = [
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Authentic Leadership",
      subtitle: "Leading by example with genuine care for others",
      description: "I believe true leadership comes from authenticity, not authority",
      principles: [
        "Lead with vulnerability and honesty",
        "Make decisions based on values, not just outcomes",
        "Empower others to reach their full potential",
        "Take responsibility for both successes and failures"
      ],
      realWorldApplication: `In practice, this means being transparent about my own learning journey, 
      admitting when I don't know something, and creating environments where others feel safe to take risks. 
      By 40, I want to be known as someone who builds up rather than tears down, who creates opportunities 
      for others, and who leads with both competence and compassion.`,
      decisionFramework: "When facing leadership decisions, I ask: 'Is this authentic to who I am and who I want to become?'",
      color: "border-blue-400 text-blue-400"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Continuous Growth",
      subtitle: "Embracing lifelong learning and adaptation",
      description: "I'm committed to never stopping my evolution as a person and professional",
      principles: [
        "Stay curious about everything",
        "Seek feedback actively, even when it's uncomfortable",
        "Challenge my own assumptions regularly",
        "View failures as data points for improvement"
      ],
      realWorldApplication: `This value drives me to regularly step outside my comfort zone, take on projects 
      I'm not fully qualified for yet, and invest time in learning new skills. It means reading broadly, 
      seeking mentors in different fields, and being willing to completely change direction if I discover 
      something better aligned with my purpose.`,
      decisionFramework: "I evaluate opportunities by asking: 'What will this teach me that I couldn't learn otherwise?'",
      color: "border-green-400 text-green-400"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Meaningful Impact",
      subtitle: "Creating positive change that extends beyond myself",
      description: "Success must include making the world better in some measurable way",
      principles: [
        "Prioritize projects that solve real problems",
        "Consider long-term consequences of my actions",
        "Use privilege and opportunity to lift others up",
        "Measure success by positive change created, not just personal gain"
      ],
      realWorldApplication: `This means choosing career paths and projects based on their potential for positive 
      impact, not just financial reward. It influences how I spend my free time, where I volunteer, and what 
      kind of companies I want to work for or start. By 40, I want my professional and personal efforts to 
      have created ripple effects of positive change.`,
      decisionFramework: "Before major decisions, I ask: 'How does this contribute to something larger than myself?'",
      color: "border-red-400 text-red-400"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Integrity Above All",
      subtitle: "Doing the right thing even when it's difficult",
      description: "My reputation and self-respect are built on consistent ethical behavior",
      principles: [
        "Be honest in all communications",
        "Keep commitments even when circumstances change",
        "Stand up for what's right, even when it's unpopular",
        "Admit mistakes quickly and work to make them right"
      ],
      realWorldApplication: `This value governs everything from small daily interactions to major life decisions. 
      It means being honest about project timelines even when it's inconvenient, giving credit where it's due 
      even when I could take it myself, and speaking up when I see something wrong even when it would be easier 
      to stay silent.`,
      decisionFramework: "I test decisions by asking: 'Can I be proud of this choice in 10 years?'",
      color: "border-purple-400 text-purple-400"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Deep Relationships",
      subtitle: "Investing in meaningful connections with others",
      description: "Life's greatest rewards come through authentic relationships",
      principles: [
        "Prioritize quality time with important people",
        "Listen more than I speak",
        "Show up consistently for others",
        "Be generous with help, advice, and opportunities"
      ],
      realWorldApplication: `This means saying no to some professional opportunities to be present for family 
      and friends. It means remembering details about people's lives, following up on their challenges, and 
      celebrating their successes. By 40, I want to have built a network based on mutual care and support, 
      not just professional utility.`,
      decisionFramework: "When managing time, I ask: 'Is this choice reflecting my commitment to the people I care about?'",
      color: "border-yellow-400 text-yellow-400"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Excellence with Balance",
      subtitle: "Pursuing high standards while maintaining perspective",
      description: "I strive for excellence without perfectionism or burnout",
      principles: [
        "Set high standards but reasonable expectations",
        "Focus on what matters most rather than everything at once",
        "Build sustainable systems for long-term performance",
        "Know when good enough is truly good enough"
      ],
      realWorldApplication: `This value helps me avoid the trap of perfectionism while still maintaining high 
      standards. It means being strategic about where I invest my energy, building habits that support sustained 
      excellence, and knowing when to rest and recharge. By 40, I want to be known for consistent high performance 
      without the cost of health or relationships.`,
      decisionFramework: "I evaluate commitments by asking: 'Can I do this excellently while maintaining other priorities?'",
      color: "border-orange-400 text-orange-400"
    }
  ];

  return (
    <div className="space-y-6">
      {showIntro && (
        <div className="border-l-4 border-purple-400 pl-4">
          <TypewriterText 
            text={`CORE VALUES THAT GUIDE MY DECISIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These aren't just ideals—they're the operating principles
that will guide every major decision on my path to success.
They're tested through experience and refined through reflection.`}
            className="text-purple-400 whitespace-pre-line"
            speed={25}
          />
        </div>
      )}

      {showValues && (
        <div className="space-y-4">
          <div className="text-center mb-6">
            <TypewriterText 
              text="Click any value to explore how it shapes my journey:"
              className="text-amber-300"
              delay={500}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coreValues.map((value, index) => (
              <Card 
                key={index}
                className={`bg-gray-900/50 border-gray-700 hover:${value.color.split(' ')[0]} cursor-pointer transition-all duration-300 ${
                  selectedValue === index ? value.color.split(' ')[0] : ''
                }`}
                onClick={() => setSelectedValue(selectedValue === index ? null : index)}
              >
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <div className={value.color.split(' ')[1]}>
                      {value.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className={`${value.color.split(' ')[1]} text-lg`}>
                        {value.title}
                      </CardTitle>
                      <div className="text-gray-400 text-sm">{value.subtitle}</div>
                      <div className="text-gray-300 text-sm mt-2">{value.description}</div>
                    </div>
                  </div>
                </CardHeader>
                
                {selectedValue === index && (
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="text-amber-300 text-sm mb-2">Core Principles</h4>
                      <div className="space-y-1">
                        {value.principles.map((principle, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <span className="text-green-400 text-xs mt-1">•</span>
                            <span className="text-gray-300 text-sm">{principle}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-black/30 rounded">
                      <h4 className="text-blue-400 text-sm mb-2">In Practice</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {value.realWorldApplication}
                      </p>
                    </div>

                    <div className="p-4 bg-gray-800/30 rounded">
                      <h4 className="text-green-400 text-sm mb-2">Decision Framework</h4>
                      <p className="text-gray-300 text-sm italic">
                        {value.decisionFramework}
                      </p>
                    </div>
                  </CardContent>
                )}
                
                <div className="px-6 pb-4">
                  <div className={`text-xs ${value.color.split(' ')[1]} opacity-70`}>
                    {selectedValue === index ? 'Click to collapse' : 'Click to expand'}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-purple-400/30 rounded-lg">
            <h3 className="text-purple-400 mb-3">Values in Action</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              These values don't exist in isolation—they work together to create a framework for decision-making. 
              When facing difficult choices, I can refer back to these principles to ensure I'm staying true to 
              who I want to become.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mt-3">
              By 40, I want these values to be so integrated into my character that living by them becomes automatic. 
              They're not just guides for big decisions—they shape how I interact with people daily, how I approach 
              challenges, and how I define and measure success.
            </p>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {coreValues.map((value, index) => (
                <Badge key={index} className={`${value.color.replace('border-', 'bg-').replace('text-', 'text-')}/20 border ${value.color}`}>
                  {value.title}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex justify-center space-x-4 mt-6">
            <Button 
              onClick={() => onNavigate('decisions')}
              className="bg-yellow-400/20 border border-yellow-400 text-yellow-400 hover:bg-yellow-400/30"
            >
              See Critical Decisions →
            </Button>
            <Button 
              onClick={() => onNavigate('journey')}
              className="bg-amber-400/20 border border-amber-400 text-amber-400 hover:bg-amber-400/30"
            >
              View Complete Journey →
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}