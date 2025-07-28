import { JSX, ReactNode, useEffect, useRef, useState } from "react";
import { DropdownMenu, DropdownItem } from "./styled";

export interface DropdownOption {
  label: string;
  value: string;
}

export interface PropsInterface {
  options: DropdownOption[];
  action: (value: string) => void;
  variant?: "light" | "dark";
  children: ReactNode;
}

const Dropdown = (props: PropsInterface): JSX.Element => {
  const { options, action, variant = "light", children } = props;

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

 
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative", display: "inline-block" }}>
      <div onClick={() => setIsOpen((prev) => !prev)} style={{ display: "inline-block", cursor: "pointer" }}>
        {children}
      </div>
      {isOpen && (
        <DropdownMenu variant={variant}>
          {options.map((opt) => (
            <DropdownItem
              key={opt.value}
              onClick={() => {
                action(opt.value);
                setIsOpen(false);
              }}
            >
              {opt.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </div>
  );
};

export default Dropdown;
