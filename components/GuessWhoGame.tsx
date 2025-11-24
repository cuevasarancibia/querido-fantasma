import React, { useState, useEffect } from 'react';
import { CHARACTER_PROFILES } from '../constants';
import { User, HelpCircle } from 'lucide-react';

interface GuessWhoProps {
  onBack: () => void;
  triggerWrongFeedback: () => void;
}

const GuessWhoGame: React.FC<GuessWhoProps> = ({ onBack, triggerWrongFeedback }) => {
    const [targetChar, setTargetChar] = useState(CHARACTER_PROFILES[0]);
    const [revealedTraits, setRevealedTraits] = useState<number[]>([]);
    const [options, setOptions] = useState<typeof CHARACTER_PROFILES>([]);
    const [gameWon, setGameWon] = useState(false);

    useEffect(() => {
        newGame();
    }, []);

    const newGame = () => {
        const randomChar = CHARACTER_PROFILES[Math.floor(Math.random() * CHARACTER_PROFILES.length)];
        setTargetChar(randomChar);
        setRevealedTraits([0]); // Reveal first trait initially
        setOptions(CHARACTER_PROFILES); // All chars are options
        setGameWon(false);
    };

    const revealNextTrait = () => {
        if (revealedTraits.length < targetChar.traits.length) {
            setRevealedTraits([...revealedTraits, revealedTraits.length]);
        }
    };

    const handleGuess = (id: string) => {
        if (id === targetChar.id) {
            setGameWon(true);
        } else {
            triggerWrongFeedback();
        }
    };

    return (
        <div className="flex flex-col items-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-mystery text-neon-green mb-8">Adivina el Personaje</h2>

            <div className="grid md:grid-cols-2 gap-8 w-full">
                {/* Clues Card */}
                <div className="bg-mystery-blue p-6 rounded-2xl border-2 border-dashed border-white/20">
                    <div className="flex items-center gap-3 mb-4">
                        <HelpCircle className="text-mystery-accent" size={32} />
                        <h3 className="text-2xl font-bold">Pistas</h3>
                    </div>
                    
                    <div className="space-y-3">
                        {targetChar.traits.map((trait, idx) => (
                            <div 
                                key={idx}
                                className={`p-3 rounded-lg transition-all duration-500 ${
                                    revealedTraits.includes(idx) 
                                    ? 'bg-white/10 text-white translate-x-0 opacity-100' 
                                    : 'bg-black/20 text-transparent blur-sm'
                                }`}
                            >
                                {revealedTraits.includes(idx) ? trait : "?????????"}
                            </div>
                        ))}
                    </div>

                    {!gameWon && revealedTraits.length < targetChar.traits.length && (
                        <button 
                            onClick={revealNextTrait}
                            className="mt-6 w-full py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-semibold text-gray-200"
                        >
                            Revelar siguiente pista
                        </button>
                    )}
                </div>

                {/* Options Grid */}
                <div className="grid grid-cols-1 gap-3">
                    {gameWon ? (
                        <div className="bg-green-600/20 border border-green-500 p-8 rounded-2xl text-center animate-pop">
                            <User size={64} className="mx-auto mb-4 text-green-400" />
                            <h3 className="text-3xl font-bold text-white mb-2">{targetChar.name}</h3>
                            <p className="text-green-200">{targetChar.description}</p>
                            <button 
                                onClick={newGame}
                                className="mt-6 bg-white text-green-900 px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform"
                            >
                                Jugar otra vez
                            </button>
                        </div>
                    ) : (
                        options.map(char => (
                            <button
                                key={char.id}
                                onClick={() => handleGuess(char.id)}
                                className="bg-white/5 hover:bg-mystery-accent/20 hover:border-mystery-accent border border-white/10 p-4 rounded-xl text-left transition-all flex items-center gap-4 group"
                            >
                                <div className="bg-black/30 p-2 rounded-full group-hover:bg-mystery-accent group-hover:text-white transition-colors">
                                    <User size={20} />
                                </div>
                                <span className="font-bold text-lg">{char.name}</span>
                            </button>
                        ))
                    )}
                </div>
            </div>

            <button onClick={onBack} className="mt-12 text-gray-500 hover:text-gray-300">
                Volver al menú
            </button>
        </div>
    );
};

export default GuessWhoGame;