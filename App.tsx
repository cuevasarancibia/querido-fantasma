import React, { useState } from 'react';
import { GameScreen } from './types';
import GameCard from './components/GameCard';
import TriviaGame from './components/TriviaGame';
import OrderGame from './components/OrderGame';
import WordSearchGame from './components/WordSearchGame';
import GuessWhoGame from './components/GuessWhoGame';
import { Brain, Search, ListOrdered, User } from 'lucide-react';

function App() {
  const [currentScreen, setCurrentScreen] = useState<GameScreen>(GameScreen.MENU);
  const [feedbackState, setFeedbackState] = useState<'none' | 'wrong'>('none');

  const triggerWrongFeedback = () => {
    setFeedbackState('wrong');
    setTimeout(() => {
      setFeedbackState('none');
    }, 500); // Flash duration
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case GameScreen.MENU:
        return (
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-mystery text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-blue-400 mb-4 drop-shadow-lg">
                Querido Fantasma
              </h1>
              <p className="text-xl text-gray-400 font-sans">Agencia de Detectives y Misterios</p>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
              <GameCard 
                title="Trivia del Fantasma" 
                description="Responde preguntas sobre los casos de Doña Felicia."
                icon={Brain}
                color="bg-gradient-to-br from-purple-600 to-blue-900"
                onClick={() => setCurrentScreen(GameScreen.TRIVIA)}
              />
              <GameCard 
                title="Ordenar el Caso" 
                description="Pon en orden los sucesos del robo de los billetes."
                icon={ListOrdered}
                color="bg-gradient-to-br from-teal-600 to-green-900"
                onClick={() => setCurrentScreen(GameScreen.ORDER_CASE)}
              />
              <GameCard 
                title="Sopa de Letras" 
                description="Encuentra las palabras ocultas del libro."
                icon={Search}
                color="bg-gradient-to-br from-pink-600 to-red-900"
                onClick={() => setCurrentScreen(GameScreen.WORD_SEARCH)}
              />
              <GameCard 
                title="Adivina Quién" 
                description="Descubre el personaje basándote en pistas."
                icon={User}
                color="bg-gradient-to-br from-orange-500 to-yellow-800"
                onClick={() => setCurrentScreen(GameScreen.GUESS_WHO)}
              />
            </div>

            <div className="mt-16 text-center text-gray-500 text-sm">
                <p>Basado en el libro de Jacqueline Balcells y Ana María Güiraldes</p>
            </div>
          </div>
        );
      
      case GameScreen.TRIVIA:
        return <TriviaGame onBack={() => setCurrentScreen(GameScreen.MENU)} triggerWrongFeedback={triggerWrongFeedback} />;
      
      case GameScreen.ORDER_CASE:
        return <OrderGame onBack={() => setCurrentScreen(GameScreen.MENU)} triggerWrongFeedback={triggerWrongFeedback} />;

      case GameScreen.WORD_SEARCH:
        return <WordSearchGame onBack={() => setCurrentScreen(GameScreen.MENU)} triggerWrongFeedback={triggerWrongFeedback} />;

      case GameScreen.GUESS_WHO:
        return <GuessWhoGame onBack={() => setCurrentScreen(GameScreen.MENU)} triggerWrongFeedback={triggerWrongFeedback} />;
        
      default:
        return <div>Error</div>;
    }
  };

  return (
    <div className="min-h-screen bg-mystery-dark text-white font-sans selection:bg-neon-green selection:text-black overflow-x-hidden relative">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      {/* Wrong Answer Feedback Overlay */}
      <div 
        className={`fixed inset-0 bg-red-600 z-50 pointer-events-none transition-opacity duration-200 ${feedbackState === 'wrong' ? 'opacity-40' : 'opacity-0'}`}
      />

      <div className={`relative z-10 p-6 md:p-12 min-h-screen flex flex-col items-center justify-center ${feedbackState === 'wrong' ? 'animate-shake' : ''}`}>
        {renderScreen()}
      </div>
    </div>
  );
}

export default App;