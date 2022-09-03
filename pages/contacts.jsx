// Custom components:
import Navbar from "../components/Navbar";
// NextJS components:
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
// CSS:
import styles from "../styles/Contacts.module.css";
// Data:
import { contacts } from "../data/data";

export default function Contacts() {
  return (
    <article className={styles.article}>
      <Head>
        <title>Ålexander Yurchenko: contacts</title>
        <link rel="icon" href="/iconTarot.png" />
      </Head>
      <Navbar />
      <div className={styles.Wrapper}>
        {contacts.map(({ id, img, alt, url, txt }) => (
          <ul key={id} className={styles.ul}>
            <li className={styles.li}>
              <Link href={url}>
                <div className={styles.linkWrapper}>
                  <div className={styles.imgWrapper}>
                    <Image src={img} alt={alt} width="120" height="120" />
                  </div>
                  <p>{txt}</p>
                </div>
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </article>
  );
}
