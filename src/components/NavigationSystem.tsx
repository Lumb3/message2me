import React, { useState, useEffect } from 'react';
import { TypewriterText } from './TypewriterText';

export interface Page {
  id: string;
  name: string;
  path: string;
  description: string;
  component: React.ComponentType<any>;
  unlocked?: boolean;
}
  
interface NavigationSystemProps {
  pages: Page[];
  currentPage: string;
  onNavigate: (pageId: string) => void;
}

export function NavigationSystem({ pages, currentPage, onNavigate }: NavigationSystemProps) {
  const [showHelp, setShowHelp] = useState(false);
  const [showWhoami, setShowWhoami] = useState(false);
  const [command, setCommand] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '<') {
        setShowWhoami(prev => !prev);
        e.preventDefault();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCommand = (cmd: string) => {
    const parts = cmd.toLowerCase().trim().split(' ');
    const action = parts[0];
    
    switch (action) {
      case 'ls':
      case 'list':
        setShowHelp(true);
        break;
      case 'cd':
        const pageName = parts[1];
        const page = pages.find(p => p.path === pageName || p.id === pageName);
        if (page && page.unlocked !== false) {
          onNavigate(page.id);
          setShowHelp(false);
        }
        break;
      case 'help':
        setShowHelp(true);
        break;
      case 'clear':
        setShowHelp(false);
        setShowWhoami(false);
        break;
      case 'whoami':
        setShowWhoami(true);
        setShowHelp(false);
        break;
    }
    setCommand('');
  };

  const currentPageData = pages.find(p => p.id === currentPage);

  return (
    <div className="mb-6">
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-blue-400">navigator@success:</span>
        <span className="text-amber-300">~/{currentPageData?.path || 'home'}</span>
        <span className="text-green-400">$</span>
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleCommand(command)}
          className="bg-transparent border-none outline-none text-green-400 font-mono flex-1"
          placeholder="Type 'help' or 'ls' for navigation..."
        />
      </div>

      {showHelp && (
        <div className="bg-gray-900/30 border border-gray-700 rounded p-4 mb-4">
          <TypewriterText 
            text="Available commands:"
            className="text-amber-300 mb-2"
            speed={20}
          />
          <div className="text-gray-300 text-sm space-y-1 mt-2">
            <div><span className="text-green-400">ls</span> - List all available modules</div>
            <div><span className="text-green-400">cd [module]</span> - Navigate to module</div>
            <div><span className="text-green-400">clear</span> - Clear this help menu</div>
            <div><span className="text-green-400">help</span> - Show this help menu</div>
            <div><span className="text-green-400">whoami</span> - Get to know more about me</div>
          </div>
          
          <div className="mt-4">
            <div className="text-amber-300 mb-2">Available modules:</div>
            {pages.map(page => (
              <div key={page.id} className="flex items-center space-x-2 text-sm">
                <span className={`${page.unlocked === false ? 'text-red-400' : 'text-green-400'}`}>
                  {page.unlocked === false ? '🔒' : '📁'}
                </span>
                <span className="text-blue-400">{page.path}</span>
                <span className="text-gray-400">- {page.description}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {showWhoami && (
        <div className="bg-gray-900/30 border border-gray-700 rounded p-4 mb-4">
          <TypewriterText
            text="> whoami"
            className="text-green-400 mb-2"
            speed={20}
          />
          <div className="text-gray-300 text-sm space-y-1 mt-2">
            <div>Name: Erkhembileg Ariunbold</div>
            <div>uNID: u1539956</div>
            <div>Occupation: Founder of Global Piano-Tech Company</div>
            <div>Location: World Citizen</div>
            <div>Passions: Music 🎹 | Technology 💻 | Freedom 🌍</div>
          </div>
        </div>
      )}
    </div>
  );
}
