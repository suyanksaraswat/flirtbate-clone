"use client";

import Image from "next/image";
import styles from "./header.module.css";
import { GradientButton, OutlinedButton } from "@/components/atoms/button";
import Link from "next/link";
import Select from "@/components/atoms/select";
import { languagesList } from "@/utils/constants";
import { useState } from "react";
import { FaFontAwesomeFlag } from "react-icons/fa";

export default function Header() {
  const [lang, setLang] = useState<string | null>(languagesList[0]?.value);

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

        <Select
          value={lang}
          placeholder="Lang"
          options={languagesList}
          onChange={(o) => setLang(o?.value || null)}
          className={styles.langSelect}
          icon={<FaFontAwesomeFlag />}
          disableClear
        />

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
