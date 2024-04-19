import { Metadata } from "next";
import styles from "./work.module.css";

export const metadata: Metadata = {
  title: "Rosa Mota Robles | Graphic Designer",
  description:
    "MY NAME IS ROSA.I’M A GRAPHIC DESIGNER WITH A MASTERS IN CULTURAL INTELLIGENCE AND INNOVATIONS",
};

export default function About() {
  return <h1 className={styles.text}>About me</h1>;
}
