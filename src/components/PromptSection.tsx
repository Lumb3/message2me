import React, { useState } from 'react';
import { Button } from './ui/button';
import { TypewriterText } from './TypewriterText';

interface PromptSectionProps {
  prompt: string;
  placeholder: string;
  onExpand: () => void;
  startTyping?: boolean;
}

export function PromptSection({ prompt, placeholder, onExpand, startTyping = false }: PromptSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(true);
    onExpand();
  };

  return (
    <div className="mb-8">
      <div className="flex items-start space-x-2 mb-4">
        <span className="text-green-400 shrink-0">$</span>
        <TypewriterText 
          text={prompt}
          className="text-green-400"
          speed={30}
          startTyping={startTyping}
        />
      </div>
      
      {!isExpanded ? (
        <Button 
          onClick={handleExpand}
          variant="outline"
          className="mt-4 bg-transparent border-green-400/50 text-green-400 hover:bg-green-400/10 hover:border-green-400"
        >
          Execute Query →
        </Button>
      ) : (
        <div className="bg-gray-900/50 border border-gray-700 rounded p-4 mt-4">
          <div className="text-amber-300 mb-2 text-sm">
            <span className="text-green-400">output:</span> {placeholder}
          </div>
          <div className="text-gray-300 leading-relaxed whitespace-pre-line">
            {/* This is where you'll add your actual content */}
            <div className="italic text-gray-500">
              [Your reflection content will go here. Replace this placeholder with your thoughts about success, values, and life decisions.]
            </div>
          </div>
        </div>
      )}
    </div>
  );
}