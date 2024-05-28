"use client";
import Typewriter from "typewriter-effect";

import styles from "./components.module.css";

export default function MainTitle({
  firstSpan,
  secondSpan,
  thirdSpan,
  fourthSpan,
  fifthSpan,
  fifthSpanAddon,
}: {
  firstSpan: string;
  secondSpan: string;
  thirdSpan: string;
  fourthSpan: string;
  fifthSpan: string;
  fifthSpanAddon: string;
}) {
  return (
    <>
      <p className={styles.mainSubtitle} aria-label="short-summery">
        <span className="txt-gr">{firstSpan}</span>
        <span className={styles.subtitleDivider}>/</span>
        <span className="txt-yl">{secondSpan}</span>
        <span className={styles.subtitleDivider}>/</span>
        <span className="txt-pr">{thirdSpan}</span>
        <span className={styles.subtitleDivider}>/</span>
        <span className="txt-og">{fourthSpan}</span>
        <span className={styles.subtitleDivider}>/</span>
        <Typewriter
          options={{
            strings: [fifthSpan, fifthSpanAddon],
            autoStart: true,
            loop: true,
            cursor: "_",
            delay: 75,
            cursorClassName: "Typewriter__cursor txt-pn",
            wrapperClassName: "txt-pn",
          }}
          component={"span"}
        />
      </p>
    </>
  );
}
