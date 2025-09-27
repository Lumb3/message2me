import React, { useState, useEffect, useRef } from 'react';
import { TypewriterText } from '../TypewriterText';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Piano, Code, Play, Pause } from 'lucide-react';

interface HomePageProps {
  onNavigate: (pageId: string) => void;
  onExplored: (sectionId: string) => void;
}

export function HomePage({ onNavigate, onExplored }: HomePageProps) {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [showCommands, setShowCommands] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const sequence = [
      { delay: 500, action: () => setShowWelcome(true) },
      { delay: 2500, action: () => setShowIntro(true) },
      { delay: 4000, action: () => setShowCommands(true) }
    ];

    const timeouts = sequence.map(({ delay, action }) => 
      setTimeout(action, delay)
    );

    onExplored('home');

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [onExplored]);

  // **AUDIO INTEGRATION POINT 1**: Add your piano audio file here
  const toggleAudio = () => {
    if (audioRef.current) {
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
      command: 'explore my vision', 
      description: 'AI piano built from my decade of learning struggles.',
      action: () => onNavigate('vision'),
      color: 'text-blue-400'
    },
    { 
      command: 'explore my experiences', 
      description: 'From 12-year-old struggles to breakthrough solutions',
      action: () => onNavigate('experiences'),
      color: 'text-green-400'
    },
    { 
      command: 'explore my values', 
      description: 'Challenges build strength, inside and out',
      action: () => onNavigate('values'),
      color: 'text-purple-400'
    },
    { 
      command: 'explore my decisions', 
      description: 'Key choices shaping my path',
      action: () => onNavigate('decisions'),
      color: 'text-yellow-400'
    }
  ];

  return (
    <div className="space-y-6">
      {/* **AUDIO INTEGRATION POINT 2**: Hidden audio element - replace src with your piano file */}
      <audio ref={audioRef} onEnded={() => setIsPlaying(false)}>
        <source src="/audio/piano-demo.mp3" type="audio/mpeg" />
        <source src="/audio/piano-demo.wav" type="audio/wav" />
        {/* Add your piano audio files to /public/audio/ folder */}
      </audio>

      {showWelcome && (
        <div className="border-l-4 border-cyan-400 pl-4">
          <TypewriterText 
            text={`WELCOME TO THE SOURCE CODE & MUSIC SHEET OF MY LIFE (2046)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Every key pressed and every line of code written
brought me closer to my dream: building a piano-tech future.

By 40, I'll launch a piano-tech company with an AI-powered piano that 
teaches anyone in weeks, flips notes automatically, and guides players 
through complex pieces with expert suggestions.`}
            className="text-cyan-400 whitespace-pre-line"
            speed={25}
          />
        </div>
      )}

      {showIntro && (
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="bg-gray-900/30 border border-gray-700 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Piano className="w-6 h-6 text-blue-400" />
              <Code className="w-6 h-6 text-green-400" />
              <span className="text-amber-300">→ Piano-Tech Future</span>
            </div>
            
            {/* **AUDIO INTEGRATION POINT 3**: Audio player interface */}
            <div className="mb-4 p-3 bg-black/30 rounded-lg border border-gray-600">
              <div className="flex items-center gap-3">
                <button 
                  onClick={toggleAudio}
                  className="p-2 rounded-full bg-blue-400/20 hover:bg-blue-400/30 transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 text-blue-400" />
                  ) : (
                    <Play className="w-4 h-4 text-blue-400" />
                  )}
                </button>
                <span className="text-blue-400 text-sm">♪ My Piano Journey</span>
              </div>
            </div>

            <TypewriterText 
              text={`From 12-year-old dreamer who wants to become a pianist, struggling to read 
to 19-year-old building the solutions I wished existed.

The future of piano learning starts here.`}
              className="text-amber-300 leading-relaxed"
              speed={20}
              delay={1000}
            />
          </div>
          <div className="relative">
            <ImageWithFallback 
              src="assets/myFuture.png"
              alt="Future digital world 2046"
              className="w-full h-48 object-cover rounded-lg border border-gray-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
          </div>
        </div>
      )}

      {showCommands && (
        <div className="space-y-4">
          <div className="text-center mb-6">
            <TypewriterText 
              text="Terminal Navigation:"
              className="text-green-400 text-lg"
              delay={500}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {explorationCommands.map((cmd, index) => (
              <div 
                key={index}
                className="bg-black/40 border border-gray-600 rounded-lg p-4 hover:border-gray-500 transition-all cursor-pointer group"
                onClick={cmd.action}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-green-400">$</span>
                  <span className={`font-mono ${cmd.color} group-hover:scale-105 transition-transform`}>
                    {cmd.command}
                  </span>
                </div>
                <div className="text-gray-400 text-sm ml-6">
                  {cmd.description}
                </div>
                <div className="text-green-400 text-xs mt-2 ml-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  Execute →
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Button 
              onClick={() => onNavigate('journey')}
              className="bg-amber-400/20 border border-amber-400 text-amber-400 hover:bg-amber-400/30"
            >
              Complete Timeline 2025→2046 →
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}