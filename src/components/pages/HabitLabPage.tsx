import React, { useState, useEffect } from 'react';
import { TypewriterText } from '../TypewriterText';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/progress';
import { Badge } from '../ui/badge';
import { Play, Pause, RotateCcw, Target, Clock, Zap } from 'lucide-react';

interface Habit {
  id: string;
  name: string;
  category: string;
  frequency: string;
  duration: number;
  streak: number;
  isActive: boolean;
}

interface HabitLabPageProps {
  onComplete: (sectionId: string) => void;
}

export function HabitLabPage({ onComplete }: HabitLabPageProps) {
  const [selectedHabits, setSelectedHabits] = useState<Habit[]>([]);
  const [showHabitBuilder, setShowHabitBuilder] = useState(false);
  const [simulationRunning, setSimulationRunning] = useState(false);
  const [simulationDay, setSimulationDay] = useState(0);

  const suggestedHabits = [
    { name: 'Morning Meditation', category: 'Wellness', frequency: 'Daily', duration: 10, description: 'Start each day with clarity' },
    { name: 'Deep Work Sessions', category: 'Productivity', frequency: 'Daily', duration: 90, description: 'Focused work without distractions' },
    { name: 'Exercise Routine', category: 'Health', frequency: 'Daily', duration: 45, description: 'Maintain physical fitness' },
    { name: 'Learning Time', category: 'Growth', frequency: 'Daily', duration: 30, description: 'Continuous skill development' },
    { name: 'Gratitude Journal', category: 'Wellness', frequency: 'Daily', duration: 5, description: 'Reflect on positive moments' },
    { name: 'Network Building', category: 'Career', frequency: 'Weekly', duration: 60, description: 'Connect with industry peers' },
    { name: 'Financial Review', category: 'Money', frequency: 'Weekly', duration: 30, description: 'Track progress toward goals' },
    { name: 'Planning Session', category: 'Productivity', frequency: 'Weekly', duration: 45, description: 'Prepare for the week ahead' }
  ];

  const addHabit = (habit: any) => {
    const newHabit: Habit = {
      id: Date.now().toString(),
      name: habit.name,
      category: habit.category,
      frequency: habit.frequency,
      duration: habit.duration,
      streak: 0,
      isActive: false
    };
    setSelectedHabits([...selectedHabits, newHabit]);
  };

  const removeHabit = (id: string) => {
    setSelectedHabits(selectedHabits.filter(h => h.id !== id));
  };

  const startSimulation = () => {
    setSimulationRunning(true);
    setSimulationDay(0);
    
    const interval = setInterval(() => {
      setSimulationDay(prev => {
        if (prev >= 30) {
          setSimulationRunning(false);
          clearInterval(interval);
          return prev;
        }
        
        // Simulate habit completion with some randomness
        setSelectedHabits(habits => habits.map(habit => ({
          ...habit,
          streak: Math.random() > 0.2 ? habit.streak + 1 : Math.max(0, habit.streak - 1),
          isActive: Math.random() > 0.3
        })));
        
        return prev + 1;
      });
    }, 200);
  };

  const resetSimulation = () => {
    setSimulationRunning(false);
    setSimulationDay(0);
    setSelectedHabits(habits => habits.map(habit => ({ ...habit, streak: 0, isActive: false })));
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      'Wellness': 'bg-green-400/20 text-green-400 border-green-400',
      'Productivity': 'bg-blue-400/20 text-blue-400 border-blue-400',
      'Health': 'bg-red-400/20 text-red-400 border-red-400',
      'Growth': 'bg-purple-400/20 text-purple-400 border-purple-400',
      'Career': 'bg-yellow-400/20 text-yellow-400 border-yellow-400',
      'Money': 'bg-emerald-400/20 text-emerald-400 border-emerald-400'
    };
    return colors[category] || 'bg-gray-400/20 text-gray-400 border-gray-400';
  };

  const completionRate = selectedHabits.length > 0 ? 
    (selectedHabits.reduce((sum, habit) => sum + habit.streak, 0) / (selectedHabits.length * Math.max(1, simulationDay))) * 100 : 0;

  return (
    <div className="space-y-6">
      <div className="border-l-4 border-purple-400 pl-4">
        <TypewriterText 
          text={`HABIT LAB MODULE
━━━━━━━━━━━━━━━━

Design your daily success routines.
Select habits that align with your 40-year vision.

Remember: You are what you repeatedly do.`}
          className="text-purple-400 whitespace-pre-line"
          speed={20}
        />
      </div>

      {!showHabitBuilder ? (
        <div className="text-center">
          <Button 
            onClick={() => setShowHabitBuilder(true)}
            className="bg-purple-400/20 border border-purple-400 text-purple-400 hover:bg-purple-400/30"
          >
            <Zap className="w-4 h-4 mr-2" />
            Launch Habit Builder
          </Button>
        </div>
      ) : (
        <>
          <Card className="bg-gray-900/50 border-gray-700">
            <CardHeader>
              <CardTitle className="text-purple-400 flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Suggested Success Habits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {suggestedHabits.map((habit, index) => (
                  <div key={index} className="bg-black/30 border border-gray-600 rounded p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-amber-300">{habit.name}</h4>
                      <Badge className={getCategoryColor(habit.category)}>
                        {habit.category}
                      </Badge>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{habit.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-500">
                        <Clock className="w-3 h-3 inline mr-1" />
                        {habit.duration}min • {habit.frequency}
                      </div>
                      <Button
                        size="sm"
                        onClick={() => addHabit(habit)}
                        disabled={selectedHabits.some(h => h.name === habit.name)}
                        className="bg-purple-400/20 border border-purple-400/50 text-purple-400 hover:bg-purple-400/30"
                      >
                        {selectedHabits.some(h => h.name === habit.name) ? 'Added' : 'Add'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {selectedHabits.length > 0 && (
            <Card className="bg-gray-900/30 border-gray-700">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-green-400">Your Habit Stack ({selectedHabits.length})</CardTitle>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      onClick={simulationRunning ? () => setSimulationRunning(false) : startSimulation}
                      className="bg-green-400/20 border border-green-400 text-green-400"
                    >
                      {simulationRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      {simulationRunning ? 'Pause' : 'Simulate 30 Days'}
                    </Button>
                    <Button
                      size="sm"
                      onClick={resetSimulation}
                      className="bg-gray-400/20 border border-gray-400 text-gray-400"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {simulationDay > 0 && (
                  <div className="mb-4 p-3 bg-blue-400/10 border border-blue-400/30 rounded">
                    <div className="text-blue-400 mb-2">Day {simulationDay} of 30-Day Simulation</div>
                    <Progress value={completionRate} className="h-2" />
                    <div className="text-xs text-gray-400 mt-1">
                      Overall completion rate: {completionRate.toFixed(1)}%
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  {selectedHabits.map(habit => (
                    <div key={habit.id} className="flex justify-between items-center p-3 bg-black/30 rounded">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${habit.isActive ? 'bg-green-400' : 'bg-gray-600'}`} />
                        <div>
                          <div className="text-amber-300">{habit.name}</div>
                          <div className="text-xs text-gray-500">
                            {habit.duration}min • {habit.frequency}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="text-sm">
                          <span className="text-green-400">{habit.streak}</span>
                          <span className="text-gray-500"> day streak</span>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => removeHabit(habit.id)}
                          className="text-red-400 hover:bg-red-400/10"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {selectedHabits.length >= 3 && (
            <div className="text-center">
              <Button 
                onClick={() => onComplete('habit-lab-complete')}
                className="bg-purple-400/20 border border-purple-400 text-purple-400 hover:bg-purple-400/30"
              >
                Complete Habit Lab →
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}