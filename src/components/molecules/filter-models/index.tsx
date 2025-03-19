"use client";

import Select from "@/components/atoms/select";
import styles from "./filter-models.module.css";
import { useState } from "react";
import {
  regionsList,
  ageRangeList,
  genderList,
  creditsList,
} from "@/utils/constants";
import { GrLocation } from "react-icons/gr";
import { FilledButton } from "@/components/atoms/button";
import { FaCircle } from "react-icons/fa6";
import Image from "next/image";

export default function FilterModels() {
  const [region, setRegion] = useState<string | null>(null);
  const [age, setAge] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [credits, setCredits] = useState<string | null>(null);

  return (
    <div className={styles.filterContainer}>
      <FilledButton
        icon={<FaCircle className={styles.onlineIcon} />}
        variant="secondary"
      >
        Currently Online
      </FilledButton>

      <Select
        value={region}
        placeholder="Region"
        options={regionsList}
        onChange={(o) => setRegion(o?.value || null)}
        className={styles.regionSelect}
        icon={<GrLocation />}
      />

      <Select
        value={age}
        placeholder="Age Range"
        options={ageRangeList}
        onChange={(o) => setAge(o?.value || null)}
        className={styles.regionSelect}
      />

      <Select
        value={gender}
        placeholder="Gender"
        options={genderList}
        onChange={(o) => setGender(o?.value || null)}
        className={styles.regionSelect}
      />

      <Select
        icon={<Image src="/credit.webp" width={24} height={24} alt="" />}
        value={credits}
        placeholder="Credits"
        options={creditsList}
        onChange={(o) => setCredits(o?.value || null)}
        className={styles.regionSelect}
      />
    </div>
  );
}
