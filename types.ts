export enum GameScreen {
  MENU = 'MENU',
  TRIVIA = 'TRIVIA',
  ORDER_CASE = 'ORDER_CASE',
  GUESS_WHO = 'GUESS_WHO',
  WORD_SEARCH = 'WORD_SEARCH',
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct option
  explanation: string;
}

export interface CharacterProfile {
  id: string;
  name: string;
  traits: string[];
  description: string;
}

export interface CaseEvent {
  id: string;
  text: string;
  order: number;
}

export interface CaseScenario {
  title: string;
  events: CaseEvent[];
  description: string;
}