import React from 'react';
import { ArrowLeft, Terminal } from 'lucide-react';
import { Button } from './ui/button';

interface BackButtonProps {
  onNavigate: (pageId: string) => void;
  currentPage: string;
}

export function BackButton({ onNavigate, currentPage }: BackButtonProps) {
  // Don't show back button on home page
  if (currentPage === 'home') {
    return null;
  }

  return (
    <div className="mb-4 flex items-center justify-between">
      <Button
        onClick={() => onNavigate('home')}
        variant="outline"
        size="sm"
        className="bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:text-white transition-all duration-200 text-xs"
      >
        <ArrowLeft className="w-3 h-3 mr-2" />
        Back to Main
      </Button>
      
      <div className="flex items-center space-x-2 text-xs text-gray-500">
        <Terminal className="w-3 h-3" />
        <span>Or type: <code className="text-green-400">cd home</code></span>
      </div>
    </div>
  );
}