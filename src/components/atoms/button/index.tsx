import styles from "./button.module.css";

interface Props {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  textClassName?: string;
  variant?: "secondary";
  onClick?: () => void;
}

export const OutlinedButton = ({
  children,
  className,
  textClassName,
  icon,
  onClick,
}: Props) => {
  return (
    <button
      className={`${styles.outlinedButton} ${className ? className : null}`}
      onClick={onClick}
    >
      {icon}

      <p className={`${styles.buttonText} ${className ? textClassName : null}`}>
        {children}
      </p>
    </button>
  );
};

export const FilledButton = ({
  children,
  className,
  textClassName,
  icon,
  variant,
  onClick,
}: Props) => {
  return (
    <button
      className={`${
        variant === "secondary"
          ? styles.filledButtonSecondary
          : styles.filledButton
      } ${className ? className : null}`}
      onClick={onClick}
    >
      {icon}

      <p className={`${styles.buttonText} ${className ? textClassName : null}`}>
        {children}
      </p>
    </button>
  );
};

export const GradientButton = ({
  children,
  className,
  icon,
  onClick,
}: Props) => {
  return (
    <button
      className={`${styles.gradientButton} ${className ? className : null}`}
      onClick={onClick}
    >
      {icon}

      <p className={styles?.buttonText}>{children}</p>
    </button>
  );
};
