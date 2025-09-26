import React, { useState, useEffect } from 'react';
import { TypewriterText } from '../TypewriterText';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Piano, Laptop, Globe, Plane, Map, Music } from 'lucide-react';

interface SuccessVisionPageProps {
  onNavigate: (pageId: string) => void;
  onExplored: (sectionId: string) => void;
}

export function SuccessVisionPage({ onNavigate, onExplored }: SuccessVisionPageProps) {
  const [showIntro, setShowIntro] = useState(false);
  const [showVisions, setShowVisions] = useState(false);
  const [activeVision, setActiveVision] = useState<number | null>(null);

  useEffect(() => {
    const timeout1 = setTimeout(() => setShowIntro(true), 500);
    const timeout2 = setTimeout(() => setShowVisions(true), 2000);
    onExplored('vision');

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [onExplored]);

  const visionPillars = [
    {
      icon: <Piano className="w-6 h-6" />,
      title: "Global Piano Empire",
      description: "Teaching centers worldwide",
      details: `By 2046, I've built a network of piano teaching studios across 20+ countries. 
      Each location adapts to local musical traditions while maintaining my core methodology.
      
      Students connect virtually for masterclasses, competitions, and cultural exchanges.
      My curriculum integrates technology with traditional piano pedagogy.`,
      color: "border-blue-400 text-blue-400",
      image: "https://images.unsplash.com/photo-1636916368580-8f99867e6e14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWFubyUyMG11c2ljJTIwdGVhY2hpbmclMjBnbG9iYWwlMjB3b3JsZHxlbnwxfHx8fDE3NTg4NzM2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: <Laptop className="w-6 h-6" />,
      title: "Tech Freedom",
      description: "Code from anywhere",
      details: `Remote-first software architect specializing in music education platforms.
      I build the technology that powers online music learning globally.
      
      My coding skills finance my travels and fund new piano studio locations.`,
      color: "border-green-400 text-green-400",
      image: "https://images.unsplash.com/photo-1652696290920-ee4c836c711e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHByb2dyYW1taW5nJTIwbGFwdG9wJTIwY29kaW5nfGVufDF8fHx8MTc1ODg3MzY2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Cultural Explorer",
      description: "Learning from every country",
      details: `Living 3-6 months in each location where I have studios.
      Immersing in local music traditions, languages, and cultures.
      
      Each country teaches me new approaches to music and life.`,
      color: "border-purple-400 text-purple-400",
      image: "https://images.unsplash.com/photo-1597395247099-ec7f5c18087a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMHRyYXZlbCUyMGRpZ2l0YWwlMjBub21hZHxlbnwxfHx8fDE3NTg4NzM2NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <div className="space-y-6">
      {showIntro && (
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="border-l-4 border-blue-400 pl-4">
            <TypewriterText 
              text={`YEAR 2046 - VISION ACHIEVED
━━━━━━━━━━━━━━━━━━━━━━━━━

🎹 Global piano teaching network
💻 Location-independent coding
🌍 Living freely across cultures

Two passions. One world. Infinite freedom.`}
              className="text-blue-400 whitespace-pre-line"
              speed={25}
            />
          </div>
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1585816876841-7f1a1a206cae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBuZXR3b3JrJTIwY29ubmVjdGlvbiUyMHdvcmxkd2lkZXxlbnwxfHx8fDE3NTg4NzM2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Global network connections"
            className="w-full h-48 object-cover rounded-lg border border-gray-700"
          />
        </div>
      )}

      {showVisions && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            {visionPillars.map((pillar, index) => (
              <Card 
                key={index}
                className={`bg-gray-900/50 border-gray-700 hover:${pillar.color.split(' ')[0]} cursor-pointer transition-all ${
                  activeVision === index ? pillar.color.split(' ')[0] : ''
                }`}
                onClick={() => setActiveVision(activeVision === index ? null : index)}
              >
                <div className="relative">
                  <ImageWithFallback 
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-32 object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-t-lg"></div>
                  <div className={`absolute top-2 right-2 p-2 rounded-full bg-black/50 ${pillar.color.split(' ')[1]}`}>
                    {pillar.icon}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className={`${pillar.color.split(' ')[1]} text-lg`}>
                    {pillar.title}
                  </CardTitle>
                  <p className="text-gray-400 text-sm">{pillar.description}</p>
                </CardHeader>
                {activeVision === index && (
                  <CardContent className="pt-0">
                    <div className="border-t border-gray-600 pt-3">
                      <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
                        {pillar.details}
                      </p>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-400/30 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Map className="w-6 h-6 text-blue-400" />
              <h3 className="text-blue-400 text-xl">The Complete Picture</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-amber-300">Age 40:</span> I wake up in Vienna, teach a masterclass to students 
              in my studio there, then code new features for my global music platform. Next month: Tokyo studio opening.
            </p>
            <p className="text-gray-300 leading-relaxed mt-3">
              <span className="text-amber-300">Freedom achieved:</span> Work is passion. Location is choice. 
              Impact is global. Two hobbies became the foundation for a life without boundaries.
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <Button 
              onClick={() => onNavigate('experiences')}
              className="bg-green-400/20 border border-green-400 text-green-400 hover:bg-green-400/30"
            >
              Building Blocks →
            </Button>
            <Button 
              onClick={() => onNavigate('journey')}
              className="bg-amber-400/20 border border-amber-400 text-amber-400 hover:bg-amber-400/30"
            >
              Complete Timeline →
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}