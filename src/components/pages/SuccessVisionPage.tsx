import React, { useState, useEffect } from 'react';
import { TypewriterText } from '../TypewriterText';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Target, Heart, Users, TrendingUp, Home, Globe } from 'lucide-react';

interface SuccessVisionPageProps {
  onNavigate: (pageId: string) => void;
  onExplored: (sectionId: string) => void;
}

export function SuccessVisionPage({ onNavigate, onExplored }: SuccessVisionPageProps) {
  const [showIntro, setShowIntro] = useState(false);
  const [showVisions, setShowVisions] = useState(false);
  const [activeVision, setActiveVision] = useState<number | null>(null);

  useEffect(() => {
    setTimeout(() => setShowIntro(true), 500);
    setTimeout(() => setShowVisions(true), 2000);
    onExplored('vision');
  }, [onExplored]);

  const successPillars = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Professional Fulfillment",
      description: "Leading innovative projects that solve real-world problems",
      details: `At 40, I see myself in a leadership role where I'm not just managing, 
      but inspiring others to push boundaries. Success means working on projects 
      that have genuine impact—whether that's developing sustainable technologies, 
      mentoring the next generation, or building systems that make people's lives better.
      
      I measure this success not by title or salary alone, but by the positive 
      change I can create and the people I can lift up along the way.`,
      color: "border-blue-400 text-blue-400"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Personal Well-being",
      description: "Maintaining physical health, mental clarity, and emotional balance",
      details: `Success at 40 includes being someone who prioritizes holistic health. 
      I envision having the energy to fully engage with life—physically fit enough 
      to tackle new adventures, mentally sharp enough to keep learning, and 
      emotionally balanced enough to be present for the people who matter.
      
      This means establishing sustainable routines early, learning stress management, 
      and understanding that peak performance requires rest and recovery.`,
      color: "border-green-400 text-green-400"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Meaningful Relationships",
      description: "Deep connections with family, friends, and community",
      details: `By 40, I want to be someone who has invested deeply in relationships. 
      Success means having a strong support network of people who challenge me to grow, 
      celebrate my wins, and support me through difficulties.
      
      Whether it's maintaining close friendships from different life stages, 
      building a loving family, or contributing meaningfully to my community, 
      I believe true success is measured by the depth of our connections.`,
      color: "border-purple-400 text-purple-400"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Continuous Growth",
      description: "Never stopping learning, adapting, and evolving",
      details: `At 40, I see myself as someone who has embraced lifelong learning. 
      Success means staying curious, adapting to change, and continuing to develop 
      both professionally and personally.
      
      This includes pursuing new skills, staying current with industry trends, 
      exploring creative outlets, and maintaining the beginner's mind that 
      allows for breakthrough thinking and innovation.`,
      color: "border-yellow-400 text-yellow-400"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Impact",
      description: "Contributing to solutions for worldwide challenges",
      details: `Success at 40 means having the platform and capability to contribute 
      to solving global challenges. Whether through my professional work, volunteer 
      efforts, or innovative projects, I want to be part of creating a better world.
      
      This could mean working on climate solutions, advancing education access, 
      or developing technologies that bridge divides. The specific area matters 
      less than the commitment to thinking beyond myself.`,
      color: "border-red-400 text-red-400"
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Life Integration",
      description: "Harmonizing all aspects of life with intentionality",
      details: `True success at 40 means having learned to integrate all aspects 
      of life thoughtfully. Not perfect work-life balance, but intentional choices 
      about where to invest time and energy based on my values and goals.
      
      This includes creating space for spontaneity within structure, knowing when 
      to say yes and when to say no, and building a lifestyle that supports both 
      achievement and enjoyment.`,
      color: "border-orange-400 text-orange-400"
    }
  ];

  return (
    <div className="space-y-6">
      {showIntro && (
        <div className="border-l-4 border-blue-400 pl-4">
          <TypewriterText 
            text={`MY VISION OF SUCCESS AT 40
━━━━━━━━━━━━━━━━━━━━━━━━━━

Success, to me, isn't a destination—it's a way of traveling.
By 40, I envision a life built on six core pillars that
create a foundation for both achievement and fulfillment.`}
            className="text-blue-400 whitespace-pre-line"
            speed={25}
          />
        </div>
      )}

      {showVisions && (
        <div className="space-y-4">
          <div className="text-center mb-6">
            <TypewriterText 
              text="Click any pillar to explore in detail:"
              className="text-amber-300"
              delay={500}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {successPillars.map((pillar, index) => (
              <Card 
                key={index}
                className={`bg-gray-900/50 border-gray-700 hover:${pillar.color.split(' ')[0]} cursor-pointer transition-all duration-300 ${
                  activeVision === index ? pillar.color.split(' ')[0] : ''
                }`}
                onClick={() => setActiveVision(activeVision === index ? null : index)}
              >
                <CardHeader className="pb-3">
                  <CardTitle className={`flex items-center space-x-3 ${pillar.color.split(' ')[1]}`}>
                    {pillar.icon}
                    <span className="text-sm">{pillar.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-xs mb-3">{pillar.description}</p>
                  {activeVision === index && (
                    <div className="mt-4 pt-4 border-t border-gray-600">
                      <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                        {pillar.details}
                      </p>
                    </div>
                  )}
                  <div className={`text-xs mt-2 ${pillar.color.split(' ')[1]} opacity-70`}>
                    {activeVision === index ? 'Click to collapse' : 'Click to expand'}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-400/30 rounded-lg">
            <h3 className="text-blue-400 mb-3">The Integration</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              These six pillars aren't independent—they're interconnected. Professional success gives me the platform 
              for global impact. Strong relationships provide the support for taking meaningful risks. Personal well-being 
              ensures I can sustain high performance. Continuous growth keeps me adaptable and innovative.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mt-3">
              By 40, success means having built a life where each pillar strengthens the others, creating a foundation 
              for both personal fulfillment and positive impact in the world.
            </p>
          </div>

          <div className="flex justify-center space-x-4 mt-6">
            <Button 
              onClick={() => onNavigate('experiences')}
              className="bg-green-400/20 border border-green-400 text-green-400 hover:bg-green-400/30"
            >
              Explore Key Experiences →
            </Button>
            <Button 
              onClick={() => onNavigate('values')}
              className="bg-purple-400/20 border border-purple-400 text-purple-400 hover:bg-purple-400/30"
            >
              Discover My Values →
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}