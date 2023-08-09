import Arrow from "../assets/Arrow.svg";

interface AccordionProps {
  question: string;
  answer: string;
  visible: string;
  setVisible: (name: string) => void;
}

const Accordion = ({
  question,
  answer,
  visible,
  setVisible,
}: AccordionProps) => {
  const handleClick = (question: string) => {
    if (visible === question) {
      setVisible("");
    } else {
      setVisible(question);
    }
  };

  return (
    <div className="md:mt-[20px] mt-[19px] items-center space-y-[13px] md:space-y-[11px] pl-0 md:pl-[87px]">
      <div
        onClick={() => handleClick(question)}
        className="flex flex-row items-center gap-x-8 cursor-pointer justify-between md:w-[350px] w-[278px]"
      >
        <h2 className="text-[#4B4C5F] text-[13px] md:text-[14px]">
          {question}
        </h2>

        {visible === question ? (
          <span>
            <img src={Arrow} alt="" className="rotate-180 duration-500" />
          </span>
        ) : (
          <span>
            <img src={Arrow} alt="" />
          </span>
        )}
      </div>
      {visible === question ? (
        <p className="text-[#787887] text-[12px] leading-5 md:w-[319px] ">
          {answer}
        </p>
      ) : null}
      <hr className="h-[1px] bg-[#E8E8EA]" />
    </div>
  );
};

export default Accordion;
