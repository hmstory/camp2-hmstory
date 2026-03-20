export interface QuizQuestion {
  id: string;
  category: "vocabulary" | "phrasal_verb" | "sentence";
  question: string;
  options: string[];
  correctIndex: number;
  meaning: string;
  example: string;
}

export interface QuizSet {
  id: string;
  title: string;
  book: string;
  chapter: string;
  pages: string;
  questions: QuizQuestion[];
}
