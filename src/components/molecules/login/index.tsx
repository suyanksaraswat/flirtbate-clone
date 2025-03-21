import { MdClose } from "react-icons/md";
import styles from "./login.module.css";
import { FilledButton } from "@/components/atoms/button";
import Input from "@/components/atoms/input";
import { useState } from "react";
import Link from "next/link";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function Login({ open, onClose }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return open ? (
    <div className={styles.loginBackdrop} onClick={handleBackdropClick}>
      <div className={styles.loginModalContainer} onClick={(e) => e.stopPropagation()}>
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

            <div className={styles.forgotPasswordContainer}>
              <Link href={""}>Forgot Password?</Link>
            </div>

            <FilledButton className={styles.loginButton}>Login</FilledButton>
          </div>

          <div className={styles.loginFooterContainer}>
            <p>
              Login as Modal <Link href={""}>here</Link>
            </p>

            <p>
              Don&apos;t have an account? <b>Join for free now!</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
