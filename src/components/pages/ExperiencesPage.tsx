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
      lesson: "Early struggles build resilience",
      story: `
My hands hovered above the keys, strangers to the smooth white shore.
The sheet music’s black dots and dashes—an alien tongue I could not speak.
Each tutorial whispered, but I could not follow its voice.
That first week, my fingers stumbled; the room filled with discordant clashes.
And yet, beneath the noise, a phantom melody shimmered—beckoning me back to those 88 keys.
Now I realize:
Every wrong note, every falter, was carving the contours that would one day live within AriaNova.
`,
      impact:
        "Learned that dedication and perseverance turn challenges into growth",
      color: "border-blue-400 text-blue-400",
      image: "assets/pianist_image.png",
    },
    {
      icon: <Play className="w-6 h-6" />,
      title: "Found my Passion",
      period: "Age 16. Kids Code Academy, Ulaanbaatar",
      lesson: "Creativity and initiative solve challenges",
      story: `
The binary pulse of code
becomes a metronome,
each line a chord
struck in silence.

Eleven-year-old hands,
that once fumbled notes on ivory,
now find perfect pitch
in a digital hum.

The dream of AriaNova,
long-held,
unfurls not as a path
but as a single, certain note—
a purpose played true.`,
      impact:
        "Discovered my passion to connect music and technology",
      color: "border-green-400 text-green-400",
      image: "assets/github.png",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Realizing Growth Through Effort",
      period: "Age 18. Ulaanbaatar Marathon 2024 (50th place)",
      lesson: "Struggle transforms into strength",
      story: `
Each struggle,
a mile marker passed.

Late nights, wrong notes,
the broken code’s harsh sting—
setbacks fueling the forward press.

Not talent’s bloom,
but persistence,
reflection,
and the long breath of endurance
forged the way.

My dream reshaped:
not simply to play the piano,
but to build it anew.`,
      impact:
        "Understood growth as the true foundation for AriaNova’s creation",
      color: "border-red-400 text-red-400",
      image:
        "public/assets/running.jpeg",
    },
  ];

  const futureExperiences = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Applying Skills for Impact",
      period: "Age 40. Lifelong Learning",
      lesson: "Persistence and knowledge create contribution",
      story: `From dedicated years,
a quiet strength is born—
a practiced hand
to lift the troubled stone.

The early lessons,
a map of worn trails,
now guide a path
of shared purpose and light.

Success, a harvest of a different kind—
measured not in bushels of personal gain,
but in the fields
where others find their yield.`,
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

Together, these lessons became the very foundation of AriaNova—
a vision where music, growth, and innovation meet.`}
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
                  <div className="text-gray-400 text-sm">
                    {experience.period}
                  </div>
                  <div className="text-blue-400 text-sm">
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
              <h3 className="text-green-300 text-xl">Foundation of Growth</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-amber-300">Age 11:</span> Learned patience
              and perseverance through early piano struggles.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-amber-300">Age 16:</span> Developed
              problem-solving skills and creative thinking.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-amber-300">Age 18:</span> Recognized that
              effort and reflection lead to meaningful growth.
            </p>
            <p className="text-gray-300 leading-relaxed mt-3">
              <span className="text-green-300">Age 30:</span> Applied lessons to
              help others and contribute to community.
            </p>
            <p className="text-gray-300 leading-relaxed mt-3">
              <span className="text-indigo-400">Age 40:</span> Continuing
              lifelong learning, turning experience into tools that support
              others’ growth.
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
