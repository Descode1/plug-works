import { JSX, useState } from "react";
import {
  AccordionContainer,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
} from "./styled";

export interface AccordionData {
  title: string;
  content: string | React.ReactNode;
}

export interface PropsInterface {
  items: AccordionData[];
  allowMultipleOpen: boolean;
}

const Accordion = (props:PropsInterface): JSX.Element => {
  const {items,allowMultipleOpen} = props;
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const toggleItem = (index: number) => {
    if (allowMultipleOpen) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev[0] === index ? [] : [index]));
    }
  };
  return (
    <AccordionContainer>
      {items.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionHeader onClick={() => toggleItem(index)}>
            {item.title}
          </AccordionHeader>
          {openIndexes.includes(index) && (
            <AccordionContent>{item.content}</AccordionContent>
          )}
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};
export default Accordion;
