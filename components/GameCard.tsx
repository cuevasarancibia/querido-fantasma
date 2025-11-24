import React from 'react';
import { LucideIcon } from 'lucide-react';

interface GameCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  color: string;
  onClick: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ title, icon: Icon, description, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`relative group overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-transparent hover:border-white/20 ${color} flex flex-col items-center justify-center text-center h-64 w-full shadow-lg`}
    >
      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
      <div className="z-10 bg-white/10 p-4 rounded-full mb-4 group-hover:animate-bounce">
        <Icon size={48} className="text-white" />
      </div>
      <h3 className="z-10 text-2xl font-mystery font-bold text-white mb-2">{title}</h3>
      <p className="z-10 text-white/80 font-sans text-sm">{description}</p>
    </button>
  );
};

export default GameCard;