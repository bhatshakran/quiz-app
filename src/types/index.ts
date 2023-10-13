export interface RootStateType {
  currentQuestion: number;
  progress: number;
  timer: number;
  questions: QuestionType[]
}

export interface QuestionType {
  id: number;
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}
