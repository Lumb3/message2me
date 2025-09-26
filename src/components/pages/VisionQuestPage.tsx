import React, { useState } from 'react';
import { TypewriterText } from '../TypewriterText';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Progress } from '../ui/progress';

interface VisionQuestPageProps {
  onComplete: (sectionId: string) => void;
}

export function VisionQuestPage({ onComplete }: VisionQuestPageProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<string[]>([]);
  const [currentResponse, setCurrentResponse] = useState('');

  const visionPrompts = [
    {
      title: "Personal Success Definition",
      prompt: "At 40, what does true success mean to you personally? Think beyond money and status.",
      placeholder: "Example: Having deep, meaningful relationships, feeling fulfilled in my work, maintaining physical and mental health..."
    },
    {
      title: "Professional Achievement",
      prompt: "Describe your ideal professional situation at 40. What are you doing? What impact are you making?",
      placeholder: "Example: Leading a team that solves meaningful problems, being recognized as an expert in my field..."
    },
    {
      title: "Lifestyle Vision",
      prompt: "Paint a picture of your ideal day-to-day life at 40. Where do you live? How do you spend your time?",
      placeholder: "Example: Starting mornings with meditation, working from a home office with a garden view..."
    },
    {
      title: "Legacy & Impact",
      prompt: "What kind of legacy do you want to have built by 40? How will you have made the world better?",
      placeholder: "Example: Mentored young professionals, contributed to sustainable business practices..."
    },
    {
      title: "Values Integration",
      prompt: "How will your core values be reflected in your 40-year-old life? What principles guide your decisions?",
      placeholder: "Example: Prioritizing authenticity over appearances, choosing growth over comfort..."
    }
  ];

  const handleNextStep = () => {
    if (currentResponse.trim()) {
      const newResponses = [...responses, currentResponse];
      setResponses(newResponses);
      setCurrentResponse('');
      
      if (currentStep < visionPrompts.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        onComplete('vision-quest-complete');
      }
    }
  };

  const progress = ((currentStep + 1) / visionPrompts.length) * 100;
  const currentPrompt = visionPrompts[currentStep];

  return (
    <div className="space-y-6">
      <div className="border-l-4 border-blue-400 pl-4">
        <TypewriterText 
          text={`VISION QUEST MODULE
━━━━━━━━━━━━━━━━━━

Step ${currentStep + 1} of ${visionPrompts.length}: ${currentPrompt.title}

This deep-dive will help you crystallize your vision of success.
Take your time and be as specific as possible.`}
          className="text-blue-400 whitespace-pre-line"
          speed={20}
        />
      </div>

      <div className="mb-4">
        <Progress value={progress} className="h-2" />
        <div className="text-xs text-gray-500 mt-1">{Math.round(progress)}% complete</div>
      </div>

      <div className="bg-gray-900/50 border border-gray-700 rounded p-6">
        <div className="mb-4">
          <div className="text-green-400 mb-2">$ vision_quest --prompt "{currentPrompt.title.toLowerCase().replace(/\s+/g, '_')}"</div>
          <TypewriterText 
            text={currentPrompt.prompt}
            className="text-amber-300"
            speed={15}
          />
        </div>

        <Textarea
          value={currentResponse}
          onChange={(e) => setCurrentResponse(e.target.value)}
          placeholder={currentPrompt.placeholder}
          className="bg-black/50 border-gray-600 text-gray-300 font-mono min-h-[120px] mb-4"
          rows={6}
        />

        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            {currentResponse.length} characters entered
          </div>
          <Button 
            onClick={handleNextStep}
            disabled={!currentResponse.trim()}
            className="bg-blue-400/20 border border-blue-400 text-blue-400 hover:bg-blue-400/30"
          >
            {currentStep < visionPrompts.length - 1 ? 'Next Step →' : 'Complete Quest'}
          </Button>
        </div>
      </div>

      {responses.length > 0 && (
        <div className="bg-gray-900/30 border border-gray-700 rounded p-4">
          <div className="text-green-400 mb-2">Previous responses logged:</div>
          <div className="space-y-2">
            {responses.map((response, index) => (
              <div key={index} className="text-xs">
                <span className="text-amber-300">{visionPrompts[index].title}:</span>
                <span className="text-gray-400 ml-2">
                  {response.substring(0, 80)}...
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}