import React, { useState } from 'react';
import { TypewriterText } from '../TypewriterText';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';
import { ArrowRight, CheckCircle, Info, Terminal, Lightbulb } from 'lucide-react';

interface TutorialPageProps {
  onComplete: (sectionId: string) => void;
  onNavigate: (pageId: string) => void;
}

export function TutorialPage({ onComplete, onNavigate }: TutorialPageProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const tutorialSteps = [
    {
      title: "Welcome to Your Success Terminal",
      icon: <Terminal className="w-6 h-6" />,
      content: `This isn't just another planning tool—it's your personal success laboratory.

You'll work through different modules that help you:
• Visualize your ideal life at 40
• Set concrete, achievable goals  
• Build daily habits that compound into success
• Map out your journey with key milestones

Each module builds on the previous one, creating a comprehensive blueprint for your future.`,
      action: "Continue",
      color: "text-green-400"
    },
    {
      title: "Navigation System",
      icon: <Info className="w-6 h-6" />,
      content: `You can navigate using the command line at the top:

• Type 'ls' or 'list' to see all available modules
• Type 'cd [module-name]' to jump to any module
• Type 'help' for more navigation options
• Type 'clear' to hide the help menu

You can also click on module cards to navigate directly.

Try typing 'ls' in the command line now to see this in action!`,
      action: "I understand",
      color: "text-blue-400"
    },
    {
      title: "Progress Tracking",
      icon: <CheckCircle className="w-6 h-6" />,
      content: `The system tracks your progress automatically:

• Each completed module unlocks achievements
• Your overall progress is shown in the status bar
• Some advanced modules unlock only after completing prerequisites
• All your responses are saved as you work

This gamification helps maintain motivation as you build your success blueprint.`,
      action: "Got it",
      color: "text-purple-400"
    },
    {
      title: "Module Overview",
      icon: <Lightbulb className="w-6 h-6" />,
      content: `Here's what each module does:

🔮 Vision Quest: Define what success means to you personally
🏗️  Goal Architect: Create SMART goals across all life areas
⚡ Habit Lab: Design daily routines with 30-day simulation
📅 Time Machine: Map major milestones on your timeline

Each module has interactive elements, simulations, and tools to make planning engaging rather than overwhelming.`,
      action: "Start my journey",
      color: "text-yellow-400"
    }
  ];

  const nextStep = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete('tutorial-complete');
      onNavigate('home');
    }
  };

  const jumpToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const currentTutorialStep = tutorialSteps[currentStep];
  const progress = ((currentStep + 1) / tutorialSteps.length) * 100;

  return (
    <div className="space-y-6">
      <div className="border-l-4 border-cyan-400 pl-4">
        <TypewriterText 
          text={`INTERACTIVE TUTORIAL
━━━━━━━━━━━━━━━━━━━

Learn how to use your Success Vision System.
This quick tour will show you all the features.`}
          className="text-cyan-400 whitespace-pre-line"
          speed={20}
        />
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">Tutorial Progress</span>
          <span className="text-sm text-gray-400">Step {currentStep + 1} of {tutorialSteps.length}</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Step Navigation */}
      <div className="flex justify-center space-x-2 mb-6">
        {tutorialSteps.map((_, index) => (
          <button
            key={index}
            onClick={() => jumpToStep(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentStep 
                ? 'bg-cyan-400' 
                : completedSteps.includes(index)
                ? 'bg-green-400'
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>

      <Card className="bg-gray-900/50 border-gray-700 min-h-[400px]">
        <CardHeader>
          <CardTitle className={`${currentTutorialStep.color} flex items-center space-x-3`}>
            {currentTutorialStep.icon}
            <span>{currentTutorialStep.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-gray-300 whitespace-pre-line leading-relaxed">
            <TypewriterText 
              text={currentTutorialStep.content}
              speed={15}
              startTyping={true}
            />
          </div>

          <div className="flex justify-between items-center pt-6">
            <div className="text-sm text-gray-500">
              {completedSteps.includes(currentStep) && (
                <span className="flex items-center text-green-400">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Step completed
                </span>
              )}
            </div>
            
            <Button 
              onClick={nextStep}
              className={`bg-cyan-400/20 border border-cyan-400 text-cyan-400 hover:bg-cyan-400/30`}
            >
              {currentTutorialStep.action}
              {currentStep < tutorialSteps.length - 1 && <ArrowRight className="w-4 h-4 ml-2" />}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick access to modules after tutorial */}
      {currentStep === tutorialSteps.length - 1 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { id: 'vision', name: 'Vision Quest', color: 'border-blue-400 text-blue-400' },
            { id: 'goals', name: 'Goal Architect', color: 'border-green-400 text-green-400' },
            { id: 'habits', name: 'Habit Lab', color: 'border-purple-400 text-purple-400' },
            { id: 'timeline', name: 'Time Machine', color: 'border-yellow-400 text-yellow-400' }
          ].map(module => (
            <Card 
              key={module.id}
              className={`bg-gray-900/30 border ${module.color} cursor-pointer hover:bg-gray-800/50 transition-all`}
              onClick={() => onNavigate(module.id)}
            >
              <CardContent className="p-4 text-center">
                <div className={`${module.color} text-sm`}>{module.name}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}