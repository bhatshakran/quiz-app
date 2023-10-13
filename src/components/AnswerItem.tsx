interface Props {
  text: string;
  isAnswered: boolean;
  isCorrect: boolean;
  onClick: VoidFunction;
}

export const AnswerItem = (props: Props) => {
  return (
    <div
      className="border-2 flex justify-between items-center border-red-100 bg-red-50 text-red-900 rounded-md text-sm p-2 cursor-pointer hover:shadow-md
       transition duration-200"
      onClick={props.onClick}
    >
      <p className="font-semibold">{props.text}</p>
      {props.isAnswered &&
        (props.isCorrect ? (
          <img className="w-6" src="/assets/icons/correct.svg" alt="" />
        ) : (
          <img className="w-6" src="/assets/icons/incorrect.svg" alt="" />
        ))}
    </div>
  );
};
