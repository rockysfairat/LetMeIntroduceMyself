// NextJS compomemts:
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// Custom components:
import Navbar from "../components/Navbar";
// Data:
import { projects } from "../data/data.js";
// CSS:
import styles from "../styles/Projects.module.css";
// React Hooks:
import { useEffect } from "react";

export default function Projects() {
  const filterWeb = projects
    .filter((item) => {
      if (item.category == "web") {
        return item;
      }
    })
    .map((item) => {
      return item;
    });

  const filterCodepen = projects
    .filter((item) => {
      if (item.category == "codepen") {
        return item;
      }
    })
    .map((item) => {
      return item;
    });

  return (
    <article className={styles.article}>
      <Head>
        <title>Ålexander Yurchenko: projects</title>
        <link rel="icon" href="/iconTarot.png" />
      </Head>
      <Navbar />
      <h2>Web Projects:</h2>
      <div className={styles.webWrapper}>
        {filterWeb.map(({ id, img, alt, title, desc, rep, url }) => (
          <div className={styles.webProject} key={id}>
            <div className={styles.imgWrapper}>
              <Image src={img} width={300} height={270} alt={alt} />
            </div>
            <div className={styles.txtWrapper}>
              <h3>{title}</h3>
              <p>{desc}</p>
              <a href={rep}>[source code]</a>
              {url.length > 0 ? <a href={url}>[visit web page]</a> : null}
            </div>
          </div>
        ))}
      </div>

      <h2>My CodePens:</h2>
      <div className={styles.codepenProjectsWrapper}>
        {filterCodepen.map(({ id, img, alt, title, rep }) => (
          <div key={id} className={styles.codepenProject}>
            <a href={rep}>
              <Image src={img} width={200} height={200} alt={alt} />
              <h3>{title}</h3>
            </a>
          </div>
        ))}
      </div>
    </article>
  );
}
