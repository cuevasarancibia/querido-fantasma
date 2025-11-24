import React, { useState, useEffect } from 'react';
import { CASE_SCENARIOS } from '../constants';
import { CaseEvent, CaseScenario } from '../types';
import { ArrowUp, ArrowDown, Check, Lightbulb, Lock } from 'lucide-react';

interface OrderGameProps {
  onBack: () => void;
  triggerWrongFeedback: () => void;
}

const OrderGame: React.FC<OrderGameProps> = ({ onBack, triggerWrongFeedback }) => {
  const [scenario, setScenario] = useState<CaseScenario | null>(null);
  const [events, setEvents] = useState<CaseEvent[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  
  // New State for Hints
  const [hintsLeft, setHintsLeft] = useState(2);
  const [lockedIndices, setLockedIndices] = useState<number[]>([]);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    // Pick a random scenario
    const randomScenario = CASE_SCENARIOS[Math.floor(Math.random() * CASE_SCENARIOS.length)];
    setScenario(randomScenario);

    // Shuffle events
    const shuffled = [...randomScenario.events].sort(() => 0.5 - Math.random());
    setEvents(shuffled);
    
    // Reset state
    setIsSuccess(false);
    setHintsLeft(2);
    setLockedIndices([]);
  };

  // Find the next available non-locked index in a direction
  const findTargetIndex = (currentIndex: number, direction: 'up' | 'down'): number => {
    if (direction === 'up') {
        for (let i = currentIndex - 1; i >= 0; i--) {
            if (!lockedIndices.includes(i)) return i;
        }
    } else {
        for (let i = currentIndex + 1; i < events.length; i++) {
            if (!lockedIndices.includes(i)) return i;
        }
    }
    return -1;
  };

  const moveItem = (index: number, direction: 'up' | 'down') => {
    if (isSuccess || lockedIndices.includes(index)) return;

    const targetIndex = findTargetIndex(index, direction);

    if (targetIndex !== -1) {
      const newEvents = [...events];
      // Swap with the target (skipping locked items in between)
      [newEvents[index], newEvents[targetIndex]] = [newEvents[targetIndex], newEvents[index]];
      setEvents(newEvents);
    }
  };

  const revealHint = () => {
    if (hintsLeft <= 0 || isSuccess) return;

    // Find items that are currently in the correct position but not yet locked
    const correctIndices: number[] = [];
    events.forEach((ev, idx) => {
        if (ev.order === idx + 1 && !lockedIndices.includes(idx)) {
            correctIndices.push(idx);
        }
    });

    if (correctIndices.length === 0) {
        // If no items are currently in correct place, trigger wrong feedback to indicate "Nothing is right yet!"
        triggerWrongFeedback();
    } else {
        // Lock these indices
        setLockedIndices([...lockedIndices, ...correctIndices]);
        setHintsLeft(prev => prev - 1);
    }
  };

  const checkOrder = () => {
    let correct = true;
    const newLocked: number[] = [];

    for (let i = 0; i < events.length; i++) {
        // The events have an 'order' property 1-6. Index is 0-5.
        // So event[i].order should be i + 1
        if (events[i].order !== i + 1) {
            correct = false;
        } else {
            newLocked.push(i);
        }
    }

    if (correct) {
        setIsSuccess(true);
        setLockedIndices(newLocked); // Lock everything on win
    } else {
        triggerWrongFeedback();
    }
  };

  if (!scenario) return <div className="text-center text-white">Cargando caso...</div>;

  return (
    <div className="max-w-2xl mx-auto w-full animate-pop">
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-3xl font-mystery text-neon-green mb-2 text-center">{scenario.title}</h2>
        <p className="text-gray-400 text-center">{scenario.description}</p>
      </div>

      <div className="space-y-3 relative">
        {events.map((event, index) => {
            const isLocked = lockedIndices.includes(index);
            const canMoveUp = !isLocked && findTargetIndex(index, 'up') !== -1;
            const canMoveDown = !isLocked && findTargetIndex(index, 'down') !== -1;

            return (
                <div 
                    key={event.id}
                    className={`
                        flex items-center gap-4 p-4 rounded-lg border transition-all duration-500
                        ${isSuccess ? 'border-green-500 bg-green-500/20' : 
                          isLocked ? 'border-neon-green/50 bg-neon-green/10' : 
                          'border-white/10 bg-white/5'}
                    `}
                >
                    <div className="flex flex-col gap-1">
                        {!isSuccess && !isLocked && (
                            <>
                                <button 
                                    onClick={() => moveItem(index, 'up')}
                                    disabled={!canMoveUp}
                                    className="p-1 hover:bg-white/20 rounded disabled:opacity-10 text-gray-300"
                                >
                                    <ArrowUp size={16} />
                                </button>
                                <button 
                                    onClick={() => moveItem(index, 'down')}
                                    disabled={!canMoveDown}
                                    className="p-1 hover:bg-white/20 rounded disabled:opacity-10 text-gray-300"
                                >
                                    <ArrowDown size={16} />
                                </button>
                            </>
                        )}
                        {isLocked && !isSuccess && <Lock size={20} className="text-neon-green my-auto" />}
                    </div>
                    <div className="flex-1 text-lg font-medium">
                        <span className="text-gray-500 mr-3">
                            {isSuccess ? `#${index + 1}` : "?"}
                        </span>
                        {event.text}
                    </div>
                    {isSuccess && <Check className="text-green-500" />}
                </div>
            );
        })}
      </div>

      <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4">
        {!isSuccess ? (
            <>
                <button 
                    onClick={revealHint}
                    disabled={hintsLeft === 0}
                    className={`
                        flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all border-2
                        ${hintsLeft > 0 
                            ? 'bg-yellow-600/20 border-yellow-500 text-yellow-400 hover:bg-yellow-600/40' 
                            : 'bg-gray-800 border-gray-700 text-gray-600 cursor-not-allowed'}
                    `}
                >
                    <Lightbulb size={20} />
                    Revelar Correctas ({hintsLeft})
                </button>
                <button 
                    onClick={checkOrder}
                    className="bg-mystery-accent hover:bg-red-500 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-red-500/50"
                >
                    Verificar Orden
                </button>
            </>
        ) : (
            <div className="animate-pop text-green-400 font-bold text-xl flex flex-col items-center p-4 bg-green-900/30 rounded-xl border border-green-500">
                <span>¡Excelente deducción!</span>
                <span className="text-sm font-normal text-green-200 mt-1">Has resuelto este caso perfectamente.</span>
                <div className="flex gap-4 mt-4">
                     <button onClick={startNewGame} className="text-white bg-green-700 hover:bg-green-600 px-4 py-2 rounded-lg text-sm">
                        Otro Caso
                    </button>
                    <button onClick={onBack} className="text-white underline text-sm">
                        Volver al Menú
                    </button>
                </div>
            </div>
        )}
      </div>
       
       {!isSuccess && (
        <div className="text-center mt-6">
            <button onClick={onBack} className="text-gray-500 hover:text-gray-300 underline">Salir del caso</button>
        </div>
       )}
    </div>
  );
};

export default OrderGame;