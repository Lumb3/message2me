import React, { useState, useEffect, useRef } from "react";
import { TypewriterText } from "../TypewriterText";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Play, Pause } from "lucide-react";
import { Button } from "../ui/button";

interface HomePageProps {
  onNavigate: (pageId: string) => void;
  onExplored: (sectionId: string) => void;
}

export function HomePage({ onNavigate, onExplored }: HomePageProps) {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [showCreatorNote, setShowCreatorNote] = useState(false);
  const [showTerminal, setShowTerminal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const sequence = [
      { delay: 300, action: () => setShowWelcome(true) },
      { delay: 2500, action: () => setShowIntro(true) },
      { delay: 5000, action: () => setShowCreatorNote(true) },
      { delay: 7000, action: () => setShowTerminal(true) },
    ];

    const timeouts = sequence.map(({ delay, action }) =>
      setTimeout(action, delay)
    );

    onExplored("home");

    return () => {
      timeouts.forEach((timeout) => clearTimeout(timeout));
    };
  }, [onExplored]);

  const audioTitle = "♪ Waltz in A Minor"; // Title of the audio

  const toggleAudio = () => {
    if (audioRef.current) {
      // Stop any other audio playing
      const allAudio = document.querySelectorAll("audio");
      allAudio.forEach((audio) => {
        if (audio !== audioRef.current) {
          audio.pause();
        }
      });

      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const explorationCommands = [
    {
      command: "explore my vision",
      description: "AI piano crafted from 8 years of learning struggles",
      action: () => onNavigate("vision"),
      color: "text-blue-400",
    },
    {
      command: "explore my experiences",
      description: "From early struggles to breakthrough solutions",
      action: () => onNavigate("experiences"),
      color: "text-green-400",
    },
    {
      command: "explore my values",
      description: "Strength built through challenges",
      action: () => onNavigate("values"),
      color: "text-purple-400",
    },
    {
      command: "explore my decisions",
      description: "Choices that shaped my path",
      action: () => onNavigate("decisions"),
      color: "text-yellow-400",
    },
  ];
  return (
    <div className="space-y-8">
      {/* Hidden Audio Player */}
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)}>
        <source src="/audio/Waltz_in_A_minor.m4a" type="audio/mp4" />
      </audio>

      {showWelcome && (
        <div className="space-y-6">
          {/* Top Row: Logo + Company Name + Music Player */}
          <div className="flex items-center justify-between gap-6 flex-wrap">
            {/* Left: Logo + AriaNova Title */}
            <div className="flex items-center gap-4">
              {/* Logo on the left */}
              <div className="w-16 h-16 md:w-24 md:h-24">
                <ImageWithFallback
                  src="/assets/icon.png"
                  alt="AriaNova Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Company Name */}
              <h1
                className="text-cyan-400 tracking-widest drop-shadow-[0_0_30px_rgba(0,255,255,0.8)]"
                style={{
                  fontSize: "6rem",
                }}
              >
                AriaNova
              </h1>
            </div>

            {/* Right: Music Player */}
            <div className="flex items-center gap-1 p-4 bg-black/40 rounded-lg border border-gray-600 backdrop-blur-sm">
              <button
                onClick={toggleAudio}
                className="p-2 rounded-full bg-blue-400/20 hover:bg-blue-400/30 transition-colors"
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5 text-blue-400" />
                ) : (
                  <Play className="w-5 h-5 text-blue-400" />
                )}
              </button>
              <div className="flex flex-col">
                <div className="text-blue-400 font-mono">{audioTitle}</div>
                <div className="text-gray-400 text-sm">
                  Enjoy the music 🎹 <br />
                  Cover by Erkhembileg
                </div>
              </div>
            </div>
          </div>

          {/* Welcome Message - below logo and title */}
          <div className="border-l-4 border-cyan-400 pl-4">
            <TypewriterText
              text={`WELCOME TO THE SOURCE CODE & MUSIC SHEET OF MY LIFE (2046)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Every key and every line of code brought me closer to my dream: AriaNova, my AI-powered piano.
`}
              className="text-cyan-400 whitespace-pre-line font-mono"
              speed={25}
            />
            <br />
          </div>
        </div>
      )}

      {/* Main Visual Section */}
      {showIntro && (
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Image */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative">
                <ImageWithFallback
                  src="/assets/myFuture.png"
                  alt="My Future - AriaNova Piano-Tech Vision"
                  className="w-full rounded-lg border border-cyan-400/50 shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative">
                <ImageWithFallback
                  src="/assets/ChatGPT_generated.png"
                  alt="My Future - AriaNova Piano-Tech Vision"
                  className="w-full rounded-lg border border-cyan-400/50 shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-cyan-300 font-mono">
                    Vision: 2046 ▸ AI-Powered Piano Revolution
                  </p>
                </div>
                <br />
              </div>
            </div>
          </div>

          {/* Company Description */}
          <div className="space-y-4">
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700 rounded-lg p-6 backdrop-blur-sm">
              <TypewriterText
                text="What is AriaNova?"
                className="text-amber-300 block mb-4"
                speed={40}
                delay={500}
              />

              <div className="space-y-4 text-gray-300">
                <p className="leading-relaxed">
                  <span className="text-emerald-300">AriaNova</span> is a
                  <span className="text-blue-400"> piano-tech</span> company
                  that redefines learning with{" "}
                  <span className="text-cyan-300"> an AI teacher,</span> built
                  directly into the instrument.
                </p>

                <p className="leading-relaxed">
                  <span className="text-rose-300">It</span> solves key{" "}
                  <span className="text-amber-300">
                    {" "}
                    challenges in traditional learning:
                  </span>{" "}
                </p>

                <ul className="space-y-2 ml-6 border-l-2 border-cyan-300 pl-4">
                  <li className="text-blue-300">
                    ▸ Level-up <span className="text-green-400">in weeks</span>,
                    not years
                  </li>
                  <li className="text-emerald-300">
                    <span className="text-purple-400">▸ Auto-flip</span>
                    <span className="text-rose-300"> notes </span>{" "}
                    <span className="text-cyan-300">at the right moment</span>
                  </li>
                  <li className="text-fuchsia-300">
                    ▸ Receive{" "}
                    <span className="text-blue-400 font-mono">
                      real-time guidance{" "}
                    </span>
                    and <span className="text-blue-500"> corrections</span>
                  </li>
                  <li className="text-emerald-300">
                    ▸ Follow a{" "}
                    <span className="text-purple-400">personalized</span>,
                    <span className="text-green-400 font-mono">
                      {" "}
                      structured
                    </span>{" "}
                    learning plan
                  </li>
                </ul>

                <p className="leading-relaxed text-rose-200 mt-4 pt-4 border-t border-gray-700">
                  Every struggle became{" "}
                  <span className="text-blue-400">a feature.</span> AriaNova is
                  the solution born from my years of piano practice and
                  exploration of technology
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Creator's Note Section */}
      {showCreatorNote && (
        <div className="bg-black/60 border-2 border-amber-400/50 rounded-lg p-6 backdrop-blur-sm">
          <div className="flex items-center gap-5 mb-4">
            <span className="text-amber-400"> 🗒️ </span>
            <TypewriterText
              text="Creator's NOTE: How to Navigate in This Website"
              className="text-amber-400 font-mono"
              speed={25}
            />
          </div>

          <div className="space-y-3 text-gray-300 ml-8">
            <p className="flex items-start gap-2">
              <span className="text-cyan-400 font-mono flex-shrink-0">1.</span>
              <span>
                Type <span className="text-blue-400 font-mono">help</span> or{" "}
                <span className="text-blue-400 font-mono">ls</span> in the{" "}
                <span className="text-green-400">top-menu </span>
                to see available commands.
              </span>
            </p>

            <p className="flex items-start gap-2">
              <span className="text-cyan-400 font-mono flex-shrink-0">2.</span>
              <span>
                Use{" "}
                <span className="text-blue-400 font-mono">
                  cd &lt;module&gt;
                </span>{" "}
                to navigate each section.
              </span>
            </p>

            <p className="flex items-start gap-2">
              <span className="text-cyan-400 font-mono flex-shrink-0">3.</span>
              <span>
                Click the <span className="text-blue-400 font-mono">Play</span>{" "}
                button to hear piano music.
              </span>
            </p>

            <p className="flex items-start gap-2">
              <span className="text-cyan-400 font-mono flex-shrink-0">4.</span>
              <span>
                Each section reveals a piece of my story—from{" "}
                <span className="text-purple-400">childhood struggles</span> to{" "}
                <span className="text-amber-400">the creation of AriaNova</span>
                .
              </span>
            </p>

            <p className="flex items-start gap-2">
              <span className="text-cyan-400 font-mono flex-shrink-0">5.</span>
              <span>
                Some future-envisioning images, like the ones above, were
                generated with{" "}
                <span className="text-yellow-400 font-mono">AI</span>, but the
                entire website was hand-coded, line by line. Check{" "}
                <a
                  href="https://github.com/Lumb3/message2me"
                  className="text-purple-400"
                >
                  this website
                </a>{" "}
                to see the source code.
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-cyan-400 font-mono flex-shrink-0">4.</span>
              <span>
                This website is intended for viewing on a
                <span className="text-blue-400"> computer/laptop </span> only!
              </span>
            </p>
          </div>
        </div>
      )}

      {/* Terminal Navigation Section */}
      {showTerminal && (
        <div className="space-y-4">
          <div className="text-center mb-6">
            <TypewriterText
              text="MORE ABOUT ME: "
              className="text-green-400 text-lg"
              delay={500}
            />
            <p className="text-gray-400 mt-2">
              Use the <span className="text-green-400">top-menu</span> to
              explore my journey →
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {explorationCommands.map((cmd, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onClick={cmd.action}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-30 blur transition duration-300"></div>
                <div className="relative bg-black/80 border border-gray-600 rounded-lg p-4 hover:border-gray-400 transition-all">
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 font-mono flex-shrink-0">
                      $
                    </span>
                    <div className="flex-1 space-y-2">
                      <div
                        className={`font-mono ${cmd.color} group-hover:scale-[1.02] transition-transform`}
                      >
                        {cmd.command}
                      </div>
                      <div className="text-gray-400 leading-relaxed">
                        {cmd.description}
                      </div>
                      <div className="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                        <span>▸</span> Click to Visit
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer hint */}
          <div className="text-center pt-4">
            <p className="text-gray-500 font-mono">
              <span className="text-cyan-400">TIP:</span> Start with "explore my
              vision" to see the full picture, or jump to any section that
              interests you
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
