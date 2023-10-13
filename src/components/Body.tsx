import { useEffect, useState } from "react";
import { useAppState } from "../state/AppState";
import { QuestionType } from "../types";
import { ImmutableArray, ImmutableObject } from "@hookstate/core";
import { AnswerItem } from "./AnswerItem";

export const Body = () => {
  const { appState, questions } = useAppState();

  const [question, setQuestion] = useState<ImmutableObject<QuestionType>>();

  const [answers, setAnswers] = useState<string[]>();

  const [isAnswered, setIsAnswered] = useState(false);

  const getRandomQuestion = (arr: ImmutableArray<QuestionType>) => {
    return Math.round(Math.random() * arr.length);
  };

  const randomQuestion = getRandomQuestion(questions);

  useEffect(() => {
    if (!question) {
      const stateQuestions = questions[randomQuestion];

      setQuestion(stateQuestions);
    }
  }, [appState, question, questions, randomQuestion]);

  useEffect(() => {
    const setAvailableAnswers = () => {
      const answers: any = [];
      if (question) {
        question.incorrect_answers.map((el) => {
          answers.push(el);
        });
        answers.push(question.correct_answer);
      }
      setAnswers(answers);
    };
    // Set the answers of the question in the local state
    setAvailableAnswers();
  }, [question]);

  return (
    <div className="p-6 pb-0">
      <h1 className="mb-4 font-bold text-xl"> {question?.question}</h1>
      <div className="flex flex-col gap-3">
        {answers?.map((item, index) => {
          return (
            <AnswerItem
              key={index}
              text={item}
              isAnswered={isAnswered}
              isCorrect={item == question?.correct_answer}
              onClick={() => setIsAnswered(true)}
            />
          );
        })}
      </div>
    </div>
  );
};

{
  /* <div className="border-2 border-blue-100 bg-blue-50 rounded-md text-sm p-2"></div> */
}
