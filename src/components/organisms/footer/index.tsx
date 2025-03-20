import { FilledButton } from "@/components/atoms/button";
import styles from "./footer.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.headingContainer}>
          <h1 className={styles.title}>
            Ready to explore
            <br />
            uncharted pleasures?
          </h1>

          <h2 className={styles.subheading}>
            Have the best experience on the best platform out there!
          </h2>
        </div>

        <FilledButton>Sign up Now</FilledButton>

        <div className={styles.footerActionsContainer}>
          <div className={styles.logoContainer}>
            <Link href="/">
              <Image src="/logo.webp" alt="" width={182} height={36} />
            </Link>

            <div>
              <p className={`${styles.subtext} small-text`}>
                Instant connections, lasting memories
              </p>
            </div>
          </div>

          <div className={styles.linksContainer}>
            <div className={styles.linksColumn}>
              <div className={styles.linksTitle}>
                <p className="small-text">MENU</p>
              </div>

              <Link href={""} className={`${styles.linkText} small-text`}>
                Home
              </Link>

              <Link href={""} className={`${styles.linkText} small-text`}>
                FAQs
              </Link>

              <Link href={""} className={`${styles.linkText} small-text`}>
                Sign up
              </Link>

              <Link href={""} className={`${styles.linkText} small-text`}>
                LOGIN
              </Link>
            </div>

            <div className={styles.linksColumn}>
              <div className={styles.linksTitle}>
                <p className="small-text">RESOURCES</p>
              </div>

              <Link href={""} className={`${styles.linkText} small-text`}>
                Privacy statement
              </Link>

              <Link href={""} className={`${styles.linkText} small-text`}>
                Cookie statement
              </Link>

              <Link href={""} className={`${styles.linkText} small-text`}>
                Terms and conditions
              </Link>
            </div>

            <div className={styles.linksColumn}>
              <div className={styles.linksTitle}>
                <p className="small-text">CATEGORY</p>
              </div>

              <Link href={""} className={`${styles.linkText} small-text`}>
                Cam Live
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.rightsContainer}>
          <p className={`${styles.rightsContainerText} small-text`}>
            © 2025 Flirtbate, All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
