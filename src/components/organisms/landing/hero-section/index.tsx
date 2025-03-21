import Image from "next/image";
import styles from "./hero-section.module.css";
import { FilledButton } from "@/components/atoms/button";

export default function HeroSection() {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroSectionContainer}>
        <div className={styles.leftSection}>
          <div className={styles.leftSectionTextContainer}>
            <h1 className={styles.heading}>
              <span className={styles.highlightText}>#1 Adult Video</span> Chat
              Platform
              <Image
                src="https://flirtbate.com/images/home/line-vector.svg"
                alt=""
                className={styles.headingUnderlineImg}
                width={302}
                height={32}
              />
            </h1>

            <h2 className={styles.subHeading}>
              From Cam Sex Chats to Private 1v1 Video Calls -<br />
              Discover Pleasure Without Limits.
            </h2>
          </div>

          <div className={styles.actionContainer}>
            <FilledButton>Explore Models</FilledButton>
          </div>
        </div>

        <div className={styles.heroCoverContainer}>
          <Image
            src="/hero-cover.webp"
            alt=""
            width={462}
            height={451}
            className={styles.heroCover}
          />
        </div>
      </div>
    </div>
  );
}
