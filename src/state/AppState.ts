import { hookstate, useHookstate } from "@hookstate/core";

import QuestionsDb from "../db/index.json";
import { RootStateType } from "../types";

const appState = hookstate<RootStateType>({
  currentQuestion: 0,
  progress: 0,
  timer: 60,
  questions: QuestionsDb,
});

export function useAppState() {
  const state = useHookstate(appState);

  return {
    get appState() {
      return state.value;
    },
    get questions() {
      return  state.questions.value
    },
    getNextQuestion({ delimiter }: { delimiter: number }) {
      const currQuestionIndex = state.currentQuestion.value;
      const totalQuestions  = state.questions.value.length;

      if (currQuestionIndex !== 0 || currQuestionIndex !== QuestionsDb.length) {
        state.currentQuestion.set(delimiter > currQuestionIndex
          ? currQuestionIndex + 1
					: currQuestionIndex - 1);
				const percentage = (currQuestionIndex / totalQuestions) * 100
				state.progress.set(percentage)
      }
    },
  };
}
