import FilterModels from "@/components/molecules/filter-models";
import styles from "./explore-models.module.css";
import { modelsList } from "@/utils/constants";
import ModelCard from "@/components/molecules/model-card";

export default function ExploreModels() {
  return (
    <div className={styles.exploreModels}>
      <div className={styles.exploreModelsContainer}>
        <div className={styles.headingContainer}>
          <h1>
            Explore your choices from the <br />
            world of diverse beauty and charm
          </h1>

          <h2>Select the companion who aligns with your desires.</h2>
        </div>

        <div className={styles.filterContainer}>
          <FilterModels />
        </div>

        <div className={styles.modelsContainer}>
          {modelsList?.map((model, i) => (
            <ModelCard key={i} {...model} />
          ))}
        </div>
      </div>
    </div>
  );
}
