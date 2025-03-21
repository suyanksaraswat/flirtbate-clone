// Accordion.tsx
import React, { ReactNode, useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

import styles from "./accordion.module.css";

interface AccordionItemProps {
  title: string;
  content: ReactNode | string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordionItem}>
      <div
        className={`${styles.accordion} ${isOpen ? styles.active : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2>{title}</h2>

        {isOpen ? (
          <FaAngleDown className={styles.expandIcon} />
        ) : (
          <FaAngleUp className={styles.expandIcon} />
        )}
      </div>
      <div
        className={styles.panel}
        style={{ display: isOpen ? "block" : "none" }}
      >
        {content}
      </div>
    </div>
  );
};

interface Props {
  sections: { title: string; content: ReactNode | string }[];
}

const Accordion = ({ sections }: Props) => {
  return (
    <div className={styles.accordionContainer}>
      {sections.map((section, index) => (
        <AccordionItem
          key={index}
          title={section.title}
          content={section.content}
        />
      ))}
    </div>
  );
};

export default Accordion;
