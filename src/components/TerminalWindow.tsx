import React from 'react';
import { TerminalHeader } from './TerminalHeader';

interface TerminalWindowProps {
  children: React.ReactNode;
}

export function TerminalWindow({ children }: TerminalWindowProps) {
  return (
    <div className="relative mx-auto max-w-4xl bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-700">
      {/* Terminal window effect with subtle scanlines */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/[0.02] to-transparent pointer-events-none" />
      
      <TerminalHeader />
      
      <div className="relative bg-black/90 p-6 min-h-[600px] font-mono">
        {children}
      </div>
    </div>
  );
}