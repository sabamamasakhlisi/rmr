import { Space_Mono } from "next/font/google";
import styles from "./main.module.css";

const space_mono = Space_Mono({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-space",
  weight: "400",
});

export default function CommingSoon() {
  return (
    <div className={styles.soon}>
      <p>{"hi there! currently under maintenance."}</p>
      <p>{"perhaps not tomorrow, so come back soon!"}</p>
      <p>･ ͜ʖ ･</p>
    </div>
  );
}
