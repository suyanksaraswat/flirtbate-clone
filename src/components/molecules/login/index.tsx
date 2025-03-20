import { MdClose } from "react-icons/md";
import styles from "./login.module.css";
import { FilledButton } from "@/components/atoms/button";
import Input from "@/components/atoms/input";
import { useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function Login({ open, onClose }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return open ? (
    <div className={styles.loginBackdrop}>
      <div className={styles.loginModalContainer}>
        <div className={styles.leftSection}></div>

        <div className={styles.rightSection}>
          <div className={styles.closeIconContainer}>
            <MdClose className={styles.closeIcon} onClick={onClose} />
          </div>

          <div className={styles.title}>Log in to your account</div>

          <div className={styles.inputForm}>
            <Input
              label="Email"
              value={email}
              onChange={(val) => setEmail(val)}
              placeholder={"Email"}
            />

            <Input
              label="Password"
              value={password}
              onChange={(val) => setPassword(val)}
              placeholder={"Password"}
            />

            <FilledButton className={styles.loginButton}>Login</FilledButton>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
