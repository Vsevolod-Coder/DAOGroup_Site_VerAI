import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import logo from "../assets/Images/standart-logo.png"

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Animated Logo */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
          <img 
            src={logo} 
            alt="DAOGroup Logo" 
            className="relative h-16 w-auto mx-auto animate-pulse"
          />
        </div>

        {/* Spinner */}
        <div className="relative w-16 h-16 mx-auto">
          {/* Outer Ring */}
          <div className="absolute inset-0 border-4 border-slate-200 border-t-blue-500 rounded-full animate-spin"></div>
          
          {/* Inner Ring */}
          <div className="absolute top-2 left-2 right-2 bottom-2 border-4 border-transparent border-t-purple-500 rounded-full animate-spin-reverse"></div>
          
          {/* Center Dot */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <p className="text-lg font-medium text-slate-700 animate-pulse">
            Загрузка...
          </p>
          <div className="flex justify-center space-x-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full animate-progress-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;