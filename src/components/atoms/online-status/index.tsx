import styles from "./online-status.module.css";

interface Props {}

export const OnlineStatus = ({}: Props) => {
  return (
    <div className={styles.onlineStatusContainer}>
      <div className={styles.onlineStatus}></div>
    </div>
  );
};
