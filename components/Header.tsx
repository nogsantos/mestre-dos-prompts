
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="p-4 sm:p-6 text-center border-b border-slate-700/50">
      <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-300">
        Mestre dos Prompts
      </h1>
      <p className="text-slate-400 mt-2 text-sm sm:text-base">
        Sua ferramenta de IA para criar prompts de alta performance.
      </p>
    </header>
  );
};

export default Header;
