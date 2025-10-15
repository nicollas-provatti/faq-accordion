import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IconPlus from "../assets/images/icon-plus.svg";
import IconMinus from "../assets/images/icon-minus.svg";

export default function Faq({ title, description, index }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="flex flex-col cursor-pointer" onClick={handleClick}>
      <div className="flex justify-between items-center pb-5 md:gap-10">
        <h2 className="text-xl font-bold text-purple-950 w-[61%] md:w-full transition-colors duration-150 hover:text-purple-400">
          {title}
        </h2>
        <button className="cursor-pointer">
          {isOpen ? (
            <img src={IconMinus} alt="Icon Minus" />
          ) : (
            <img src={IconPlus} alt="Icon Plus" />
          )}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut", type: "spring" }}
            className="text-purple-600"
          >
            <p>{description}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {index != 3 && <div className="mt-5 border border-purple-100"></div>}
    </div>
  );
}
