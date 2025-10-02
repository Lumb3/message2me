import React, { useState, useEffect } from "react";
import { TypewriterText } from "../TypewriterText";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Piano, Play, Zap, Pause, Target } from "lucide-react";

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
  const [selectedFutureExperience, setSelectedFutureExperience] = useState<
    number | null
  >(null);

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
      title: "Discovering the Piano",
      period: "Age 11. Children's Palace of Mongolia",
      lesson: "Early struggles develop resilience",
      story: `
Sitting in front of the piano for the first time was overwhelming.
Sheet music seemed impossible to read.
Fingers could not find the keys, and frustration led to tears.

Over time, persistence allowed small victories to turn into progress.
This early challenge taught patience, discipline, and the value of consistent effort.`,
      impact:
        "Learned that dedication and perseverance turn challenges into growth",
      color: "border-blue-400 text-blue-400",
      image: "assets/pianist_image.png",
    },
    {
      icon: <Play className="w-6 h-6" />,
      title: "Learning Problem-Solving",
      period: "Age 16. Kids Code Academy, Ulaanbaatar",
      lesson: "Creativity and initiative solve challenges",
      story: `Programming became a tool for understanding and solving problems.
Rather than accepting obstacles, I learned to break them down,
analyze them, and find practical solutions.

These skills strengthened my approach to learning piano and other complex tasks,
showing that persistence paired with strategy leads to results.`,
      impact:
        "Developed independent problem-solving skills and creative thinking",
      color: "border-green-400 text-green-400",
      image: "assets/github.png",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Realizing Growth Through Effort",
      period: "Age 18. Personal Milestone",
      lesson: "Struggle transforms into strength",
      story: `Years of practice and learning culminated in a moment of clarity.
Challenges that once seemed insurmountable became stepping stones.
I realized progress comes not from talent alone, but from consistent effort and reflection.

This understanding motivated me to take on greater challenges with confidence.`,
      impact:
        "Recognized personal growth as the foundation for future success",
      color: "border-red-400 text-red-400",
      image:
        "https://images.unsplash.com/photo-1758506971667-fbaa8942258a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwbWFyYXRob24lMjBlbmR1cmFuY2UlMjBjaGFsbGVuZ2V8ZW58MXx8fHwxNzU4ODczNjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const futureExperiences = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Applying Skills for Impact",
      period: "Age 40. Lifelong Learning",
      lesson: "Persistence and knowledge create contribution",
      story: `Years of dedication to learning and problem-solving are now applied
to helping others overcome challenges.
The lessons from early struggles guide mentorship, community engagement,
and fostering learning environments where students can thrive.

Success is measured not only by personal achievement, but by the
opportunities created for others to grow and succeed.`,
      impact:
        "Transforming personal experiences into tools for community impact",
      color: "border-indigo-400 text-pink-400",
      image: "assets/MIDI.jpeg",
    },
  ];

  return (
    <div className="space-y-6">
      {showIntro && (
        <div className="border-l-4 border-green-400 pl-4">
          <TypewriterText
            text={`THE JOURNEY OF GROWTH AND IMPACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Three key experiences shaped my path: each challenge became a lesson
that strengthened perseverance, creativity, and the ability to contribute
meaningfully to others.

By learning from struggle, I am prepared to make a positive impact
through scholarship and community engagement.`}
            className="text-green-400 whitespace-pre-line"
            speed={25}
          />
        </div>
      )}

      {showExperiences && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            {formativeExperiences.map((experience, index) => (
              <Card
                key={index}
                className={`bg-gray-900/50 border-gray-700 hover:${
                  experience.color.split(" ")[0]
                } cursor-pointer transition-all ${
                  selectedExperience === index
                    ? experience.color.split(" ")[0]
                    : ""
                }`}
                onClick={() =>
                  setSelectedExperience(
                    selectedExperience === index ? null : index
                  )
                }
              >
                <div className="relative bg-black">
                  <ImageWithFallback
                    src={experience.image}
                    alt={experience.title}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-t-lg"></div>
                  <div
                    className={`absolute top-3 right-3 p-2 rounded-full bg-black/70 ${
                      experience.color.split(" ")[1]
                    }`}
                  >
                    {experience.icon}
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle
                    className={`${experience.color.split(" ")[1]} text-lg`}
                  >
                    {experience.title}
                  </CardTitle>
                  <div className="text-gray-400 text-sm">{experience.period}</div>
                  <div className="text-blue-400 text-sm">{experience.lesson}</div>
                </CardHeader>

                {selectedExperience === index && (
                  <CardContent className="space-y-4 pt-0">
                    <div className="p-4 bg-black/30 rounded">
                      <h4 className="text-amber-300 mb-3">The Moment</h4>
                      <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                        {experience.story}
                      </p>
                    </div>

                    <div className="p-4 bg-gray-800/30 rounded">
                      <h4 className="text-green-400 mb-2">Impact Today</h4>
                      <p className="text-gray-300 text-sm">{experience.impact}</p>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <div className="space-y-4">
            <div className="grid md:grid-cols-1 gap-4">
              {futureExperiences.map((experience, index) => (
                <Card
                  key={index}
                  className={`bg-gray-900/50 border-gray-700 hover:${
                    experience.color.split(" ")[0]
                  } cursor-pointer transition-all ${
                    selectedFutureExperience === index
                      ? experience.color.split(" ")[0]
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedFutureExperience(
                      selectedFutureExperience === index ? null : index
                    )
                  }
                >
                  <div className="relative">
                    <ImageWithFallback
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-t-lg"></div>
                    <div
                      className={`absolute top-3 right-3 p-2 rounded-full bg-black/70 ${
                        experience.color.split(" ")[1]
                      }`}
                    >
                      {experience.icon}
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <CardTitle className="text-blue-400 text-lg">
                      {experience.title}
                    </CardTitle>
                    <div className="text-gray-400 text-sm">{experience.period}</div>
                    <div className="text-blue-400 text-sm">{experience.lesson}</div>
                  </CardHeader>

                  {selectedFutureExperience === index && (
                    <CardContent className="space-y-4 pt-0">
                      <div className="p-4 bg-black/30 rounded">
                        <h4 className="text-amber-300 mb-3">The Vision</h4>
                        <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                          {experience.story}
                        </p>
                      </div>

                      <div className="p-4 bg-gray-800/30 rounded">
                        <h4 className="text-green-400 mb-2">Legacy Impact</h4>
                        <p className="text-gray-300 text-sm">{experience.impact}</p>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-400/30 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-green-400" />
              <h3 className="text-green-300 text-xl">Foundation of Growth</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-amber-300">Age 11:</span> Learned patience
              and perseverance through early piano struggles.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-amber-300">Age 16:</span> Developed problem-solving
              skills and creative thinking.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-amber-300">Age 18:</span> Recognized that effort
              and reflection lead to meaningful growth.
            </p>
            <p className="text-gray-300 leading-relaxed mt-3">
              <span className="text-green-300">Age 30:</span> Applied lessons to help
              others and contribute to community.
            </p>
            <p className="text-gray-300 leading-relaxed mt-3">
              <span className="text-indigo-400">Age 40:</span> Continuing lifelong learning,
              turning experience into tools that support others’ growth.
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
