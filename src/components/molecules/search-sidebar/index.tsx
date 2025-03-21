import { MdClear } from "react-icons/md";
import styles from "./search-sidebar.module.css";
import { ageRangeList, creditsList, genderList } from "@/utils/constants";
import Accordion from "@/components/atoms/accordion";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const filters = [
  {
    label: "Credits",
    options: creditsList,
  },
  {
    label: "Age",
    options: ageRangeList,
  },
  {
    label: "Gender",
    options: genderList,
  },
];

export default function SearchSidebar({ open, onClose }: Props) {
  const [filterValue, setFilterValue] = useState<{
    [x: string]: string;
  } | null>(null);

  return open ? (
    <div className={styles.searchSidebarBackdrop}>
      <div className={styles.searchSidebarBg}>
        <div className={styles.searchSidebarHeader}>
          <h1 className={styles.title}>Search filter</h1>

          <MdClear className={styles.closeIcon} onClick={onClose} />
        </div>

        <div className={styles.filterContainer}>
          <Accordion
            sections={filters?.map((f) => ({
              title: f?.label,
              content: (
                <div className={styles.contentContainer}>
                  {f?.options?.map((o, i) => (
                    <div key={i} className={styles.radioButtonContainer}>
                      {filterValue?.[f.label] === o?.value ? (
                        <FaCheckCircle className={styles.radioActive} />
                      ) : (
                        <FaRegCircle
                          className={styles.radioInactive}
                          onClick={() =>
                            setFilterValue({ [f.label]: o?.value })
                          }
                        />
                      )}

                      <div className={styles.radioLabel}>{o?.label}</div>
                    </div>
                  ))}
                </div>
              ),
            }))}
          />
        </div>
      </div>
    </div>
  ) : null;
}
