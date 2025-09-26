import React, { JSX, useState } from 'react';
import { TypewriterText } from '../TypewriterText';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Plus, Calendar, MapPin, Target, Clock } from 'lucide-react';

interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  year: number;
  category: 'career' | 'personal' | 'financial' | 'health' | 'education';
  importance: 'low' | 'medium' | 'high';
}

interface TimelinePageProps {
  onComplete: (sectionId: string) => void;
}

export function TimelinePage({ onComplete }: TimelinePageProps) {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState<Partial<TimelineEvent>>({});
  const [currentAge] = useState(25); // This could be user input

  const yearOptions = [];
  for (let year = new Date().getFullYear(); year <= new Date().getFullYear() + 20; year++) {
    yearOptions.push(year);
  }

  const addEvent = () => {
    if (newEvent.title && newEvent.year && newEvent.category && newEvent.importance) {
      const event: TimelineEvent = {
        id: Date.now().toString(),
        title: newEvent.title!,
        description: newEvent.description || '',
        year: newEvent.year!,
        category: newEvent.category!,
        importance: newEvent.importance!
      };
      setEvents([...events, event].sort((a, b) => a.year - b.year));
      setNewEvent({});
      setShowForm(false);
    }
  };

  const removeEvent = (id: string) => {
    setEvents(events.filter(e => e.id !== id));
  };

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, JSX.Element> = {
      career: <Target className="w-4 h-4" />,
      personal: <MapPin className="w-4 h-4" />,
      financial: <Clock className="w-4 h-4" />,
      health: <Target className="w-4 h-4" />,
      education: <Calendar className="w-4 h-4" />
    };
    return icons[category] || <Calendar className="w-4 h-4" />;
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      career: 'text-blue-400 border-blue-400',
      personal: 'text-green-400 border-green-400',
      financial: 'text-yellow-400 border-yellow-400',
      health: 'text-red-400 border-red-400',
      education: 'text-purple-400 border-purple-400'
    };
    return colors[category] || 'text-gray-400 border-gray-400';
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'high': return 'bg-red-400/20 text-red-400';
      case 'medium': return 'bg-yellow-400/20 text-yellow-400';
      case 'low': return 'bg-green-400/20 text-green-400';
      default: return 'bg-gray-400/20 text-gray-400';
    }
  };

  const getAgeAtYear = (year: number) => {
    return currentAge + (year - new Date().getFullYear());
  };

  return (
    <div className="space-y-6">
      <div className="border-l-4 border-yellow-400 pl-4">
        <TypewriterText 
          text={`TIME MACHINE MODULE
━━━━━━━━━━━━━━━━━━

Map your journey to success with key milestones.
Plan the major events that will shape your path to 40.

"The future belongs to those who prepare for it today."`}
          className="text-yellow-400 whitespace-pre-line"
          speed={20}
        />
      </div>

      <div className="flex justify-between items-center">
        <div className="text-amber-300">
          Timeline Events: {events.length}
        </div>
        <Button 
          onClick={() => setShowForm(!showForm)}
          className="bg-yellow-400/20 border border-yellow-400 text-yellow-400 hover:bg-yellow-400/30"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Milestone
        </Button>
      </div>

      {showForm && (
        <Card className="bg-gray-900/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-yellow-400 flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              New Timeline Event
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Event title (e.g., 'Launch my own company')"
              value={newEvent.title || ''}
              onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
              className="bg-black/50 border-gray-600 text-gray-300"
            />
            
            <Textarea
              placeholder="Describe this milestone and why it's important..."
              value={newEvent.description || ''}
              onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
              className="bg-black/50 border-gray-600 text-gray-300"
              rows={3}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select onValueChange={(value: string) => setNewEvent({...newEvent, year: parseInt(value)})}>
                <SelectTrigger className="bg-black/50 border-gray-600 text-gray-300">
                  <SelectValue placeholder="Target Year" />
                </SelectTrigger>
                <SelectContent>
                  {yearOptions.map(year => (
                    <SelectItem key={year} value={year.toString()}>
                      {year} (Age {getAgeAtYear(year)})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select onValueChange={(value: any) => setNewEvent({...newEvent, category: value as any})}>
                <SelectTrigger className="bg-black/50 border-gray-600 text-gray-300">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="career">Career</SelectItem>
                  <SelectItem value="personal">Personal</SelectItem>
                  <SelectItem value="financial">Financial</SelectItem>
                  <SelectItem value="health">Health</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                </SelectContent>
              </Select>

              <Select onValueChange={(value: any) => setNewEvent({...newEvent, importance: value as any})}>
                <SelectTrigger className="bg-black/50 border-gray-600 text-gray-300">
                  <SelectValue placeholder="Importance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">High Priority</SelectItem>
                  <SelectItem value="medium">Medium Priority</SelectItem>
                  <SelectItem value="low">Low Priority</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-end space-x-2">
              <Button 
                variant="outline" 
                onClick={() => setShowForm(false)}
                className="border-gray-600 text-gray-400"
              >
                Cancel
              </Button>
              <Button 
                onClick={addEvent}
                className="bg-yellow-400/20 border border-yellow-400 text-yellow-400"
              >
                Add Event
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {events.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-amber-300 text-lg">Your Success Timeline</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-amber-400 to-orange-400" />
            
            {events.map((event, index) => (
              <div key={event.id} className="relative flex items-start space-x-6 pb-8">
                {/* Timeline dot */}
                <div className={`relative z-10 w-4 h-4 rounded-full border-2 ${getCategoryColor(event.category)} bg-black`} />
                
                {/* Event card */}
                <Card className="flex-1 bg-gray-900/30 border-gray-700">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center space-x-2">
                        <div className={getCategoryColor(event.category)}>
                          {getCategoryIcon(event.category)}
                        </div>
                        <CardTitle className="text-amber-300 text-lg">{event.title}</CardTitle>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`text-xs px-2 py-1 rounded ${getImportanceColor(event.importance)}`}>
                          {event.importance.toUpperCase()}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeEvent(event.id)}
                          className="text-red-400 hover:bg-red-400/10"
                        >
                          ×
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-2">
                      <span>{event.year}</span>
                      <span>•</span>
                      <span>Age {getAgeAtYear(event.year)}</span>
                      <span>•</span>
                      <span className="capitalize">{event.category}</span>
                    </div>
                    {event.description && (
                      <p className="text-gray-300">{event.description}</p>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      )}

      {events.length >= 5 && (
        <div className="text-center">
          <Button 
            onClick={() => onComplete('timeline-complete')}
            className="bg-yellow-400/20 border border-yellow-400 text-yellow-400 hover:bg-yellow-400/30"
          >
            Complete Timeline →
          </Button>
        </div>
      )}

      {events.length > 0 && events.length < 5 && (
        <div className="text-center text-gray-500 text-sm">
          Add {5 - events.length} more milestone{5 - events.length !== 1 ? 's' : ''} to complete this module
        </div>
      )}
    </div>
  );
}