import React, { useState, useEffect } from "react";
import { TypewriterText } from "../TypewriterText";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Piano, Code, Zap, Target } from "lucide-react";

interface ExperiencesPageProps {
  onNavigate: (pageId: string) => void;
  onExplored: (sectionId: string) => void;
}

export function ExperiencesPage({
  onNavigate,
  onExplored,
}: ExperiencesPageProps) {
  const [showIntro, setShowIntro] = useState(false);
  const [showExperiences, setShowExperiences] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<number | null>(
    null
  );

  useEffect(() => {
    const timeout1 = setTimeout(() => setShowIntro(true), 500);
    const timeout2 = setTimeout(() => setShowExperiences(true), 2000);
    onExplored("experiences");

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [onExplored]);

  const formativeExperiences = [
    {
      icon: <Piano className="w-6 h-6" />,
      title: "First Piano Lesson",
      period: "Age 8",
      lesson: "Complexity yields to practice",
      story: `Sitting at the piano bench for the first time, staring at black and white keys that seemed like a foreign language. My teacher played a simple melody—it sounded impossible.

"Start with one note," she said.

That lesson changed everything. Complex music was just simple notes in sequence. Difficult pieces were just easy sections connected. This thinking now applies to everything: complex code, challenging goals, global business plans.

One note. One step. One day at a time.`,
      impact:
        "Learned that mastery comes through deliberate practice and patience",
      color: "border-blue-400 text-blue-400",
      image:
        "https://images.unsplash.com/photo-1636916368580-8f99867e6e14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWFubyUyMG11c2ljJTIwdGVhY2hpbmclMjBnbG9iYWwlMjB3b3JsZHxlbnwxfHx8fDE3NTg4NzM2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "First Working Program",
      period: "Age 14",
      lesson: "Logic conquers chaos",
      story: `Hours of frustration debugging my first Python program. Error after error. Nothing worked.

Then suddenly—it ran. A simple calculator, but it worked perfectly.

That moment taught me computers aren't magic. They're logic machines. Any problem can be solved with the right sequence of instructions. This mindset now drives everything: teaching systems, business processes, life optimization.

If it can be broken down logically, it can be built successfully.`,
      impact: "Developed systematic thinking and problem decomposition skills",
      color: "border-green-400 text-green-400",
      image:
        "https://images.unsplash.com/photo-1652696290920-ee4c836c711e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHByb2dyYW1taW5nJTIwbGFwdG9wJTIwY29kaW5nfGVufDF8fHx8MTc1ODg3MzY2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "First Marathon",
      period: "Age 17",
      lesson: "Challenge is what makes us not just physically, but mentally strong",
      story: `Mile 20. Everything hurt. Mind screaming "STOP."

But I'd trained for this moment—not just physically, but mentally. Months of running when I didn't want to. Getting up early when it was cold. Pushing through when every excuse seemed reasonable.

Crossing that finish line taught me the difference between discomfort and damage. Most limitations are mental. When you train yourself to persist through discomfort, you unlock capabilities you never knew existed.

This lesson powers everything from difficult coding sessions to challenging piano pieces to building global businesses.`,
      impact: "Discovered that mental resilience is trainable and transferable",
      color: "border-red-400 text-red-400",
      image:
        "https://images.unsplash.com/photo-1758506971667-fbaa8942258a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwbWFyYXRob24lMjBlbmR1cmFuY2UlMjBjaGFsbGVuZ2V8ZW58MXx8fHwxNzU4ODczNjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div className="space-y-6">
      {showIntro && (
        <div className="border-l-4 border-green-400 pl-4">
          <TypewriterText
            text={`BUILDING BLOCKS OF SUCCESS
━━━━━━━━━━━━━━━━━━━━━━━━━━━

Three experiences. Two values confirmed.
One path to global freedom.

Every master was once a beginner.`}
            className="text-green-400 whitespace-pre-line"
            speed={25}
          />
        </div>
      )}

      {showExperiences && (
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch">
            {formativeExperiences.map((experience, index) => (
              <div key={index} className="flex-1 min-w-0 max-w-md mx-auto md:mx-0">
                <Card
                  className={`flex flex-col h-full bg-gray-900/50 border-gray-700 hover:${
                    experience.color.split(" ")[0]
                  } cursor-pointer transition-all h-[320px]`}
                >
                  {/* Image section - much smaller */}
                  <div className="relative flex-shrink-0">
                    <ImageWithFallback
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-20 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-t-lg"></div>
                    <div
                      className={`absolute top-2 right-2 p-1.5 rounded-full bg-black/70 ${
                        experience.color.split(" ")[1]
                      }`}
                    >
                      {experience.icon}
                    </div>
                  </div>

                  {/* Text section - more space now */}
                  <div className="flex flex-col flex-1 justify-between p-4">
                    <div className="flex-1">
                      <h3
                        className={`text-lg font-semibold mb-2 ${
                          experience.color.split(" ")[1]
                        }`}
                      >
                        {experience.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">{experience.period}</p>
                      <p className={`${experience.color.split(" ")[1]} text-sm font-medium leading-relaxed`}>
                        {experience.lesson}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-400/30 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-green-400" />
              <h3 className="text-green-400 text-xl">The Foundation is Set</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-amber-300">Age 8:</span> Piano teaches
              patience and practice
            </p>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-amber-300">Age 14:</span> Code teaches logic
              and systems thinking
            </p>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-amber-300">Age 17:</span> Running teaches
              persistence and mental toughness
            </p>
            <p className="text-gray-300 leading-relaxed mt-3">
              <span className="text-green-400">Result:</span> By 19, I already
              have the core skills and mindset for global success. The next 21
              years will build on this foundation.
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <Button
              onClick={() => onNavigate("values")}
              className="bg-purple-400/20 border border-purple-400 text-purple-400 hover:bg-purple-400/30"
            >
              Core Values →
            </Button>
            <Button
              onClick={() => onNavigate("decisions")}
              className="bg-yellow-400/20 border border-yellow-400 text-yellow-400 hover:bg-yellow-400/30"
            >
              Key Decisions →
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}