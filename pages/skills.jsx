// Custom components:
import Navbar from "../components/Navbar";
// NextJS components:
import Image from "next/image";
import Head from "next/head";
// CSS:
import styles from "../styles/Skills.module.css";
// Data:
import { skills } from "../data/data";

export default function Skills() {
  return (
    <article className={styles.article}>
      <Head>
        <title>Ålexander Yurchenko: skills</title>
        <link rel="icon" href="/iconTarot.png" />
      </Head>
      <Navbar />
      <div className={styles.ulWrapper01}>
        <ul className={styles.ul}>
          {skills.map(({ id, img }) => (
            <li key={id}>
              <Image
                src={img}
                alt={`${id} logo`}
                width="190"
                height="190"
                loading="eager"
              />
            </li>
          ))}
        </ul>
        <ul className={styles.ul} aria-hidden="true">
          {skills.map(({ id, img }) => (
            <li key={id}>
              <Image
                src={img}
                alt={`${id} logo`}
                width="200"
                height="200"
                loading="eager"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.ulWrapper02}>
        <ul className={styles.ul}>
          {skills.map(({ id, img }) => (
            <li key={id}>
              <Image
                src={img}
                alt={`${id} logo`}
                width="200"
                height="200"
                loading="eager"
              />
            </li>
          ))}
        </ul>
        <ul className={styles.ul} aria-hidden="true">
          {skills.map(({ id, img }) => (
            <li key={id}>
              <Image
                src={img}
                alt={`${id} logo`}
                width="200"
                height="200"
                loading="eager"
              />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
