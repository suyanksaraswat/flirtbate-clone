import { IoSearchSharp } from "react-icons/io5";
import styles from "./product-info.module.css";
import { FaUser, FaVideo } from "react-icons/fa6";
import { FilledButton } from "@/components/atoms/button";

const flow = [
  {
    icon: <IoSearchSharp />,
    title: "Sign up / Log in",
    subtitle:
      "Create your free account or log in. Begin exploring with just a few clicks, ensuring your privacy and security from the start.",
  },
  {
    icon: <FaUser />,
    title: "Choose your model",
    subtitle:
      "Whether you are seeking passionate encounters or bodily exploration our video call feature will serve all your fantasies.",
  },
  {
    icon: <FaVideo />,
    title: "Connect instantly",
    subtitle:
      "Start an engaging convo. through video call or chat. We offer high-quality, secure connections for your private interactions.",
  },
];

export default function ProductInfo() {
  return (
    <div className={styles.productInfo}>
      <div className={styles.productInfoContainer}>
        <div className={styles.headingContainer}>
          <h1>Seamless connections made simple</h1>

          <h2 className={styles.subheading}>
            Discover how easy it is to meet and interact with our models. Follow
            these
            <br />
            simple steps to start your journey.
          </h2>
        </div>

        <div className={styles.productInfoContent}>
          {flow?.map((item, index) => (
            <div key={index} className={styles.flowContainer}>
              <div className={styles.iconContainer}>
                <div className={styles.icon}>{item.icon}</div>
              </div>
              <h2 className={styles.title}>{item?.title}</h2>
              <p className={styles.subtitle}>{item?.subtitle}</p>
            </div>
          ))}
        </div>

        <FilledButton>Sign up Now</FilledButton>
      </div>
    </div>
  );
}
