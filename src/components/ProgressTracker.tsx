import React from 'react';
import { Progress } from './ui/progress';

interface Achievement {
  id: string;
  name: string;
  description: string;
  unlocked: boolean;
  icon: string;
}

interface ProgressTrackerProps {
  completedSections: string[];
  totalSections: number;
  achievements: Achievement[];
}

export function ProgressTracker({ completedSections, totalSections, achievements }: ProgressTrackerProps) {
  const progressPercentage = (completedSections.length / totalSections) * 100;
  const unlockedAchievements = achievements.filter(a => a.unlocked);

  return (
    <div className="bg-gray-900/30 border border-gray-700 rounded p-4 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-amber-300">System Status</h3>
        <div className="text-green-400 text-sm">
          {completedSections.length}/{totalSections} modules completed
        </div>
      </div>

      <div className="mb-4">
        <div className="text-sm text-gray-400 mb-2">Overall Progress</div>
        <Progress value={progressPercentage} className="h-2" />
        <div className="text-xs text-gray-500 mt-1">{Math.round(progressPercentage)}% complete</div>
      </div>

      {unlockedAchievements.length > 0 && (
        <div>
          <div className="text-sm text-gray-400 mb-2">Recent Achievements</div>
          <div className="flex space-x-2">
            {unlockedAchievements.slice(-3).map(achievement => (
              <div 
                key={achievement.id}
                className="bg-yellow-400/20 border border-yellow-400/30 rounded px-2 py-1 text-xs text-yellow-300"
                title={achievement.description}
              >
                {achievement.icon} {achievement.name}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}