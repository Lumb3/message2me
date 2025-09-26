import React, { useState } from 'react';
import { TypewriterText } from '../TypewriterText';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Plus, Target, Calendar, TrendingUp, X } from 'lucide-react';

interface Goal {
  id: string;
  title: string;
  category: string;
  timeframe: string;
  priority: 'high' | 'medium' | 'low';
  description: string;
}

interface GoalArchitectPageProps {
  onComplete: (sectionId: string) => void;
}

export function GoalArchitectPage({ onComplete }: GoalArchitectPageProps) {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newGoal, setNewGoal] = useState<Partial<Goal>>({});

  const categories = [
    'Career & Professional',
    'Health & Fitness',
    'Relationships & Family',
    'Financial',
    'Personal Growth',
    'Education & Learning',
    'Creative & Hobbies',
    'Community & Impact'
  ];

  const timeframes = [
    '1 year',
    '2-3 years',
    '5 years',
    '10 years',
    'By age 40'
  ];

  const addGoal = () => {
    if (newGoal.title && newGoal.category && newGoal.timeframe && newGoal.priority) {
      const goal: Goal = {
        id: Date.now().toString(),
        title: newGoal.title!,
        category: newGoal.category!,
        timeframe: newGoal.timeframe!,
        priority: newGoal.priority!,
        description: newGoal.description || ''
      };
      setGoals([...goals, goal]);
      setNewGoal({});
      setShowForm(false);
    }
  };

  const removeGoal = (id: string) => {
    setGoals(goals.filter(g => g.id !== id));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400 border-red-400';
      case 'medium': return 'text-yellow-400 border-yellow-400';
      case 'low': return 'text-green-400 border-green-400';
      default: return 'text-gray-400 border-gray-400';
    }
  };

  const handleComplete = () => {
    if (goals.length >= 3) {
      onComplete('goal-architect-complete');
    }
  };

  return (
    <div className="space-y-6">
      <div className="border-l-4 border-green-400 pl-4">
        <TypewriterText 
          text={`GOAL ARCHITECT MODULE
━━━━━━━━━━━━━━━━━━━━

Design your success framework with SMART goals.
Create at least 3 goals across different life areas.

Goals are dreams with deadlines.`}
          className="text-green-400 whitespace-pre-line"
          speed={20}
        />
      </div>

      <div className="flex justify-between items-center">
        <div className="text-amber-300">
          Current Goals: {goals.length} {goals.length >= 3 && '✓'}
        </div>
        <Button 
          onClick={() => setShowForm(!showForm)}
          className="bg-green-400/20 border border-green-400 text-green-400 hover:bg-green-400/30"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Goal
        </Button>
      </div>

      {showForm && (
        <Card className="bg-gray-900/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-green-400 flex items-center">
              <Target className="w-5 h-5 mr-2" />
              New Goal Definition
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Goal Title (e.g., 'Build a successful consulting business')"
              value={newGoal.title || ''}
              onChange={(e) => setNewGoal({...newGoal, title: e.target.value})}
              className="bg-black/50 border-gray-600 text-gray-300"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select onValueChange={(value: any) => setNewGoal({...newGoal, category: value})}>
                <SelectTrigger className="bg-black/50 border-gray-600 text-gray-300">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select onValueChange={(value: any) => setNewGoal({...newGoal, timeframe: value})}>
                <SelectTrigger className="bg-black/50 border-gray-600 text-gray-300">
                  <SelectValue placeholder="Timeframe" />
                </SelectTrigger>
                <SelectContent>
                  {timeframes.map(time => (
                    <SelectItem key={time} value={time}>{time}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select onValueChange={(value: any) => setNewGoal({...newGoal, priority: value as any})}>
                <SelectTrigger className="bg-black/50 border-gray-600 text-gray-300">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">High Priority</SelectItem>
                  <SelectItem value="medium">Medium Priority</SelectItem>
                  <SelectItem value="low">Low Priority</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Input
              placeholder="Brief description (optional)"
              value={newGoal.description || ''}
              onChange={(e) => setNewGoal({...newGoal, description: e.target.value})}
              className="bg-black/50 border-gray-600 text-gray-300"
            />

            <div className="flex justify-end space-x-2">
              <Button 
                variant="outline" 
                onClick={() => setShowForm(false)}
                className="border-gray-600 text-gray-400"
              >
                Cancel
              </Button>
              <Button 
                onClick={addGoal}
                className="bg-green-400/20 border border-green-400 text-green-400"
              >
                Add Goal
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {goals.map(goal => (
          <Card key={goal.id} className="bg-gray-900/30 border-gray-700">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <CardTitle className="text-amber-300 text-lg">{goal.title}</CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeGoal(goal.id)}
                  className="text-red-400 hover:bg-red-400/10"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Calendar className="w-4 h-4 text-blue-400" />
                <span className="text-blue-400">{goal.timeframe}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <TrendingUp className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400">{goal.category}</span>
              </div>
              <div className={`text-xs px-2 py-1 border rounded w-fit ${getPriorityColor(goal.priority)}`}>
                {goal.priority.toUpperCase()} PRIORITY
              </div>
              {goal.description && (
                <p className="text-gray-300 text-sm mt-2">{goal.description}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {goals.length >= 3 && (
        <div className="text-center">
          <Button 
            onClick={handleComplete}
            className="bg-green-400/20 border border-green-400 text-green-400 hover:bg-green-400/30"
          >
            Complete Goal Architecture →
          </Button>
        </div>
      )}

      {goals.length < 3 && (
        <div className="text-center text-gray-500 text-sm">
          Add {3 - goals.length} more goal{3 - goals.length !== 1 ? 's' : ''} to complete this module
        </div>
      )}
    </div>
  );
}