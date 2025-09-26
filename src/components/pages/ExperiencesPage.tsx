import React, { useState, useEffect } from 'react';
import { TypewriterText } from '../TypewriterText';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Lightbulb, BookOpen, Users, Rocket, Mountain, Star } from 'lucide-react';

interface ExperiencesPageProps {
  onNavigate: (pageId: string) => void;
  onExplored: (sectionId: string) => void;
}

export function ExperiencesPage({ onNavigate, onExplored }: ExperiencesPageProps) {
  const [showIntro, setShowIntro] = useState(false);
  const [showExperiences, setShowExperiences] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  useEffect(() => {
    setTimeout(() => setShowIntro(true), 500);
    setTimeout(() => setShowExperiences(true), 2000);
    onExplored('experiences');
  }, [onExplored]);

  const formativeExperiences = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Early Problem-Solving Revelation",
      period: "Childhood - Age 12",
      lesson: "The power of breaking down complex challenges",
      story: `When I was 12, I became fascinated with fixing broken electronics around the house. 
      What started as curiosity about how things worked became a formative lesson in systematic thinking.
      
      I remember spending hours taking apart an old radio, mapping each component, and slowly 
      understanding how they worked together. When I finally got it working again, it wasn't 
      just the satisfaction of success—it was the realization that any complex problem could be 
      solved by breaking it into smaller, manageable pieces.
      
      This experience shaped my approach to everything from school projects to career challenges. 
      It taught me patience, methodology, and the confidence that persistence pays off.`,
      impact: "Developed systematic problem-solving approach and resilience",
      color: "border-yellow-400 text-yellow-400"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Academic Struggle & Growth",
      period: "High School - Age 16",
      lesson: "Failure as a catalyst for growth",
      story: `Junior year of high school, I failed my first major exam in Advanced Chemistry. 
      I had always been a strong student, so this failure hit me hard. Instead of giving up 
      or making excuses, I decided to completely change my study approach.
      
      I started forming study groups, seeking help from teachers, and most importantly, 
      learning to ask better questions. By the end of the year, not only had I recovered 
      my grade, but I was tutoring other students.
      
      This experience taught me that intelligence isn't fixed—it's about how you respond to 
      challenges. It also showed me the value of community and collaboration in overcoming obstacles.`,
      impact: "Embraced growth mindset and collaborative learning",
      color: "border-blue-400 text-blue-400"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Leadership Under Pressure",
      period: "College - Age 20",
      lesson: "True leadership emerges in difficult moments",
      story: `During my sophomore year, I was elected to lead a student organization just as it faced 
      a major crisis—funding cuts that threatened our biggest annual event. Instead of canceling, 
      I rallied the team to think creatively.
      
      We reached out to local businesses, organized smaller fundraising events, and completely 
      reimagined our approach. Not only did we save the event, but we made it more successful 
      than previous years by building stronger community connections.
      
      This experience taught me that leadership isn't about having all the answers—it's about 
      bringing out the best in others and maintaining vision when things get tough.`,
      impact: "Learned authentic leadership and crisis management",
      color: "border-green-400 text-green-400"
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "First Professional Challenge",
      period: "Early Career - Age 23",
      lesson: "Innovation requires courage to challenge status quo",
      story: `In my first job, I noticed an inefficient process that was costing the company significant 
      time and money. As the newest team member, I was nervous about suggesting changes, but I decided 
      to prepare a detailed proposal with research and potential solutions.
      
      Not only was my suggestion implemented, but it led to a company-wide process improvement initiative. 
      This experience taught me that good ideas can come from anywhere, and that speaking up—when done 
      thoughtfully—is a responsibility, not just a right.
      
      It also showed me the importance of doing your homework before proposing changes and the value 
      of thinking beyond your immediate role.`,
      impact: "Gained confidence to innovate and influence positive change",
      color: "border-purple-400 text-purple-400"
    },
    {
      icon: <Mountain className="w-6 h-6" />,
      title: "Personal Challenge & Resilience",
      period: "Mid-twenties - Age 25",
      lesson: "Physical challenges build mental strength",
      story: `I decided to train for and complete a marathon, despite never being much of a runner. 
      The six-month training process was grueling, with multiple setbacks including minor injuries 
      and mental barriers I had to overcome.
      
      The experience of pushing through when I wanted to quit, adjusting my training when things 
      weren't working, and ultimately crossing the finish line taught me invaluable lessons about 
      persistence, adaptation, and the power of incremental progress.
      
      More importantly, it showed me that the skills needed for physical achievement—discipline, 
      consistency, goal-setting, recovery—directly translate to professional and personal success.`,
      impact: "Developed discipline, persistence, and holistic approach to achievement",
      color: "border-orange-400 text-orange-400"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Mentorship Awakening",
      period: "Recent - Age 26",
      lesson: "Success multiplies when shared with others",
      story: `I began mentoring a younger colleague who was struggling with confidence and direction. 
      Through our weekly conversations, I realized that helping others succeed was incredibly fulfilling 
      and that I had more wisdom to offer than I had recognized.
      
      Watching her grow, succeed, and eventually become a mentor herself showed me the ripple effect 
      of investment in others. It also clarified my own values and goals by forcing me to articulate 
      what I believed about success, growth, and leadership.
      
      This ongoing experience has reinforced my belief that true success includes lifting others up 
      and that teaching is one of the best ways to continue learning.`,
      impact: "Discovered passion for developing others and multiplicative success",
      color: "border-red-400 text-red-400"
    }
  ];

  return (
    <div className="space-y-6">
      {showIntro && (
        <div className="border-l-4 border-green-400 pl-4">
          <TypewriterText 
            text={`KEY EXPERIENCES THAT SHAPED MY PATH
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

These formative moments didn't just happen to me—they shaped
how I think, lead, and define success. Each taught me something
essential about the journey to meaningful achievement.`}
            className="text-green-400 whitespace-pre-line"
            speed={25}
          />
        </div>
      )}

      {showExperiences && (
        <div className="space-y-4">
          <div className="text-center mb-6">
            <TypewriterText 
              text="Click any experience to explore its impact:"
              className="text-amber-300"
              delay={500}
            />
          </div>

          <div className="space-y-4">
            {formativeExperiences.map((experience, index) => (
              <Card 
                key={index}
                className={`bg-gray-900/50 border-gray-700 hover:${experience.color.split(' ')[0]} cursor-pointer transition-all duration-300 ${
                  selectedExperience === index ? experience.color.split(' ')[0] : ''
                }`}
                onClick={() => setSelectedExperience(selectedExperience === index ? null : index)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={experience.color.split(' ')[1]}>
                        {experience.icon}
                      </div>
                      <div>
                        <CardTitle className={`${experience.color.split(' ')[1]} text-lg`}>
                          {experience.title}
                        </CardTitle>
                        <div className="text-gray-400 text-sm">{experience.period}</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      {selectedExperience === index ? 'Click to collapse' : 'Click to expand'}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className={`${experience.color.split(' ')[1]} text-sm mb-3 font-medium`}>
                    Key Lesson: {experience.lesson}
                  </div>
                  
                  {selectedExperience === index && (
                    <div className="space-y-4">
                      <div className="p-4 bg-black/30 rounded border-l-2 border-gray-600">
                        <h4 className="text-amber-300 text-sm mb-2">The Story</h4>
                        <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                          {experience.story}
                        </p>
                      </div>
                      
                      <div className="p-4 bg-gray-800/30 rounded">
                        <h4 className="text-green-400 text-sm mb-2">Impact on My Success Journey</h4>
                        <p className="text-gray-300 text-sm">
                          {experience.impact}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-400/30 rounded-lg">
            <h3 className="text-green-400 mb-3">The Pattern</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Looking at these experiences, I see a clear pattern: growth comes from embracing challenges, 
              learning from failures, and consistently choosing courage over comfort. Each experience built 
              on the previous ones, creating a foundation of resilience, leadership, and purpose.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mt-3">
              These aren't just memories—they're the building blocks of who I'm becoming. They inform how 
              I approach new challenges and remind me that every setback is an opportunity for growth.
            </p>
          </div>

          <div className="flex justify-center space-x-4 mt-6">
            <Button 
              onClick={() => onNavigate('values')}
              className="bg-purple-400/20 border border-purple-400 text-purple-400 hover:bg-purple-400/30"
            >
              Discover My Core Values →
            </Button>
            <Button 
              onClick={() => onNavigate('decisions')}
              className="bg-yellow-400/20 border border-yellow-400 text-yellow-400 hover:bg-yellow-400/30"
            >
              See Critical Decisions →
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}