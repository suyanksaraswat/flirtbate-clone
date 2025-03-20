import Image from "next/image";
import styles from "./model-card.module.css";
import { OnlineStatus } from "@/components/atoms/online-status";
import { FaRegHeart } from "react-icons/fa6";

interface Props {
  coverImage: string;
  username: string;
  age: number;
  language: string;
  rate: string;
  highlyAvailable?: boolean;
}

export default function ModelCard({
  coverImage,
  username,
  age,
  language,
  rate,
  highlyAvailable,
}: Props) {
  return (
    <div className={styles.modelCard}>
      <div className={styles.imageContainer}>
        {highlyAvailable ? (
          <button className={styles.highlyAvailableContainer}>
            <Image
              src="/fire.gif"
              alt=""
              width={42}
              height={57}
              className={styles.highlyAvailableImg}
            />
            Highly available
          </button>
        ) : null}

        <FaRegHeart className={styles.likeIcon} />

        <img src={coverImage} alt="" className={styles.modelImage} />
      </div>

      <div className={styles.modelDetailsContainer}>
        <div className={styles.modelDetails}>
          <div className={styles.detailsContainer}>
            <h2 className={styles.modelUsername}>{username}</h2>
            <OnlineStatus />
          </div>

          <div className={styles.detailsContainer}>
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
