import React from 'react';

export function TerminalHeader() {
  return (
    <div className="bg-gray-800 border-b border-gray-700 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      
      <div className="text-gray-300 text-sm font-mono">
        vision@future:~/success-blueprint$
      </div>
      
      <div className="w-16"></div> {/* Spacer for centering */}
    </div>
  );
}