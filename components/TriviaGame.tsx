import React, { useState, useEffect } from 'react';
import { Question } from '../types';
import { QUESTION_DATABASE } from '../constants';
import { CheckCircle, XCircle, RefreshCw, ArrowRight } from 'lucide-react';

interface TriviaGameProps {
  onBack: () => void;
  triggerWrongFeedback: () => void;
}

const TriviaGame: React.FC<TriviaGameProps> = ({ onBack, triggerWrongFeedback }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // Initialize game with 10 random questions
  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const shuffled = [...QUESTION_DATABASE].sort(() => 0.5 - Math.random());
    setQuestions(shuffled.slice(0, 10));
    setCurrentIndex(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setGameOver(false);
  };

  const handleAnswerClick = (optionIndex: number) => {
    if (isAnswered) return;

    setSelectedAnswer(optionIndex);
    setIsAnswered(true);

    const isCorrect = optionIndex === questions[currentIndex].correctAnswer;

    if (isCorrect) {
      setScore(prev => prev + 1);
    } else {
      triggerWrongFeedback();
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setGameOver(true);
    }
  };

  if (questions.length === 0) return <div className="text-white text-center">Cargando misterios...</div>;

  if (gameOver) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-6 animate-pop">
        <h2 className="text-4xl font-mystery text-neon-green mb-4">¡Caso Cerrado!</h2>
        <div className="text-6xl font-bold text-white mb-4">
          {score} / {questions.length}
        </div>
        <p className="text-xl text-gray-300 max-w-md">
          {score === 10 ? "¡Eres un detective maestro como Doña Felicia!" : 
           score > 6 ? "¡Buen trabajo, Arthur estaría orgulloso!" : 
           "Necesitas leer más el libro. ¡Inténtalo de nuevo!"}
        </p>
        <div className="flex gap-4">
            <button 
                onClick={startNewGame}
                className="flex items-center gap-2 bg-mystery-blue hover:bg-mystery-accent text-white px-6 py-3 rounded-full font-bold transition-all"
            >
                <RefreshCw /> Nuevo Caso
            </button>
            <button 
                onClick={onBack}
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-full font-bold transition-all"
            >
                Menú Principal
            </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <div className="max-w-3xl mx-auto w-full">
      <div className="flex justify-between items-center mb-6">
        <span className="text-neon-green font-mystery text-xl">Pregunta {currentIndex + 1}/10</span>
        <span className="text-white font-bold bg-white/10 px-4 py-1 rounded-full">Puntos: {score}</span>
      </div>

      <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl mb-6 border border-white/20">
        <h3 className="text-2xl font-bold text-white mb-8">{currentQuestion.question}</h3>
        
        <div className="space-y-3">
          {currentQuestion.options.map((option, idx) => {
            let buttonClass = "w-full text-left p-4 rounded-xl border-2 transition-all font-semibold ";
            
            if (isAnswered) {
                if (idx === currentQuestion.correctAnswer) {
                    buttonClass += "bg-green-600 border-green-400 text-white";
                } else if (idx === selectedAnswer) {
                    buttonClass += "bg-red-600 border-red-400 text-white";
                } else {
                    buttonClass += "bg-gray-800/50 border-transparent text-gray-400";
                }
            } else {
                buttonClass += "bg-mystery-purple border-mystery-blue hover:border-mystery-accent text-white hover:bg-mystery-blue";
            }

            return (
              <button
                key={idx}
                onClick={() => handleAnswerClick(idx)}
                className={buttonClass}
                disabled={isAnswered}
              >
                <div className="flex justify-between items-center">
                    <span>{option}</span>
                    {isAnswered && idx === currentQuestion.correctAnswer && <CheckCircle className="text-white" />}
                    {isAnswered && idx === selectedAnswer && idx !== currentQuestion.correctAnswer && <XCircle className="text-white" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {isAnswered && (
        <div className="animate-pop bg-blue-900/50 border border-blue-400 p-4 rounded-xl mb-4 text-blue-100">
            <p><strong>Dato del detective:</strong> {currentQuestion.explanation}</p>
        </div>
      )}

      <div className="flex justify-between mt-8">
        <button onClick={onBack} className="text-gray-400 hover:text-white underline">Salir</button>
        {isAnswered && (
            <button 
                onClick={handleNext}
                className="flex items-center gap-2 bg-neon-green text-mystery-dark px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
            >
                Siguiente <ArrowRight />
            </button>
        )}
      </div>
    </div>
  );
};

export default TriviaGame;