import { Space_Mono } from "next/font/google";
import styles from "./main.module.css";

const space_mono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space",
  weight: "400",
});

export default function CommingSoon() {
  return (
    <div className={styles.soon}>
      <p>
        <span className="c">c</span>
        <span className="om">o</span>
        <span className="om">m</span>
        <span className="i">i</span>
        <span className="ngb">n</span>
        <span className="ngb">g </span>
        <span className={`ngb ${space_mono.className} it`}>b</span>
        <span className={`a ${space_mono.className} it`}>a</span>
        <span className={`cks ${space_mono.className} it`}>c</span>
        <span className={`cks ${space_mono.className} it`}>k </span>
        <span className="cks">s</span>
        <span className="ol">o</span>
        <span className="on">o</span>
        <span className="on">n</span>
        <span className="! italic">!</span>
      </p>
      <p className={space_mono.className}>we’re working on it</p>
      <p className={space_mono.className}>{"<3"}</p>
    </div>
  );
}
