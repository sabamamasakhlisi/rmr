"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Metadata } from "next";
import Image from "next/image";
import styles from "./contact.module.css";
import { Space_Mono } from "next/font/google";
import { useLocale } from "next-intl";
import { Locales } from "@/_lib/types";

const space_mono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["400", "700"],
});

export default function Contact() {
  const locale = useLocale();

  useEffect(() => {
    gsap.fromTo(
      [titleRef.current, headerRef.current],
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    gsap.fromTo(
      linksRef.current,
      { y: 400, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      linksRefOne.current,
      { x: -400, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      linksRefTwo.current,
      { x: 400, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, delay: 1, ease: "power2.out" }
    );

    gsap.fromTo(
      heartRef.current,
      { opacity: 0, scale: 0, x: 575, y: 100 },
      {
        opacity: 1,
        scale: 1.5,
        x: 575,
        y: 100,
        duration: 1.5,
        ease: "elastic.out(3, 1)",
      }
    );

    gsap.fromTo(
      littleStar.current,
      { opacity: 0, scale: 0, x: -600, y: 100 },
      {
        opacity: 1,
        scale: 1.5,
        x: -600,
        y: 100,
        duration: 1.5,
        ease: "elastic.out(2, 0.5)",
      }
    );

    gsap.to(littleStar.current, {
      y: 75,
      duration: 1.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1.5,
    });

    gsap.to(heartRef.current, {
      y: 95,
      x: 575,
      duration: 1.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1.5,
    });
  }, []);

  const heartRef = useRef(null);
  const linksRef = useRef(null);
  const titleRef = useRef(null);
  const headerRef = useRef(null);
  const littleStar = useRef(null);
  const linksRefTwo = useRef(null);
  const linksRefOne = useRef(null);

  return (
    <section className={styles.contactSection}>
      <Image
        ref={littleStar}
        className={styles.littleStar}
        src="/star.ico"
        alt="little-star"
        width={55}
        height={55}
      />
      <div ref={titleRef} className={`txt-og ${styles.txtTouch}`}>
        {locale === Locales.EN ? "let's get in touch!" : "¿hablamos?"}
      </div>
      <Image
        ref={heartRef}
        className={styles.littleContact}
        src="/heart.ico"
        alt="heart"
        width={55}
        height={55}
      />
      <div
        className={`${styles.contactMail} ${space_mono.className} txt-pr bg-drk-purple`}
      >
        <a>
          rosamtrbls<span className={styles.brac}>{"["}</span>@
          <span className={styles.brac}>{"]"}</span>
          gmail.com
        </a>
      </div>

      <section
        className={`${styles.mainSection} ${space_mono.className} main-section flex-1 flex`}
        aria-label="Main Content"
      >
        <a
          className="bg-bw txt-dark-bw "
          href="https://www.behance.net/rosevalle"
          target="_blank"
        >
          <div aria-label={"BEHANCE"}>{"BEHANCE"}</div>
        </a>
        <a
          className="bg-drk-gr txt-gr"
          href="https://www.linkedin.com/in/rosa-mota-robles/"
          target="_blank"
        >
          <div aria-label={"LINKEDIN"}>{"LINKEDIN"}</div>
        </a>
        <a
          className="bg-drk-pr txt-pn "
          href="https://www.instagram.com/rosamtrbls/"
          target="_blank"
        >
          <div aria-label={"INSTAGRAM"}>{"INSTAGRAM"}</div>
        </a>
      </section>
    </section>
  );
}
