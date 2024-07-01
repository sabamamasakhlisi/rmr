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
  weight: "400",
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
      { y: 0, opacity: 0 },
      {
        opacity: 1,
        scale: 1.5,
        x: 0,
        y: 0,
        duration: 1.5,
        delay: 1,
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

    gsap.fromTo(
      littleContact.current,
      { opacity: 0, scale: 0, x: 600, y: 100 },
      {
        opacity: 1,
        scale: 1.5,
        x: 600,
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

    gsap.to(littleContact.current, {
      x: 575,
      duration: 1.5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1.5,
    });

    gsap.to(heartRef.current, {
      y: -5,
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
  const littleContact = useRef(null);
  const linksRefTwo = useRef(null);
  const linksRefOne = useRef(null);

  // useEffect(() => {
  //   const timeline = gsap.timeline({
  //     defaults: { duration: 0.8, ease: "bounce.out" }, // Adjusted duration and ease for a more pronounced jump
  //   });

  //   // Stagger the animation for each element, creating a cascading effect
  //   timeline.fromTo(
  //     [heartRef.current, headerRef.current, linksRef.current, titleRef.current],
  //     { y: 100, opacity: 0 },
  //     { y: 0, opacity: 1 }
  //   );
  //   gsap.fromTo(
  //     littleStar.current,
  //     { opacity: 0, scale: 0, x: 0, y: 0, x: -600, y: 100 },
  //     {
  //       opacity: 1,
  //       scale: 1.5,
  //       x: -600,
  //       y: 100,
  //       duration: 1.5,
  //       ease: "elastic.out(2, 0.5)",
  //     }
  //   );
  //   gsap.fromTo(
  //     littleContact.current,
  //     { opacity: 0, scale: 0, x: 600, y: 100 },
  //     {
  //       opacity: 1,
  //       scale: 1.5,
  //       x: 600,
  //       y: 100,
  //       duration: 1.5,
  //       ease: "elastic.out(2, 0.5)",
  //     }
  //   );
  // }, []);

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
        ref={littleContact}
        className={styles.littleContact}
        src="/message.ico"
        alt="little-contact"
        width={55}
        height={55}
      />
      <div
        className={`${styles.contactMail} ${space_mono.className}`}
        ref={headerRef}
      >
        <a href="mailto:rosamtrbls[@]gmail.com">
          rosamtrbls<span className={styles.brac}>{"["}</span>@
          <span className={styles.brac}>{"]"}</span>
          gmail.com
        </a>
      </div>
      <div className="social flex justify-center items-center font-64px">
        <a
          className={`txt-yl link-to ${space_mono.className}`}
          href="https://www.behance.net/rosevalle"
          target="_blank"
          ref={linksRefOne}
        >
          BEHANCE
        </a>
        <Image
          ref={heartRef}
          className={styles.heart}
          src="/heart.ico"
          alt="heart"
          width={55}
          height={55}
        />
        <a
          className={`txt-yl link-to ${space_mono.className}`}
          href="https://www.linkedin.com/in/rosa-mota-robles/"
          target="_blank"
          ref={linksRefTwo}
        >
          LINKEDIN
        </a>
      </div>
      <div ref={linksRef} className="font-64px txt-yl">
        <a
          className={`link-to ${space_mono.className}`}
          href="https://www.instagram.com/rosamtrbls/"
          target="_blank"
        >
          INSTAGRAM
        </a>
      </div>
    </section>
  );
}
