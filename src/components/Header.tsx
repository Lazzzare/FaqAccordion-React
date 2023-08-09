import Mobile from "../assets/illustration-woman-online-mobile.svg";
import bgPatternMobile from "../assets/bg-pattern-mobile.svg";
import DesktopShadow from "../assets/DesktopShadow.svg";
import Desktop from "../assets/rame.svg";
import DesktopBox from "../assets/DesktopBox.svg";
import DesktopLine1 from "../assets/DesktopLine1.svg";
import DesktopLine2 from "../assets/DesktopLine2.png";
import Accordion from "./Accordion";
import { Fragment } from "react";
import { useState } from "react";
import { AccordionItemsArray } from "./AccordionItemsArray";

// const AccordionItemsArray = [
//   {
//     question: "How many team members can I invite?",
//     answer:
//       "No more than 2GB. All files in your account must fit your allotted storage space.",
//   },
//   {
//     question: "What is the maximum file upload size?",
//     answer:
//       "No more than 2GB. All files in your account must fit your allotted storage space.",
//   },
//   {
//     question: "How do I reset my password?",
//     answer:
//       "No more than 2GB. All files in your account must fit your allotted storage space.",
//   },
//   {
//     question: "Can I cancel my subscription?",
//     answer:
//       "No more than 2GB. All files in your account must fit your allotted storage space.",
//   },
//   {
//     question: "Do you provide additional support?",
//     answer:
//       "No more than 2GB. All files in your account must fit your allotted storage space.",
//   },
// ];

const Header = () => {
  const [visible, setVisible] = useState<string>("");
  return (
    <div className="px-6 md:px-0 pb-12 bg-white w-[327px] md:h-[509px] z-20  md:w-[920px] flex flex-col md:flex-row rounded-3xl">
      <div className="relative">
        {/* Mobile Images */}
        <img
          src={Mobile}
          alt="mobileImage"
          className="w-[237px] -mt-[106px] mb-[60px] m-auto md:hidden"
        />
        <img
          src={bgPatternMobile}
          alt="bgPatternMobile"
          className="absolute top-0 left-[19.5px] md:hidden m-auto items-center flex"
        />
        {/* Desktop Images */}
        <img
          src={DesktopBox}
          alt="DesktopBox"
          className="hidden md:block absolute left-[6px] mt-[178px] -ml-[100px]"
        />
        <img
          src={DesktopLine1}
          alt="DesktopLine1"
          className="hidden md:flex absolute top-0 left-0 -z-20"
        />
        <img
          src={DesktopLine2}
          alt="DesktopLine2"
          className="hidden md:flex absolute top-0 left-0 -z-20"
        />
        <img
          src={DesktopShadow}
          alt="DesktopShadow"
          className="hidden md:flex absolute -bottom-[104px] left-0 -z-10"
        />
        <img
          src={Desktop}
          alt="Rame"
          className="hidden md:flex w-full mt-[50px]"
        />
      </div>
      {/*  */}
      <div className="mt-0 md:mt-[65px] flex flex-col items-center md:items-start">
        <h1 className="uppercase text-center text-[#1E1F36] text-[32px] font-bold md:pl-[85px] md:mb-[27px]">
          Faq
        </h1>

        {AccordionItemsArray.map((accordionItem, id) => {
          return (
            <Fragment key={id}>
              <Accordion
                answer={accordionItem.answer}
                question={accordionItem.question}
                visible={visible}
                setVisible={setVisible}
              />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
