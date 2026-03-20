import { QuizSet } from "./types";
import ch3 from "./make-your-job-a-calling-ch3";

// 새 퀴즈셋을 추가하려면 여기에 import하고 배열에 넣으면 됩니다
const quizSets: QuizSet[] = [ch3];

export default quizSets;
export type { QuizSet, QuizQuestion } from "./types";
