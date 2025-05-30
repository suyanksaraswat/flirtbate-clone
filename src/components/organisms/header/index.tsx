"use client";

import Image from "next/image";
import styles from "./header.module.css";
import { GradientButton, OutlinedButton } from "@/components/atoms/button";
import Link from "next/link";
import Select from "@/components/atoms/select";
import { languagesList } from "@/utils/constants";
import { useState } from "react";
import { FaFontAwesomeFlag } from "react-icons/fa";
import Login from "@/components/molecules/login";
import SearchSidebar from "@/components/molecules/search-sidebar";

export default function Header() {
  const [lang, setLang] = useState<string | null>(languagesList[0]?.value);
  const [loginModal, setLoginModal] = useState(false);
  const [searchSidebarDrawer, setSearchSidebarDrawer] = useState(false);

  return (
    <>
      <SearchSidebar
        open={searchSidebarDrawer}
        onClose={() => setSearchSidebarDrawer(false)}
      />

      <Login open={loginModal} onClose={() => setLoginModal(false)} />

      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link href="/">
            <Image
              src="/logo.webp"
              alt=""
              width={182}
              height={36}
              className={styles.logo}
            />
          </Link>

          <OutlinedButton
            icon={<Image src="/search.svg" alt="" width={20} height={20} />}
            className={styles.searchBar}
            textClassName={styles.searchText}
            onClick={() => setSearchSidebarDrawer(true)}
          >
            Search
          </OutlinedButton>

          <Image
            src="/search.svg"
            alt=""
            width={20}
            height={20}
            className={styles.searchBarIcon}
            onClick={() => setSearchSidebarDrawer(true)}
          />

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
            icon={
              <Image src="/loginCircle.svg" alt="" width={20} height={20} />
            }
            onClick={() => setLoginModal(true)}
          >
            Login
          </OutlinedButton>

          <GradientButton className={styles.freeCallButton}>
            <Image src="/free-credit-icon.png" alt="" width={24} height={30} />
            Get 1 minute of Free Call
          </GradientButton>
        </div>
      </header>
    </>
  );
}
