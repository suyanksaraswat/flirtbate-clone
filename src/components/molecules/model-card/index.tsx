import Image from "next/image";
import styles from "./model-card.module.css";

interface Props {
  coverImage: string;
  username: string;
  age: number;
  language: string;
  rate: string;
}

export default function ModelCard({
  coverImage,
  username,
  age,
  language,
  rate,
}: Props) {
  return (
    <div className={styles.modelCard}>
      <div>
        <img src={coverImage} alt="" className={styles.modelImage} />
      </div>

      <div className={styles.modelDetailsContainer}>
        <div className={styles.modelDetails}>
          <h2>{username}</h2>

          <div className={styles.creditsContainer}>
            <Image src="/credit.webp" width={22} height={22} alt="" />
            <p className="xsmall-text">{rate}</p>
          </div>
        </div>

        <div className={styles.modelDetails}>
          <p className={`${styles.modelDetailsMetadata} small-text`}>
            {age} | {language}
          </p>
        </div>
      </div>
    </div>
  );
}
