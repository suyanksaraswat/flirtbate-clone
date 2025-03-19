import { ReactNode, useEffect, useRef, useState } from "react";
import styles from "./select.module.css";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { MdClear } from "react-icons/md";

interface Props {
  icon?: ReactNode;
  placeholder: string;
  value: string | null;
  onChange: (val: { label: string; value: string } | null) => void;
  options: { label: string; value: string }[];
  className?: string;
}

function Select({
  icon,
  placeholder,
  value,
  onChange,
  options,
  className,
}: Props) {
  const selectRef = useRef<HTMLDivElement>(null);

  const [showOptions, setShowOptions] = useState(false);

  const findValueInOpt = options?.find((o) => o.value === value);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={selectRef}
      className={`${styles.selectContainer} ${className ? className : ""}`}
    >
      <div
        className={`${styles.selectBox} ${
          showOptions ? styles.activeSelectBox : ""
        }`}
        onClick={() => setShowOptions((p) => !p)}
      >
        <div className={styles.selectBoxText}>
          {icon}
          <span>{findValueInOpt?.label || placeholder}</span>
        </div>

        <div className={styles.selectBoxText}>
          {findValueInOpt ? (
            <MdClear
              onClick={(e) => {
                e.stopPropagation();
                onChange(null);
              }}
            />
          ) : null}
          {showOptions ? <FaAngleUp /> : <FaAngleDown />}
        </div>
      </div>

      {showOptions ? (
        <div className={styles.optionContainer}>
          {options?.map((option, i) => (
            <div
              key={i}
              className={styles.option}
              onClick={() => {
                onChange(option);
                setShowOptions(false);
              }}
            >
              {option?.label}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Select;
