
import React from "react";
import { useFadeIn } from "@/lib/animations";

const Header = () => {
  const fadeIn = useFadeIn(100);
  
  return (
    <header className={`w-full py-6 px-8 bg-white/80 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 ${fadeIn}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="relative w-12 h-12 transform transition-transform duration-300 group-hover:scale-110">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 opacity-80 rounded-full animate-pulse"></div>
            <div className="absolute inset-1.5 bg-white dark:bg-black rounded-full flex items-center justify-center shadow-inner">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500 font-bold text-xl">AI</span>
            </div>
          </div>
          <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500 transform transition-all duration-300 group-hover:scale-105">AssistenteAI</h1>
        </div>
        
        <nav className="flex items-center space-x-8">
          <ul className="flex space-x-8">
            <li>
              <a 
                href="#" 
                className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 relative group"
              >
                
                <span className="relative z-10">Início</span>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-100 to-violet-100 rounded-lg opacity-0 transform scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></div>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 relative group"
              >
                <span className="relative z-10">Ferramentas</span>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-100 to-violet-100 rounded-lg opacity-0 transform scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></div>
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium transition-all duration-300 relative group"
              >
                <span className="relative z-10">Histórico</span>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-100 to-violet-100 rounded-lg opacity-0 transform scale-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100"></div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
