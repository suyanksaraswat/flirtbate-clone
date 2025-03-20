"use client";

import { ReactNode } from "react";
import styles from "./input.module.css";

interface Props {
  label?: string;
  icon?: ReactNode;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
}

function Input({ label, icon, placeholder, value, onChange }: Props) {
  return (
    <div>
      {label ? (
        <div className={styles.labelContainer}>
          <p className={styles.labelText}>{label} </p>
        </div>
      ) : null}

      <div className={`${styles.inputBox} `}>
        <div className={styles.inputBoxText}>
          {icon}
          <input
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={styles.inputField}
          />
        </div>
      </div>
    </div>
  );
}

export default Input;
