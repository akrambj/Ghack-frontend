import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function FAQElement(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${
        isOpen
          ? "px-[4vw] w-[80vw] border-2 py-[4vh] border-[#66DC90] rounded-[8px] flex flex-col gap-[2vh] bg-[#66DC90] text-white shadow-[0_35px_60px_15px_rgba(43, 45, 66, 1)] transition duration-700"
          : "px-[4vw] w-[80vw] border-2 py-[3vh] border-[#66DC90] rounded-[8px] flex flex-col gap-[2vh] transition duration-700 text-Typo"
      }`}
    >
      <button
        onClick={toggleOpen}
        className="flex items-center justify-between text-[1.3rem] md:text-[1.6rem]"
      >
        {props.question} {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && <div className="md:text-[1.2rem]">{props.answer}</div>}
    </div>
  );
}

function FAQ() {
  const faqs = [
    {
      id: 1,
      question: "What is hybrid work?",
      answer:
        "Hybrid work refers to a flexible work model that allows employees to split their time between working remotely and working from a traditional office setting. It combines the benefits of remote work with the advantages of in-person collaboration.",
    },
    {
      id: 2,
      question: "What are the benefits of hybrid work?",
      answer:
        "Hybrid work offers several benefits, including increased flexibility for employees, reduced commuting time and costs, improved work-life balance, and opportunities for both individual focus and team collaboration.",
    },
    {
      id: 3,
      question: "How can companies implement hybrid work effectively?",
      answer:
        "To implement hybrid work effectively, companies should establish clear communication channels, provide necessary technological infrastructure for remote work, establish guidelines for in-person and virtual meetings, and foster a culture of trust and accountability.",
    },
    {
      id: 4,
      question: "What challenges might arise with hybrid work?",
      answer:
        "Some challenges of hybrid work include maintaining team cohesion and collaboration, ensuring equitable treatment of remote and in-office employees, addressing potential feelings of isolation among remote workers, and managing cybersecurity risks associated with remote access to company systems.",
    },
  ];

  return (
    <div className="flex flex-col gap-[4vh] items-center">
      <div className="flex flex-col gap-[4vh]">
        {faqs.map((faq) => (
          <FAQElement
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
}

export default FAQ;
