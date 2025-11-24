import React, { useState, useEffect } from 'react';
import { WORD_POOL } from '../constants';
import { RefreshCw } from 'lucide-react';

interface WordSearchProps {
    onBack: () => void;
    triggerWrongFeedback: () => void;
}

const GRID_SIZE = 10;

const WordSearchGame: React.FC<WordSearchProps> = ({ onBack, triggerWrongFeedback }) => {
    const [grid, setGrid] = useState<string[][]>([]);
    const [wordsToFind, setWordsToFind] = useState<string[]>([]);
    const [foundWords, setFoundWords] = useState<string[]>([]);
    const [selectedCells, setSelectedCells] = useState<{r: number, c: number}[]>([]);
    const [foundCoordinates, setFoundCoordinates] = useState<{r:number, c:number}[]>([]);
    
    // Generate a new game on mount
    useEffect(() => {
        startNewGame();
    }, []);

    const startNewGame = () => {
        // 1. Select random words
        const shuffledWords = [...WORD_POOL].sort(() => 0.5 - Math.random());
        const selected = shuffledWords.slice(0, 6); // Take 6 words
        setWordsToFind(selected);
        setFoundWords([]);
        setFoundCoordinates([]);
        setSelectedCells([]);

        // 2. Initialize empty grid
        const newGrid = Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(''));

        // 3. Place words
        const placeWord = (word: string, gridToUpdate: string[][]) => {
            const directions = [
                { dr: 0, dc: 1 },  // Horizontal
                { dr: 1, dc: 0 },  // Vertical
                { dr: 1, dc: 1 }   // Diagonal
            ];

            // Try 50 times to place a word
            for (let attempt = 0; attempt < 50; attempt++) {
                const dir = directions[Math.floor(Math.random() * directions.length)];
                const row = Math.floor(Math.random() * GRID_SIZE);
                const col = Math.floor(Math.random() * GRID_SIZE);

                // Check bounds
                if (
                    row + dir.dr * (word.length - 1) >= GRID_SIZE || 
                    col + dir.dc * (word.length - 1) >= GRID_SIZE
                ) continue;

                // Check collisions
                let fits = true;
                for (let i = 0; i < word.length; i++) {
                    const charAtCell = gridToUpdate[row + dir.dr * i][col + dir.dc * i];
                    if (charAtCell !== '' && charAtCell !== word[i]) {
                        fits = false;
                        break;
                    }
                }

                if (fits) {
                    for (let i = 0; i < word.length; i++) {
                        gridToUpdate[row + dir.dr * i][col + dir.dc * i] = word[i];
                    }
                    return true;
                }
            }
            return false;
        };

        // Place selected words, if one fails replace it (simplified: just skip)
        const finalWords: string[] = [];
        selected.forEach(word => {
            if (placeWord(word, newGrid)) {
                finalWords.push(word);
            }
        });
        setWordsToFind(finalWords);

        // 4. Fill empty spaces
        const alphabet = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
        for (let r = 0; r < GRID_SIZE; r++) {
            for (let c = 0; c < GRID_SIZE; c++) {
                if (newGrid[r][c] === '') {
                    newGrid[r][c] = alphabet[Math.floor(Math.random() * alphabet.length)];
                }
            }
        }

        setGrid(newGrid);
    };

    const handleCellClick = (r: number, c: number) => {
         const newSelection = [...selectedCells, {r, c}];
         setSelectedCells(newSelection);
         
         const currentString = newSelection.map(cell => grid[cell.r][cell.c]).join('');
         
         if (wordsToFind.includes(currentString)) {
             if (!foundWords.includes(currentString)) {
                setFoundWords([...foundWords, currentString]);
                setFoundCoordinates([...foundCoordinates, ...newSelection]);
                setSelectedCells([]); 
             }
         } else if (currentString.length > 10) {
             // Reset if too long (max grid size)
             triggerWrongFeedback();
             setSelectedCells([]);
         } else {
            // Check if user is clicking randomly (not adjacent) - simplified check
            // If the last two clicks are not adjacent, reset (optional, but good for UX)
            if (newSelection.length > 1) {
                const last = newSelection[newSelection.length - 1];
                const prev = newSelection[newSelection.length - 2];
                const dist = Math.max(Math.abs(last.r - prev.r), Math.abs(last.c - prev.c));
                if (dist > 1) {
                    setSelectedCells([{r, c}]); // Start new selection
                }
            }
         }
    };

    const isGameComplete = foundWords.length > 0 && foundWords.length === wordsToFind.length;

    if (grid.length === 0) return <div className="text-white text-center">Generando sopa de letras...</div>;

    return (
        <div className="flex flex-col items-center animate-pop">
            <div className="flex justify-between w-full max-w-4xl items-center mb-4">
                <h2 className="text-3xl font-mystery text-neon-green">Sopa de Letras Misteriosa</h2>
                <button 
                    onClick={startNewGame} 
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 text-white transition-colors"
                    title="Nueva Sopa"
                >
                    <RefreshCw size={24} />
                </button>
            </div>
            
            {isGameComplete && (
                <div className="mb-6 bg-green-500/20 border border-green-500 p-4 rounded-xl text-center w-full max-w-4xl">
                    <h3 className="text-2xl font-bold text-white">¡Caso Resuelto!</h3>
                    <p className="text-green-200">Has encontrado todas las pistas.</p>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                {/* The Grid */}
                <div className="bg-white/10 p-2 md:p-4 rounded-xl border border-white/20 select-none flex justify-center">
                    <div className="grid grid-cols-10 gap-1 md:gap-2">
                        {grid.map((row, rIdx) => (
                            row.map((letter, cIdx) => {
                                const isSelected = selectedCells.some(cell => cell.r === rIdx && cell.c === cIdx);
                                const isFound = foundCoordinates.some(cell => cell.r === rIdx && cell.c === cIdx);
                                
                                return (
                                    <div 
                                        key={`${rIdx}-${cIdx}`}
                                        onClick={() => handleCellClick(rIdx, cIdx)}
                                        className={`
                                            w-7 h-7 md:w-9 md:h-9 flex items-center justify-center 
                                            rounded-md font-bold text-base md:text-lg cursor-pointer transition-all
                                            ${isSelected ? 'bg-mystery-accent text-white scale-110 shadow-lg z-10' : 
                                              isFound ? 'bg-green-600/50 text-green-200 border border-green-500/30' : 
                                              'bg-white/5 hover:bg-white/20 text-gray-300'}
                                        `}
                                    >
                                        {letter}
                                    </div>
                                )
                            })
                        ))}
                    </div>
                </div>

                {/* The List */}
                <div className="flex flex-col justify-center">
                    <div className="bg-mystery-blue p-6 rounded-xl border border-white/10 h-full">
                        <h3 className="text-xl font-bold mb-4 text-white border-b border-white/10 pb-2">Pistas a encontrar:</h3>
                        <div className="flex flex-wrap gap-2 content-start">
                            {wordsToFind.map(word => (
                                <span 
                                    key={word}
                                    className={`px-3 py-1 rounded-full text-sm font-semibold border transition-all duration-500 ${
                                        foundWords.includes(word) 
                                        ? 'bg-green-500/20 border-green-500 text-green-300 line-through opacity-50' 
                                        : 'bg-gray-800 border-gray-600 text-gray-400 hover:border-gray-400'
                                    }`}
                                >
                                    {word}
                                </span>
                            ))}
                        </div>
                        <div className="mt-auto pt-8 text-sm text-gray-400">
                            <p className="mb-2">Toca las letras en orden (horizontal, vertical o diagonal) para formar la palabra.</p>
                            <button 
                                onClick={() => setSelectedCells([])}
                                className="text-mystery-accent underline hover:text-white"
                            >
                                Limpiar selección actual
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <button onClick={onBack} className="mt-8 text-gray-400 hover:text-white underline">
                Volver al Menú
            </button>
        </div>
    );
};

export default WordSearchGame;