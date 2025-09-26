import React, { useState } from 'react';
import { TerminalWindow } from './components/TerminalWindow';
import { NavigationSystem, Page } from './components/NavigationSystem';
import { BackButton } from './components/BackButton';
import { HomePage } from './components/pages/HomePage';
import { SuccessVisionPage } from './components/pages/SuccessVisionPage';
import { ExperiencesPage } from './components/pages/ExperiencesPage';
import { ValuesPage } from './components/pages/ValuesPage';
import { DecisionsPage } from './components/pages/DecisionsPage';
import { JourneyPage } from './components/pages/JourneyPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [exploredSections, setExploredSections] = useState<string[]>([]);

  const pages: Page[] = [
    { id: 'home', name: 'Introduction', path: 'home', description: 'My vision of success at 40', component: HomePage },
    { id: 'vision', name: 'Success Vision', path: 'vision', description: 'What success looks like for me', component: SuccessVisionPage },
    { id: 'experiences', name: 'Key Experiences', path: 'experiences', description: 'Formative moments that shaped my path', component: ExperiencesPage },
    { id: 'values', name: 'Core Values', path: 'values', description: 'Principles that guide my decisions', component: ValuesPage },
    { id: 'decisions', name: 'Critical Decisions', path: 'decisions', description: 'Turning points that will define my journey', component: DecisionsPage },
    { id: 'journey', name: 'The Journey', path: 'journey', description: 'How it all connects together', component: JourneyPage }
  ];

  const handleSectionExplored = (sectionId: string) => {
    if (!exploredSections.includes(sectionId)) {
      setExploredSections([...exploredSections, sectionId]);
    }
  };

  const handleNavigate = (pageId: string) => {
    setCurrentPage(pageId);
    handleSectionExplored(pageId);
  };

  const renderCurrentPage = () => {
    const page = pages.find(p => p.id === currentPage);
    if (!page) return <HomePage onNavigate={handleNavigate} onExplored={handleSectionExplored} />;

    const PageComponent = page.component;
    return <PageComponent onNavigate={handleNavigate} onExplored={handleSectionExplored} />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 p-4">
      <div className="max-w-6xl mx-auto">
        <TerminalWindow>
          <div className="space-y-6">
            <NavigationSystem 
              pages={pages}
              currentPage={currentPage}
              onNavigate={handleNavigate}
            />
            
            <BackButton 
              onNavigate={handleNavigate}
              currentPage={currentPage}
            />
            
            <div className="min-h-[600px]">
              {renderCurrentPage()}
            </div>
            
            {/* Footer with exploration status */}
            <div className="border-t border-gray-700 pt-4 text-center">
              <div className="text-gray-500 text-sm">
                <span className="text-green-400">Sections explored:</span> {exploredSections.length}/{pages.length}
                {exploredSections.length === pages.length && (
                  <span className="text-yellow-400 ml-2">🎉 Complete exploration unlocked!</span>
                )}
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </div>
  );
}