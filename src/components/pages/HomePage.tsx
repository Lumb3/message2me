import React, { useState, useEffect } from 'react';
import { TypewriterText } from '../TypewriterText';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HomePageProps {
  onNavigate: (pageId: string) => void;
  onExplored: (sectionId: string) => void;
}

export function HomePage({ onNavigate, onExplored }: HomePageProps) {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [showCommands, setShowCommands] = useState(false);

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

  const explorationCommands = [
    { 
      command: 'explore vision', 
      description: 'Global piano empire & freedom at 40',
      action: () => onNavigate('vision'),
      color: 'text-blue-400'
    },
    { 
      command: 'explore experiences', 
      description: 'Building skills from age 19',
      action: () => onNavigate('experiences'),
      color: 'text-green-400'
    },
    { 
      command: 'explore values', 
      description: 'Challenge & persistence drive success',
      action: () => onNavigate('values'),
      color: 'text-purple-400'
    },
    { 
      command: 'explore decisions', 
      description: 'Key choices shaping my path',
      action: () => onNavigate('decisions'),
      color: 'text-yellow-400'
    }
  ];

  return (
    <div className="space-y-6">
      {showWelcome && (
        <div className="border-l-4 border-cyan-400 pl-4">
          <TypewriterText
            text={`WELCOME TO THE SOURCE CODE & MUSIC SHEET OF MY LIFE in 2046
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Every key pressed and every line of code written
brought me closer to my dream: building a piano-tech future.
`}
            className="text-cyan-400 whitespace-pre-line"
            speed={25}
          />
        </div>
      )}

      {showIntro && (
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="bg-gray-900/30 border border-gray-700 rounded-lg p-6">
            <TypewriterText 
              text={`🎹 Global Piano Teaching Network
💻 Location-Independent Tech Career  
🌍 Cultural Explorer & Digital Nomad

Two passions. One journey. Infinite possibilities.`}
              className="text-amber-300 leading-relaxed"
              speed={20}
              delay={1000}
            />
          </div>
          <div className="relative">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1735757608801-04504c854e47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmUlMjB0ZWNobm9sb2d5JTIwMjA0NiUyMGRpZ2l0YWwlMjB3b3JsZHxlbnwxfHx8fDE3NTg4NzM2Njl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
              Complete Timeline 2025→2046
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}