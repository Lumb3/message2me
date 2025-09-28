import React, { useState, useEffect } from "react";
import { TypewriterText } from "../TypewriterText";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Piano, Code, Play, Zap, Pause, Target } from "lucide-react";

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
      title: "The Piano Dream Begins",
      period: "Age 11. Children's Palace of Mongolia (the first piano class)",
      lesson: "Dreams born from struggle fuel innovation",
      story: `
      Sitting in front of a piano for the first time,
completely lost.
Sheet music looked like alien hieroglyphics.
My fingers couldn’t find the right keys.
Everyone else seemed to "get it" immediately.

I cried that first week.
A lot.

But something about those 88 keys called to me.
I began dreaming of the day I could play effortlessly,
when music would flow from my fingers like magic.

That dream—and every frustration along the way—
planted the seed for everything I’m building now.`,
      impact:
        "Learned that the biggest problems create the biggest opportunities",
      color: "border-blue-400 text-blue-400",
      image: "assets/pianist_image.png",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Code Becomes My Superpower",
      period: "Age 16. Kids Code Academy, Ulaanbaatar",
      lesson: "Technology can solve any problem",
      story: `Still struggling with piano,
I discovered programming.
Built my first app—a simple metronome,
because the physical one was too annoying to use.

Suddenly I realized:
I don’t have to accept bad tools.
I can build better ones.

I started coding solutions for every piano problem I faced.
Chord progressions? Built an app.
Practice tracking? Built an app.
Sheet music too hard to read? Started working on that too.

Code wasn’t just a skill—
it became my way to fix everything wrong with learning piano.`,
      impact:
        "Discovered that I could build solutions instead of just complaining about problems",
      color: "border-green-400 text-green-400",
      image: "assets/github.png",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "The Breakthrough Moment",
      period: "Age 18. Ulaanbaatar Marathon 2024",
      lesson: "Persistence transforms struggle into strength",
      story: `After six years of on-and-off piano learning, something clicked.
Not just with piano—with everything.

All those hours of struggle taught me how to learn anything.
All those coding projects taught me how to build anything.
All that frustration taught me exactly what problems needed solving.

I wasn’t behind everyone else.
I was ahead.
Because I understood the struggle.

That’s when I knew:
I’m not building a business.
I’m building the solution to every problem I’ve ever faced.`,
      impact:
        "Realized that my struggles were actually my competitive advantage",
      color: "border-red-400 text-red-400",
      image:
        "https://images.unsplash.com/photo-1758506971667-fbaa8942258a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwbWFyYXRob24lMjBlbmR1cmFuY2UlMjBjaGFsbGVuZ2V8ZW58MXx8fHwxNzU4ODczNjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];
  // Add this new experience in your page
  const futureExperiences = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Exploring the Piano-Tech Vision",
      period: "Age 40. Piano-Tech Startup",
      lesson: "Long-term persistence shapes legacy",
      story: `Decades of piano practice and coding innovation have fused into creation.
The tools I dreamed of at 12 are now real—
helping students learn faster, composers create more freely,
and turning every childhood struggle into a solution that reaches the world.

Music flows seamlessly. Learning feels effortless.
Challenges that once felt impossible now inspire innovation.`,
      impact:
        "What started as frustration became a foundation.",
      color: "border-indigo-400 text-pink-400",
      image: "assets/MIDI.jpeg",
    },
  ];

  return (
    <div className="space-y-6">
      {showIntro && (
        <div className="border-l-4 border-green-400 pl-4">
          <TypewriterText
            text={`THE JOURNEY FROM STRUGGLE TO SOLUTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Three moments that shaped everything.
From crying over sheet music to building the future.

Every problem I faced becomes a feature I have built in my 40s.`}
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
                  <div className="text-blue-400 text-sm">
                    {experience.period}
                  </div>
                  <div className={`${experience.color.split(" ")[1]} text-sm`}>
                    {experience.lesson}
                  </div>
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
                      <p className="text-gray-300 text-sm">
                        {experience.impact}
                      </p>
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
                    <div className="text-gray-400 text-sm">
                      {experience.period}
                    </div>
                    <div className="text-blue-400 text-sm">
                      {experience.lesson}
                    </div>
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
                        <p className="text-gray-300 text-sm">
                          {experience.impact}
                        </p>
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
              <h3 className="text-green-300 text-xl">The Foundation is Set</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-amber-300">Age 11:</span> Piano dream begins
              with tears and frustration
            </p>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-amber-300">Age 16:</span> Code becomes my
              problem-solving superpower
            </p>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-amber-300">Age 18:</span> Breakthrough:
              struggle becomes competitive advantage
            </p>
            <p className="text-gray-300 leading-relaxed mt-3">
              <span className="text-green-300">Age 19:</span> Building the
              company that solves every problem I faced. Seven years of struggle
              now powers seven years of building.
            </p>
            <p className="text-gray-300 leading-relaxed mt-3">
              <span className="text-indigo-400">Age 40:</span> Exploring the
              piano-tech vision, creating tools that redefine a new way of music learning
              worldwide.
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
