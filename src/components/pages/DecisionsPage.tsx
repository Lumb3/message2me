import React, { useState, useEffect } from 'react';
import { TypewriterText } from '../TypewriterText';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { GitBranch, Target, Users, BookOpen, Globe, TrendingUp } from 'lucide-react';

interface DecisionsPageProps {
  onNavigate: (pageId: string) => void;
  onExplored: (sectionId: string) => void;
}

export function DecisionsPage({ onNavigate, onExplored }: DecisionsPageProps) {
  const [showIntro, setShowIntro] = useState(false);
  const [showDecisions, setShowDecisions] = useState(false);
  const [selectedDecision, setSelectedDecision] = useState<number | null>(null);

  useEffect(() => {
    setTimeout(() => setShowIntro(true), 500);
    setTimeout(() => setShowDecisions(true), 2000);
    onExplored('decisions');
  }, [onExplored]);

  const criticalDecisions = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Choosing Purpose Over Prestige",
      timeframe: "Years 1-3 of Career",
      decisionPoint: "Select roles based on growth and impact potential, not just salary or title",
      reasoning: `Early in my career, I'll prioritize positions that offer steep learning curves and meaningful 
      work over those that simply offer the highest starting salary. This might mean choosing a smaller company 
      with more responsibility over a prestigious corporation with a structured program.`,
      tradeoffs: {
        shortTerm: "Lower initial compensation, less brand name recognition",
        longTerm: "Faster skill development, broader experience, clearer sense of purpose"
      },
      successMetrics: [
        "Rapid skill acquisition across multiple domains",
        "Direct impact on meaningful projects",
        "Strong mentorship relationships",
        "Clear alignment between work and values"
      ],
      contingencyPlan: `If a role becomes stagnant or misaligned, I'll proactively seek new challenges within 
      the organization or transition to a role that better supports my growth trajectory.`,
      valueAlignment: ["Continuous Growth", "Meaningful Impact", "Authentic Leadership"],
      color: "border-blue-400 text-blue-400"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Investing in Continuous Education",
      timeframe: "Throughout 20s and 30s",
      decisionPoint: "Dedicate 15-20% of time and resources to learning new skills",
      reasoning: `In a rapidly changing world, the skills that got me my first job won't be sufficient for 
      success at 40. I'll systematically invest in both technical skills and soft skills, including formal 
      education, online courses, conferences, and hands-on projects.`,
      tradeoffs: {
        shortTerm: "Less leisure time, ongoing financial investment, delayed gratification",
        longTerm: "Increased adaptability, broader opportunities, higher long-term earning potential"
      },
      successMetrics: [
        "Acquiring one major new skill annually",
        "Completing relevant certifications or degrees",
        "Teaching or mentoring others in areas of expertise",
        "Being sought out for diverse projects due to broad skill set"
      ],
      contingencyPlan: `If certain skills become obsolete, I'll pivot quickly to emerging areas while leveraging 
      transferable skills. The learning process itself becomes a core competency.`,
      valueAlignment: ["Continuous Growth", "Excellence with Balance"],
      color: "border-green-400 text-green-400"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Building Strategic Relationships",
      timeframe: "Ongoing from Year 1",
      decisionPoint: "Prioritize authentic relationship-building over transactional networking",
      reasoning: `Success at 40 will depend significantly on the relationships I build in my 20s and 30s. 
      Rather than superficial networking, I'll focus on genuine connections based on mutual respect, 
      shared values, and reciprocal support.`,
      tradeoffs: {
        shortTerm: "Time investment without immediate returns, emotional energy",
        longTerm: "Strong support network, collaborative opportunities, enhanced reputation"
      },
      successMetrics: [
        "Maintaining regular contact with key mentors and peers",
        "Being actively helpful to others in my network",
        "Receiving and providing meaningful references and recommendations",
        "Creating successful collaborations with network contacts"
      ],
      contingencyPlan: `If professional relationships become one-sided or toxic, I'll gracefully distance myself 
      while maintaining professionalism. Quality over quantity remains the priority.`,
      valueAlignment: ["Deep Relationships", "Authentic Leadership", "Meaningful Impact"],
      color: "border-purple-400 text-purple-400"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Perspective Development",
      timeframe: "Mid to Late 20s",
      decisionPoint: "Pursue international experience through work or extended travel",
      reasoning: `Success at 40 will require understanding global markets, diverse cultures, and international 
      perspectives. I'll seek opportunities to live and work abroad, or at minimum, work closely with 
      international teams and clients.`,
      tradeoffs: {
        shortTerm: "Distance from family/friends, cultural adjustment challenges, potential career path disruption",
        longTerm: "Global network, cultural competency, broader perspective on problems and solutions"
      },
      successMetrics: [
        "Developing functional proficiency in a second language",
        "Building meaningful relationships across different cultures",
        "Understanding global business practices and cultural nuances",
        "Contributing to international projects or initiatives"
      ],
      contingencyPlan: `If direct international experience isn't possible, I'll create it through virtual 
      collaboration, hosting international colleagues, and immersive cultural experiences domestically.`,
      valueAlignment: ["Continuous Growth", "Meaningful Impact"],
      color: "border-yellow-400 text-yellow-400"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Financial Independence Strategy",
      timeframe: "Starting immediately, intensifying in 30s",
      decisionPoint: "Live below means and invest aggressively for long-term financial freedom",
      reasoning: `Financial independence by 40 isn't about early retirement—it's about having the freedom to 
      make career decisions based on passion and impact rather than immediate financial need. This requires 
      disciplined saving and smart investing from the beginning.`,
      tradeoffs: {
        shortTerm: "Lifestyle restrictions, delayed major purchases, opportunity costs",
        longTerm: "Career flexibility, reduced financial stress, ability to take meaningful risks"
      },
      successMetrics: [
        "Maintaining 20-30% savings rate consistently",
        "Building diversified investment portfolio",
        "Achieving specific net worth milestones",
        "Creating multiple income streams"
      ],
      contingencyPlan: `If markets underperform or unexpected expenses arise, I'll adjust lifestyle and 
      savings rates while maintaining core financial principles. The habits matter more than the timeline.`,
      valueAlignment: ["Excellence with Balance", "Integrity Above All"],
      color: "border-orange-400 text-orange-400"
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Strategic Career Pivots",
      timeframe: "Every 5-7 years",
      decisionPoint: "Proactively evolve role/industry before stagnation sets in",
      reasoning: `Rather than waiting for external forces to drive change, I'll regularly assess whether my 
      current path still aligns with my goals and values. This might mean changing companies, roles, or even 
      industries to maintain growth and impact.`,
      tradeoffs: {
        shortTerm: "Learning curves, temporary income uncertainty, need to rebuild reputation",
        longTerm: "Continued growth, avoided obsolescence, accumulated diverse experience"
      },
      successMetrics: [
        "Successfully transitioning to new roles/industries",
        "Maintaining upward trajectory through changes",
        "Building transferable skills that ease transitions",
        "Creating value quickly in new environments"
      ],
      contingencyPlan: `If a pivot doesn't work out, I'll leverage the skills gained and network built to find 
      a better fit, treating the experience as valuable data rather than failure.`,
      valueAlignment: ["Continuous Growth", "Authentic Leadership", "Excellence with Balance"],
      color: "border-red-400 text-red-400"
    }
  ];

  return (
    <div className="space-y-6">
      {showIntro && (
        <div className="border-l-4 border-yellow-400 pl-4">
          <TypewriterText 
            text={`CRITICAL DECISIONS THAT WILL DEFINE MY JOURNEY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Success at 40 won't happen by accident. It will be the result
of intentional, strategic decisions made consistently over time.
These are the key choices that will shape my path.`}
            className="text-yellow-400 whitespace-pre-line"
            speed={25}
          />
        </div>
      )}

      {showDecisions && (
        <div className="space-y-4">
          <div className="text-center mb-6">
            <TypewriterText 
              text="Click any decision to explore the strategy:"
              className="text-amber-300"
              delay={500}
            />
          </div>

          <div className="space-y-4">
            {criticalDecisions.map((decision, index) => (
              <Card 
                key={index}
                className={`bg-gray-900/50 border-gray-700 hover:${decision.color.split(' ')[0]} cursor-pointer transition-all duration-300 ${
                  selectedDecision === index ? decision.color.split(' ')[0] : ''
                }`}
                onClick={() => setSelectedDecision(selectedDecision === index ? null : index)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className={decision.color.split(' ')[1]}>
                        {decision.icon}
                      </div>
                      <div>
                        <CardTitle className={`${decision.color.split(' ')[1]} text-lg`}>
                          {decision.title}
                        </CardTitle>
                        <div className="text-gray-400 text-sm">{decision.timeframe}</div>
                        <div className="text-gray-300 text-sm mt-2">{decision.decisionPoint}</div>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      {selectedDecision === index ? 'Click to collapse' : 'Click to expand'}
                    </div>
                  </div>
                </CardHeader>

                {selectedDecision === index && (
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-black/30 rounded">
                      <h4 className="text-blue-400 text-sm mb-2">Strategic Reasoning</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {decision.reasoning}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-red-900/20 rounded border border-red-400/30">
                        <h4 className="text-red-400 text-sm mb-2">Short-term Tradeoffs</h4>
                        <p className="text-gray-300 text-sm">{decision.tradeoffs.shortTerm}</p>
                      </div>
                      <div className="p-4 bg-green-900/20 rounded border border-green-400/30">
                        <h4 className="text-green-400 text-sm mb-2">Long-term Benefits</h4>
                        <p className="text-gray-300 text-sm">{decision.tradeoffs.longTerm}</p>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-800/30 rounded">
                      <h4 className="text-amber-300 text-sm mb-2">Success Metrics</h4>
                      <div className="space-y-1">
                        {decision.successMetrics.map((metric, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <span className="text-green-400 text-xs mt-1">✓</span>
                            <span className="text-gray-300 text-sm">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-4 bg-blue-900/20 rounded border border-blue-400/30">
                      <h4 className="text-blue-400 text-sm mb-2">Contingency Plan</h4>
                      <p className="text-gray-300 text-sm">{decision.contingencyPlan}</p>
                    </div>

                    <div>
                      <h4 className="text-purple-400 text-sm mb-2">Aligned Values</h4>
                      <div className="flex flex-wrap gap-2">
                        {decision.valueAlignment.map((value, idx) => (
                          <Badge key={idx} className="bg-purple-400/20 text-purple-400 border border-purple-400/50">
                            {value}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-400/30 rounded-lg">
            <h3 className="text-yellow-400 mb-3">The Decision Framework</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              These decisions aren't made in isolation—they're part of an integrated strategy for building 
              a successful life and career. Each decision reinforces the others, creating compound effects 
              that will accelerate my progress toward my goals.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mt-3">
              The key is making these decisions proactively, before I'm forced to by circumstances. By thinking 
              through the tradeoffs and planning for contingencies now, I can execute with confidence when the 
              time comes to act.
            </p>
          </div>

          <div className="flex justify-center space-x-4 mt-6">
            <Button 
              onClick={() => onNavigate('journey')}
              className="bg-amber-400/20 border border-amber-400 text-amber-400 hover:bg-amber-400/30"
            >
              See How It All Connects →
            </Button>
            <Button 
              onClick={() => onNavigate('vision')}
              className="bg-blue-400/20 border border-blue-400 text-blue-400 hover:bg-blue-400/30"
            >
              Return to Success Vision →
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}