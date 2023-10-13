
export const Footer = () => {
  return (
    <div className="flex items-center justify-between px-6 py-3">
      <div>
        <p>
          <span className="font-semibold"> 1 </span>
          of
          <span className="font-semibold"> 5 </span>
          Questions
        </p>
      </div>
      <button type="button" className="bg-primary text-white px-3 py-1 rounded-md">
        Next
      </button>
    </div>
  );
};
