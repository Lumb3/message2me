import React, { useState, useEffect } from 'react';
import { TypewriterText } from '../TypewriterText';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { ArrowRight, CheckCircle, Target, Calendar, Users, TrendingUp } from 'lucide-react';

interface JourneyPageProps {
  onNavigate: (pageId: string) => void;
  onExplored: (sectionId: string) => void;
}

export function JourneyPage({ onNavigate, onExplored }: JourneyPageProps) {
  const [showIntro, setShowIntro] = useState(false);
  const [showTimeline, setShowTimeline] = useState(false);
  const [showSynthesis, setShowSynthesis] = useState(false);
  const [activePhase, setActivePhase] = useState<number | null>(null);

  useEffect(() => {
    setTimeout(() => setShowIntro(true), 500);
    setTimeout(() => setShowTimeline(true), 2000);
    setTimeout(() => setShowSynthesis(true), 4000);
    onExplored('journey');
  }, [onExplored]);

  const journeyPhases = [
    {
      title: "Foundation Building",
      timeframe: "Age 25-28",
      focus: "Skill Development & Network Building",
      keyActions: [
        "Choose growth-oriented roles over high-salary positions",
        "Invest 20% of time in continuous learning",
        "Build authentic professional relationships",
        "Establish financial discipline and investment habits"
      ],
      experiences: ["Early problem-solving challenges", "Academic struggles that built resilience"],
      values: ["Continuous Growth", "Authentic Leadership"],
      decisions: ["Purpose over prestige", "Strategic relationship building"],
      milestones: [
        "Master core professional skills",
        "Build diverse network of mentors and peers",
        "Establish emergency fund and investment portfolio",
        "Complete first major international experience"
      ],
      color: "border-blue-400 text-blue-400"
    },
    {
      title: "Leadership Emergence",
      timeframe: "Age 28-32",
      focus: "Taking Initiative & Building Influence",
      keyActions: [
        "Seek leadership roles and challenging projects",
        "Begin mentoring others and sharing knowledge",
        "Develop global perspective through international work",
        "Make first strategic career pivot if needed"
      ],
      experiences: ["Leadership under pressure", "First professional innovation"],
      values: ["Meaningful Impact", "Deep Relationships"],
      decisions: ["Global perspective development", "Continuous education investment"],
      milestones: [
        "Lead successful high-impact projects",
        "Build reputation as thought leader in chosen field",
        "Develop proficiency in second language",
        "Achieve financial independence milestone (25% to goal)"
      ],
      color: "border-green-400 text-green-400"
    },
    {
      title: "Strategic Acceleration",
      timeframe: "Age 32-36",
      focus: "Amplifying Impact & Building Legacy",
      keyActions: [
        "Take on roles with broader scope and responsibility",
        "Launch initiatives that create lasting positive change",
        "Invest significantly in developing others",
        "Build multiple income streams and investment portfolio"
      ],
      experiences: ["Personal resilience building", "Mentorship awakening"],
      values: ["Excellence with Balance", "Integrity Above All"],
      decisions: ["Strategic career pivot", "Financial independence acceleration"],
      milestones: [
        "Reach senior leadership position",
        "Create measurable positive impact on global scale",
        "Mentor 10+ professionals to significant career advancement",
        "Achieve 75% of financial independence goal"
      ],
      color: "border-purple-400 text-purple-400"
    },
    {
      title: "Success Realization",
      timeframe: "Age 36-40",
      focus: "Living the Vision & Expanding Influence",
      keyActions: [
        "Optimize for sustainable high performance",
        "Create platforms for others to succeed",
        "Balance professional achievement with personal fulfillment",
        "Plan for next phase of impact beyond 40"
      ],
      experiences: ["Integration of all previous learnings"],
      values: ["All six values working in harmony"],
      decisions: ["Life integration mastery"],
      milestones: [
        "Achieve definition of success across all six pillars",
        "Establish lasting systems for positive impact",
        "Complete financial independence",
        "Create blueprint for sustained success beyond 40"
      ],
      color: "border-yellow-400 text-yellow-400"
    }
  ];

  const synthesisElements = [
    {
      title: "The Success Equation",
      description: "Vision + Values + Experiences + Decisions = Sustainable Success",
      details: `My vision provides the destination, values serve as the compass, experiences build wisdom, 
      and strategic decisions create the path. None of these elements work in isolation—they reinforce 
      each other to create momentum toward meaningful achievement.`
    },
    {
      title: "The Compound Effect",
      description: "Small, consistent actions aligned with core principles create exponential results",
      details: `Success at 40 isn't about dramatic leaps—it's about making slightly better decisions 
      consistently over 15+ years. The relationships I build in my 20s support the opportunities in my 30s. 
      The skills I develop early enable the leadership roles later.`
    },
    {
      title: "The Integration Challenge",
      description: "True success requires harmonizing all aspects of life, not optimizing just one",
      details: `The biggest risk is achieving success in one area at the expense of others. My framework 
      ensures that professional achievement enhances rather than detracts from personal relationships, 
      health, and values-based living.`
    }
  ];

  return (
    <div className="space-y-6">
      {showIntro && (
        <div className="border-l-4 border-amber-400 pl-4">
          <TypewriterText 
            text={`THE COMPLETE JOURNEY: HOW IT ALL CONNECTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is how my vision, values, experiences, and decisions
weave together into a coherent path to success at 40.
It's not just a plan—it's a philosophy for sustainable achievement.`}
            className="text-amber-400 whitespace-pre-line"
            speed={25}
          />
        </div>
      )}

      {showTimeline && (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <TypewriterText 
              text="The 21 Years of Journey to Success at 40:"
              className="text-green-400 text-lg"
              delay={500}
            />
          </div>

          <div className="space-y-6">
            {journeyPhases.map((phase, index) => (
              <Card 
                key={index}
                className={`bg-gray-900/50 border-gray-700 hover:${phase.color.split(' ')[0]} cursor-pointer transition-all duration-300 ${
                  activePhase === index ? phase.color.split(' ')[0] : ''
                }`}
                onClick={() => setActivePhase(activePhase === index ? null : index)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full border-2 ${phase.color} flex items-center justify-center`}>
                        <span className={`text-lg ${phase.color.split(' ')[1]}`}>{index + 1}</span>
                      </div>
                      <div>
                        <CardTitle className={`${phase.color.split(' ')[1]} text-xl`}>
                          {phase.title}
                        </CardTitle>
                        <div className="text-gray-400">{phase.timeframe}</div>
                        <div className="text-gray-300 text-sm mt-1">{phase.focus}</div>
                      </div>
                    </div>
                    <ArrowRight className={`w-6 h-6 ${phase.color.split(' ')[1]} ${activePhase === index ? 'rotate-90' : ''} transition-transform`} />
                  </div>
                </CardHeader>

                {activePhase === index && (
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-blue-400 text-sm mb-2 flex items-center">
                            <Target className="w-4 h-4 mr-2" />
                            Key Actions
                          </h4>
                          <div className="space-y-1">
                            {phase.keyActions.map((action, idx) => (
                              <div key={idx} className="flex items-start space-x-2">
                                <span className="text-green-400 text-xs mt-1">•</span>
                                <span className="text-gray-300 text-sm">{action}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-purple-400 text-sm mb-2 flex items-center">
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Key Milestones
                          </h4>
                          <div className="space-y-1">
                            {phase.milestones.map((milestone, idx) => (
                              <div key={idx} className="flex items-start space-x-2">
                                <span className="text-yellow-400 text-xs mt-1">✓</span>
                                <span className="text-gray-300 text-sm">{milestone}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="text-green-400 text-sm mb-2">Leveraged Experiences</h4>
                          <div className="space-y-1">
                            {phase.experiences.map((exp, idx) => (
                              <div key={idx} className="text-gray-300 text-sm">• {exp}</div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-orange-400 text-sm mb-2">Active Values</h4>
                          <div className="space-y-1">
                            {phase.values.map((value, idx) => (
                              <div key={idx} className="text-gray-300 text-sm">• {value}</div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-red-400 text-sm mb-2">Critical Decisions</h4>
                          <div className="space-y-1">
                            {phase.decisions.map((decision, idx) => (
                              <div key={idx} className="text-gray-300 text-sm">• {decision}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-600">
                      <Progress value={(index + 1) * 25} className="h-2" />
                      <div className="text-xs text-gray-500 mt-1 text-center">
                        Progress toward 40: {(index + 1) * 25}%
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      )}

      {showSynthesis && (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <TypewriterText 
              text="The Integration: How Success Compounds"
              className="text-amber-300 text-lg"
              delay={1000}
            />
          </div>

          <div className="space-y-4">
            {synthesisElements.map((element, index) => (
              <Card key={index} className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 border border-amber-400/30">
                <CardHeader>
                  <CardTitle className="text-amber-300 text-lg">{element.title}</CardTitle>
                  <div className="text-amber-400 text-sm">{element.description}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm leading-relaxed">{element.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-400/30 rounded-lg">
            <h3 className="text-green-400 mb-3 text-lg">Success at 40: The Vision Realized</h3>
            <p className="text-gray-300 leading-relaxed">
              By following this integrated approach, my success at 40 won't be accidental or unsustainable. 
              It will be the natural result of 15+ years of intentional growth, strategic decisions, and 
              values-based living.
            </p>
            <p className="text-gray-300 leading-relaxed mt-3">
              More importantly, this framework ensures that success enhances rather than diminishes the other 
              important aspects of life. The person I become on the journey to 40 will be as important as 
              what I achieve.
            </p>
            <p className="text-gray-300 leading-relaxed mt-3">
              This isn't just a plan for professional success—it's a blueprint for a life well-lived, 
              relationships well-maintained, and impact well-created. Success at 40 becomes the foundation 
              for even greater contributions in the decades that follow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <Button 
              onClick={() => onNavigate('vision')}
              className="bg-blue-400/20 border border-blue-400 text-blue-400 hover:bg-blue-400/30"
            >
              <Target className="w-4 h-4 mr-2" />
              My Vision
            </Button>
            <Button 
              onClick={() => onNavigate('experiences')}
              className="bg-green-400/20 border border-green-400 text-green-400 hover:bg-green-400/30"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Key Experiences
            </Button>
            <Button 
              onClick={() => onNavigate('values')}
              className="bg-purple-400/20 border border-purple-400 text-purple-400 hover:bg-purple-400/30"
            >
              <Users className="w-4 h-4 mr-2" />
              Core Values
            </Button>
            <Button 
              onClick={() => onNavigate('decisions')}
              className="bg-yellow-400/20 border border-yellow-400 text-yellow-400 hover:bg-yellow-400/30"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Critical Decisions
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}