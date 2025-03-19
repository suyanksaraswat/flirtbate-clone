import Image from "next/image";
import styles from "./header.module.css";
import { GradientButton, OutlinedButton } from "@/components/atoms/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link href="/">
          <Image src="/logo.webp" alt="" width={182} height={36} />
        </Link>

        <OutlinedButton
          icon={<Image src="/search.svg" alt="" width={20} height={20} />}
          className={styles.searchBar}
          textClassName={styles.searchText}
        >
          Search
        </OutlinedButton>

        <OutlinedButton
          icon={<Image src="/loginCircle.svg" alt="" width={20} height={20} />}
        >
          Login
        </OutlinedButton>

        <OutlinedButton
          icon={<Image src="/loginCircle.svg" alt="" width={20} height={20} />}
        >
          Login
        </OutlinedButton>

        <GradientButton>
          <Image src="/free-credit-icon.png" alt="" width={24} height={30} />
          Get 1 minute of Free Call
        </GradientButton>
      </div>
    </header>
  );
}
